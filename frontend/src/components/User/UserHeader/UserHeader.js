import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/images/Logo_image.png";
import LogoutButton from "../../LogoutBtn/LogoutButton"; // ✅ Import LogoutButton
import "./UserHeader.scss";

const UserHeader = () => {
    const navigate = useNavigate();

    return (
        <header className="userHeader-container">
            <div className="header-logo" onClick={() => navigate('/user')}>
                <img src={logo} alt="Logo" />
            </div>
            <LogoutButton /> {/* ✅ Thêm nút Logout */}
        </header>
    );
};

export default UserHeader;
