const express = require('express');
const app = express();
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();
app.use(cors()); 
// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);


module.exports = app;
