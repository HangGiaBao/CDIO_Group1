<<<<<<< HEAD
const User = require("../models/Users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const RefreshToken = require("../models/RefreshToken"); // Model lưu refresh token

const authController = {
    // 📌 Đăng ký người dùng
    registerUser: async (req, res) => {
        try {
            const { username, email, password, role } = req.body;
=======
const User = require('../models/Users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

let refreshTokens = []; // Lưu trữ refresh tokens

const authController = {
    // Đăng ký người dùng
    registerUser: async (req, res) => {
        try {
            const { username, email, password } = req.body || {};
>>>>>>> 955f45ffd5889e74a5708fb3e3bdea7c6ac362a4
            if (!username || !email || !password) {
                return res.status(400).json({ message: "All fields are required" });
            }

<<<<<<< HEAD
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new User({ 
                username, 
                email, 
                password: hashedPassword,
                role: role || "user" // Mặc định là "user"
            });

            const user = await newUser.save();
            res.status(201).json({ message: "User registered successfully!", user });
        } catch (err) {
            res.status(500).json({ message: "Server error!", error: err.message });
        }
    },

    // 📌 Tạo Access Token
    generateAccessToken: (user) => {
        return jwt.sign(
            { id: user.id, role: user.role }, // Thêm role vào token
            process.env.JWT_ACCESS_KEY,
            { expiresIn: "15m" } // Access Token hết hạn sau 15 phút
        );
    },

    // 📌 Tạo Refresh Token & lưu vào DB
    generateRefreshToken: async (user) => {
        const refreshToken = jwt.sign(
            { id: user.id, role: user.role }, // Thêm role vào token
            process.env.JWT_REFRESH_KEY,
            { expiresIn: "7d" } // Refresh Token có hiệu lực 7 ngày
        );

        await RefreshToken.create({ userId: user.id, token: refreshToken }); // Lưu vào DB
        return refreshToken;
    },

    // 📌 Đăng nhập người dùng
    loginUser: async (req, res) => {
        try {
            const { username, password } = req.body;
=======
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            const newUser = new User({ username, email, password: hashedPassword });

            const user = await newUser.save();
            res.status(201).json(user);
        } catch (err) {
            res.status(500).json({ message: 'Server error!', error: err.message });
        }
    },

    // Tạo Access Token
    generateAccessToken: (user) => {
        return jwt.sign(
            { id: user.id, admin: user.admin },
            process.env.JWT_ACCESS_KEY,
            { expiresIn: "7d" }
        );
    },

    // Tạo Refresh Token
    generateRefreshToken: (user) => {
        return jwt.sign(
            { id: user.id, admin: user.admin },
            process.env.JWT_REFRESH_KEY,
            { expiresIn: "7d" } // Kéo dài thời gian refresh token
        );
    },

    // Đăng nhập
    loginUser: async (req, res) => {
        try {
            const { username, password } = req.body || {};
>>>>>>> 955f45ffd5889e74a5708fb3e3bdea7c6ac362a4
            if (!username || !password) {
                return res.status(400).json({ message: "All fields are required" });
            }

            const user = await User.findOne({ username });
            if (!user) {
                return res.status(400).json({ message: "Wrong username" });
            }

            const validPassword = await bcrypt.compare(password, user.password);
            if (!validPassword) {
                return res.status(400).json({ message: "Wrong password" });
            }

<<<<<<< HEAD
            if (user.status === "inactive") {
                return res.status(403).json({ message: "Account is disabled. Contact admin!" });
            }

            const accessToken = authController.generateAccessToken(user);
            const refreshToken = await authController.generateRefreshToken(user);

            // Gửi Refresh Token trong cookie
            res.cookie("refreshToken", refreshToken, {
                httpOnly: true,
                secure: true,
                path: "/",
                sameSite: "Strict",
            });

            const { password: userPassword, ...info } = user._doc;
            res.status(200).json({ ...info, accessToken, refreshToken }); // ✅ Trả về cả Refresh Token
        } catch (err) {
            res.status(500).json({ message: "Server error!", error: err.message });
        }
    },

    // 📌 Yêu cầu token mới từ Refresh Token
    requestRefreshToken: async (req, res) => {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) {
            return res.status(401).json({ message: "You are not authenticated!" });
        }

        const tokenExists = await RefreshToken.findOne({ token: refreshToken });
        if (!tokenExists) {
            return res.status(403).json({ message: "Refresh token is not valid!" });
        }

        jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, async (err, user) => {
            if (err) {
                return res.status(403).json({ message: "Token is not valid!" });
            }

            // Xóa Refresh Token cũ khỏi DB
            await RefreshToken.deleteOne({ token: refreshToken });

            // Tạo token mới
            const newAccessToken = authController.generateAccessToken(user);
            const newRefreshToken = await authController.generateRefreshToken(user);

            // Gửi Refresh Token mới trong cookie
            res.cookie("refreshToken", newRefreshToken, {
                httpOnly: true,
                secure: true,
                path: "/",
                sameSite: "Strict",
            });

            res.status(200).json({ accessToken: newAccessToken, refreshToken: newRefreshToken }); // ✅ Trả về cả token mới
        });
    },

    // 📌 Xóa người dùng
=======
            if (user && validPassword) {
                const accessToken = authController.generateAccessToken(user);
                const refreshToken = authController.generateRefreshToken(user);
                refreshTokens.push(refreshToken);

                // Gửi refresh token trong cookie trước khi response
                res.cookie("refreshToken", refreshToken, {
                    httpOnly: true,
                    secure: false,
                    path: "/",
                    sameSite: "strict",
                });

                const { password, ...info } = user._doc;
                res.status(200).json({ ...info, accessToken, refreshToken });
            }
        } catch (err) {
            res.status(500).json({ message: 'Server error!', error: err.message });
        }
    },

    // Lấy token mới từ refresh token
    requestRefreshToken: (req, res) => {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) return res.status(401).json({ message: "You are not authenticated!" });

        if (!refreshTokens.includes(refreshToken)) {
            return res.status(403).json({ message: "Refresh token is not valid!" });
        }

        jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, user) => {
            if (err) {
                console.log(err);
                return res.status(403).json({ message: "Token is not valid!" });
            }

            // Xóa refresh token cũ
            refreshTokens = refreshTokens.filter(token => token !== refreshToken);

            // Tạo token mới
            const newAccessToken = authController.generateAccessToken(user);
            const newRefreshToken = authController.generateRefreshToken(user);
            refreshTokens.push(newRefreshToken);

            // Gửi refresh token mới trong cookie
            res.cookie("refreshToken", newRefreshToken, {
                httpOnly: true,
                secure: false,
                path: "/",
                sameSite: "strict",
            });

            res.status(200).json({ accessToken: newAccessToken });
        });
    },

    // Xóa người dùng
