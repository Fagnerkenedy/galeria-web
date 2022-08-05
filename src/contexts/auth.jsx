import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import userApiURI from '../Utility/userApiURI';


const AuthContext = createContext();



export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoveredUser = localStorage.getItem('user');

         if(recoveredUser) {
            setUser(JSON.parse(recoveredUser));
        } 
        setLoading(false);
    }, []);

    const login = async (data) => {
        setLoading(true);
        
        const response = await userApiURI.login(data)
        
        console.log("login", response);

        const loggedUser = response.data.user;
        const token = response.data.token;

        localStorage.setItem("user", JSON.stringify(loggedUser));
        localStorage.setItem("token", token);

        // api.defaults.headers.Authorization = `Bearer ${token}`;
        
        setUser(loggedUser);
        navigate("/");
        setLoading(false);
    };

    const logout = () => {
        console.log("logout");

        localStorage.removeItem("user");
        localStorage.removeItem("token");

        // api.defaults.headers.Authorization = null;

        setUser(null);
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ authenticated: !!user, user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
