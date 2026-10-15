import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { USER_LOGO } from "../Utils/constants"
import { faSortDown } from "@fortawesome/free-solid-svg-icons"
import netflix_logo from '../assets/netflix_logo.svg';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../Utils/supabase";

const MoviePageHeader = () => {

    const navigate = useNavigate();

    const [popUp, setPopUp] = useState(false);

    const handleIconClick = () => {
        setPopUp(!popUp);
    }

    async function signOut() {
        const { error } = await supabase.auth.signOut();
        navigate("/login");
    }   

    return (
      <div className="fixed flex justify-between px-4 py-3.5 md:px-30 md:py-7 z-10 items-center text-white w-full md:relative bg-black">
        <Link to={"/browse"}>
          <div className="w-30">
            <img src={netflix_logo} alt="netflix-logo" />
          </div>
        </Link>
        <div className="flex gap-1" onClick={handleIconClick}>
          <img
            src={USER_LOGO}
            alt="user_icon"
            className="h-[25px] w-[25px] items-center text-center cursor-pointer text-white rounded-xs"
          />
          <span className="hidden md:inline-block">
            <FontAwesomeIcon icon={faSortDown} />
          </span>
        </div>
        {popUp && (
          <div className="absolute w-24 text-center bg-gray-300 right-[80px] top-[70px] rounded-sm">
            <button className="text-black" onClick={signOut}>
              SignOut
            </button>
          </div>
        )}
      </div>
    );
}

export default MoviePageHeader