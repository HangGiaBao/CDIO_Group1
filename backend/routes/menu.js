const express = require("express");
const Menu = require("../models/Menu");

const router = express.Router();

// ✅ Lấy danh sách thực đơn
router.get("/", async (req, res) => {
    try {
        const menus = await Menu.find();
        res.json(menus);
    } catch (err) {
        console.error("Lỗi lấy thực đơn:", err);
        res.status(500).json({ message: "Lỗi lấy thực đơn!", error: err.message });
    }
});

// ✅ Thêm thực đơn mới
router.post("/", async (req, res) => {
    console.log("Dữ liệu nhận được:", req.body);

    if (!req.body.day || !req.body.meals || !Array.isArray(req.body.meals)) {
        return res.status(400).json({ message: "Dữ liệu không hợp lệ! Cần có day và meals." });
    }

    try {
        const newMenu = new Menu(req.body);
        const savedMenu = await newMenu.save();

        // 🔥 Gửi sự kiện WebSocket sau khi thêm
        const io = req.app.get("socketio");
        io.emit("menuUpdated", { action: "add", menu: savedMenu });

        res.status(201).json(savedMenu);
    } catch (err) {
        console.error("Lỗi lưu dữ liệu:", err);
        res.status(500).json({ message: "Lỗi khi thêm thực đơn!", error: err.message });
    }
});

// ✅ Cập nhật thực đơn theo ngày & thời gian
router.put("/update", async (req, res) => {
    const { day, time, dishes } = req.body;

    if (!day || !time || !Array.isArray(dishes)) {
        return res.status(400).json({ message: "Dữ liệu không hợp lệ!" });
    }

    try {
        const updatedMenu = await Menu.findOneAndUpdate(
            { day, "meals.time": time },
            { $set: { "meals.$.dishes": dishes } },
            { new: true }
        );

        if (!updatedMenu) {
            return res.status(404).json({ message: "Không tìm thấy thực đơn để cập nhật!" });
        }

        // 🔥 Gửi sự kiện WebSocket sau khi cập nhật
        const io = req.app.get("socketio");
        io.emit("menuUpdated", { action: "update", day, time, dishes });

        res.json({ message: "Cập nhật thực đơn thành công!", menu: updatedMenu });
    } catch (err) {
        console.error("Lỗi cập nhật thực đơn:", err);
        res.status(500).json({ message: "Lỗi khi cập nhật thực đơn!", error: err.message });
    }
});

// ✅ Xóa thực đơn theo ID
router.delete("/:id", async (req, res) => {
    try {
        const deletedMenu = await Menu.findByIdAndDelete(req.params.id);
        if (!deletedMenu) {
            return res.status(404).json({ message: "Không tìm thấy thực đơn!" });
        }

        // 🔥 Gửi sự kiện WebSocket sau khi xóa
        const io = req.app.get("socketio");
        io.emit("menuUpdated", { action: "delete", id: req.params.id });

        res.json({ message: "Đã xóa thực đơn!", menu: deletedMenu });
    } catch (err) {
        console.error("Lỗi xóa thực đơn:", err);
        res.status(500).json({ message: "Lỗi khi xóa thực đơn!", error: err.message });
    }
});

module.exports = router;
