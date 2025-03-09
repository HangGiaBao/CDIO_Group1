const express = require("express");
const Student = require("../models/studentModel");

const router = express.Router();

// ✏️ Cập nhật thông tin học sinh
router.put("/:id", async (req, res) => {
    try {
        const { name, age, ethnicity, phoneNumber, parentName } = req.body;
        
        // Kiểm tra dữ liệu đầu vào
        if (!name || !age || !ethnicity || !phoneNumber || !parentName) {
            return res.status(400).json({ message: "Vui lòng cung cấp đầy đủ thông tin học sinh" });
        }

        // Cập nhật thông tin học sinh
        const updatedStudent = await Student.findByIdAndUpdate(
            req.params.id,
            { name, age, ethnicity, phoneNumber, parentName },
            { new: true }
        );
        
        // Nếu không tìm thấy học sinh
        if (!updatedStudent) {
            return res.status(404).json({ message: "Không tìm thấy học sinh" });
        }

        res.json({ message: "Cập nhật thông tin học sinh thành công", student: updatedStudent });
    } catch (error) {
        console.error("Lỗi cập nhật học sinh:", error);
        res.status(500).json({ message: "Lỗi khi cập nhật thông tin học sinh" });
    }
});

module.exports = router;
