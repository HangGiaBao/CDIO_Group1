import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const navigate = useNavigate(); // Hook điều hướng

  const toggleMenu = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  const handleLogout = () => {
    // Xóa thông tin đăng nhập (nếu có)
    localStorage.removeItem("user");
    navigate("/"); // Chuyển hướng về trang Auth (đăng nhập)
  };

  return (
    <div>
      <header>
        <div className="top-header">
          <img src="/img/Logo_image.png" alt="Logo" className="logo" />
          <nav className="top-menu">
            <Link to="/home">Trang chủ</Link>
            <Link to="/gioi-thieu">Giới thiệu</Link>
            <Link to="/lien-he">Liên hệ</Link>
          </nav>
        </div>
        <div className="bottom-header">
          <nav>
            <button className="logout-button" onClick={handleLogout}>Đăng xuất</button>
          </nav>
        </div>
      </header>
      <div className="Box">
        <div id="box1">
          <nav className="container">
            <p>Xin chào</p>
            <ul id="main-menu">
              {["Giới thiệu", "Thông báo", "Thông tin chung", "Lịch học", "Khoảnh khắc", "Học phí"].map((menu, index) => (
                <li key={index}>
                  <button onClick={() => toggleMenu(index)}>{menu}</button>
                  {activeMenu === index && (
                    <ul className="sub-menu">
                      <li><button>Menu Item 1</button></li>
                      <li><button>Menu Item 2</button></li>
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div id="box2">123456</div>
      </div>
      <footer>
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-section about">
              <h2>About Us</h2>
              <p>Chúng tôi là một trường học với sứ mệnh cung cấp giáo dục chất lượng cao cho học sinh.</p>
            </div>
            <div className="footer-section contact">
              <h2>Contact Us</h2>
              <p>Email: info@school.com</p>
              <p>Phone: +123 456 789</p>
            </div>
            <div className="footer-section social">
              <h2>Follow Us</h2>
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
