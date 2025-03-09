const express = require("express");
const Class = require("../models/classModel");

module.exports = (io) => {
  const router = express.Router();

  // ✅ Lấy danh sách tất cả lớp học
  router.get("/", async (req, res) => {
    try {
      const classes = await Class.find().sort({ name: 1 }).lean();
      res.json(classes);
    } catch (error) {
      res.status(500).json({ message: "Lỗi khi lấy danh sách lớp học" });
    }
  });

  // ✅ Lấy thông tin chi tiết một lớp học
  router.get("/:id", async (req, res) => {
    try {
      const classData = await Class.findById(req.params.id).lean();
      if (!classData) return res.status(404).json({ message: "Không tìm thấy lớp học" });
      res.json(classData);
    } catch (error) {
      res.status(500).json({ message: "Lỗi khi lấy thông tin lớp học" });
    }
  });

  // ✅ Thêm mới một lớp học
  router.post("/", async (req, res) => {
    try {
      const { name, students = [] } = req.body;
      if (!name) return res.status(400).json({ message: "Vui lòng nhập tên lớp học" });

      const newClass = new Class({ name, students });
      await newClass.save();
      io.emit("classUpdated", { action: "created", class: newClass });
      res.status(201).json({ message: "Lớp học đã được tạo", class: newClass });
    } catch (error) {
      res.status(500).json({ message: "Lỗi khi tạo lớp học" });
    }
  });

  // ✅ Cập nhật thông tin lớp học
  router.put("/:id", async (req, res) => {
    try {
      const updatedClass = await Class.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).lean();
      if (!updatedClass) return res.status(404).json({ message: "Không tìm thấy lớp học" });
      io.emit("classUpdated", { action: "updated", class: updatedClass });
      res.json({ message: "Cập nhật lớp học thành công", class: updatedClass });
    } catch (error) {
      res.status(500).json({ message: "Lỗi khi cập nhật lớp học" });
    }
  });

  // ✅ Xóa một lớp học
  router.delete("/:id", async (req, res) => {
    try {
      const deletedClass = await Class.findByIdAndDelete(req.params.id);
      if (!deletedClass) return res.status(404).json({ message: "Không tìm thấy lớp học" });
      io.emit("classUpdated", { action: "deleted", classId: req.params.id });
      res.json({ message: "Lớp học đã bị xóa" });
    } catch (error) {
      res.status(500).json({ message: "Lỗi khi xóa lớp học" });
    }
  });

  return router;
};
