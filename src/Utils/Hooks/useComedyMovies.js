import { useEffect } from "react";
import { API_OPTIONS } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { addComedyMovies } from "../movieSlice";

const useComedyMovies = () => {

    const comedyMovies = useSelector(store => store.movies.comedyMovies);
    const dispatch = useDispatch();

    const fetchMovies = async() => {
        try{
            const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&page=1&sort_by=popularity.desc&with_genres=35', API_OPTIONS);
            if(!response.ok){
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const json = await response.json();
            dispatch(addComedyMovies(json?.results));
        }catch(err){
            console.error("Error fetching movies:", err);
        }
    }

    useEffect(()=>{
        !comedyMovies && fetchMovies();
    },[]);
}

export default useComedyMovies