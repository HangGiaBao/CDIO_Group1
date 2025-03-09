<<<<<<< HEAD
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/images/Logo_image.png";
import LogoutButton from "../../LogoutBtn/LogoutButton"; // ✅ Import LogoutButton
=======
import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from "../../../assets/images/Logo_image.png";
>>>>>>> 955f45ffd5889e74a5708fb3e3bdea7c6ac362a4
import "./UserHeader.scss";

const UserHeader = () => {
    const navigate = useNavigate();

<<<<<<< HEAD
    return (
        <header className="userHeader-container">
            <div className="header-logo" onClick={() => navigate('/user')}>
                <img src={logo} alt="Logo" />
            </div>
            <LogoutButton /> {/* ✅ Thêm nút Logout */}
        </header>
    );
};
=======
    const handleLogout = async () => {
        try {
            await axios.post("http://localhost:5001/v1/auth/logout", {}, { withCredentials: true });
            localStorage.removeItem("accessToken"); // Xóa token
            navigate("/"); // Điều hướng về trang đăng nhập
        } catch (error) {
            console.error("Lỗi đăng xuất:", error);
        }
    };

    return (
        <div className='userHeader-container'>
            <div className="header-logo" onClick={() => navigate('/user')}>
                <img src={logo} alt="Logo" />
            </div>
            <button className="logout-button" onClick={handleLogout}>Đăng xuất</button>
        </div>
    );
}
>>>>>>> 955f45ffd5889e74a5708fb3e3bdea7c6ac362a4

export default UserHeader;
