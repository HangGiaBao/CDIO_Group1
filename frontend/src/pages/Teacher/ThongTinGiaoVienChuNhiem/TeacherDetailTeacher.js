import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./TeacherDetailTeacher.scss";

const TeacherDetailTeacher = () => {
  const { id } = useParams(); // Lấy ID từ URL
  const [teacher, setTeacher] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Gọi API để lấy thông tin giáo viên theo ID
    axios
      .get(`http://localhost:5001/v1/giaovien/${id}`)
      .then((response) => {
        setTeacher(response.data.data); // Lưu dữ liệu giáo viên vào state
        setLoading(false); // Đánh dấu là đã tải xong
      })
      .catch((error) => {
        console.error("Có lỗi xảy ra khi lấy thông tin giáo viên:", error);
        setError("Không thể tải thông tin giáo viên.");
        setLoading(false); // Đánh dấu là đã tải xong (kể cả khi có lỗi)
      });
  }, [id]);

  if (loading) {
    return <div>Đang tải thông tin giáo viên...</div>; // Hiển thị khi đang tải dữ liệu
  }

  if (error) {
    return <div>{error}</div>; // Hiển thị lỗi nếu có
  }

  return (
    <div className="teacherDetailUserContainer">
      <h2>Thông Tin Giáo Viên</h2>
      {teacher && (
        <div className="teacher-info">
          <p><strong>Họ và Tên:</strong> {teacher.full_name}</p>
          <p><strong>Dạy lớp:</strong> {teacher.class}</p>
          <p><strong>Số điện thoại:</strong> {teacher.phone}</p>
          <p><strong>Email:</strong> {teacher.email}</p>
          <p><strong>Ảnh:</strong> <img src={teacher.photo || "default-image.jpg"} alt="Teacher" /></p>
        </div>
      )}
    </div>
  );
};

export default TeacherDetailTeacher;
