import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./ClassSchedule.module.scss";

const ClassSchedule = () => {
    const { id } = useParams(); // Lấy classId từ URL
    const [schedule, setSchedule] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSchedule = async () => {
            try {
                const res = await fetch(`http://localhost:5001/v1/schedule/${id}`);
                if (!res.ok) throw new Error("Không thể tải thời khóa biểu");
                const data = await res.json();
                setSchedule(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchSchedule();
    }, [id]);

    if (loading) return <p>Đang tải...</p>;
    if (error) return <p>Lỗi: {error}</p>;

    return (
        <div className={styles["class-schedule"]}>
            <h1>Thời Khóa Biểu - Lớp {id}</h1>
            <table>
                <thead>
                    <tr>
                        <th>Thứ</th>
                        <th>Môn Học</th>
                        <th>Giáo Viên</th>
                        <th>Thời Gian</th>
                    </tr>
                </thead>
                <tbody>
                    {schedule.map((item, index) => (
                        <tr key={index}>
                            <td>{item.day}</td>
                            <td>{item.subject}</td>
                            <td>{item.teacher}</td>
                            <td>{item.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ClassSchedule;
