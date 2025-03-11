const express = require("express");
const { getAllVuiChoi, createVuiChoi, updateVuiChoi, deleteVuiChoi } = require("../controllers/vuichoiController");
const authMiddleware = require("../controllers/middlewareController");

const router = express.Router();

// Lấy danh sách hoạt động vui chơi
router.get("/", getAllVuiChoi);

// Thêm hoạt động vui chơi (chỉ admin mới có quyền)
router.post("/", authMiddleware.verifyToken, createVuiChoi);

// Cập nhật hoạt động vui chơi
router.put("/:id", authMiddleware.verifyToken, updateVuiChoi);

// Xóa hoạt động vui chơi
router.delete("/:id", authMiddleware.verifyToken, deleteVuiChoi);

module.exports = router;
