import React from "react";
import HeaderContent from "../../../components/Admin/HeaderContent/HeaderContent";
import "./style.scss";
import image from "../../../assets/images/avataradmin.webp";
import { FaUtensils, FaCalendarAlt, FaImage, FaBullhorn } from "react-icons/fa"; // Import icon mới

const AdminPage = () => {
  return (
    <div className="admin-container">
      {/* Header */}
      <HeaderContent nameNavigate="Trang chủ" />

      {/* Thông tin Admin */}
      <div className="admin-info">
        <img src={image} alt="Admin" className="admin-avatar" />
        <div className="admin-text">
          <h2>Xin chào, Admin!</h2>
          <p>Chào mừng bạn đến với trang quản trị.</p>
        </div>
      </div>

      {/* Dashboard */}
      <div className="admin-dashboard">
        {/* Quản lý Thực đơn */}
        <div className="dashboard-card">
          <FaUtensils className="dashboard-icon" />
          <h3>Quản lý Thực Đơn</h3>
          <p>Cập nhật thực đơn ăn uống hàng ngày.</p>
        </div>

        {/* Quản lý Thời khóa biểu */}
        <div className="dashboard-card">
          <FaCalendarAlt className="dashboard-icon" />
          <h3>Quản lý Thời Khóa Biểu</h3>
          <p>Chỉnh sửa, cập nhật thời khóa biểu lớp học.</p>
        </div>

        {/* Quản lý Hình ảnh */}
        <div className="dashboard-card">
          <FaImage className="dashboard-icon" />
          <h3>Quản lý Hình Ảnh</h3>
          <p>Thêm, xóa hoặc thay đổi ảnh trong hệ thống.</p>
        </div>

        {/* Quản lý Thông báo */}
        <div className="dashboard-card">
          <FaBullhorn className="dashboard-icon" />
          <h3>Quản lý Thông Báo</h3>
          <p>Tạo và gửi thông báo đến phụ huynh.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
