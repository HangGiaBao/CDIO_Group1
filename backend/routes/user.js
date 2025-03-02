const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const middlewareController = require('../controllers/middlewareController');


// API lấy danh sách user (Chỉ admin mới được xem)
router.get('/', middlewareController.verifyTokenAndAdmin, userController.getAllUsers);

// API lấy thông tin user từ token
router.get('/me', middlewareController.verifyToken, (req, res) => {
    res.status(200).json(req.user);
});

router.get('/:id', middlewareController.verifyToken, userController.getUserById);
router.post('/', middlewareController.verifyTokenAndAdmin, userController.createUser);
router.put('/:id', middlewareController.verifyToken, userController.updateUser);
//DELETE USER
router.delete('/:id', middlewareController.verifyTokenAndAdmin, userController.deleteUser);

//HOCTAP USER


module.exports = router;