const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 20,
        unique: true
    },
    email: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 50,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    role: {
        type: String,
        enum: ["user", "admin", "teacher"], // Các vai trò có thể có
        default: "user" // Mặc định là "user"
    }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
