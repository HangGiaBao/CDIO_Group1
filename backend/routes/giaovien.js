const express = require("express");
const GiaoVien = require("../models/giaovien");
const mongoose = require("mongoose");

const router = express.Router();

/**
 * ✅ API: Lấy danh sách giáo viên
 */
router.get("/", async (req, res) => {
    try {
        const danhSachGiaoVien = await GiaoVien.find();
        return res.status(200).json({
            message: "Lấy danh sách giáo viên thành công",
            data: danhSachGiaoVien
        });
    } catch (error) {
        return res.status(500).json({
            message: "Lỗi khi lấy danh sách giáo viên",
            error: error.message
        });
    }
});

/**
 * ✅ API: Lấy thông tin giáo viên theo ID
 */
router.get("/:id", async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "ID không hợp lệ" });
    }

    try {
        const giaovien = await GiaoVien.findById(id);
        if (!giaovien) {
            return res.status(404).json({ message: "Không tìm thấy giáo viên" });
        }
        return res.status(200).json({
            message: "Lấy thông tin giáo viên thành công",
            data: giaovien
        });
    } catch (error) {
        return res.status(500).json({
            message: "Lỗi khi lấy giáo viên",
            error: error.message
        });
    }
});

/**
 * ✅ API: Thêm giáo viên
 */
router.post("/", async (req, res) => {
    try {
        const { full_name, class: teacherClass, phone, email, photo } = req.body;

        if (!full_name || !teacherClass || !phone || !email) {
            return res.status(400).json({ message: "Vui lòng điền đầy đủ thông tin" });
        }

        const existingGiaoVien = await GiaoVien.findOne({ $or: [{ email }, { phone }] });
        if (existingGiaoVien) {
            return res.status(409).json({ message: "Email hoặc số điện thoại đã tồn tại!" });
        }

        const giaovien = new GiaoVien({
            full_name,
            class: teacherClass,
            phone,
            email,
            photo: photo || ""
        });

        await giaovien.save();
        return res.status(201).json({
            message: "Thêm giáo viên thành công",
            data: giaovien
        });
    } catch (error) {
        return res.status(500).json({
            message: "Lỗi khi thêm giáo viên",
            error: error.message
        });
    }
});

/**
 * ✅ API: Cập nhật thông tin giáo viên (Không yêu cầu xác thực)
 */
router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { full_name, class: teacherClass, phone, email, photo } = req.body;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "ID không hợp lệ" });
        }

        const giaovien = await GiaoVien.findById(id);
        if (!giaovien) {
            return res.status(404).json({ message: "Không tìm thấy giáo viên" });
        }

        // Cập nhật thông tin
        giaovien.full_name = full_name || giaovien.full_name;
        giaovien.class = teacherClass || giaovien.class;
        giaovien.phone = phone || giaovien.phone;
        giaovien.email = email || giaovien.email;
        giaovien.photo = photo || giaovien.photo;

        await giaovien.save();
        return res.status(200).json({
            message: "Cập nhật thành công",
            data: giaovien
        });
    } catch (error) {
        return res.status(500).json({
            message: "Lỗi khi cập nhật giáo viên",
            error: error.message
        });
    }
});

/**
 * ✅ API: Xóa giáo viên (Không yêu cầu xác thực)
 */
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "ID không hợp lệ" });
        }

        const giaovien = await GiaoVien.findByIdAndDelete(id);

        if (!giaovien) {
            return res.status(404).json({ message: "Không tìm thấy giáo viên" });
        }

        return res.status(200).json({
            message: "Xóa giáo viên thành công",
            data: giaovien
        });
    } catch (error) {
        return res.status(500).json({
            message: "Lỗi khi xóa giáo viên",
            error: error.message
        });
    }
});

module.exports = router;
