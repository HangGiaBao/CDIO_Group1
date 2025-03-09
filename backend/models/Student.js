// models/Student.js
const mongoose = require('mongoose');

// Định nghĩa schema cho học sinh
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  class: { type: String, required: true },
  address: { type: String, required: true },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
