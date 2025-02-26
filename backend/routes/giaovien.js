const express = require("express");
const giaovien = require("../models/giaovien");
const { authenticate, authorize } = require("../middleware/auth");

const router = express.Router();

//  Lấy danh sách giáo viên
router.get("/", async (req, res) => {
    const giaoviens = await giaovien.findAll({ order: [["createdAt", "DESC"]] });
    res.json(giaoviens);
});

//  Thêm giáo viên (Chỉ Admin)
router.post("/", authenticate, authorize(["admin"]), async (req, res) => {
    const { full_name, subject, phone, email, photo } = req.body;
    if (!full_name || !subject || !phone || !email) {
        return res.status(400).json({ message: "Vui lòng điền đầy đủ thông tin" });
    }

    try {
        const giaovien = await giaovien.create({ full_name, subject, phone, email, photo });
        res.json({ message: "Thêm giáo viên thành công", giaovien });
    } catch (error) {
        res.status(500).json({ message: "Lỗi khi thêm giáo viên", error });
    }
});

//  Cập nhật thông tin giáo viên (Chỉ Admin)
router.put("/:id", authenticate, authorize(["admin"]), async (req, res) => {
    const { full_name, subject, phone, email, photo } = req.body;
    const giaovien = await giaovien.findByPk(req.params.id);
    if (!giaovien) return res.status(404).json({ message: "Không tìm thấy giáo viên" });

    await giaovien.update({ full_name, subject, phone, email, photo });
    res.json({ message: "Cập nhật thành công", giaovien });
});

//  Xóa giáo viên (Chỉ Admin)
router.delete("/:id", authenticate, authorize(["admin"]), async (req, res) => {
    const giaovien = await giaovien.findByPk(req.params.id);
    if (!giaovien) return res.status(404).json({ message: "Không tìm thấy giáo viên" });

    await giaovien.destroy();
    res.json({ message: "Xóa giáo viên thành công" });
});

module.exports = router;
