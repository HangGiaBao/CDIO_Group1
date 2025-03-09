import React from "react";
import "./ThoiKhoaBieu.scss";

const scheduleData = [
  { time: "6h30 → 7h15’", activity: "Đón trẻ, trẻ chơi tự do" },
  { time: "7h15 → 7h30’", activity: "Thể dục buổi sáng" },
  { time: "7h30 → 8h00", activity: "Ăn sáng" },
  { time: "8h → 8h45’", activity: "Hoạt động học" },
  { time: "8h45 → 9h10’", activity: "Hoạt động ngoài trời" },
  { time: "9h10 → 10h", activity: "Chơi, hoạt động ở các góc" },
  { time: "10h → 10h10’", activity: "Vệ sinh, chuẩn bị ăn bữa trưa" },
  { time: "10h10 → 11h", activity: "Ăn bữa trưa, vệ sinh" },
  { time: "11h → 14h", activity: "Ngủ trưa" },
  { time: "14h → 15h30’", activity: "Vệ sinh - Ăn bữa phụ" },
  { time: "15h30 → 16h", activity: "Chơi, hoạt động theo ý thích" },
  { time: "16h → 17h", activity: "Trả trẻ" },
];

const ScheduleTable = () => {
  return (
    <div className="container3">
      <h2>Lớp Học Hoa Hồng:</h2>
      <table className="scheduleTable">
        <thead>
          <tr>
            <th>Thời gian</th>
            <th>Hoạt động</th>
          </tr>
        </thead>
        <tbody>
          {scheduleData.map((item, index) => (
            <tr key={index}>
              <td>{item.time}</td>
              <td>{item.activity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleTable;