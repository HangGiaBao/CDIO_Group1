import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./ClassDetail.module.scss";

const ClassDetail = () => {
    const { id } = useParams();
    const [classDetail, setClassDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editMode, setEditMode] = useState(null);
    const [editedStudent, setEditedStudent] = useState({});

    useEffect(() => {
        const fetchClassDetail = async () => {
            try {
                const res = await fetch(`http://localhost:5001/v1/classes/${id}`);
                if (!res.ok) throw new Error("Lỗi khi tải thông tin lớp học");
                const data = await res.json();
                setClassDetail(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchClassDetail();
    }, [id]);

    const handleEditClick = (student) => {
        setEditMode(student._id);
        setEditedStudent({
            _id: student._id,
            name: student.name || "",
            age: student.age || "",
            ethnicity: student.ethnicity || "",
            phoneNumber: student.phoneNumber || "",
            parentName: student.parentName || ""
        });
    };

    const handleInputChange = (e, field) => {
        setEditedStudent({ ...editedStudent, [field]: e.target.value });
    };

    const handleSaveClick = async () => {
        try {
            const res = await fetch(`http://localhost:5001/v1/classes/${id}/students/${editedStudent._id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(editedStudent),
            });

            if (!res.ok) throw new Error("Lỗi khi cập nhật thông tin học sinh");

            const updatedStudent = await res.json();

            setClassDetail((prev) => ({
                ...prev,
                students: prev.students.map((s) => (s._id === updatedStudent._id ? updatedStudent : s)),
            }));

            setEditMode(null);
        } catch (error) {
            alert("Cập nhật thất bại!");
            console.error("Lỗi cập nhật:", error);
        }
    };

    if (loading) return <p>Đang tải...</p>;
    if (error) return <p>Lỗi: {error}</p>;

    return (
        <div className={styles["class-detail"]}>
            <h1>Chi tiết Lớp học: {classDetail.name}</h1>
            <h2>Danh sách học sinh</h2>
            <ul>
                {classDetail.students.map((student) => (
                    <li key={student._id}>
                        {editMode === student._id ? (
                            <>
                                <p>
                                    <strong>Tên:</strong>
                                    <input type="text" value={editedStudent.name} onChange={(e) => handleInputChange(e, "name")} />
                                </p>
                                <p>
                                    <strong>Tuổi:</strong>
                                    <input type="number" value={editedStudent.age} onChange={(e) => handleInputChange(e, "age")} />
                                </p>
                                <p>
                                    <strong>Dân tộc:</strong>
                                    <input type="text" value={editedStudent.ethnicity} onChange={(e) => handleInputChange(e, "ethnicity")} />
                                </p>
                                <p>
                                    <strong>Số điện thoại:</strong>
                                    <input type="text" value={editedStudent.phoneNumber} onChange={(e) => handleInputChange(e, "phoneNumber")} />
                                </p>
                                <p>
                                    <strong>Phụ huynh:</strong>
                                    <input type="text" value={editedStudent.parentName} onChange={(e) => handleInputChange(e, "parentName")} />
                                </p>
                                <button onClick={handleSaveClick}>💾 Lưu</button>
                                <button onClick={() => setEditMode(null)}>❌ Hủy</button>
                            </>
                        ) : (
                            <>
                                <p><strong>Tên:</strong> {student.name}</p>
                                <p><strong>Tuổi:</strong> {student.age}</p>
                                <p><strong>Dân tộc:</strong> {student.ethnicity}</p>
                                <p><strong>Số điện thoại:</strong> {student.phoneNumber}</p>
                                <p><strong>Phụ huynh:</strong> {student.parentName}</p>
                                <button onClick={() => handleEditClick(student)}>✏️ Chỉnh sửa</button>
                            </>
                        )}
                        <hr />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ClassDetail;
