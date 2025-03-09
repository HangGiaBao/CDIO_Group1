import React, { useState, useContext, useEffect } from "react";
import { MenuContext } from "../../../contexts/MenuContext";
import "./style.scss";

const MenuTable = () => {
    const { menus, updateMenu } = useContext(MenuContext);
    const [editMode, setEditMode] = useState(null);
    const [tempMenus, setTempMenus] = useState(menus); // Tạo bản sao để chỉnh sửa
    const [dateInfo, setDateInfo] = useState({ week: "", month: "", year: "" });

    // ✅ Lấy ngày hiện tại và tính tuần trong tháng
    useEffect(() => {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1;
        const date = today.getDate();
        const week = Math.ceil(date / 7); // Tính tuần trong tháng
        
        setDateInfo({ week, month, year });
    }, []);

    // ✅ Xử lý thay đổi món ăn
    const handleChange = (day, time, value) => {
        setTempMenus(prevMenus =>
            prevMenus.map(menu =>
                menu.day === day
                    ? {
                        ...menu,
                        meals: menu.meals.map(meal =>
                            meal.time === time ? { ...meal, dishes: [value] } : meal
                        )
                    }
                    : menu
            )
        );
    };

    // ✅ Lưu thay đổi và gửi lên Backend
    const handleSave = async (day, time) => {
        const updatedDishes = tempMenus.find(menu => menu.day === day)
            .meals.find(meal => meal.time === time).dishes;

        await updateMenu(day, time, updatedDishes);
        setEditMode(null);
    };

    return (
        <div className="menu-container">
            <h2 className="menu-title">THỰC ĐƠN CỦA BÉ</h2>
            <p className="menu-week">
                Tuần {dateInfo.week} - Tháng {dateInfo.month} - Năm {dateInfo.year}
            </p>
            <table className="menu-table">
                <thead>
                    <tr>
                        <th>Thời gian</th>
                        <th>Nhóm Lớp</th>
                        {menus.map((menu, index) => (
                            <th key={index}>{menu.day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {["SÁNG", "TRƯA", "XẾ"].map((time, idx) => (
                        <tr key={idx}>
                            <td>{time}</td>
                            <td>Món ăn</td>
                            {menus.map((day, index) => (
                                <td key={index}>
                                    {editMode === `${day.day}-${time}` ? (
                                        <>
                                            <input
                                                type="text"
                                                value={tempMenus.find(menu => menu.day === day.day)
                                                    .meals.find(meal => meal.time === time).dishes[0] || ""}
                                                onChange={(e) => handleChange(day.day, time, e.target.value)}
                                            />
                                            <button onClick={() => handleSave(day.day, time)}>Lưu</button>
                                        </>
                                    ) : (
                                        <>
                                            {day.meals.find(meal => meal.time === time)?.dishes.map((dish, i) => (
                                                <div key={i}>{dish}</div>
                                            ))}
                                            <button onClick={() => setEditMode(`${day.day}-${time}`)}>✏️ Sửa</button>
                                        </>
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MenuTable;
