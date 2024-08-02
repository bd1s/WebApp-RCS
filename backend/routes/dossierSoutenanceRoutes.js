const express = require('express');
const router = express.Router();
const dossierSoutenance = require('../controllers/dossiersoutenance');

// Créer ou mettre à jour un dossier de soutenance et ses données associées
router.post('/dossier-soutenance', dossierSoutenance.createDossierSoutenance);

// outer.post('/dossier-soutenance', demandeController.createOrUpdateDossierSoutenance);

// router.post('/createDossierSoutenance', demandeController.createDossierSoutenance);
// router.get('/getDossiersSoutenance', demandeController.getDossiersSoutenance);
module.exports = router;

