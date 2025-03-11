const VuiChoi = require("../models/VuiChoi");

// 📌 Lấy danh sách bài vui chơi
exports.getAllVuiChoi = async (req, res) => {
  try {
    const data = await VuiChoi.find();
    if (data.length === 0) {
      return res.status(404).json({ message: "Không có dữ liệu vui chơi nào!" });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi lấy danh sách vui chơi", error: error.message });
  }
};

// 📌 Thêm bài vui chơi
exports.createVuiChoi = async (req, res) => {
  try {
    const { title, content, image } = req.body;

    // Kiểm tra đầu vào
    if (!title || !content || !image) {
      return res.status(400).json({ message: "Vui lòng điền đầy đủ thông tin!" });
    }

    const newVuiChoi = new VuiChoi({ title, content, image });
    await newVuiChoi.save();

    res.status(201).json(newVuiChoi);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi tạo bài vui chơi", error: error.message });
  }
};

// 📌 Cập nhật bài vui chơi
exports.updateVuiChoi = async (req, res) => {
  try {
    const { title, content, image } = req.body;
    const updatedVuiChoi = await VuiChoi.findByIdAndUpdate(
      req.params.id,
      { title, content, image },
      { new: true }
    );

    if (!updatedVuiChoi) {
      return res.status(404).json({ message: "Không tìm thấy bài vui chơi!" });
    }

    res.status(200).json(updatedVuiChoi);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi cập nhật bài vui chơi", error: error.message });
  }
};

// 📌 Xóa bài vui chơi
exports.deleteVuiChoi = async (req, res) => {
  try {
    const deletedVuiChoi = await VuiChoi.findByIdAndDelete(req.params.id);
    if (!deletedVuiChoi) {
      return res.status(404).json({ message: "Không tìm thấy bài vui chơi!" });
    }

    res.status(200).json({ message: "Xóa bài vui chơi thành công!" });
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi xóa bài vui chơi", error: error.message });
  }
};
