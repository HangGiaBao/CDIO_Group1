const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema({
    classId: { type: mongoose.Schema.Types.ObjectId, ref: "Class", required: true },
    day: { type: String, required: true }, // Ví dụ: "Thứ 2"
    sessions: [
        {
            startTime: { type: String, required: true },  // Ví dụ: "07:00"
            endTime: { type: String, required: true },  // Ví dụ: "07:30"
            activity: { type: String, required: true } // Ví dụ: "Đón trẻ"
        }
    ]
});

module.exports = mongoose.model("Schedule", scheduleSchema);
