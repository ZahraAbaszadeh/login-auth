import React, { useEffect } from 'react';
import { Navigate , Outlet, useLocation } from 'react-router-dom';
import { CheckUserExpired, removeAllUserData } from 'utils/functions.util';

const useAuth = () => 
{
    if(localStorage.hasOwnProperty('IS_LOGGED_IN')) {
        return JSON.parse(localStorage.getItem('IS_LOGGED_IN'));
    } else {
        return false;
    }
}

export const ProtectedRoutes = () => {

    const location = useLocation();
    useEffect(() => {
        CheckUserExpired("Protected");
    },[location]);

    const isAuth = useAuth();
    if(isAuth == true || isAuth == "true") {
        return <Outlet/>;
    } else {
        removeAllUserData();
        return <Navigate to="/login" />;
    }
};




