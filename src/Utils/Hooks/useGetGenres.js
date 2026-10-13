import { useEffect } from "react"
import { API_OPTIONS } from "../constants";
import { useDispatch } from "react-redux";
import { addMovieGenres } from "../movieSlice";

const useGetGenres = () => {

    const dispatch = useDispatch();

    const getMovieGeners = async () => {
        const data = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', API_OPTIONS);
        const json = await data.json();
        console.log(json);
        dispatch(addMovieGenres(json.genres));
    }

    useEffect(()=>{
        getMovieGeners();
    },[]);

}

export  default useGetGenres