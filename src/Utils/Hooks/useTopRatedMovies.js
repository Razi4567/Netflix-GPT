import { useEffect } from "react"
import { API_OPTIONS } from "../constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../movieSlice";

const useTopRatedMovies = () => {

    const dispatch = useDispatch();

    const fetchMovies = async () =>{
        try{
            const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=2', API_OPTIONS);
            const json = await response.json();
            // console.log("Toprated Movies",json);
            dispatch(addTopRatedMovies(json?.results));
            if(!response.ok){
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        }
        catch (error){
            console.error("Error fetching movies:", error);
        }
    }

    useEffect(()=>{
        fetchMovies();
    },[]);
}

export default useTopRatedMovies