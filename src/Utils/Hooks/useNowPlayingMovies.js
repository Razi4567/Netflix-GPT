import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../movieSlice";
import { API_OPTIONS } from "../constants";

const useNowPlayingMovies = () => {
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
        fetchMovies();
    },[]);
}

export default useNowPlayingMovies

// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import {
//     addNowPlayingMovies,
//     addTrendingMovies,
// } from "../movieSlice";
// import { API_OPTIONS } from "../constants";

// const useNowPlayingMovies = () => {
//     const dispatch = useDispatch();

//     useEffect(() => {
//         const fetchMovies = async () => {
//             try {
//                 const [response1, response2] = await Promise.all([
//                     fetch(
//                         "https://api.themoviedb.org/3/movie/now_playing?page=1",
//                         API_OPTIONS
//                     ),
//                     fetch(
//                         "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc",
//                         API_OPTIONS
//                     ),
//                 ]);

//                 if (!response1.ok || !response2.ok) {
//                     throw new Error("Failed to fetch movies from TMDB");
//                 }

//                 const [nowPlayingData, trendingData] = await Promise.all([
//                     response1.json(),
//                     response2.json(),
//                 ]);

//                 dispatch(addNowPlayingMovies(nowPlayingData.results));
//                 dispatch(addTrendingMovies(trendingData.results));

//             } catch (error) {
//                 console.error("Error fetching movies:", error);
//             }
//         };

//         fetchMovies();
//     }, [dispatch]);
// };

// export default useNowPlayingMovies;