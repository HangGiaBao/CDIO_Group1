import React, { useState } from "react";
import styles from "../css/Main-css/login.css";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (event) => {
        event.preventDefault();
        if (!username || !password) {
            setError("Vui lòng nhập đầy đủ thông tin!");
            return;
        }
        console.log("Đăng nhập với:", { username, password });
        setError("");
    };

    return (
        <div className={styles.wrapper}>
            <form className={styles.form} onSubmit={handleLogin}>
                <h1 className={styles.heading}>Đăng nhập</h1>
                <div className={styles.group}>
                    <i className="far fa-user"></i>
                    <input 
                        type="text" 
                        className={styles.input} 
                        placeholder="Tên đăng nhập" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className={styles.group}>
                    <i className="fas fa-key"></i>
                    <input 
                        type={showPassword ? "text" : "password"} 
                        className={styles.input} 
                        placeholder="Mật khẩu" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className={styles.eye} onClick={() => setShowPassword(!showPassword)}>
                        <i className={showPassword ? "far fa-eye-slash" : "far fa-eye"}></i>
                    </div>
                </div>
                {error && <p className={styles.error}>{error}</p>}
                <button type="submit" className={styles.submit}>Đăng nhập</button>
            </form>
        </div>
    );
};

export default Login;
