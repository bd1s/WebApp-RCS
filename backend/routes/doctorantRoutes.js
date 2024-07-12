const express = require('express');
const router = express.Router();
const personalInfoController = require('../controllers/personalInfoController');
const verifyToken = require('../middleware/verifyToken'); // Importez le middleware

// Route pour récupérer toutes les informations d'un doctorant
router.get('/doctorant-info', verifyToken, personalInfoController.getPersonalInfo);
router.post('/doctorant-info', verifyToken, personalInfoController.createOrUpdatePersonalInfo);

module.exports = router;
