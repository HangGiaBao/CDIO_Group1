import React from 'react';
import './Menu.scss';
import { useNavigate } from 'react-router-dom';
const Menu = () => {
  const navigate = useNavigate();
  return (
    <div className="menuContainer">
      {/* Sidebar Menu */}
      <div className="userMenu">
        <div className="menuItem">Giới Thiệu</div>
        <div className="subItem" onClick={() => navigate("/user")}>Gioi Thieu 1</div>
        <div className="subItem"onClick={() => navigate("/user/gioithieu2")}>Gioi Thieu 2</div>

        <div className="menuItem">Sự Kiện</div>
        <div className="subItem">SK 1</div>
        <div className="subItem">SK 2</div>

        <div className="menuItem">Thông tin chung</div>
        <div className="menuItem">Lịch học</div>
        <div className="menuItem">Khóa học nổi bật</div>
        <div className="menuItem">Học phí</div>
      </div>

    </div>
  );
};

export default Menu;
