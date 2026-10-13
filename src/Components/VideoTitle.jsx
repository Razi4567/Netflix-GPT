import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleInfo, faPlay} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

const VideoTitle = ({movieId, title, overview}) => {

    const navigate = useNavigate();

    const handleCLick = () => {
        navigate(`/moviedetails/${movieId}`);
    }

    return (
        <div className="pt-[15%] pl-30 text-white absolute bg-gradient-to-r from-black w-full h-full">
            <h1 className="text-5xl w-1/4 font-bold">{title}</h1>
            <p className="py-6 text-sm w-2/6">{overview}</p>
            <div>
                <button 
                className="bg-[#fff] px-8 py-2.5 font-bold text-lg rounded-sm mr-3 text-black hover:bg-[#7d7c7c]"
                onClick={handleCLick}>
                    <FontAwesomeIcon icon={faPlay} /> 
                    Play</button>
                <button className="bg-[#49454584] px-8 py-2.5 font-bold text-lg rounded-sm bg-opacity-50 hover:bg-[#7d7c7c]"
                onClick={handleCLick}>
                    <FontAwesomeIcon icon={faCircleInfo} />
                     More info</button>
            </div>
        </div>
    )
}

export default VideoTitle