import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMoviesList = () => {

  const gptMovies = useSelector((store) => store.gpt.gptMovies);

  return gptMovies && (
    <div>
      <MovieList title={"Suggested movies by NetflixGPT"} movies={gptMovies} />
    </div>
  );
};

export default GPTMoviesList;
