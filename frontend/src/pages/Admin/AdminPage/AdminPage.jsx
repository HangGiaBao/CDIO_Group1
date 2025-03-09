import React from "react";
import HeaderContent from "../../../components/Admin/HeaderContent/HeaderContent";
import AdminScheduleEditor from "../../../components/Admin/AdminScheduleEditor/AdminScheduleEditor";
import "./style.scss";
import image from "../../../assets/images/GVA.webp";

const AdminPage = () => {
  const classId = "65e8c59f5f4a2b6d12345678"; // Thay bằng classId của bạn

  return (
    <div>
      <HeaderContent nameNavigate={"Trang chủ"} />
      <div className="admin-page">
        <div className="admin-info">
          <div>
            <img src={image} alt="Hình" />
          </div>
          <div>
            <h2>Admin Page</h2>
            <p>Đây là trang quản trị</p>
          </div>
        </div>
        
        {/* 📝 Component chỉnh sửa thời khóa biểu */}
        <div className="admin-schedule">
          <h2>Quản lý Thời Khóa Biểu</h2>
          <AdminScheduleEditor classId={classId} />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
