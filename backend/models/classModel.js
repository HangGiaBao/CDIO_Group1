const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Tên lớp học (bắt buộc)
  students: [
    {
      name: { type: String, required: true }, // Tên học sinh (bắt buộc)
      age: { type: Number, required: true },  // Tuổi (bắt buộc)
      ethnicity: { type: String },            // Dân tộc (không bắt buộc)
      phoneNumber: { type: String },          // Số điện thoại (không bắt buộc)
      parentName: { type: String },           // Tên bố mẹ (không bắt buộc)
    }
  ],
});

const Class = mongoose.model("Class", classSchema);
module.exports = Class;
