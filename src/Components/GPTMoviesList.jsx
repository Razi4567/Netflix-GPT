import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMoviesList = () => {

  const gptMovies = useSelector((store) => store.gpt.gptMovies);

  return (
    gptMovies && (
      <div className="px-24 pt-3">
        <h1 className="text-white">Suggested movies by NetflixGPT</h1>
        {gptMovies.map((movies) => (
          <MovieList title={""} movies={movies} />
        ))}
      </div>
    )
  );
};

export default GPTMoviesList;
