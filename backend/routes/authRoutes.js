// const express = require('express');
// const router = express.Router();
// const authController = require('../controllers/authController');

// router.post('/signup', authController.signup);
// router.post('/login', authController.login);
// router.post('/forgot-password', authController.forgotPassword);

// module.exports = router;
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Register user
router.post('/register', authController.register);
// Login user
router.post('/login', authController.login);
// Get all users
router.get('/users', authController.getAllUsers);

module.exports = router;
