    const express = require("express");
    const router = express.Router();
    const scheduleController = require("../controllers/scheduleController");

    // 📌 Lấy thời khóa biểu theo classId
    router.get("/:classId", scheduleController.getScheduleByClassId);

    // 📌 Thêm thời khóa biểu mới
    router.post("/", scheduleController.createSchedule);

    // 📌 Cập nhật thời khóa biểu theo ID
    router.put("/:id", scheduleController.updateSchedule);

    // 📌 Xóa thời khóa biểu theo ID
    router.delete("/:id", scheduleController.deleteSchedule);

    module.exports = router;
