import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
    const trendingMovies = useSelector((store) => store.movies?.trendingMovies);

    if(trendingMovies === null) return;

    const mainMovie = trendingMovies[2];

    const { original_title, overview, id } = mainMovie;
    
    return (
        <div className="bg-black">
            <VideoTitle title={original_title} overview={overview} movieId={id}/>
            <VideoBackground movie_id={id}/>
        </div>
    )
}

export default MainContainer