import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../constants";
import { addTrailerKey } from "../movieSlice";

const useMovieTrailer = (movie_id) => {
    const dispatch = useDispatch();

    const trailerKey = useSelector((store) => store.movies.trailerKey);

    const getMovieTrailer = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movie_id+'/videos?language=en-US', API_OPTIONS)
        const json = await data.json();
        const filterData = json.results.filter((result) => {
            return result.type === "Trailer";
        });
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailerKey(trailer.key));
    }
    
    useEffect(()=> {
        !trailerKey && getMovieTrailer();
    },[]);
}

export default useMovieTrailer