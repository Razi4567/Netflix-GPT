import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faLanguage,
  faSortDown,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import netflix_logo from "../assets/netflix_logo.svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { supabase } from "../Utils/supabase";
import useOnAuthSession from "../Utils/Hooks/useOnAuthSession";
import { SUPPORTED_LANGUAGES, USER_LOGO } from "../Utils/constants";
import { toggleShowGptPage } from "../Utils/gptSlice";
import { lang } from "../Utils/lang";
import LoginHeader from "./LoginHeader";
import { changeLanguage } from "../Utils/configSlice";

const Header = (props) => {
  // console.log(props.isBrowsePage);

  const [popUp, setPopUp] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  // Calling the custom made hook for onAuth session logic
  useOnAuthSession();

  const user = useSelector((store) => store.user);

  const currentLang = useSelector((store) => store.config.language);
  // console.log(currentLang);
  const { showGptPage } = useSelector((store) => store.gpt);

  const dispatch = useDispatch();


  const handleIconClick = () => {
    setPopUp(!popUp);
  };

  const handleSearch = () => {
    setShowSearch(!showSearch);
  };

  // const handleSignOut = () => {
  async function signOut() {
    const { error } = await supabase.auth.signOut();
    // navigate("/login");
  }
  // }

  const togglePage = () => {
    dispatch(toggleShowGptPage());
  };

  const handleChangeLang = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <>
      {props.isBrowsePage === true ? (
        <div className="fixed flex px-4 py-3.5 justify-between z-10 bg-black items-center text-white w-full md:px-28 md:absolute">
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
              <select
                name="language"
                className="hidden md:block rounded-md cursor-pointer md:mr-4"
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
