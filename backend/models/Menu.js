const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema({
    day: { type: String, required: true }, // Ví dụ: "Thứ 2", "Thứ 3"
    meals: [
        {
            time: { type: String, required: true }, // "SÁNG", "TRƯA", "XẾ"
            dishes: [{ type: String, required: true }] // Danh sách món ăn
        }
    ]
});

module.exports = mongoose.model("Menu", MenuSchema);
