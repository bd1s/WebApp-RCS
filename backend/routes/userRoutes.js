// src/routes/userRoutes.js

const express = require('express');
const router = express.Router();
const { getUserRole } = require('../controllers/userController');
const verifyToken = require('../middleware/verifyToken');

router.get('/role', verifyToken, getUserRole);

module.exports = router;
