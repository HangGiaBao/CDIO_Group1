const mongoose = require("mongoose");
const Schedule = require("../models/Schedule");

// 📌 Lấy thời khóa biểu theo classId
exports.getScheduleByClassId = async (req, res) => {
    try {
        const { classId } = req.params;
        if (!mongoose.Types.ObjectId.isValid(classId)) {
            return res.status(400).json({ error: "classId không hợp lệ" });
        }
        const schedules = await Schedule.find({ classId });
        res.json(schedules);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// 📌 Thêm thời khóa biểu mới (cho từng ngày)
exports.createSchedule = async (req, res) => {
    try {
        const { classId, day, sessions } = req.body;

        if (!mongoose.Types.ObjectId.isValid(classId)) {
            return res.status(400).json({ error: "classId không hợp lệ" });
        }

        const newSchedule = new Schedule({ classId, day, sessions });

        await newSchedule.save();
        res.status(201).json(newSchedule);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// 📌 Cập nhật thời khóa biểu theo ID
exports.updateSchedule = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Schedule ID không hợp lệ" });
        }

        const updatedSchedule = await Schedule.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedSchedule) {
            return res.status(404).json({ error: "Không tìm thấy thời khóa biểu" });
        }

        res.json(updatedSchedule);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// 📌 Xóa thời khóa biểu theo ID
exports.deleteSchedule = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Schedule ID không hợp lệ" });
        }

        const deletedSchedule = await Schedule.findByIdAndDelete(id);
        if (!deletedSchedule) {
            return res.status(404).json({ error: "Không tìm thấy thời khóa biểu" });
        }

        res.json({ message: "Xóa thành công" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
