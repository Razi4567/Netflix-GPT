import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeSearchResults } from "../Utils/movieSlice";

const SearchResults = ({ movies }) => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(removeSearchResults());
    }

  return movies && (
    <div className="absolute z-10 text-white top-16 p-3 right-[25%] bg-[#2d2c2c9a]">
      {movies.map((movie) => (
        <Link to={`/moviedetails/${movie.id}`} key={movie.id}>
          <h1 className="border-b-1 border-[#2d2c2cb9] py-1" onClick={handleClick}>{movie.title}</h1>
        </Link>
      ))}
    </div>
  );
};

export default SearchResults;
