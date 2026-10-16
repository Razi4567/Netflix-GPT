import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faSortDown,} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import netflix_logo from "../assets/netflix_logo.svg";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { supabase } from "../Utils/supabase";
import useOnAuthSession from "../Utils/Hooks/useOnAuthSession";
import { API_OPTIONS, SUPPORTED_LANGUAGES, USER_LOGO } from "../Utils/constants";
import { toggleShowGptPage } from "../Utils/gptSlice";
import { lang } from "../Utils/lang";
import LoginHeader from "./LoginHeader";
import { changeLanguage } from "../Utils/configSlice";
import { addSearchedMovies } from "../Utils/movieSlice";

const Header = (props) => {

  const [popUp, setPopUp] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  // Calling the custom hook for onAuth session logic
  useOnAuthSession();

  const user = useSelector((store) => store.user);

  const currentLang = useSelector((store) => store.config.language);

  const searchedMovies = useSelector((store) => store.movies.searchedMovies);
 
  const { showGptPage } = useSelector((store) => store.gpt);

  const dispatch = useDispatch();

  const searchText = useRef(null);

  const handleIconClick = () => {
    setPopUp(!popUp);
  };
  const getMovieDetails = async (movie) => {
    try{
      const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS,
    );
    const json = await data.json();
    return json.results;
    }catch(error){
      console.error("Error fetching movies:", error);
    }
  };

  const handleSearch = async () => {
    setShowSearch(true);
    if(showSearch){
      const movie = searchText.current.value;
      // if(!movie) return;
      const result = await getMovieDetails(movie);
      dispatch(addSearchedMovies(result));
    } 
  };

  async function signOut() {
    const { error } = await supabase.auth.signOut();
  }

  const togglePage = () => {
    dispatch(toggleShowGptPage());
  };

  const handleChangeLang = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <>
      {props.isBrowsePage === true ? (
        <div className="fixed flex px-4 py-3.5 justify-between z-10 bg-black items-center text-white w-full md:px-28 md:py-5 md:absolute">
          <div className="w-24 md:w-30">
            <img src={netflix_logo} alt="netflix-logo" />
          </div>
          <div className="flex items-center md:w-11/12 justify-between text-sm">
            <ul className="hidden md:flex gap-5 md:pl-8">
              <Link to={"/browse"}>
                <li className="cursor-pointer font-medium">
                  {lang[currentLang].home}
                </li>
              </Link>
              <Link>
                <li className="cursor-pointer font-medium">
                  {lang[currentLang].movies}
                </li>
              </Link>
              <Link>
                <li className="cursor-pointer font-medium">
                  {lang[currentLang].mylist}
                </li>
              </Link>
            </ul>
            <div className="flex gap-3 md:gap-5 items-center justify-between">
              <div className="hidden md:inline">
                {showSearch === false ? (
                  <div onClick={handleSearch}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
                  </div>
                ) : (
                  <div className="flex items-center">
                    <input type="text" ref={searchText} placeholder="Search for movies" className="px-3 py-2 outline-0 bg-[#32303092] w-60 rounded-l-md"/>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" onClick={handleSearch} className="bg-red-800 px-1.5 py-2 rounded-r-md"/>
                  </div>
                )}
              </div>
              <select
                name="language"
                className="hidden md:block rounded-md cursor-pointer"
                onChange={handleChangeLang}
              >
                {SUPPORTED_LANGUAGES.map((lang) => {
                  return (
                    <option
                      value={lang.identifier}
                      key={lang.identifier}
                      className="text-black"
                    >
                      {lang.name}
                    </option>
                  );
                })}
              </select>
              <button
                className="bg-[#FBAF00] p-1 md:p-2 font-medium md:font-bold rounded-sm text-blue-700 shadow-2xl hover:bg-white"
                onClick={togglePage}
              >
                {showGptPage ? "Home Page" : "NetflixGPT"}
              </button>
              <div className="flex gap-1" onClick={handleIconClick}>
                <img
                  src={USER_LOGO}
                  alt="user_icon"
                  className="h-6 w-6 items-center text-center cursor-pointer text-white rounded-xs"
                />
                <span className="hidden md:block">
                  <FontAwesomeIcon icon={faSortDown} />
                </span>
              </div>
            </div>
          </div>
          {popUp && (
            <div className="absolute w-24 text-center bg-gray-300 top-16 right-3 md:right-20 rounded-sm">
              <button className="text-black" onClick={signOut}>
                SignOut
              </button>
            </div>
          )}
        </div>
      ) : (
        <LoginHeader lang={lang} />
      )}
    </>
  );
};

export default Header;
