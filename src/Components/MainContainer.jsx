import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import SearchResults from "./SearchResults";

const MainContainer = () => {
    const trendingMovies = useSelector((store) => store.movies?.trendingMovies);

    const searchedMovies = useSelector((store) => store.movies.searchedMovies);

    if(trendingMovies === null) return;

    const mainMovie = trendingMovies[1];

    const { original_title, overview, id } = mainMovie;
    
    return (
      <div className="bg-black">
        {searchedMovies && (<SearchResults movies={searchedMovies}/>)}
        <VideoTitle title={original_title} overview={overview} movieId={id} />
        <VideoBackground movie_id={id} />
      </div>
    );
}

export default MainContainer