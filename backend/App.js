const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);


module.exports = app;
