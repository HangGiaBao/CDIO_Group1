import React from "react";
import "./style.scss";
const teachers = [
  { name: "Nguyễn Văn A", position: "Hiệu trưởng", phone: "0123 456 789", email: "a.nguyen@example.com" },
  { name: "Trần Thị B", position: "Phó hiệu trưởng", phone: "0987 654 321", email: "b.tran@example.com" },
  { name: "Lê Văn C", position: "Giáo viên", phone: "0912 345 678", email: "c.le@example.com" },
  { name: "Phạm Thị D", position: "Giáo viên", phone: "0945 678 901", email: "d.pham@example.com" },
];

const TeacherTable = () => {
  return (
    <div className="teacher-container">
      <h2>Danh sách giáo viên</h2>
      <table className="teacher-table">
        <thead>
          <tr>
            <th>Tên</th>
            <th>Chức vụ</th>
            <th>Số điện thoại</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher, index) => (
            <tr key={index}>
              <td>{teacher.name}</td>
              <td>{teacher.position}</td>
              <td>{teacher.phone}</td>
              <td>{teacher.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherTable;
