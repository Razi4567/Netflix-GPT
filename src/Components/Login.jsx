import Header from "./Header"
import { useRef, useState } from "react";
import { checkFormData } from "../Utils/validate";
import { supabase } from "../Utils/supabase";

const Login = () => {

    const [ isSignInForm, setIsSignInForm ] = useState(true);
    const [ isBrowsePage ] = useState(false);
    const [ errorMessage, setErrorMessage] = useState(null);

    const userName = useRef("");
    const email = useRef(null);
    const password = useRef(null);

    //SignIn/Signup form switching
    const toggleForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    const validateForm = async () => {

        const emailValue = email.current.value;
        const passwordValue = password.current.value;
        const userNameValue = isSignInForm? null: userName.current.value;

        const alert = checkFormData(
            emailValue,
            passwordValue, 
            userNameValue);
        
        if(alert){
            setErrorMessage(alert);
            return;
        }

        setErrorMessage(null);

        if(!isSignInForm){
            //SignUp form logic & supabase email validation
            const { data, error } = await supabase.auth.signUp({
                email: emailValue,
                password: passwordValue,
                options: {
                    data: {
                        username: userNameValue
                    }
                }
            });

            if(error){
                setErrorMessage(error.message);
                return;
            }else{
                setErrorMessage("Account created succesfuly!");
                console.log("User created", data);
            }

        }else{
            //Signin form logic & supabase email validation
            const { data, error } = await supabase.auth.signInWithPassword({
                email: emailValue,
                password: passwordValue
            });

            if(error){
                setErrorMessage(error.message);
                return;
            }else{
                const {user} = data;
                console.log("User signed in", user);
            }
        }
    }

    return(
        <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/4a59f124-030b-417a-9565-8362f395bdb0/web/IN-en-20260914-TRIFECTA-perspective_16ddf2ab-4945-4e79-8f84-6df3eef26875_medium.jpg')]
        bg-cover bg-center h-screen relative object-cover">
            <div className="absolute inset-0 bg-black/30"></div>
            <Header data={isBrowsePage}/> 
           
            <form onSubmit={(e) => e.preventDefault()} className="relative flex flex-col w-2/3 md:w-1/4 mx-auto my-30 pt-10 pb-16 z-5 items-center gap-2 bg-[#000000a7] text-[#fff]">
                <h1 className="text-2xl font-bold">{isSignInForm === true? "Sign In": "Enter your details"}</h1>
                {
                    !isSignInForm && <input ref={userName} type="text" placeholder="Username" className=" bg-[#212121] outline-0 rounded-md w-8/12 px-4 py-4 "/> 
                }
                <input ref={email} type="text" placeholder="Email address" className=" bg-[#212121] outline-0 rounded-md w-8/12 px-4 py-4 "/>
                <input ref={password} type="password" placeholder="Password" className=" bg-[#212121] outline-0  rounded-md w-8/12 px-4 py-4 "/>
                <p className="text-red-500">{errorMessage}</p>
                <button className="w-8/12 py-3.5 mt-5 rounded-md bg-red-600 hover:bg-red-700"
                    onClick={validateForm}>
                    {isSignInForm === true? "Sign In": "Submit"}
                </button>
                <p className="text-sm">{isSignInForm === true?"New to Netflix? ":"Already have an account? "}<span onClick={toggleForm} className="cursor-pointer text-gray-400">{isSignInForm === true?"Sign Up":"Sign In"}</span></p>
            </form>
        </div>
        
    )   
}

export default Login