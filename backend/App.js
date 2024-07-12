const express = require('express');
const app = express();
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');  
const doctorantRoutes = require('./routes/doctorantRoutes');

require('dotenv').config();
app.use(cors()); 
// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/doctorant', doctorantRoutes); // Assurez-vous que le préfixe de la route est correct



module.exports = app;
