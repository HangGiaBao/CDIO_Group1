require("dotenv").config({ path: __dirname + "/.env" });
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const thongBaoRoute = require("./routes/thongbao");
const giaoVienRoute = require("./routes/giaovien");
const hocTapRoute = require("./routes/hoctap"); // 🔥 Import API Học Tập

const app = express();

// 🚀 Kiểm tra biến môi trường quan trọng
if (!process.env.JWT_ACCESS_KEY || !process.env.JWT_REFRESH_KEY || !process.env.MONGODB_URL) {
    console.error("❌ Missing required environment variables in .env file");
    process.exit(1);
}

// 🚀 Middleware xử lý JSON, cookie & CORS
app.use(cors({ origin: "http://localhost:3000", credentials: true })); // ⚠️ Điều chỉnh nếu frontend chạy cổng khác
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 🚀 Kết nối MongoDB với cơ chế retry nếu lỗi
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 10000, // ⏳ Chờ tối đa 10s nếu kết nối chậm
        });
        console.log("✅ CONNECTED TO MONGO DB");
    } catch (error) {
        console.error("❌ Failed to connect to MongoDB:", error.message);
        setTimeout(connectDB, 5000); // 🔄 Thử lại sau 5 giây nếu lỗi
    }
};

// ✅ API routes
app.use("/v1/auth", authRoute);
app.use("/v1/user", userRoute);
app.use("/v1/thongbao", thongBaoRoute);
app.use("/v1/giaovien", giaoVienRoute);
app.use("/v1/hoctap", hocTapRoute); // 🔥 Thêm API Học Tập

// ✅ Route kiểm tra server hoạt động
app.get("/", (req, res) => {
    res.status(200).send("🚀 Server đang chạy!");
});

// ❌ Middleware xử lý lỗi 404 (API không tồn tại)
app.use((req, res, next) => {
    res.status(404).json({ message: "Không tìm thấy API!" });
});

// 🛠 Middleware xử lý lỗi chung
app.use((err, req, res, next) => {
    console.error("❌ Unhandled error:", err.stack);
    res.status(500).json({ message: "Internal Server Error", error: err.message });
});

// 🌍 Chạy server sau khi kết nối DB thành công
connectDB().then(() => {
    const PORT = process.env.PORT || 5001;
    app.listen(PORT, () => {
        console.log(`🚀 Server is running on port ${PORT}`);
    });
});
