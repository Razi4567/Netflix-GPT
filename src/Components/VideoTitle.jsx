import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleInfo, faPlay} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import { lang } from "../Utils/lang";
import { useSelector } from "react-redux";

const VideoTitle = ({movieId, title, overview}) => {

    const navigate = useNavigate();
    const currentLang = useSelector(store => store.config.language);

    const handleCLick = () => {
        navigate(`/moviedetails/${movieId}`);
    }

    return (
      <div className=" pt-[25%] md:pt-[15%] pl-10 md:pl-30 text-white absolute bg-gradient-to-r from-black md:w-full md:h-full">
        <div className="">
          <h1 className="text-2xl md:text-5xl w-1/2 md:w-1/4 font-bold">
            {title}
          </h1>
          <p className="py-6 text-sm w-2/6 hidden md:inline-block">
            {overview}
          </p>
        </div>
        <div className="mt-6 md:mt-0">
          <button
            className="bg-[#fff] text-sm font-semibold px-2 py-1 md:px-8 md:py-2.5 md:font-bold md:text-lg rounded-sm mr-3 text-black hover:bg-[#7d7c7c]"
            onClick={handleCLick}
          >
            <span className="mr-1">
              <FontAwesomeIcon icon={faPlay} />
            </span>
            {lang[currentLang].play}
          </button>
          <button
            className="bg-[#49454584] px-2 py-1 md:px-8 md:py-2.5 font-semibold md:font-bold text-sm md:text-lg rounded-sm bg-opacity-50 hover:bg-[#7d7c7c]"
            onClick={handleCLick}
          >
            <span className="mr-1">
              <FontAwesomeIcon icon={faCircleInfo} />
            </span>
            {lang[currentLang].moreinfo}
          </button>
        </div>
      </div>
    );
}

export default VideoTitle