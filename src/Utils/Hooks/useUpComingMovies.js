import { useEffect } from "react";
import { API_OPTIONS } from "../constants"
import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../movieSlice";

const useUpComingMovies = () => {

    const dispatch = useDispatch();

    const fetchMovies = async () =>{
        try{
            const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=2', API_OPTIONS)
            const json = await response.json();
            // console.log("Upcoming Movies", json);
            dispatch(addUpComingMovies(json?.results));
            if(!response.ok){
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        }
        catch(error){
            console.error("Error fetching movies:", error);
        }
    }

    useEffect(()=>{
        fetchMovies();
    },[]);
}

export default useUpComingMovies