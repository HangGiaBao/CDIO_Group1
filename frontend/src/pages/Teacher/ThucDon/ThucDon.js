import React, { useEffect, useState } from "react";
import axios from "axios";
import io from "socket.io-client";
import "./ThucDon.scss";

const socket = io("http://localhost:5001"); // Kết nối WebSocket với backend

const UserMenu = () => {
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMenus();

    socket.on("menuUpdated", () => {
      console.log("Thực đơn được cập nhật từ Admin!");
      fetchMenus(); // Gọi API lại để lấy dữ liệu mới
    });

    return () => {
      socket.off("menuUpdated");
    };
  }, []);

  const fetchMenus = async () => {
    try {
      const response = await axios.get("http://localhost:5001/v1/menu");
      setMenuData(response.data);
      setLoading(false);
    } catch (err) {
      setError("Lỗi khi tải thực đơn!");
      setLoading(false);
    }
  };

  if (loading) return <p>Đang tải thực đơn...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="user-menu-container">
      <h2>Thực Đơn</h2>
      <table className="menu-table">
        <thead>
          <tr>
            <th></th>
            {menuData.map((day, index) => (
              <th key={index}>{day.day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {["SÁNG", "TRƯA", "XẾ"].map((time, idx) => (
            <tr key={idx}>
              <td className="meal-time">{time}</td>
              {menuData.map((day, index) => (
                <td key={index}>
                  {day.meals
                    .find((meal) => meal.time === time)
                    ?.dishes.map((dish, i) => <div key={i}>{dish}</div>)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserMenu;
