import { useEffect, useState } from "react"
import { API_OPTIONS } from "../constants";

const useRelatedMovies = (movieId) => {

    const [relatedMovies, setRelatedMovies] = useState(null);

    useEffect(()=>{
        const fetchMovies = async () =>{
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1`, API_OPTIONS);
            const json = await response.json();
            // console.log(json);
            const data = json.results.filter((movie, index) => {
                return index < 8;
            })
            setRelatedMovies(data);
        }

        fetchMovies();
    },[movieId]);

    if(relatedMovies) return relatedMovies;
}

export default useRelatedMovies