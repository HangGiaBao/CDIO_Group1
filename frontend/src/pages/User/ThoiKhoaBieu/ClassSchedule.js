import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import styles from "./ClassSchedule.module.scss";

const socket = io("http://localhost:5001");

const ClassSchedule = () => {
    const { id } = useParams(); // Lấy classId từ URL
    const [schedule, setSchedule] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("ID lớp từ URL:", id); // Debug ID nhận được

        if (!id) {
            setError("ID lớp không hợp lệ");
            setLoading(false);
            return;
        }

        const fetchSchedule = async () => {
            try {
                const response = await fetch(`http://localhost:5001/v1/schedule/${id}`);
                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.error || "Không thể tải thời khóa biểu");
                }

                console.log("Dữ liệu thời khóa biểu:", data); // Debug dữ liệu nhận được
                setSchedule(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchSchedule();

        // Lắng nghe sự kiện WebSocket để cập nhật thời khóa biểu real-time
        socket.on("scheduleUpdated", fetchSchedule);

        return () => socket.off("scheduleUpdated");
    }, [id]);

    if (loading) return <p>Đang tải...</p>;
    if (error) return <p>Lỗi: {error}</p>;

    return (
        <div className={styles["class-schedule"]}>
            <h1>Thời Khóa Biểu</h1>
            {schedule.length > 0 ? (
                <div className={styles["schedule-list"]}>
                    {schedule.map((daySchedule, index) => (
                        <div key={index} className={styles["day-block"]}>
                            <h3>{daySchedule.day}</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Thời Gian</th>
                                        <th>Hoạt Động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {daySchedule.sessions.map((session, idx) => (
                                        <tr key={idx}>
                                            <td>
                                                {session.startTime} - {session.endTime}
                                            </td>
                                            <td>{session.activity}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Không có thời khóa biểu cho lớp này.</p>
            )}
        </div>
    );
};

export default ClassSchedule;
