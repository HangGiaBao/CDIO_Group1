const mongoose = require("mongoose");

const GiaoVienSchema = new mongoose.Schema({
    full_name: { type: String, required: true }, // Tên đầy đủ
    class: { type: String, required: true }, // Môn học giảng dạy
    phone: { type: String, required: true, unique: true }, // Số điện thoại
    email: { type: String, required: true, unique: true }, // Email
    photo: { type: String }, // Ảnh giáo viên
}, { timestamps: true }); 

const GiaoVien = mongoose.model("GiaoVien", GiaoVienSchema);

module.exports = GiaoVien;
