const User = require('../models/Users'); // Đảm bảo rằng đường dẫn đến model User là chính xác

const userController = {
    getAllUsers: async (req, res) => {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json({ message: 'Server error!', error: err.message });
        }
    },
    getUserById: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            if (!user) {
                return res.status(404).json({ message: 'User not found!' });
            }
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json({ message: 'Server error!', error: err.message });
        }
    },
    createUser: async (req, res) => {
        try {
            const newUser = new User(req.body);
            const user = await newUser.save();
            res.status(201).json(user);
        } catch (err) {
            res.status(500).json({ message: 'Server error!', error: err.message });
        }
    },
    updateUser: async (req, res) => {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!user) {
                return res.status(404).json({ message: 'User not found!' });
            }
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json({ message: 'Server error!', error: err.message });
        }
    },
    deleteUser: async (req, res) => {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            if (!user) {
                return res.status(404).json({ message: 'User not found!' });
            }
            res.status(200).json({ message: 'User deleted successfully!' });
        } catch (err) {
            res.status(500).json({ message: 'Server error!', error: err.message });
        }
    }
};

module.exports = userController;
