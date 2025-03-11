import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./TeacherList.scss";

const TeacherList = () => {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5001/v1/giaovien")
            .then((response) => {
                setTeachers(response.data.data);
            })
            .catch((error) => {
                console.error("Có lỗi xảy ra khi lấy danh sách giáo viên:", error);
            });
    }, []);

    return (
        <div className="container1">
            <h2>Danh Sách Giáo Viên</h2>
            <ul>
                {teachers.map((teacher) => (
                    <li key={teacher._id}>
                        <Link to={`/admin/teacher/${teacher._id}`}>
                            {teacher.full_name} - {teacher.class}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TeacherList;
