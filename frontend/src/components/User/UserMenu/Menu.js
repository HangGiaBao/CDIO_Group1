import React, { useState } from 'react';
import './Menu.scss';
import { useNavigate } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import icon mũi tên

const Menu = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(null); // Trạng thái menu nào đang mở

  // Hàm để bật/tắt menu con
  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  return (
    <div className="menuContainer">
      <div className="userMenu">
        {/* Giới thiệu */}
        <div className="menuItem" onClick={() => toggleMenu("gioithieu")}>
          Giới Thiệu 
          {openMenu === "gioithieu" ? <FaChevronUp className="arrowIcon" /> : <FaChevronDown className="arrowIcon" />}
        </div>
        {openMenu === "gioithieu" && (
          <>
            <div className="subItem" onClick={() => navigate("/user/GioiThieuTruong")}>Giới thiệu trường</div>
            <div className="subItem" onClick={() => navigate("/user/GioiThieuDoiNguGiaoVien")}>Giới thiệu đội ngũ giáo viên</div>
          </>
        )}

        {/* Thông báo */}
        <div className="menuItem" onClick={() => toggleMenu("thongbao")}>
          Thông báo
          {openMenu === "thongbao" ? <FaChevronUp className="arrowIcon" /> : <FaChevronDown className="arrowIcon" />}
        </div>
        {openMenu === "thongbao" && (
          <>
            <div className="subItem" onClick={() => navigate("/user/SuKien")}>Sự kiện</div>
            <div className="subItem" onClick={() => navigate("/user/HoatDongCuaBe")}>Hoạt động của bé</div>
          </>
        )}

        {/* Thông tin chung */}
        <div className="menuItem" onClick={() => toggleMenu("thongtinchung")}>
          Thông tin chung
          {openMenu === "thongtinchung" ? <FaChevronUp className="arrowIcon" /> : <FaChevronDown className="arrowIcon" />}
        </div>
        {openMenu === "thongtinchung" && (
          <>
            <div className="subItem " onClick={() => navigate("/user/ThongTinCuaBe")}>Thông tin của bé</div>
            <div className="subItem"onClick={() => navigate("/user/teachers")}>Thông tin giáo viên chủ nhiệm</div>
          </>
        )}

        {/* Lịch học */}
        <div className="menuItem" onClick={() => toggleMenu("lichhoc")}>
          Lịch học
          {openMenu === "lichhoc" ? <FaChevronUp className="arrowIcon" /> : <FaChevronDown className="arrowIcon" />}
        </div>
        {openMenu === "lichhoc" && (
          <>
            <div className="subItem" onClick={() => navigate("/user/schedulelist")}>Thời khóa biểu</div>
            <div className="subItem" onClick={() => navigate("/user/ThucDon")}>Thực đơn</div>
          </>
        )}

        {/* Khoảnh khắc nổi bật */}
        <div className="menuItem" onClick={() => toggleMenu("khoanhkhac")}>
          Khoảnh khắc nổi bật của bé
          {openMenu === "khoanhkhac" ? <FaChevronUp className="arrowIcon" /> : <FaChevronDown className="arrowIcon" />}
        </div>
        {openMenu === "khoanhkhac" && (
          <>
            <div className="subItem" onClick={() => navigate("/user/HocTap")}>Học tập</div>
            <div className="subItem" onClick={() => navigate("/user/VuiChoi")}>Vui chơi</div>
          </>
        )}

        {/* Học phí */}
        <div className="menuItem" onClick={() => toggleMenu("hocphi")}>
          Học phí
          {openMenu === "hocphi" ? <FaChevronUp className="arrowIcon" /> : <FaChevronDown className="arrowIcon" />}
        </div>
        {openMenu === "hocphi" && (
          <>
            <div className="subItem" onClick={() => navigate("/user/HocPhi")}>Học phí</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Menu;
