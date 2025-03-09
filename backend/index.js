require("dotenv").config({ path: __dirname + "/.env" });
const express = require("express");
<<<<<<< HEAD
const http = require("http");
const { Server } = require("socket.io");
=======
>>>>>>> 955f45ffd5889e74a5708fb3e3bdea7c6ac362a4
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const thongBaoRoute = require("./routes/thongbao");
const giaoVienRoute = require("./routes/giaovien");
<<<<<<< HEAD
const hocTapRoute = require("./routes/hoctap");
const menuRoute = require("./routes/menu");
const classRoute = require("./routes/class");
const scheduleRoutes = require("./routes/schedule");


const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        credentials: true,
    },
});

// ✅ Lưu WebSocket vào biến toàn cục
app.set("socketio", io);

// 🔍 Kiểm tra biến môi trường trước khi chạy server
["JWT_ACCESS_KEY", "JWT_REFRESH_KEY", "MONGODB_URL"].forEach((key) => {
    if (!process.env[key]) {
        console.error(`❌ Missing environment variable: ${key}`);
        process.exit(1);
    }
});

// ✅ Middleware
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
=======
const hocTapRoute = require("./routes/hoctap"); // 🔥 Import API Học Tập

const app = express();

// 🚀 Kiểm tra biến môi trường quan trọng
if (!process.env.JWT_ACCESS_KEY || !process.env.JWT_REFRESH_KEY || !process.env.MONGODB_URL) {
    console.error("❌ Missing required environment variables in .env file");
    process.exit(1);
}

// 🚀 Middleware xử lý JSON, cookie & CORS
app.use(cors({ origin: "http://localhost:3000", credentials: true })); // ⚠️ Điều chỉnh nếu frontend chạy cổng khác
>>>>>>> 955f45ffd5889e74a5708fb3e3bdea7c6ac362a4
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

<<<<<<< HEAD
// ✅ Kết nối MongoDB với retry tự động
const connectDB = async (retryCount = 0) => {
=======
// 🚀 Kết nối MongoDB với cơ chế retry nếu lỗi
const connectDB = async () => {
>>>>>>> 955f45ffd5889e74a5708fb3e3bdea7c6ac362a4
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
<<<<<<< HEAD
            serverSelectionTimeoutMS: 5000,
        });
        console.log("\x1b[32m%s\x1b[0m", "✅ CONNECTED TO MONGO DB");
    } catch (error) {
        console.error("\x1b[31m%s\x1b[0m", `❌ MongoDB Connection Error (${retryCount}):`, error.message);
        if (retryCount < 5) {
            console.log("🔄 Retrying in 3s...");
            setTimeout(() => connectDB(retryCount + 1), 3000);
        } else {
            console.log("❌ Max retry attempts reached.");
            process.exit(1);
        }
=======
            serverSelectionTimeoutMS: 10000, // ⏳ Chờ tối đa 10s nếu kết nối chậm
        });
        console.log("✅ CONNECTED TO MONGO DB");
    } catch (error) {
        console.error("❌ Failed to connect to MongoDB:", error.message);
        setTimeout(connectDB, 5000); // 🔄 Thử lại sau 5 giây nếu lỗi
>>>>>>> 955f45ffd5889e74a5708fb3e3bdea7c6ac362a4
    }
};

// ✅ API routes
app.use("/v1/auth", authRoute);
app.use("/v1/user", userRoute);
app.use("/v1/thongbao", thongBaoRoute);
app.use("/v1/giaovien", giaoVienRoute);
<<<<<<< HEAD
app.use("/v1/hoctap", hocTapRoute);
app.use("/v1/menu", menuRoute);
app.use("/v1/classes", classRoute);
app.use("/v1/schedule", scheduleRoutes);

// ✅ WebSocket - Lắng nghe kết nối từ client
io.on("connection", (socket) => {
    console.log("📡 User connected to WebSocket:", socket.id);

    socket.on("message", (data) => {
        console.log(`💬 Message from ${socket.id}:`, data);
        io.emit("message", data); // Gửi lại tin nhắn cho tất cả client
    });

    socket.on("update_schedule", (data) => {
        console.log("📅 Cập nhật thời khóa biểu:", data);
        io.emit("schedule_updated", data);
    });

    socket.on("disconnect", () => {
        console.log("❌ User disconnected:", socket.id);
    });
});
=======
app.use("/v1/hoctap", hocTapRoute); // 🔥 Thêm API Học Tập
>>>>>>> 955f45ffd5889e74a5708fb3e3bdea7c6ac362a4

// ✅ Route kiểm tra server hoạt động
app.get("/", (req, res) => {
    res.status(200).send("🚀 Server đang chạy!");
});

<<<<<<< HEAD
// ❌ Middleware xử lý lỗi 404
=======
// ❌ Middleware xử lý lỗi 404 (API không tồn tại)
>>>>>>> 955f45ffd5889e74a5708fb3e3bdea7c6ac362a4
app.use((req, res, next) => {
    res.status(404).json({ message: "Không tìm thấy API!" });
});

// 🛠 Middleware xử lý lỗi chung
app.use((err, req, res, next) => {
<<<<<<< HEAD
    console.error("\x1b[31m%s\x1b[0m", "❌ Unhandled error:", err.stack);
=======
    console.error("❌ Unhandled error:", err.stack);
>>>>>>> 955f45ffd5889e74a5708fb3e3bdea7c6ac362a4
    res.status(500).json({ message: "Internal Server Error", error: err.message });
});

// 🌍 Chạy server sau khi kết nối DB thành công
connectDB().then(() => {
    const PORT = process.env.PORT || 5001;
<<<<<<< HEAD
    server.listen(PORT, () => {
        console.log("\x1b[36m%s\x1b[0m", `🚀 Server is running on port ${PORT}`);
=======
    app.listen(PORT, () => {
        console.log(`🚀 Server is running on port ${PORT}`);
>>>>>>> 955f45ffd5889e74a5708fb3e3bdea7c6ac362a4
    });
});
