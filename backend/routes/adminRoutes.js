// routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const verifyToken = require('../middleware/verifyToken');

// Route pour obtenir toutes les demandes de doctorants
router.get('/doctorant-requests', verifyToken, adminController.getAllDoctorantRequests);

// Route pour obtenir les détails d'une demande spécifique (avec téléchargement de fichier)
router.get('/demande-details/:id_demande', verifyToken, adminController.getDemandeDetails);

// Route pour mettre à jour le statut d'une demande
router.put('/update-request-status/:id', verifyToken, adminController.updateRequestStatus);




// Route pour télécharger le fichier de la demande
router.get('/demande-file/:id_demande', adminController.downloadDemandeFile);

module.exports = router;
