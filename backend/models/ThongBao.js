const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid"); // Import thư viện tạo UUID

const ThongBaoSchema = new mongoose.Schema({
    id: { type: String, unique: true, default: uuidv4 }, // ID duy nhất tự động tạo
    tieu_de: { type: String, required: true, trim: true }, // Tiêu đề không được để trống
    noi_dung: { type: String, required: true, trim: true }, // Nội dung không được để trống
    ngay_tao: { type: Date, default: Date.now }, // Ngày tạo mặc định là hiện tại
    nguoi_gui: { type: String, required: true, trim: true }, // Người gửi phải có giá trị
    loai: { type: String, enum: ["Chung", "Cá nhân"], default: "Chung", required: true }, // Loại thông báo
});

module.exports = mongoose.model("ThongBao", ThongBaoSchema);
