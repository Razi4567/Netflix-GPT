import Header from "./Header"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";


const LandingPage = () => {

    const [ isLandingPage ] = useState(true);

    return(
        <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/4a59f124-030b-417a-9565-8362f395bdb0/web/IN-en-20260914-TRIFECTA-perspective_16ddf2ab-4945-4e79-8f84-6df3eef26875_medium.jpg')]
        bg-cover bg-center h-screen relative">
            <div className="absolute inset-0 bg-black/75"></div>
            <Header isLandingPage={isLandingPage}/> 
            <div className="relative z-10 h-full items-center justify-center">
                <div className="w-5/12 mx-auto mt-[160px] mb-[330px] text-center ">
                    <h1 className="text-[#fff] text-6xl font-bold mb-5">Entertainment for every moment</h1>
                    <p className="text-[#fff] text-lg font-bold mb-7">Starts at <span>₹</span> 149. Cancel at any time.</p>
                    <p className="text-[#fff] font-medium">Ready to watch? Enter your email to create or restart your membership.</p>
                    <div className="flex text-[#fff] justify-between mt-4 gap-2">
                        <input type="text" placeholder="Email address" className="w-7/12 text-lg outline-0 border-2 border-[#3f3d3d] px-3 rounded-md" />
                        <button className=" bg-red-600 hover:bg-red-700 w-5/12 px-5 py-3 text-2xl font-medium rounded-md"><span>Get Started <FontAwesomeIcon icon={faAngleRight} /></span></button>
                    </div>
                </div>
            </div>
        </div>
        
    )   
}

export default LandingPage