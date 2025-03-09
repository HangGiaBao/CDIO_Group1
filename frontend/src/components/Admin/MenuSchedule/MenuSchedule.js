import React, { useEffect, useState, useCallback, useMemo } from "react";
import axios from "axios";
import io from "socket.io-client";
import "./style.scss";

const socket = io("http://localhost:5001");

const MenuSchedule = () => {
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMenus = useCallback(() => {
    axios
      .get("http://localhost:5001/v1/menu")
      .then((response) => {
        setMenuData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("❌ Lỗi khi tải thực đơn!");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchMenus();

    socket.on("menuUpdated", () => {
      console.log("🔄 WebSocket: Thực đơn đã cập nhật!");
      fetchMenus();
    });

    return () => {
      socket.off("menuUpdated");
    };
  }, [fetchMenus]);

  // ✅ Dùng `useMemo` trước khi có bất kỳ return nào
  const memoizedMenu = useMemo(() => menuData, [menuData]);

  if (loading) return <p>⏳ Đang tải thực đơn...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="menu-container1">
      <table className="menu-table">
        <thead>
          <tr>
            <th></th>
            {memoizedMenu.map((day, index) => (
              <th key={index}>{day.day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {["SÁNG", "TRƯA", "XẾ"].map((time, idx) => (
            <tr key={idx}>
              <td className="meal-time">{time}</td>
              {memoizedMenu.map((day, index) => (
                <td key={`${index}-${time}`}>
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

export default MenuSchedule;