>>>>>>> 955f45ffd5889e74a5708fb3e3bdea7c6ac362a4
    deleteUser: async (req, res) => {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            if (!user) {
<<<<<<< HEAD
                return res.status(404).json({ message: "User not found!" });
            }
            res.status(200).json({ message: "User deleted successfully!" });
        } catch (err) {
            res.status(500).json({ message: "Server error!", error: err.message });
        }
    },

    // 📌 Đăng xuất người dùng
    userLogout: async (req, res) => {
        try {
            const refreshToken = req.cookies.refreshToken;
            console.log("📌 Refresh Token nhận được:", refreshToken);

            if (!refreshToken) {
                return res.status(401).json({ message: "Không tìm thấy token!" });
            }

            // Kiểm tra token có tồn tại trong DB không
            const tokenExists = await RefreshToken.findOne({ token: refreshToken });
            if (!tokenExists) {
                return res.status(403).json({ message: "Refresh token không hợp lệ hoặc đã hết hạn!" });
            }

            // Xóa Refresh Token khỏi DB
            await RefreshToken.deleteOne({ token: refreshToken });

            // Xóa Refresh Token trong cookie
            res.clearCookie("refreshToken", {
                httpOnly: true,
                secure: true,
                path: "/",
                sameSite: "Strict",
            });

            console.log("✅ Đã đăng xuất thành công!");
            return res.status(200).json({ message: "Đăng xuất thành công!" });
        } catch (error) {
            console.error("❌ Lỗi khi đăng xuất:", error);
            return res.status(500).json({ message: "Lỗi server khi đăng xuất!", error });
        }
    },
=======
                return res.status(404).json({ message: 'User not found!' });
            }
            res.status(200).json({ message: 'User deleted successfully!' });
        } catch (err) {
            res.status(500).json({ message: 'Server error!', error: err.message });
        }
    },

   // Đăng xuất
userLogout: async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;

        if (!refreshToken) {
            return res.status(401).json({ message: "Không tìm thấy token!" });
        }

        // Xóa refresh token khỏi danh sách
        refreshTokens = refreshTokens.filter(token => token !== refreshToken);

        // Xóa refresh token trong cookie
        res.clearCookie("refreshToken", {
            httpOnly: true,
            secure: false,
            path: "/",
            sameSite: "strict",
        });

        return res.status(200).json({ message: "Đăng xuất thành công!" });
    } catch (error) {
        return res.status(500).json({ message: "Lỗi server khi đăng xuất!", error });
    }
}

>>>>>>> 955f45ffd5889e74a5708fb3e3bdea7c6ac362a4
};

module.exports = authController;
