import React, { useState, useEffect, useContext } from "react";

export const AuthContext = React.createContext();
export function useAuth() {
    return useContext(AuthContext);
}
export const AuthProvider = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const getUser = async () => {
        const response = await fetch('/auth/getUser');
        const json = await response.json();

        setIsAuthenticated(json.isAuthenticated);
        setIsLoading(false);
        if (json.isAuthenticated) setUser(json.claims);
    }

    useEffect(() => {
        getUser();
    }, []);

    const login = () => {
        //window.location.href = process.env.REACT_APP_API_URL + '/auth/login';

        setIsAuthenticated(true);
    }

    const logout = () => {
        //window.location.href = process.env.REACT_APP_API_URL + '/auth/logout';
        setIsAuthenticated(false);
    }

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                user,
                isLoading,
                login,
                logout
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};