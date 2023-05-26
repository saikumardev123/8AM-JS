const express = require('express');
var router = express.Router();
var UserController = require('../controllers/user.controller');
router.post('/register', UserController.register);
router.post("/login", UserController.login);
// router.post("/forgotPassword", UserController.forgotPassword);
// router.post("/changePassword", UserController.changePassword);
module.exports = router;
