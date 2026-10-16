import { useEffect } from "react";
import { supabase } from "../supabase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../userSlice";
import { removeMovie } from "../movieSlice";

const useOnAuthSession = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
            // Listen for authentication changes
            const {
                data: { subscription },
            } = supabase.auth.onAuthStateChange(
                (event, session) => {
                    console.log("Auth event:", event);
                    // Only load browse page if have a session access token, otherwise redirect to login page
                    if(session){
                        dispatch(addUser({username : session?.user?.user_metadata?.username, email : session?.user?.email }))  
                        navigate("/browse") 
                    }else{
                        navigate("/login");
                        dispatch(removeUser());
                        dispatch(removeMovie());
                    }
                }       
            );
            // Cleanup listener
        return () => {
            subscription.unsubscribe();
        };
    }, []);
}

export default useOnAuthSession