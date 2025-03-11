import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./TeacherDetail.scss";

const TeacherDetail = () => {
    const { id } = useParams();
    const [teacher, setTeacher] = useState(null);
    const [formData, setFormData] = useState({
        full_name: "",
        class: "",
        phone: "",
        email: "",
        photo: "",
    });
    const [isEditing, setIsEditing] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // Lấy thông tin giáo viên từ API
    useEffect(() => {
        const fetchTeacherData = async () => {
            try {
                const response = await axios.get(`http://localhost:5001/v1/giaovien/${id}`);
                setTeacher(response.data.data);
                setFormData({
                    full_name: response.data.data.full_name || "",
                    class: response.data.data.class || "",
                    phone: response.data.data.phone || "",
                    email: response.data.data.email || "",
                    photo: response.data.data.photo || "",
                });
            } catch (error) {
                console.error("Lỗi khi lấy thông tin giáo viên:", error);
                setError("Không thể tải dữ liệu giáo viên.");
            }
        };
        fetchTeacherData();
    }, [id]);

    // Xử lý thay đổi input
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Gửi yêu cầu cập nhật thông tin giáo viên
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await axios.put(`http://localhost:5001/v1/giaovien/${id}`, formData);
            setTeacher(response.data.data); // Cập nhật dữ liệu ngay sau khi lưu
            setIsEditing(false);
        } catch (error) {
            setError("Cập nhật thất bại. Vui lòng thử lại.");
            console.error("Lỗi khi cập nhật giáo viên:", error);
        }
    };

    if (!teacher) {
        return <div>Đang tải dữ liệu...</div>;
    }

    return (
        <div className="container2">
            <h2>Thông Tin Giáo Viên</h2>
            {error && <p className="error-message">{error}</p>}
            {isEditing ? (
                <form onSubmit={handleSubmit} className="teacher-form">
                    <div>
                        <label htmlFor="full_name">Họ và Tên:</label>
                        <input
                            type="text"
                            id="full_name"
                            name="full_name"
                            value={formData.full_name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="class">Chức vụ:</label>
                        <input
                            type="text"
                            id="class"
                            name="class"
                            value={formData.class}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="phone">Số điện thoại:</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="photo">Ảnh URL:</label>
                        <input
                            type="text"
                            id="photo"
                            name="photo"
                            value={formData.photo}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="submit">Lưu thay đổi</button>
                    <button type="button" onClick={() => setIsEditing(false)}>
                        Hủy
                    </button>
                </form>
            ) : (
                <div className="teacher-info">
                    <p><strong>Họ và Tên:</strong> {teacher.full_name}</p>
                    <p><strong>Chức vụ:</strong> {teacher.class}</p>
                    <p><strong>Số điện thoại:</strong> {teacher.phone}</p>
                    <p><strong>Email:</strong> {teacher.email}</p>
                    <p><strong>Ảnh:</strong></p>
                    <img src={teacher.photo || "default-image.jpg"} alt="Teacher" />
                </div>
            )}
            <button onClick={() => navigate('/admin/teacherlist')}>Quay lại</button>
            <button onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? "Hủy" : "Chỉnh sửa"}
            </button>
        </div>
    );
};

export default TeacherDetail;
