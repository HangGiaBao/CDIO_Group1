const express = require("express");
const { getAllHocTap, createHocTap, updateHocTap, deleteHocTap } = require("../controllers/hocTapController");
const authMiddleware = require("../controllers/middlewareController");

const router = express.Router();

// Lấy danh sách bài học
router.get("/", getAllHocTap);

// Thêm bài học (chỉ admin mới có quyền)
router.post("/", authMiddleware.verifyToken, createHocTap);

// Cập nhật bài học
router.put("/:id", authMiddleware.verifyToken, updateHocTap);

// Xóa bài học
router.delete("/:id", authMiddleware.verifyToken, deleteHocTap);

module.exports = router;
