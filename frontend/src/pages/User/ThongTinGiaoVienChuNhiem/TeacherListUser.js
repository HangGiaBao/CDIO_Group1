import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./TeacherList.scss";

const TeacherListUser = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);  // Biến trạng thái để kiểm tra khi dữ liệu đang tải
  const [error, setError] = useState(null);      // Biến trạng thái để xử lý lỗi nếu có

  useEffect(() => {
    // Gọi API để lấy danh sách giáo viên
    axios
      .get("http://localhost:5001/v1/giaovien")
      .then((response) => {
        setTeachers(response.data.data);  // Lưu dữ liệu giáo viên vào state
        setLoading(false);  // Dữ liệu đã được tải xong
      })
      .catch((error) => {
        console.error("Có lỗi xảy ra khi lấy danh sách giáo viên:", error);
        setError("Không thể tải danh sách giáo viên.");  // Set lỗi nếu có
        setLoading(false);  // Đặt lại trạng thái tải
      });
  }, []);  // Chỉ gọi một lần khi component được mount

  if (loading) {
    return <div>Đang tải danh sách giáo viên...</div>;  // Hiển thị khi đang tải dữ liệu
  }

  if (error) {
    return <div>{error}</div>;  // Hiển thị thông báo lỗi nếu có lỗi khi gọi API
  }

  return (
    <div className="teacherListContainer">
      <h2>Danh Sách Giáo Viên</h2>
      <ul>
        {teachers.map((teacher) => (
          <li key={teacher._id}>
            {/* Liên kết đến trang chi tiết của giáo viên */}
            <Link to={`/user/teacher/${teacher._id}`}>
              {teacher.full_name} - {teacher.class}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeacherListUser;
