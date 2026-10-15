import { Link } from "react-router-dom";
import netflix_logo from "../assets/netflix_logo.svg";
import { SUPPORTED_LANGUAGES } from "../Utils/constants";

const LoginHeader = () => {
  return (
    <div className="md:relative flex justify-between px-2 md:px-[120px] py-5 z-10 items-center text-white w-full">
      <div className="w-28 md:w-[150px] mx-auto md:mx-0 z-10">
        <img src={netflix_logo} alt="netflix-logo" />
      </div>
      <div className="gap-2.5 hidden md:flex">
        <select name="language" className="md:px-4 rounded-md cursor-pointer md:mr-4">
            {
            SUPPORTED_LANGUAGES.map((lang) => {
                return <option value={lang.identifier} key={lang.identifier} className="text-black">{lang.name}</option>
            })
            }
        </select>
        <Link to="/login">
          <button className="bg-red-600 hover:bg-red-700 h-[35px] px-[18px] rounded-[6px] cursor-pointer hidden md:block">
            <p className="text-[#ffff] text-sm font-bold">Sign In</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LoginHeader;
