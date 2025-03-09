const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

// ✅ Đăng ký user
router.post("/register", authController.registerUser);

// ✅ Đăng nhập user
router.post("/login", authController.loginUser);

// ✅ Refresh Token
router.post("/refresh", authController.requestRefreshToken);

// ✅ Đăng xuất
router.post("/logout", authController.userLogout);

module.exports = router;
