const express = require('express');
const router = express.Router();
const { getDoctorantsEncadres } = require('../controllers/encadrementController');
const verifyToken = require('../middleware/verifyToken');

// Route pour obtenir les doctorants encadrés
router.get('/doctorants-encadres', verifyToken, getDoctorantsEncadres);

module.exports = router;
