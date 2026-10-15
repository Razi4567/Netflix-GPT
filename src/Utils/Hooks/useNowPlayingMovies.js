import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../movieSlice";
import { API_OPTIONS } from "../constants";

const useNowPlayingMovies = () => {

    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);

    const dispatch = useDispatch();
    const fetchMovies = async () => {
        try{
            const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
            const nowPlayingMovies = await response.json();
            // console.log("Now playing movies:",nowPlayingMovies);
            dispatch(addNowPlayingMovies(nowPlayingMovies?.results));
            if(!response.ok){
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        }
        catch(error){
            console.error("Error fetching movies:", error);
        }
        };
        

    useEffect(() => {
        !nowPlayingMovies && fetchMovies();
    },[]);
}

export default useNowPlayingMovies

