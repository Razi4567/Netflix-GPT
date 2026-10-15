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
    const movieData = useMovieDetails(movieId);
    const relatedMovies = useRelatedMovies(movieId);

    if(!movieData || !relatedMovies) return(
        <div className="bg-black h-screen w-screen text-white">
            <MoviePageHeader/> 
            <h1>Loading...</h1>
        </div>
    );

    const {poster_path,title,vote_average,release_date,runtime,adult,overview,genres} = movieData;
    const year = release_date.slice(0,4);
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;

    const size = "w780";
    const imageUrl = poster_path ? `${TMDB_IMG_URL}${size}${poster_path}`:'https://placehold.co';

    const handleClick = () => {
        console.log("Clicked");
    }

    return (
      <div className="bg-black md:h-screen pb-38 md:pb-0">
        <MoviePageHeader />
        <div className="flex flex-col pt-16 md:flex-row md:px-32 md:py-10 md:h-10/12">
          <div className="mx-auto w-2/3 md:mr-24 md:w-5/12">
            <img src={imageUrl} alt="posterImg" className="w-full h-full" />
          </div>
          <div className="md:w-6/12 pt-3 px-5 md:pl-2 text-white flex flex-col justify-between">
            <div className="md:mb-14">
              <div className="flex items-baseline mb-1 md:mb-5">
                <h1 className="text-2xl md:text-5xl font-medium mr-10">
                  {title}
                </h1>
                <div className="font-medium flex items-baseline text-sm md:text-2xl">
                  <span className="mr-1">{vote_average.toFixed(1)}</span>
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "rgb(255, 212, 59)" }}
                  />
                </div>
              </div>
              <div className="flex gap-1.5 mb-1 md:mb-0 md:gap-3 text-gray-300 text-xs md:text-lg">
                <p>{year}</p>
                <span>|</span>
                <p>
                  {hours}h {minutes}min
                </p>
                <span>|</span>
                <p>{adult === true ? "18+" : "10+"}</p>
              </div>
            </div>
            <div>
              <div className="flex justify-between gap-0 pb-1 text-xs md:text-lg text-white font-medium overflow-x-auto scrollbar-none hidden md:flex">
                <h1
                  className="border-b-2 border-black hover:border-[#E50914] w-fit shrink-0"
                  onClick={handleClick}
                >
                  OVERVIEW
                </h1>
                <h1
                  className="border-b-2 border-black hover:border-[#E50914] shrink-0"
                  onClick={handleClick}
                >
                  TRAILERS & MORE
                </h1>
                <h1
                  className="border-b-2 border-black hover:border-[#E50914] shrink-0"
                  onClick={handleClick}
                >
                  MORE LIKE THIS
                </h1>
                <h1
                  className="border-b-2 border-black hover:border-[#E50914] shrink-0"
                  onClick={handleClick}
                >
                  DETAILS
                </h1>
              </div>
              <p className="text-xs md:w-10/12 md:text-sm md:my-5 hidden md:inline-block">
                {overview}
              </p>
              <div className="flex text-xs py-1 md:py-0 md:text-lg">
                <p className="mr-5 text-gray-500">Genre</p>
                {genres.map((genre) => {
                  return <p key={genre.id}>{genre.name} ,</p>;
                })}
              </div>
            </div>
            <div className="">
              <MovieList
                title={"Related Movies"}
                movies={relatedMovies}
                size={"w342"}
              />
            </div>
          </div>
        </div>
      </div>
    );
}

export default MovieDetails