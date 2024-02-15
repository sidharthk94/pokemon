import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const auth = localStorage.getItem("login");
    return (
        <Route
            {...rest}
            element={
                auth ? <Component /> : <Navigate to="/LoginPage"  />
            }
        />
    );
};

export default ProtectedRoute;
