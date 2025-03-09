const User = require('../models/Users');
const bcrypt = require("bcryptjs");

const userController = {
    // Lấy danh sách tất cả người dùng (chỉ admin mới được phép)
    getAllUsers: async (req, res) => {
        try {
            if (req.user.role !== "admin") {
                return res.status(403).json({ message: "Unauthorized!" });
            }

            const users = await User.find();
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json({ message: "Server error!", error: err.message });
        }
    },

    // Lấy danh sách giáo viên
    getAllTeachers: async (req, res) => {
        try {
            const teachers = await User.find({ role: "teacher" });
            res.status(200).json(teachers);
        } catch (err) {
            res.status(500).json({ message: "Server error!", error: err.message });
        }
    },

    // Lấy thông tin một user theo ID
    getUserById: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            if (!user) {
                return res.status(404).json({ message: "User not found!" });
            }
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json({ message: "Server error!", error: err.message });
        }
    },

    // Tạo mới một user (Chỉ admin mới có quyền)
    createUser: async (req, res) => {
        try {
            if (req.user.role !== "admin") {
                return res.status(403).json({ message: "Unauthorized!" });
            }

            const { username, email, password, role } = req.body;
            if (!username || !email || !password) {
                return res.status(400).json({ message: "All fields are required" });
            }

            // Kiểm tra role hợp lệ
            const validRoles = ["user", "teacher", "admin"];
            if (role && !validRoles.includes(role)) {
                return res.status(400).json({ message: "Invalid role!" });
            }

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            
            const newUser = new User({
                username,
                email,
                password: hashedPassword,
                role: role || "user"
            });

            const user = await newUser.save();
            res.status(201).json(user);
        } catch (err) {
            res.status(500).json({ message: "Server error!", error: err.message });
        }
    },

    // Cập nhật thông tin user (Chỉ admin mới có quyền thay đổi role)
    updateUser: async (req, res) => {
        try {
            const { role, password } = req.body;

            // Kiểm tra nếu user không phải admin mà cố gắng thay đổi role
            if (role && req.user.role !== "admin") {
                return res.status(403).json({ message: "Unauthorized to change role!" });
            }

            let updateData = { ...req.body };

            // Nếu có mật khẩu mới, băm trước khi cập nhật
            if (password) {
                const salt = await bcrypt.genSalt(10);
                updateData.password = await bcrypt.hash(password, salt);
            }

            const user = await User.findByIdAndUpdate(req.params.id, updateData, { new: true });

            if (!user) {
                return res.status(404).json({ message: "User not found!" });
            }
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json({ message: "Server error!", error: err.message });
        }
    },

    // Xóa người dùng (Chỉ admin mới có quyền)
    deleteUser: async (req, res) => {
        try {
            if (req.user.role !== "admin") {
                return res.status(403).json({ message: "Unauthorized!" });
            }

            const user = await User.findByIdAndDelete(req.params.id);
            if (!user) {
                return res.status(404).json({ message: "User not found!" });
            }
            res.status(200).json({ message: "User deleted successfully!" });
        } catch (err) {
            res.status(500).json({ message: "Server error!", error: err.message });
        }
    }
};

module.exports = userController;
