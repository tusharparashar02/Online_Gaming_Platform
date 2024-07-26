import { createContext, useContext, useEffect, useState } from "react";
export const AuthContext = createContext();
    export const AuthProvider = ({children})=>{

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");
    const [services, setServices] = useState("");
       
    const storetokenInLS = (serverToken)=>{
    setToken(serverToken);
     return localStorage.setItem("token", serverToken)
    };

    //handle logout function 
    
    let isLoggedIn = !!token;
    console.log("isLoggedIn", isLoggedIn);

    //handle logout functionality

    const LogoutUser = ()=>{
        setToken("");
        return localStorage.removeItem('token')
    };

    //jwtauthentication - to get user data

    const userAuthentication = async()=>{
        try {
            const response = await fetch("http://localhost:5000/api/auth/user",{
                method: "GET",
                headers: {
                    Authorization:`Bearer ${token}`,
                }
            });
            if(response.ok){
                const data = await response.json();
                console.log("user data", data.userData);
                setUser(data.userData);
            }
        } catch (error) {
            console.error("Error fetching user data");
        }
    }

    useEffect(()=>{
        // getServices();
        userAuthentication();
    }, []);

    return (
        <AuthContext.Provider value={{isLoggedIn, storetokenInLS, LogoutUser, user, services}}>
        {children}
    </AuthContext.Provider>
    );
};

export const useAuth = () =>{
    const authContextValue = useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used outside of the provider");
    }
    return authContextValue;
};

