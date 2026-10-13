import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../movieSlice";
import { API_OPTIONS } from "../constants";

const useTrendingMovies = () => {
    const dispatch = useDispatch();
        const fetchMovies = async () => {
            try{
                const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&page=1&sort_by=popularity.desc', API_OPTIONS)
                const trendingMovies = await response.json();
                // console.log("Trending movies:",trendingMovies);
                dispatch(addTrendingMovies(trendingMovies?.results));
                if(!response.ok){
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
            }catch(error){
                console.error("Error fetching movies:", error);
            }   
        
        };

    useEffect(() => {
        fetchMovies();
    },[]);
}

export default useTrendingMovies