import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown,faLanguage,faSortDown,faMagnifyingGlass,faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import netflix_logo from '../assets/netflix_logo.svg';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { supabase } from '../Utils/supabase';
import useOnAuthSession from '../Utils/Hooks/useOnAuthSession';
import { USER_LOGO } from '../Utils/constants';


const Header = (props) => {
    // console.log(props);

    const [pageLanguage, setPageLanguage] = useState(true);
    const [popUp, setPopUp] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    // Calling the custom made hook for onAuth session logic
    useOnAuthSession();

    const user = useSelector((store) => store.user);
    // console.log(user);

    const toggleLanguage = () => {
        setPageLanguage(!pageLanguage);
    }

    const handleIconClick = () => {
        setPopUp(!popUp);
    }

    const handleSearch = () => {
        setShowSearch(!showSearch);
    }

    // const handleSignOut = () => {
    async function signOut() {
        const { error } = await supabase.auth.signOut();
        // navigate("/login");
    }
    // }

    return(<div>
        {
            props.isBrowsePage === true? 
            <div className="absolute flex justify-between px-28 py-5  z-10 items-center text-white w-full">
                <div className="w-30">
                    <img src={netflix_logo} alt="netflix-logo" />
                </div> 
            <div className='flex items-center w-11/12 justify-between text-sm'>
                <ul className='flex gap-5 pl-8'>
                    <Link to={"/browse"}>
                        <li className='cursor-pointer font-medium'>Home</li>
                    </Link>
                    {/* <li className='cursor-pointer font-medium'>TV Shows</li> */}
                    <Link>
                        <li className='cursor-pointer font-medium'>Movies</li>
                        </Link>
                    {/* <li className='cursor-pointer font-medium'>News & Popular</li> */}
                    <Link>
                        <li className='cursor-pointer font-medium'>My list</li>
                    </Link>
                    {/* <li className='cursor-pointer font-medium'>Browse by language</li> */}
                </ul>
                <div className='flex gap-5 items-center'>
                    {/* {
                        showSearch === true?
                        <div className='flex border-2 rounded-sm items-center p-1 pl-2'>
                            <input type="text" className='bg-transparent outline-0'/>
                            <span onClick={handleSearch}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </span>
                        </div>
                        :
                        <div onClick={handleSearch}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} size='lg'/>
                        </div>
                    } */}
                    <div>
                        <Link to={"/netflixgpt"}>
                            <div className='bg-[#FBAF00] p-2 font-bold rounded-sm text-blue-700 shadow-2xl hover:bg-white'>NetflixGPT</div>
                        </Link>
                    </div>
                    <div className='flex gap-1' onClick={handleIconClick}>
                        <img src={USER_LOGO} alt="user_icon"
                        className='h-[25px] w-[25px] items-center text-center cursor-pointer text-white rounded-xs' 
                        />
                        <span><FontAwesomeIcon icon={faSortDown} /></span>
                    </div>
                </div>
            </div>
            {popUp && 
                <div className='absolute w-24 text-center bg-gray-300 right-[80px] top-[70px] rounded-sm'>
                    <button className='text-black'
                    onClick={signOut}>SignOut</button>
                </div>
            }
            
        </div> : 
        <div className="relative flex justify-between px-[120px] py-5  z-10 items-center text-white w-full">
                <div className="w-[150px]">
                    <img src={netflix_logo} alt="netflix-logo" />
                </div>
            {
                props.isLandingPage && 
                <div className="flex gap-2.5">
                    <button 
                    className="border border-[#767171] h-[35px] px-[18px] rounded-[6px] cursor-pointer"
                    onClick={toggleLanguage}>
                    <p className="text-[#ffff] text-sm font-bold"><FontAwesomeIcon icon={faLanguage} /> English <FontAwesomeIcon icon={faCaretDown} /></p>
                    </button>
                    {
                        !pageLanguage && <div className='absolute mt-10 z-10 text-white border-2 border-white px-5 py-3 rounded-md'>
                            <ul className=''>
                                <li className='border-b-1 cursor-pointer'>Malayalam</li>
                                <li className='border-b-1 cursor-pointer'>Hindi</li>
                                <li className='cursor-pointer'>Arabic</li>
                            </ul>
                        </div> 
                    }
                    <Link to='/login'><button className="bg-red-600 hover:bg-red-700 h-[35px] px-[18px] rounded-[6px] cursor-pointer">
                            <p className="text-[#ffff] text-sm font-bold">Sign In</p>
                        </button>
                    </Link>
            </div>
            }      
        </div>
        
        }
        
    </div>
    )
}

export default Header