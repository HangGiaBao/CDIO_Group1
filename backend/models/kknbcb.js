const mongoose = require("mongoose");

const KknbcbSchema = new mongoose.Schema({
    teacher_id: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher", required: true },
    image_url: { type: String, required: true },
    description: { type: String },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Kknbcb", KknbcbSchema);
