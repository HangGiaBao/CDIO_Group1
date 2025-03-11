import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./TeacherListTeacher.scss";  // Thêm CSS cho trang danh sách giáo viên

const TeacherListTeacher = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);  // Trạng thái tải
  const [error, setError] = useState(null);      // Trạng thái lỗi

  useEffect(() => {
    // Gọi API để lấy danh sách giáo viên
    axios
      .get("http://localhost:5001/v1/giaovien")
      .then((response) => {
        setTeachers(response.data.data);  // Lưu dữ liệu giáo viên vào state
        setLoading(false);  // Dữ liệu đã tải xong
      })
      .catch((error) => {
        console.error("Có lỗi xảy ra khi lấy danh sách giáo viên:", error);
        setError("Không thể tải danh sách giáo viên.");  // Set lỗi nếu có
        setLoading(false);  // Đặt lại trạng thái tải
      });
  }, []);  // Gọi API khi component mount

  if (loading) {
    return <div>Đang tải danh sách giáo viên...</div>;  // Hiển thị khi đang tải dữ liệu
  }

  if (error) {
    return <div>{error}</div>;  // Hiển thị thông báo lỗi nếu có
  }

  return (
    <div className="teacherListContainer">
      <h2>Danh Sách Giáo Viên</h2>
      <ul>
        {teachers.map((teacher) => (
          <li key={teacher._id}>
            {/* Liên kết đến trang chi tiết giáo viên */}
            <Link to={`/teacher/teacher1/${teacher._id}`}>
              {teacher.full_name} - {teacher.class}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeacherListTeacher;
