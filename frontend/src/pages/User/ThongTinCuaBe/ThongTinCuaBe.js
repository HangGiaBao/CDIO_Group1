import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import io from "socket.io-client";
import styles from "./ThongTinCuaBe.module.scss";

const socket = io("http://localhost:5001");

const ThongTinCuaBe = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        const fetchClasses = async () => {
            try {
                const res = await fetch("http://localhost:5001/v1/classes");
                const data = await res.json();
                setClasses(data);
            } catch (error) {
                console.error("Lỗi khi tải danh sách lớp học:", error);
            }
        };
        fetchClasses();

        // Lắng nghe WebSocket cập nhật danh sách lớp
        socket.on("classUpdated", fetchClasses);

        return () => socket.off("classUpdated");
    }, []);

    return (
        <div className={styles["thong-tin-cua-be"]}>
            <h1>Danh sách lớp học của bé</h1>
            <ul>
                {classes.map((cls) => (
                    <li key={cls._id}>
                        <Link to={`/user/classdetail/${cls._id}`}>{cls.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ThongTinCuaBe;
