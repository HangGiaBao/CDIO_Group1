import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles }) => {
    const role = localStorage.getItem("role");
    if (!role || !allowedRoles.includes(role)) {
        return <Navigate to="/" />;
    }
    return <Outlet />;
};

export default ProtectedRoute;
