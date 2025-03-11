import React, { useState } from 'react';
import './Menu.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Menu = () => {
    const navigate = useNavigate();
    const [openMenu, setOpenMenu] = useState(null);
    const location = useLocation();
    
    // Kiểm tra pathname trước khi truy xuất phần tử
    const parts = location.pathname ? location.pathname.split("/") : [];
    const classid = parts[3] || ""; // class id

    const toggleMenu = (menuName) => {
        setOpenMenu(openMenu === menuName ? null : menuName);
    };

    const handleNavigate = (path) => {
        try {
            navigate(path);
        } catch (error) {
            console.error("❌ Lỗi chuyển hướng:", error);
        }
    };

    return (
        <div className="menuContainer">
            <div className="userMenu">
                <div className="menuItem" onClick={() => toggleMenu("gioithieu")}>
                    Giới Thiệu {openMenu === "gioithieu" ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {openMenu === "gioithieu" && (
                    <>
                        <div className="subItem" onClick={() => handleNavigate("/teacher/GioiThieuTruong1")}>Giới thiệu trường</div>
                        <div className="subItem" onClick={() => handleNavigate("/teacher/GioiThieuDoiNguGiaoVien1")}>Giới thiệu đội ngũ giáo viên</div>
                    </>
                )}

                <div className="menuItem" onClick={() => toggleMenu("thongbao")}>
                    Thông báo {openMenu === "thongbao" ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {openMenu === "thongbao" && (
                    <>
                        <div className="subItem" onClick={() => handleNavigate("/teacher/SuKien1")}>Sự kiện</div>
                        <div className="subItem" onClick={() => handleNavigate("/teacher/HoatDongCuaBe1")}>Hoạt động của bé</div>
                    </>
                )}

                <div className="menuItem" onClick={() => toggleMenu("thongtinchung")}>
                    Thông tin chung {openMenu === "thongtinchung" ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {openMenu === "thongtinchung" && (
                    <>
                        <div className="subItem" onClick={() => handleNavigate("/teacher/teachers1")}>Thông tin giáo viên</div>
                        <div className="subItem" onClick={() => handleNavigate("/teacher/ThongTinCuaBe1")}>Danh sách lớp</div>
                    </>
                )}

                <div className="menuItem" onClick={() => toggleMenu("lichhoc")}>
                    Lịch học {openMenu === "lichhoc" ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {openMenu === "lichhoc" && (
                    <>
                        {/* Thêm id nếu có classid */}
                        <div className="subItem" onClick={() => handleNavigate(`/teacher/schedulelist`)}>Lịch dạy</div>
                        <div className="subItem" onClick={() => handleNavigate("/teacher/ThucDon1")}>Thực đơn</div>
                    </>
                )}

                <div className="menuItem" onClick={() => toggleMenu("khoanhkhac")}>
                    Khoảnh khắc nổi bật của bé {openMenu === "khoanhkhac" ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {openMenu === "khoanhkhac" && (
                    <>
                        <div className="subItem" onClick={() => handleNavigate("/teacher/HocTap1")}>Học tập</div>
                        <div className="subItem" onClick={() => handleNavigate("/teacher/VuiChoi1")}>Vui chơi</div>
                    </>
                )}

                
            </div>
        </div>
    );
};

export default Menu;
