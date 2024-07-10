// // const express = require('express');
// // const router = express.Router();
// // const authController = require('../controllers/authController');

// // router.post('/signup', authController.signup);
// // router.post('/login', authController.login);
// // router.post('/forgot-password', authController.forgotPassword);

// // module.exports = router;
// const express = require('express');
// const router = express.Router();
// const authController = require('../controllers/authController');

// // Register user
// router.post('/register', authController.register);

// // Login user
// router.post('/login', authController.login);

// // Get all users
// router.get('/users', authController.getAllUsers);

// // Password reset request
// router.post('/request-password-reset', authController.requestPasswordReset);
// router.post('/reset-password', authController.resetPassword);

// router.post('/verifyuser/:activationcode', authController.verifyUser);


// module.exports = router;


const express = require('express');
const router = express.Router();
const { resetPassword, requestPasswordReset, register, login, getAllUsers, verifyUser } = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);
router.post('/request-password-reset', requestPasswordReset);
router.post('/reset-password/:token', resetPassword);
router.post('/verify/:activationcode', verifyUser);
router.get('/users', getAllUsers);

module.exports = router;

