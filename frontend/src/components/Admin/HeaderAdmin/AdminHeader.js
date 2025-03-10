import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../../../assets/images/Logo_image.png";
import './AdminHeader.scss';

const AdminHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <div className='adminHeader-container'>
      <div className="header-logo" onClick={() => navigate('/admin')}>
        <img src={logo} alt="Logo" />
      </div>
      <div className="header-actions">
        <button className="logout-btn" onClick={handleLogout}>Đăng xuất</button>
      </div>
    </div>
  );
};

export default AdminHeader;
