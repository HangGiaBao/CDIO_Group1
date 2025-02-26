require("dotenv").config({ path: __dirname + "/.env" });
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");

const app = express();

// ✅ Kiểm tra biến môi trường
if (!process.env.JWT_ACCESS_KEY || !process.env.JWT_REFRESH_KEY || !process.env.MONGODB_URL) {
    console.error("❌ Missing required environment variables in .env file");
    process.exit(1);
}

// 🚀 Log kiểm tra giá trị JWT key (chỉ để debug, có thể xóa)
console.log("✅ JWT_ACCESS_KEY:", process.env.JWT_ACCESS_KEY);
console.log("✅ JWT_REFRESH_KEY:", process.env.JWT_REFRESH_KEY);

// 🛠 Middleware xử lý JSON & cookie
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 📌 Kết nối MongoDB với xử lý lỗi
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 10000, // ⏳ Tăng thời gian timeout nếu server phản hồi chậm
        });
        console.log("✅ CONNECTED TO MONGO DB");
    } catch (error) {
        console.error("❌ Failed to connect to MongoDB:", error.message);
        process.exit(1); // 🔥 Dừng server nếu kết nối thất bại
    }
};

// 🚀 Gọi kết nối MongoDB trước khi chạy server
connectDB().then(() => {
    // 🛣 ROUTES
    app.use("/v1/auth", authRoute);
    app.use("/v1/user", userRoute);
    
    // 🛠 Middleware xử lý lỗi
    app.use((err, req, res, next) => {
        console.error("❌ Unhandled error:", err.stack);
        res.status(500).json({ message: "Internal Server Error", error: err.message });
    });

    // 🌍 Chạy server
    const PORT = process.env.PORT || 5001;
    app.listen(PORT, () => {
        console.log(`🚀 Server is running on port ${PORT}`);
    });
});
