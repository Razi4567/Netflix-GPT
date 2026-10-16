import GPTMoviesList from "./GPTMoviesList";
import GPTSearchBar from "./GPTSearchBar";
import gptBg from "../assets/gptBg.jpg";

const NetflixGPT = () => {
  return (
    <>
      <div className="fixed h-full -z-10 overflow-hidden">
        <img src={gptBg} alt="gptBackgroundimg" className="h-full object-cover" />
      </div>
      <div className="w-full">
        <GPTSearchBar />
        <GPTMoviesList/>
      </div>
    </>
  );
};

export default NetflixGPT;
