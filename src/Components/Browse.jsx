import Header from "./Header";
import { useState } from "react";
import useNowPlayingMovies from "../Utils/Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
import useTrendingMovies from "../Utils/Hooks/useTrendingMovies";
import useTopRatedMovies from "../Utils/Hooks/useTopRatedMovies";
import useUpComingMovies from "../Utils/Hooks/useUpComingMovies";
import useComedyMovies from "../Utils/Hooks/useComedyMovies";
import NetflixGPT from "./NetflixGpt";

function Browse() {
  const [isBrowsePage] = useState(true);
  const movies = useSelector((store) => store.movies);
  const { showGptPage } = useSelector((store) => store.gpt);

  useNowPlayingMovies();
  useTrendingMovies();
  useTopRatedMovies();
  useUpComingMovies();
  useComedyMovies();

  return (
    movies && (
      <div className="">
        <Header isBrowsePage={isBrowsePage} />
        {showGptPage === true ? (
          <NetflixGPT />
        ) : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )
        }
      </div>
    )
  );
}

export default Browse;
