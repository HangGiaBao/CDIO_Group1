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
                        <div className="subItem" onClick={() => handleNavigate("/admin/introduce")}>Giới thiệu trường</div>
                        <div className="subItem" onClick={() => handleNavigate("/admin/introduceteacher")}>Giới thiệu đội ngũ giáo viên</div>
                    </>
                )}

                <div className="menuItem" onClick={() => toggleMenu("thongbao")}>
                    Thông báo {openMenu === "thongbao" ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {openMenu === "thongbao" && (
                    <>
                        <div className="subItem" onClick={() => handleNavigate("/admin/event")}>Sự kiện</div>
                        <div className="subItem" onClick={() => handleNavigate("/admin/babyactivities")}>Hoạt động của bé</div>
                    </>
                )}

                <div className="menuItem" onClick={() => toggleMenu("thongtinchung")}>
                    Thông tin chung {openMenu === "thongtinchung" ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {openMenu === "thongtinchung" && (
                    <>
                        <div className="subItem" onClick={() => handleNavigate("/admin/teacherlist")}>Thông tin giáo viên</div>
                        <div className="subItem" onClick={() => handleNavigate("/admin/ListClass")}>Danh sách lớp</div>
                    </>
                )}

                <div className="menuItem" onClick={() => toggleMenu("lichhoc")}>
                    Lịch học {openMenu === "lichhoc" ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {openMenu === "lichhoc" && (
                    <>
                        {/* Thêm id nếu có classid */}
                        <div className="subItem" onClick={() => handleNavigate(`/admin/schedulelist`)}>Thời khóa biểu</div>
                        <div className="subItem" onClick={() => handleNavigate("/admin/MenuPage")}>Thực đơn</div>
                    </>
                )}

                <div className="menuItem" onClick={() => toggleMenu("khoanhkhac")}>
                    Khoảnh khắc nổi bật của bé {openMenu === "khoanhkhac" ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {openMenu === "khoanhkhac" && (
                    <>
                        <div className="subItem" onClick={() => handleNavigate("/admin/learning")}>Học tập</div>
                        <div className="subItem" onClick={() => handleNavigate("/admin/entertainment")}>Vui chơi</div>
                    </>
                )}

                <div className="menuItem" onClick={() => toggleMenu("hocphi")}>
                    Học phí {openMenu === "hocphi" ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {openMenu === "hocphi" && (
                    <>
                        <div className="subItem" onClick={() => handleNavigate("/admin/tuition")}>Học phí</div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Menu;
