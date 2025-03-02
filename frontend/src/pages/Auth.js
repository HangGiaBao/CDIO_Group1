// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Auth = () => {
//     const [isLogin, setIsLogin] = useState(true);
//     const [username, setUsername] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");
//     const [showPassword, setShowPassword] = useState(false);

//     const navigate = useNavigate();

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         if (!username.trim() || !password.trim() || (!isLogin && !email.trim())) {
//             setError("Vui lòng nhập đầy đủ thông tin!");
//             return;
//         }

//         console.log(isLogin ? "Đăng nhập với:" : "Đăng ký với:", { username, email, password });
//         setError("");

//         // Giả lập đăng nhập thành công và điều hướng
//         setTimeout(() => {
//             navigate("/home");
//         }, 500);
//     };

//     return (
//         <div className="wrapper">
//             <form className="form" onSubmit={handleSubmit}>
//                 <h1 className="heading">{isLogin ? "Đăng nhập" : "Đăng ký"}</h1>

//                 <div className="group">
//                     <i className="far fa-user"></i>
//                     <input
//                         type="text"
//                         className="input"
//                         placeholder="Tên đăng nhập"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                     />
//                 </div>

//                 {!isLogin && (
//                     <div className="group">
//                         <i className="far fa-envelope"></i>
//                         <input
//                             type="email"
//                             className="input"
//                             placeholder="Email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                     </div>
//                 )}

//                 <div className="group">
//                     <i className="fas fa-key"></i>
//                     <input
//                         type={showPassword ? "text" : "password"}
//                         className="input"
//                         placeholder="Mật khẩu"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <div className="eye" onClick={() => setShowPassword(!showPassword)}>
//                         <i className={showPassword ? "far fa-eye-slash" : "far fa-eye"}></i>
//                     </div>
//                 </div>

//                 {error && <p className="error">{error}</p>}

//                 <button type="submit" className="submit">
//                     {isLogin ? "Đăng nhập" : "Đăng ký"}
//                 </button>

//                 <p className="toggle" onClick={() => setIsLogin(!isLogin)}>
//                     {isLogin ? "Chưa có tài khoản? Đăng ký ngay" : "Đã có tài khoản? Đăng nhập"}
//                 </p>
//             </form>
//         </div>
//     );
// };

// export default Auth;

import React, { useState } from "react";
import { loginUser, RegisterUser, registerUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

const Auth = () => {
    const [regis, setRegis] = useState(true);
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [userInfo, setUserInfo] = useState(null);
    const navigate = useNavigate();

    const Dk = () => {
        setRegis = !regis;
    }

    const handleSubmit = async () => {
        if (!username.trim() || !password.trim()) {
            setError("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        setError(""); // Xóa lỗi cũ trước khi gửi yêu cầu

        try {
            const userData = await loginUser(username, password);

            if (userData) {
                console.log("✅ Đăng nhập thành công:", userData);

                // Lưu thông tin người dùng vào state
                if (userData) {
                    if (userData.admin===false)
                        navigate("/user")
                    if (userData.admin===true)
                        navigate("/home")
                }
            } else {
                setError("Đăng nhập thất bại! Vui lòng kiểm tra lại.");
            }
        } catch (error) {
            console.error("🚨 Lỗi khi đăng nhập:", error);
            setError(error.message || "Đăng nhập thất bại! Vui lòng kiểm tra lại.");
        }
    };

    const handleSubmitRegister = async () => {
        try {
            const userData = await RegisterUser(username, password, email);

            if (userData) {
                alert("OK baby");
            } else {
                setError("Đăng nhập thất bại! Vui lòng kiểm tra lại.");
            }
        } catch (error) {
            console.error("🚨 Lỗi khi đăng nhập:", error);
            setError(error.message || "Đăng nhập thất bại! Vui lòng kiểm tra lại.");
        }
    }

    return (
        <div>
            { !regis && 
                 <div className="group">
                 <input
                     type="email"
                     className="input"
                     placeholder="email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                 />
             </div>
                }
            <div className="group">
                <input
                    type="text"
                    className="input"
                    placeholder="Tên đăng nhập"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                />
            </div>

            <div className="group">
                <input
                    type="password"
                    className="input"
                    placeholder="Mật khẩu"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            {error && <p className="error">{error}</p>}

            { regis === true ? (
                <div className="submit" onClick={handleSubmit}>
                Đăng nhập
            </div>
            ) : (
                <div className="submit" onClick={handleSubmitRegister}>
                Đăng Ky
            </div>
            )
                 
                }

            
            <span onClick={() => setRegis(!regis)}>
                Regster
            </span>
        </div>
    );
};

export default Auth;
