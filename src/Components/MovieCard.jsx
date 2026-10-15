import { Link } from "react-router-dom";
import { TMDB_IMG_URL } from "../Utils/constants";

const MovieCard = ({posterPath,movieId, size}) => {

    const imageUrl = posterPath ? `${TMDB_IMG_URL}${size}${posterPath}`:'https://placehold.co';

    return (
      posterPath && (
        <Link to={`/moviedetails/${movieId}`}>
          {size === "w500" ? (
            <div className="w-24 md:w-48 shrink-0 rounded-xs overflow-hidden">
              <img
                className="w-full h-full"
                src={imageUrl}
                alt="movie_poster"
              />
            </div>
          ) : (
            <div className="w-24 shrink-0 rounded-xs overflow-hidden">
              <img
                className="w-full h-full"
                src={imageUrl}
                alt="movie_poster"
              />
            </div>
          )}
        </Link>
      )
    );
}

export default MovieCard