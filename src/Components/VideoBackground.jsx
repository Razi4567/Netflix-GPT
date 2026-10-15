import { useSelector } from "react-redux";
import useMovieTrailer from "../Utils/Hooks/useMovieTrailer";

const VideoBackground = ({movie_id}) => {
    
    if(movie_id === null) return;
    useMovieTrailer(movie_id);
    const trailerKey = useSelector(store => store.movies?.trailerKey);

    return trailerKey && ( 
        <div className="w-full h-full overflow-hidden pt-10 md:pt-0">
        <iframe
                className="w-full aspect-video"
                src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerKey}`}
                title="Movie trailer"
                allow="autoplay; encrypted-media; picture-in-picture"
            />
        </div>
    )
}

export default VideoBackground 