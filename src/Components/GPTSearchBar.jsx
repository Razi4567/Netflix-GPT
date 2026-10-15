import { useDispatch, useSelector } from "react-redux";
import { lang } from "../Utils/lang";
import { useRef } from "react";
import { API_OPTIONS } from "../Utils/constants";
import { addGptMovies } from "../Utils/gptSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { askGemini } from "../Utils/genAI";

const GPTSearchBar = () => {

  const currentLang = useSelector((store) => store.config.language);

  const dispatch = useDispatch();

  const searchText = useRef(null);

  const getMovieDetails = async (movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",
      API_OPTIONS,
    );
    const json = await data.json();
    return json.results;
  }

  const handleGPTSearch = async () => {
    const prompt ="Act as movie recommendation system and suggest 5 movies for the query:" +
      searchText.current.value +
      ".Only give the names of the 5 movies as comma seperated like the example result given ahead. Example result: Movie1, Movie2, Movie3, Movie4, Movie5";
      try {
        const result = await askGemini(prompt,);

        console.log(result);

        const genAiMovies = result?.split(",");
        const promiseArray = genAiMovies.map((movie) => getMovieDetails(movie));
        const tmdbResults = await Promise.all(promiseArray);
        dispatch(addGptMovies(tmdbResults));
      } catch (error) {
        console.error(error);
      }
  }

  return (
    <div className="pt-[50%] w-3/4 mx-auto md:pt-[15%] md:w-1/3">
      <form className="w-full text-white " onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          placeholder={lang[currentLang].gptSearchBarPlaceholder}
          className="w-4/5 md:w-2/3 outline-0 h-12 md:h-14 px-5 rounded-l-md bg-[#413f3f75]"
        />
        <button
          className="bg-[#E50914] w-1/3 h-14 rounded-r-md hidden md:inline"
          onClick={handleGPTSearch}
        >
          {lang[currentLang].search}
        </button>
        <button
          className="bg-[#E50914] w-1/5 h-12 rounded-r-md md:hidden"
          onClick={handleGPTSearch}
        >
          <span>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
        </button>
      </form>
    </div>
  );
};


export default GPTSearchBar