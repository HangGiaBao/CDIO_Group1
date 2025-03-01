const express = require("express");
const GiaoVien = require("../models/giaovien"); // Sử dụng đúng tên Model
const { authenticate, authorize } = require("../middleware/auth");
const mongoose = require("mongoose");
const router = express.Router();

// ✅ Thêm giáo viên (Chỉ Admin)
router.post("/", authenticate, authorize(["admin"]), async (req, res) => {
    const { full_name, subject, phone, email, photo } = req.body;

    if (!full_name || !subject || !phone || !email) {
        return res.status(400).json({ message: "Vui lòng điền đầy đủ thông tin" });
    }

    try {
        // ⚠️ Kiểm tra xem email hoặc số điện thoại đã tồn tại chưa
        const existingGiaoVien = await GiaoVien.findOne({ $or: [{ email }, { phone }] });
        if (existingGiaoVien) {
            return res.status(400).json({ message: "Email hoặc số điện thoại đã tồn tại!" });
        }

        const giaovien = new GiaoVien({ full_name, subject, phone, email, photo });
        await giaovien.save();
        res.status(201).json({ message: "Thêm giáo viên thành công", data: giaovien });
    } catch (error) {
        res.status(500).json({ message: "Lỗi khi thêm giáo viên", error: error.message });
    }
});


// ✅ Cập nhật thông tin giáo viên (Chỉ Admin)
router.put("/:id", authenticate, authorize(["admin"]), async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "ID không hợp lệ" });
    }

    try {
        const { full_name, subject, phone, email, photo } = req.body;
        const giaovien = await GiaoVien.findByIdAndUpdate(id, { full_name, subject, phone, email, photo }, { new: true });

        if (!giaovien) {
            return res.status(404).json({ message: "Không tìm thấy giáo viên" });
        }

        res.json({ message: "Cập nhật thành công", data: giaovien });
    } catch (error) {
        res.status(500).json({ message: "Lỗi khi cập nhật giáo viên", error: error.message });
    }
});

// ✅ Xóa giáo viên (Chỉ Admin)
router.delete("/:id", authenticate, authorize(["admin"]), async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "ID không hợp lệ" });
    }

    try {
        const giaovien = await GiaoVien.findByIdAndDelete(id);

        if (!giaovien) {
            return res.status(404).json({ message: "Không tìm thấy giáo viên" });
        }

        res.json({ message: "Xóa giáo viên thành công", data: giaovien });
    } catch (error) {
        res.status(500).json({ message: "Lỗi khi xóa giáo viên", error: error.message });
    }
});

module.exports = router;
