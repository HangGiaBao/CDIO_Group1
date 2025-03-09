import React from "react";
import { useNavigate } from "react-router-dom";
import "./LogoutButton.scss"; // ✅ Import SCSS

const LogoutButton = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        navigate("/");
    };

    return (
        <button className="logout-button" onClick={handleLogout}>
            Đăng Xuất
        </button>
    );
};

export default LogoutButton;
