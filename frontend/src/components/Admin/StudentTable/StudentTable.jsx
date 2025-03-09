import React from "react";
import "./style.scss";

const students = [
  { id: 1, lastName: "Nguyễn", firstName: "Văn A", dob: "02/03/2021", gender: "Nam", ethnicity: "Kinh", birthplace: "Đà Nẵng", parent: "Nguyễn Văn Q", address: "xxxxxx", phone: "xxxxxxx", rank: "Giỏi", academic: "Giỏi" },
  { id: 2, lastName: "Nguyễn", firstName: "Văn B", dob: "12/05/2021", gender: "Nam", ethnicity: "Kinh", birthplace: "Sài Gòn", parent: "Nguyễn Văn W", address: "xxxxxx", phone: "xxxxxxx", rank: "Giỏi", academic: "Giỏi" },
  { id: 3, lastName: "Lê", firstName: "Thị C", dob: "22/03/2021", gender: "Nữ", ethnicity: "Kinh", birthplace: "Đà Nẵng", parent: "Lê Châu O", address: "xxxxxx", phone: "xxxxxxx", rank: "Giỏi", academic: "Giỏi" },
  { id: 4, lastName: "Trần", firstName: "Thái D", dob: "15/09/2021", gender: "Nam", ethnicity: "Kinh", birthplace: "Đà Nẵng", parent: "Ngô Thị P", address: "xxxxxx", phone: "xxxxxxx", rank: "Giỏi", academic: "Giỏi" },
  { id: 5, lastName: "Trần", firstName: "Minh E", dob: "12/10/2021", gender: "Nam", ethnicity: "Kinh", birthplace: "Đà Nẵng", parent: "Trần Viết Y", address: "xxxxxx", phone: "xxxxxxx", rank: "Giỏi", academic: "Giỏi" },
  { id: 6, lastName: "Võ", firstName: "G", dob: "08/05/2021", gender: "Nam", ethnicity: "Kinh", birthplace: "Hà Nội", parent: "Bùi Thị L", address: "xxxxxx", phone: "xxxxxxx", rank: "Giỏi", academic: "Giỏi" },
  { id: 7, lastName: "Trần", firstName: "Minh H", dob: "09/09/2021", gender: "Nam", ethnicity: "Kinh", birthplace: "Đà Nẵng", parent: "Trần Thái L", address: "xxxxxx", phone: "xxxxxxx", rank: "Giỏi", academic: "Giỏi" },
  { id: 8, lastName: "Nguyễn", firstName: "Lê Thị I", dob: "16/07/2021", gender: "Nữ", ethnicity: "Kinh", birthplace: "Đà Nẵng", parent: "Kim T", address: "xxxxxx", phone: "xxxxxxx", rank: "Giỏi", academic: "Giỏi" },
  { id: 9, lastName: "Dương", firstName: "K", dob: "07/04/2021", gender: "Nam", ethnicity: "Kinh", birthplace: "Đà Nẵng", parent: "Dương M", address: "xxxxxx", phone: "xxxxxxx", rank: "Giỏi", academic: "Giỏi" },
  { id: 10, lastName: "Yến", firstName: "Đan", dob: "04/12/2021", gender: "Nữ", ethnicity: "Kinh", birthplace: "Bến Tre", parent: "J97", address: "xxxxxx", phone: "xxxxxxx", rank: "Giỏi", academic: "Giỏi" },
];

const StudentTable = () => {
  return (
    <div className="student-container">
      <h2>Danh sách học sinh</h2>
      <table className="student-table">
        <thead>
          <tr>
            <th>TT</th>
            <th>Họ</th>
            <th>Tên</th>
            <th>Ngày sinh</th>
            <th>Giới tính</th>
            <th>Dân tộc</th>
            <th>Nơi sinh</th>
            <th>Họ tên bố (mẹ)</th>
            <th>Chỗ ở hiện tại</th>
            <th>Số điện thoại</th>
            <th>Hạng kiểm</th>
            <th>Học lực</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.lastName}</td>
              <td>{student.firstName}</td>
              <td>{student.dob}</td>
              <td>{student.gender}</td>
              <td>{student.ethnicity}</td>
              <td>{student.birthplace}</td>
              <td>{student.parent}</td>
              <td>{student.address}</td>
              <td>{student.phone}</td>
              <td>{student.rank}</td>
              <td>{student.academic}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
