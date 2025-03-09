<<<<<<< HEAD
import React, { useState, useEffect } from "react";
=======
import React, { useState } from "react";
>>>>>>> 955f45ffd5889e74a5708fb3e3bdea7c6ac362a4
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

<<<<<<< HEAD
    useEffect(() => {
        const role = localStorage.getItem("role");
        if (role === "admin") navigate("/admin");
        else if (role === "teacher") navigate("/teacher");
        else if (role === "user") navigate("/user");
    }, [navigate]);

=======
>>>>>>> 955f45ffd5889e74a5708fb3e3bdea7c6ac362a4
    const handleSubmit = async () => {
        if (!username.trim() || !password.trim()) {
            setError("Vui lòng nhập đầy đủ thông tin!");
            return;
        }
        try {
            const userData = await loginUser(username, password);
            if (userData) {
<<<<<<< HEAD
                localStorage.setItem("token", userData.token);
                localStorage.setItem("role", userData.role);

                if (userData.role === "admin") {
                    navigate("/admin");
                } else if (userData.role === "teacher") {
                    navigate("/teacher");
                } else {
                    navigate("/user");
                }
=======
                navigate(userData.admin ? "/home" : "/user");
>>>>>>> 955f45ffd5889e74a5708fb3e3bdea7c6ac362a4
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
<<<<<<< HEAD
                setRegis(true);
=======
                setRegis(true); // Chuyển về trang đăng nhập
>>>>>>> 955f45ffd5889e74a5708fb3e3bdea7c6ac362a4
            } else {
                setError("Đăng ký thất bại!");
            }
        } catch (error) {
            setError(error.message || "Đăng ký thất bại!");
        }
    };

<<<<<<< HEAD
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        navigate("/");
    };

    return (
        <div className="auth-container">
            <img src={logo} alt="Logo" className="auth-logo" />
=======
    return (
        <div className="auth-container">
            {/* Logo ở góc trên bên trái */}
            <img src={logo} alt="Logo" className="auth-logo" />

>>>>>>> 955f45ffd5889e74a5708fb3e3bdea7c6ac362a4
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