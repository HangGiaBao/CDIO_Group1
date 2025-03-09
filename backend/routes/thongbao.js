const express = require("express");
const ThongBao = require("../models/ThongBao");

const router = express.Router();

// ✅ API: Lấy tất cả thông báo
router.get("/", async (req, res) => {
    try {
        const thongBaos = await ThongBao.find().sort({ ngay_tao: -1 }); // Lấy danh sách mới nhất trước
        res.status(200).json({ message: "Danh sách thông báo", data: thongBaos });
    } catch (error) {
        res.status(500).json({ message: "Lỗi khi lấy danh sách thông báo!", error: error.message });
    }
});

// 🟢 API: Thêm thông báo mới
router.post("/", async (req, res) => {
    try {
        const { tieu_de, noi_dung, nguoi_gui, loai } = req.body;

        if (!tieu_de || !noi_dung || !nguoi_gui) {
            return res.status(400).json({ message: "Thiếu dữ liệu cần thiết!" });
        }

        const thongBao = new ThongBao({ tieu_de, noi_dung, nguoi_gui, loai });
        await thongBao.save();
        res.status(201).json({ message: "Đã thêm thông báo!", data: thongBao });
    } catch (error) {
        res.status(500).json({ message: "Lỗi khi thêm thông báo!", error: error.message });
    }
});

// 🛑 API: Xóa thông báo theo ID
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params; // Lấy ID từ URL
        const deletedThongBao = await ThongBao.findByIdAndDelete(id); // Sử dụng _id

        if (!deletedThongBao) {
            return res.status(404).json({ message: "Thông báo không tồn tại!" });
        }

        res.status(200).json({ message: "Đã xóa thông báo!", data: deletedThongBao });
    } catch (error) {
        res.status(500).json({ message: "Lỗi khi xóa thông báo!", error: error.message });
    }
});


module.exports = router;
