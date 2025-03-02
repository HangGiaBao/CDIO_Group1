import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../../../assets/images/Logo_image.png";
import "./UserHeader.scss";

const UserHeader = () => {
    const navigate = useNavigate();

    return (
        <div className='userHeader-container'>
            <div className="header-logo" onClick={() => navigate('/user')}>
                <img src={logo} alt="Logo" style={{ cursor: "pointer" }} />
            </div>
        </div>
    );
}

export default UserHeader;
