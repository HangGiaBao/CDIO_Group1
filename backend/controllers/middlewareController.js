const jwt = require("jsonwebtoken");

const middlewareController = {
    verifyToken: (req, res, next) => {
        try {
            const authHeader = req.headers.authorization || req.headers.token;
            console.log("Auth Header:", authHeader);

            if (!authHeader) {
                return res.status(401).json({ message: "Bạn chưa xác thực!" });
            }

            const token = authHeader.split(" ")[1];
            console.log("Extracted Token:", token);

            jwt.verify(token, process.env.JWT_ACCESS_KEY, (err, user) => {
                if (err) {
                    if (err.name === "TokenExpiredError") {
                        return res.status(401).json({ message: "Token đã hết hạn! Hãy đăng nhập lại." });
                    }
                    console.error("Token không hợp lệ:", err);
                    return res.status(403).json({ message: "Token không hợp lệ!" });
                }
                req.user = user;
                next();
            });
            
        } catch (error) {
            console.error("Lỗi xác thực:", error);
            res.status(500).json({ message: "Lỗi máy chủ!", error: error.message });
        }
    },

    verifyTokenAndAdmin: (req, res, next) => {
        middlewareController.verifyToken(req, res, () => {
            console.log("User từ Token:", req.user);
            
            if (req.user && req.user.admin) {
                next();
            } else {
                return res.status(403).json({ message: "Bạn không có quyền truy cập!" });
            }
        });
    },

    verifyTokenAndAuthorization: (req, res, next) => {
        middlewareController.verifyToken(req, res, () => {
            if (req.user && (req.user.id === req.params.id || req.user.admin)) {
                next();
            } else {
                return res.status(403).json({ message: "Bạn không có quyền truy cập!" });
            }
        });
    },

    // ➕ Thêm middleware phân quyền dựa trên vai trò
    authorize: (roles = []) => {
        return (req, res, next) => {
            if (!req.user || !roles.includes(req.user.role)) {
                return res.status(403).json({ message: "Bạn không có quyền truy cập!" });
            }
            next();
        };
    }
};

module.exports = middlewareController;
