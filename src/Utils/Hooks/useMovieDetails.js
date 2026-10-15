import { useEffect, useState } from "react";
import { API_OPTIONS } from "../constants"

const useMovieDetails = (movieId) => {

    const [movieData,setMovieData] = useState(null);

    useEffect(() => {
      const fetchMovieData = async () => {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
          API_OPTIONS,
        );
        if (!data.ok) {
          throw new Error("Failed to fetch movie details");
        }
        const json = await data.json();
        setMovieData(json);
      };

      fetchMovieData();
    }, [movieId]);

    if(movieData) return movieData;
}

export default useMovieDetails