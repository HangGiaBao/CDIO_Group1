const Menu = require("../models/Menu");

// ✅ API lấy tất cả thực đơn
const getMenus = async (req, res) => {
    try {
        const menus = await Menu.find();
        res.json(menus);
    } catch (error) {
        res.status(500).json({ message: "Lỗi lấy thực đơn!", error });
    }
};

// ✅ API cập nhật món ăn theo ngày & thời gian
const updateMenu = async (req, res) => {
    try {
        const { day, time, dishes } = req.body;
        const menu = await Menu.findOne({ day });

        if (!menu) return res.status(404).json({ message: "Không tìm thấy thực đơn!" });

        // ✅ Cập nhật món ăn cho đúng thời gian
        menu.meals = menu.meals.map(meal => 
            meal.time === time ? { ...meal, dishes } : meal
        );

        await menu.save();

        // 🔥 Emit sự kiện WebSocket để user cập nhật
        const io = req.app.get("socketio");
        io.emit("menuUpdated", { day, time, dishes });

        res.json({ message: "Cập nhật thành công!", menu });
    } catch (error) {
        res.status(500).json({ message: "Lỗi cập nhật thực đơn!", error });
    }
};

module.exports = { getMenus, updateMenu };
// Compare this snippet from backend/models/Menu.js: