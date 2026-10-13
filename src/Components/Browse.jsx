import Header from "./Header";
import { useState } from "react"
import useNowPlayingMovies from "../Utils/Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
import useTrendingMovies from "../Utils/Hooks/useTrendingMovies";
import useTopRatedMovies from "../Utils/Hooks/useTopRatedMovies";
import useUpComingMovies from "../Utils/Hooks/useUpComingMovies";
import useComedyMovies from "../Utils/Hooks/useComedyMovies";
// import useGetGenres from "../Utils/Hooks/useGetGenres";

function Browse(){
    const [isBrowsePage] = useState(true);
    const movies = useSelector(store => store.movies)
    // const user = useSelector(store => store.user)
    
    useNowPlayingMovies();
    useTrendingMovies();
    useTopRatedMovies();
    useUpComingMovies();
    useComedyMovies();

    return movies && (
        <div className="overflow-hidden">
            <Header isBrowsePage={isBrowsePage}/> 
            <MainContainer/>
            <SecondaryContainer/>
        </div>
    )
}

export default Browse