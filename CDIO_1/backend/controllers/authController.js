const User = require('../models/Users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

let refreshTokens = []; // Lưu trữ refresh tokens

const authController = {
    // Đăng ký người dùng
    registerUser: async (req, res) => {
        try {
            const { username, email, password } = req.body || {};
            if (!username || !email || !password) {
                return res.status(400).json({ message: "All fields are required" });
            }

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
            { expiresIn: "1h" }
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
    deleteUser: async (req, res) => {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            if (!user) {
                return res.status(404).json({ message: 'User not found!' });
            }
            res.status(200).json({ message: 'User deleted successfully!' });
        } catch (err) {
            res.status(500).json({ message: 'Server error!', error: err.message });
        }
    },

    // Đăng xuất
    userLogout: async (req, res) => {
        res.clearCookie("refreshToken");
        refreshTokens = refreshTokens.filter(token => token !== req.cookies.refreshToken);
        res.status(200).json({ message: "Logged out successfully!" });
    }
};

module.exports = authController;
