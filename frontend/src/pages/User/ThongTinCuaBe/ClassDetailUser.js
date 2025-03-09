import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./ClassDetailUser.module.scss";

const ClassDetailUser = () => {
    const { id } = useParams();
    const [classDetail, setClassDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchClassDetail = async () => {
            try {
                console.log("Fetching class data...");
                const res = await fetch(`http://localhost:5001/v1/classes/${id}`);
                if (!res.ok) throw new Error("Lỗi khi tải thông tin lớp học");
                const data = await res.json();
                console.log("Class data:", data);
                setClassDetail(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchClassDetail();
    }, [id]);

    if (loading) return <p className={styles.loading}>⏳ Đang tải dữ liệu...</p>;
    if (error) return <p className={styles.error}>❌ Lỗi: {error}</p>;
    if (!classDetail) return <p className={styles.warning}>⚠️ Không tìm thấy dữ liệu lớp học.</p>;

    return (
        <div className={styles["class-detail"]}>
            <h1>Chi tiết Lớp học: {classDetail.name}</h1>
            <h2>Danh sách học sinh</h2>
            <ul>
                {classDetail.students && classDetail.students.length > 0 ? (
                    classDetail.students.map((student) => (
                        <li key={student._id} className={styles.studentCard}>
                            <p><strong>Tên:</strong> {student.name}</p>
                            <p><strong>Tuổi:</strong> {student.age}</p>
                            <p><strong>Dân tộc:</strong> {student.ethnicity}</p>
                            <p><strong>Số điện thoại:</strong> {student.phoneNumber}</p>
                            <p><strong>Phụ huynh:</strong> {student.parentName}</p>
                        </li>
                    ))
                ) : (
                    <p>⚠️ Hiện tại chưa có học sinh nào trong lớp.</p>
                )}
            </ul>
        </div>
    );
};

export default ClassDetailUser;
