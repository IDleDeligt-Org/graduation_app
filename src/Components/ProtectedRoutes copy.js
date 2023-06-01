import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const ProtectedRoutes = () =>{
    const{isAuthenticated} = useAuth();

    if(isAuthenticated){
        return <Outlet/>
    }
    else{
        return <Navigate to="/login" />
    }
}

export default ProtectedRoutes