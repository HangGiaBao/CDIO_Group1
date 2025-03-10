const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const Class = require("../models/classModel");

// 📌 1. Lấy danh sách tất cả lớp học
router.get("/", async (req, res) => {
    try {
        const classes = await Class.find();
        res.json(classes);
    } catch (error) {
        console.error("Lỗi khi lấy danh sách lớp học:", error);
        res.status(500).json({ error: "Lỗi khi lấy danh sách lớp học" });
    }
});

// 📌 2. Lấy thông tin một lớp học theo ID
router.get("/:id", async (req, res) => {
    try {
        const classItem = await Class.findById(req.params.id);
        if (!classItem) return res.status(404).json({ error: "Không tìm thấy lớp học" });
        res.json(classItem);
    } catch (error) {
        console.error("Lỗi khi lấy thông tin lớp học:", error);
        res.status(500).json({ error: "Lỗi khi lấy thông tin lớp học" });
    }
});

// 📌 3. Tạo lớp học mới
router.post(
    "/",
    body("name").notEmpty().withMessage("Tên lớp học không được để trống"),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

        try {
            const { name, students = [] } = req.body;
            const newClass = new Class({ name, students });
            await newClass.save();
            res.status(201).json(newClass);
        } catch (error) {
            console.error("Lỗi khi tạo lớp học:", error);
            res.status(500).json({ error: "Lỗi khi tạo lớp học" });
        }
    }
);

// 📌 4. Cập nhật thông tin lớp học
router.put("/:id", async (req, res) => {
    try {
        const updatedClass = await Class.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedClass) return res.status(404).json({ error: "Không tìm thấy lớp học" });
        res.json(updatedClass);
    } catch (error) {
        console.error("Lỗi khi cập nhật lớp học:", error);
        res.status(500).json({ error: "Lỗi khi cập nhật lớp học" });
    }
});

// 📌 5. Xóa lớp học
router.delete("/:id", async (req, res) => {
    try {
        const deletedClass = await Class.findByIdAndDelete(req.params.id);
        if (!deletedClass) return res.status(404).json({ error: "Không tìm thấy lớp học" });
        res.json({ message: "Lớp học đã được xóa" });
    } catch (error) {
        console.error("Lỗi khi xóa lớp học:", error);
        res.status(500).json({ error: "Lỗi khi xóa lớp học" });
    }
});

// 📌 6. Thêm học sinh vào lớp
router.post(
    "/:id/students",
    [
        body("name").notEmpty().withMessage("Tên học sinh không được để trống"),
        body("age").isInt({ min: 3 }).withMessage("Tuổi phải là số nguyên và lớn hơn 3"),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

        try {
            const classItem = await Class.findById(req.params.id);
            if (!classItem) return res.status(404).json({ error: "Không tìm thấy lớp học" });

            classItem.students.push(req.body);
            await classItem.save();
            res.json(classItem);
        } catch (error) {
            console.error("Lỗi khi thêm học sinh:", error);
            res.status(500).json({ error: "Lỗi khi thêm học sinh" });
        }
    }
);

// 📌 7. Xóa học sinh khỏi lớp
router.delete("/:classId/students/:studentId", async (req, res) => {
    try {
        const classItem = await Class.findById(req.params.classId);
        if (!classItem) return res.status(404).json({ error: "Không tìm thấy lớp học" });

        classItem.students = classItem.students.filter(student => student._id.toString() !== req.params.studentId);
        await classItem.save();
        res.json(classItem);
    } catch (error) {
        console.error("Lỗi khi xóa học sinh:", error);
        res.status(500).json({ error: "Lỗi khi xóa học sinh khỏi lớp" });
    }
});

// 📌 8. Cập nhật thông tin học sinh
router.put("/:classId/students/:studentId", async (req, res) => {
    try {
        const classItem = await Class.findById(req.params.classId);
        if (!classItem) return res.status(404).json({ error: "Không tìm thấy lớp học" });

        const student = classItem.students.id(req.params.studentId);
        if (!student) return res.status(404).json({ error: "Không tìm thấy học sinh" });

        Object.assign(student, req.body);
        await classItem.save();
        res.json({ message: "Cập nhật học sinh thành công", student });
    } catch (error) {
        console.error("Lỗi khi cập nhật học sinh:", error);
        res.status(500).json({ error: "Lỗi khi cập nhật học sinh" });
    }
});

module.exports = router;
