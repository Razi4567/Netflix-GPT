const Browseheader = () => {
    return  (
        <div className="absolute flex justify-between px-28 py-5  z-10 items-center text-white w-full">
          <div className="w-30">
            <img src={netflix_logo} alt="netflix-logo" />
          </div>
          <div className="flex items-center w-11/12 justify-between text-sm">
            <ul className="flex gap-5 pl-8">
              <Link to={"/browse"}>
                <li className="cursor-pointer font-medium">{lang.en.home}</li>
              </Link>
              <Link>
                <li className="cursor-pointer font-medium">Movies</li>
              </Link>
              <Link>
                <li className="cursor-pointer font-medium">My list</li>
              </Link>
            </ul>
            <div className="flex gap-5 items-center">
              <div>
                <select
                  name="language"
                  id=""
                  className="px-4 rounded-md cursor-pointer mr-4"
                >
                  {/* <FontAwesomeIcon icon={faLanguage} /> */}
                  <option value="en" className="text-black">
                    English
                  </option>
                  <option value="hindi" className="text-black">
                    Hindi
                  </option>
                </select>
                <button
                  className="bg-[#FBAF00] p-2 font-bold rounded-sm text-blue-700 shadow-2xl hover:bg-white"
                  onClick={togglePage}
                >
                  NetflixGPT
                </button>
              </div>
              <div className="flex gap-1" onClick={handleIconClick}>
                <img
                  src={USER_LOGO}
                  alt="user_icon"
                  className="h-[25px] w-[25px] items-center text-center cursor-pointer text-white rounded-xs"
                />
                <span>
                  <FontAwesomeIcon icon={faSortDown} />
                </span>
              </div>
            </div>
          </div>
          {popUp && (
            <div className="absolute w-24 text-center bg-gray-300 right-[80px] top-[70px] rounded-sm">
              <button className="text-black" onClick={signOut}>
                SignOut
              </button>
            </div>
          )}
        </div>
      )
}

export default Browseheader