


// const express = require('express');
// const router = express.Router();
// const { resetPassword, requestPasswordReset, register, login, getAllUsers, verifyUser } = require('../controllers/authController');

// router.post('/register', register);
// router.post('/login', login);
// router.post('/request-password-reset', requestPasswordReset);
// router.post('/reset-password/:token', resetPassword);
// router.post('/verify/:activationcode', verifyUser);
// router.get('/users', getAllUsers);

// module.exports = router;


const express = require('express');
const router = express.Router();
const { resetPassword, requestPasswordReset, register, login, getAllUsers, verifyUser, logout } = require('../controllers/authController');

// Register user
router.post('/register', register);

// Login user
router.post('/login', login);

// Password reset request
router.post('/request-password-reset', requestPasswordReset);
router.post('/reset-password/:token', resetPassword);

// Verify user
router.post('/verify/:activationcode', verifyUser);

// Get all users
router.get('/users', getAllUsers);

// Logout user
router.post('/logout', logout); // Ajout de la route de déconnexion

module.exports = router;
