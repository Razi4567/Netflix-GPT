import { useParams } from "react-router-dom"
import { TMDB_IMG_URL } from "../Utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import useMovieDetails from "../Utils/Hooks/useMovieDetails";
import MoviePageHeader from "./MoviePageHeader";
import useRelatedMovies from "../Utils/Hooks/useRelatedMovies";
import MovieList from "./MovieList";


const MovieDetails = () => {

    const {movieId} = useParams();
    // console.log(movieId);
    const movieData = useMovieDetails(movieId);
    const relatedMovies = useRelatedMovies(movieId);

    if(!movieData || !relatedMovies) return(
        <div className="bg-black h-screen w-screen text-white">
            <MoviePageHeader/> 
            <h1>Loading...</h1>
        </div>
    );

    console.log(movieData);
    console.log(relatedMovies);
    const {poster_path,title,vote_average,release_date,runtime,adult,overview,genres} = movieData;
    const year = release_date.slice(0,4);
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;

    const size = "w780";
    const imageUrl = poster_path ? `${TMDB_IMG_URL}${size}${poster_path}`:'https://placehold.co';

    const handleClick = () => {
        console.log("Clicked");
    }

    return  (
        <div className="bg-black h-screen">
            <MoviePageHeader/>
            <div className="flex px-32 py-10 h-10/12">
                <div className="w-5/12 mr-24">
                    <img src={imageUrl} alt="posterImg" className="w-full h-full"/>
                </div>
                <div className="w-6/12 pt-3 pl-2 text-white flex flex-col justify-between">
                    <div className="mb-14">
                        <div className="flex items-baseline mb-5">
                            <h1 className="text-5xl font-medium mr-10">{title}</h1>
                            <div className="font-medium flex items-baseline text-2xl">
                                <span className="mr-1">{vote_average.toFixed(1)}</span>
                                <FontAwesomeIcon icon={faStar} style={{color: "rgb(255, 212, 59)"}} />
                            </div>
                        </div>
                        <div className="flex gap-3 text-gray-300">
                            <p>{year}</p>
                            <span>|</span>
                            <p>{hours}h { minutes}min</p>
                            <span>|</span>
                            <p>{adult === true? "18+" : "10+"}</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <h1 className="text-white text-lg font-medium" onClick={handleClick}>OVERVIEW</h1>
                            <h1 className="text-white text-lg font-medium" onClick={handleClick}>TRAILERS & MORE</h1>
                            <h1 className="text-white text-lg font-medium" onClick={handleClick}>MORE LIKE THIS</h1>
                            <h1 className="text-white text-lg font-medium" onClick={handleClick}>DETAILS</h1>
                        </div>
                            <p className="text-sm w-10/12 my-5">{overview}</p>
                        <div className="flex">
                            <p className="mr-5 text-gray-500">Genre</p>
                            {
                                genres.map((genre) =>{
                                    return <p key={genre.id}>{genre.name},</p>
                                })
                            }
                        </div>
                    </div>
                    <MovieList  title={"RelatedMovies"} movies={relatedMovies} size={"w342"}/>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails