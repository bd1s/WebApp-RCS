const express = require('express');
const app = express();
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');  
const doctorantRoutes = require('./routes/doctorantRoutes');
const demandesRoutes = require('./routes/demandesRoutes');
const dossierSoutenanceRoutes =require('./routes/dossierSoutenanceRoutes')
require('dotenv').config();
app.use(cors()); 
// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/doctorant', doctorantRoutes); 
app.use('/api/demandes', demandesRoutes);

// app.use('/api/demandes', dossierSoutenanceRoutes);


module.exports = app;
