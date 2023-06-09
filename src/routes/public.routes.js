import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { CheckUserExpired } from 'utils/functions.util';
export const PublicRoutes = () => {

    const location = useLocation();
    useEffect(() => {
        CheckUserExpired("public");
    },[location]);

    return <Outlet/>;
};