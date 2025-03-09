import React, { createContext, useState, useEffect, useRef } from "react";
import axios from "axios";
import { io } from "socket.io-client";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
    const [menus, setMenus] = useState([]);
    const socketRef = useRef(null); // 🔥 Lưu WebSocket để tránh reconnect

    // ✅ Kết nối WebSocket một lần khi component mount
    useEffect(() => {
        socketRef.current = io("http://localhost:5001");

        // 🔥 Lắng nghe sự kiện cập nhật menu
        socketRef.current.on("menuUpdated", (data) => {
            setMenus((prevMenus) => {
                if (data.action === "add") {
                    return [...prevMenus, data.menu];
                }
                if (data.action === "update") {
                    return prevMenus.map((menu) =>
                        menu.day === data.day
                            ? {
                                  ...menu,
                                  meals: menu.meals.map((meal) =>
                                      meal.time === data.time ? { ...meal, dishes: data.dishes } : meal
                                  ),
                              }
                            : menu
                    );
                }
                if (data.action === "delete") {
                    return prevMenus.filter((menu) => menu._id !== data.id);
                }
                return prevMenus;
            });
        });

        return () => {
            socketRef.current.disconnect();
        };
    }, []);

    // ✅ Lấy thực đơn từ backend khi component mount
    useEffect(() => {
        axios.get("http://localhost:5001/v1/menu")
            .then(response => setMenus(response.data))
            .catch(error => console.error("Lỗi khi lấy thực đơn:", error));
    }, []);

    // ✅ Cập nhật thực đơn trên frontend & backend
    const updateMenu = (day, time, newDishes) => {
        setMenus((prevMenus) =>
            prevMenus.map((menu) =>
                menu.day === day
                    ? {
                          ...menu,
                          meals: menu.meals.map((meal) =>
                              meal.time === time ? { ...meal, dishes: newDishes } : meal
                          ),
                      }
                    : menu
            )
        );

        // 🚀 Gửi request cập nhật lên backend
        axios.put("http://localhost:5001/v1/menu/update", { day, time, dishes: newDishes })
            .then(() => {
                // 🔥 Phát sự kiện WebSocket để cập nhật realtime
                socketRef.current.emit("menuUpdated", { action: "update", day, time, dishes: newDishes });
            })
            .catch(error => console.error("Lỗi khi cập nhật thực đơn:", error));
    };

    // ✅ Xóa một món ăn trong danh sách
    const deleteDish = (day, time, dishToRemove) => {
        const menu = menus.find(m => m.day === day);
        if (!menu) return;

        const meal = menu.meals.find(m => m.time === time);
        if (!meal) return;

        const updatedDishes = meal.dishes.filter(d => d !== dishToRemove);

        setMenus((prevMenus) =>
            prevMenus.map((menu) =>
                menu.day === day
                    ? {
                          ...menu,
                          meals: menu.meals.map((meal) =>
                              meal.time === time ? { ...meal, dishes: updatedDishes } : meal
                          ),
                      }
                    : menu
            )
        );

        // 🚀 Gửi request cập nhật lên backend
        axios.put("http://localhost:5001/v1/menu/update", { day, time, dishes: updatedDishes })
            .then(() => {
                // 🔥 Phát sự kiện WebSocket để cập nhật realtime
                socketRef.current.emit("menuUpdated", { action: "update", day, time, dishes: updatedDishes });
            })
            .catch(error => console.error("Lỗi khi xóa món ăn:", error));
    };

    return (
        <MenuContext.Provider value={{ menus, updateMenu, deleteDish }}>
            {children}
        </MenuContext.Provider>
    );
};
