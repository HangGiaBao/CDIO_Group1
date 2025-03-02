import React, { useState } from "react";
import { loginUser, RegisterUser } from "../services/authService";
import { useNavigate } from "react-router-dom";
import "../css/auth.scss";
import logo from "../assets/images/Logo_image.png";

const Auth = () => {
    const [regis, setRegis] = useState(true);
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async () => {
        if (!username.trim() || !password.trim()) {
            setError("Vui lòng nhập đầy đủ thông tin!");
            return;
        }
        try {
            const userData = await loginUser(username, password);
            if (userData) {
                navigate(userData.admin ? "/home" : "/user");
            } else {
                setError("Đăng nhập thất bại!");
            }
        } catch (error) {
            setError(error.message || "Đăng nhập thất bại!");
        }
    };

    const handleSubmitRegister = async () => {
        if (!email.trim() || !username.trim() || !password.trim()) {
            setError("Vui lòng nhập đầy đủ thông tin!");
            return;
        }
        try {
            const userData = await RegisterUser(username, password, email);
            if (userData) {
                alert("Đăng ký thành công!");
                setRegis(true); // Chuyển về trang đăng nhập
            } else {
                setError("Đăng ký thất bại!");
            }
        } catch (error) {
            setError(error.message || "Đăng ký thất bại!");
        }
    };

    return (
        <div className="auth-container">
            {/* Logo ở góc trên bên trái */}
            <img src={logo} alt="Logo" className="auth-logo" />

            <div className="auth-box">
                <h2>{regis ? "Đăng Nhập" : "Đăng Ký"}</h2>

                {!regis && (
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                )}
                <input type="text" placeholder="Tên đăng nhập" value={username} onChange={(e) => setUserName(e.target.value)} />
                <input type="password" placeholder="Mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)} />

                {error && <p className="error">{error}</p>}

                <button onClick={regis ? handleSubmit : handleSubmitRegister}>
                    {regis ? "Đăng nhập" : "Đăng ký"}
                </button>

                <span onClick={() => setRegis(!regis)}>
                    {regis ? "Chưa có tài khoản? Đăng ký ngay!" : "Đã có tài khoản? Đăng nhập!"}
                </span>
            </div>
        </div>
    );
};

export default Auth;