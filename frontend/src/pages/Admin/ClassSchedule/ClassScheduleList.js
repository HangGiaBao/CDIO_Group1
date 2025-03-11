import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import io from "socket.io-client";
import styles from "./ClassScheduleList.module.scss";

const socket = io("http://localhost:5001");

const ClassScheduleList = () => {
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchClasses = async () => {
            try {
                const res = await fetch("http://localhost:5001/v1/classes");
                const data = await res.json();

                if (!res.ok) {
                    throw new Error(data.error || "Không thể tải danh sách lớp học");
                }

                setClasses(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchClasses();

        // Lắng nghe WebSocket cập nhật danh sách lớp
        socket.on("classUpdated", fetchClasses);

        return () => socket.off("classUpdated");
    }, []);

    if (loading) return <p>Đang tải danh sách lớp học...</p>;
    if (error) return <p>Lỗi: {error}</p>;

    return (
        <div className={styles["list-class"]}>
            <h1>Danh sách Lớp học</h1>
            {classes.length > 0 ? (
                <ul>
                    {classes.map((cls) => (
                        <li key={cls._id}>
                            <Link to={`/admin/schedule/${cls._id}`}>{cls.name}</Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Không có lớp học nào.</p>
            )}
        </div>
    );
};

export default ClassScheduleList;
