const express = require("express");
const thongtintruonghoc = require("../models/thongtintruonghoc");
const { authenticate, authorize } = require("../middleware/auth");

const router = express.Router();

//  API lấy thông tin trường học
router.get("/", async (req, res) => {
    const thongtintruonghoc = await thongtintruonghoc.findOne();
    res.json(thongtintruonghoc);
});

//  API cập nhật thông tin trường học (Chỉ Admin)
router.put("/", authenticate, authorize(["admin"]), async (req, res) => {
    const { name, address, phone, email, description, logo } = req.body;
    let thongtintruonghoc = await thongtintruonghoc.findOne();

    if (!thongtintruonghoc) {
        thongtintruonghoc = await thongtintruonghoc.create({ name, address, phone, email, description, logo });
    } else {
        await thongtintruonghoc.update({ name, address, phone, email, description, logo });
    }

    res.json({ message: "Cập nhật thông tin thành công", thongtintruonghoc });
});

module.exports = router;
