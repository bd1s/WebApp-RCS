// routes/utilisateurRoutes.js
const express = require('express');
const router = express.Router();
const utilisateurController = require('../controllers/utilisateurController');

// Endpoint pour récupérer les utilisateurs par rôle
router.get('/usersByRole', utilisateurController.getUsersByRole);

module.exports = router;
