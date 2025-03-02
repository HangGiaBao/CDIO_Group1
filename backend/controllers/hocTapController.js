const path = require("path");
const HocTap = require(path.join(__dirname, "../models/HocTap"));


// Lấy danh sách bài học
exports.getAllHocTap = async (req, res) => {
  try {
    const data = await HocTap.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error });
  }
};

// Thêm bài học
exports.createHocTap = async (req, res) => {
  try {
    const { title, content, image } = req.body;
    const newHocTap = new HocTap({ title, content, image });

    await newHocTap.save();
    res.json(newHocTap);
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error });
  }
};

// Cập nhật bài học
exports.updateHocTap = async (req, res) => {
  try {
    const { title, content, image } = req.body;

    const updatedHocTap = await HocTap.findByIdAndUpdate(
      req.params.id,
      { title, content, image },
      { new: true }
    );

    res.json(updatedHocTap);
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error });
  }
};

// Xóa bài học
exports.deleteHocTap = async (req, res) => {
  try {
    await HocTap.findByIdAndDelete(req.params.id);
    res.json({ message: "Xóa thành công" });
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error });
  }
};
