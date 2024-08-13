// routes/demandesRoutes.js
const express = require('express');
const router = express.Router();
const demandeController = require('../controllers/demandeController');
const verifyToken = require('../middleware/verifyToken');
const { upload, uploadFile } = require('../controllers/uploadDemandeController');


//creation des demades selon le type 
router.post('/inscription', verifyToken, upload.single('fichier_demande'),uploadFile, demandeController.createDemande);
router.post('/retrait-provisoire', verifyToken, upload.single('fichier_demande_retrait'),uploadFile, demandeController.createDemande);
router.post('/retrait-definitif', verifyToken, upload.single('fichier_retrait_definitif'), uploadFile,demandeController.createDemande);
router.post('/carte-etudiant', verifyToken, upload.single('fichier_carte_etudiant'), uploadFile,demandeController.createDemande);
router.post('/email-academique', verifyToken, demandeController.createDemande);
router.post('/reinscription-derogation', verifyToken, upload.single('fichier_demande_reinscription'),uploadFile, demandeController.createDemande);
router.post('/changement-sujet-these', verifyToken, upload.single('fichier_demande_changement_sujet'),uploadFile, demandeController.createDemande);
router.post('/changement-directeur-these', verifyToken, upload.single('fichier_demande_changement_directeur'), uploadFile,demandeController.createDemande);

router.post('/convention-stage', verifyToken, upload.single('fichier_demande_stage'),uploadFile, demandeController.createDemande);
router.post('/cotutelle', verifyToken, upload.single('fichier_demande_cotutelle'),uploadFile, demandeController.createDemande);
router.post('/changement-codirecteur-these', verifyToken, upload.single('fichier_demande_changement_codirecteur'), uploadFile,demandeController.createDemande);
router.post('/imists', verifyToken, upload.single('fichiers_cv'),uploadFile, demandeController.createDemande);
router.post('/tirage', verifyToken, upload.single('fichier_demande'), uploadFile,demandeController.createDemande);


// Récupération des demandes
router.get('/doctorant/:doctorantId', verifyToken, demandeController.getDemandesForDoctorant);
router.get('/:id_demande', verifyToken, demandeController.getDemandeById); 




// Mise à jour des demandes selon le type
router.put('/:id_demande', verifyToken, upload.single('file'), uploadFile, demandeController.updateDemande);
router.put('/retrait-provisoire/:id_demande', verifyToken, upload.single('file'), uploadFile, demandeController.updateDemande);
router.put('/retrait-definitif/:id_demande', verifyToken, upload.single('fichier_retrait_definitif'), uploadFile, demandeController.updateDemande);
router.put('/carte-etudiant/:id_demande', verifyToken, upload.single('fichier_carte_etudiant'), uploadFile, demandeController.updateDemande);
router.put('/email-academique/:id_demande', verifyToken, demandeController.updateDemande);
router.put('/reinscription-derogation/:id_demande', verifyToken, upload.single('fichier_demande_reinscription'), uploadFile, demandeController.updateDemande);
router.put('/changement-sujet-these/:id_demande', verifyToken, upload.single('fichier_demande_changement_sujet'), uploadFile, demandeController.updateDemande);
router.put('/changement-directeur-these/:id_demande', verifyToken, upload.single('fichier_demande_changement_directeur'), uploadFile, demandeController.updateDemande);
router.put('/convention-stage/:id_demande', verifyToken, upload.single('fichier_demande_stage'), uploadFile, demandeController.updateDemande);
router.put('/cotutelle/:id_demande', verifyToken, upload.single('fichier_demande_cotutelle'), uploadFile, demandeController.updateDemande);
router.put('/changement-codirecteur-these/:id_demande', verifyToken, upload.single('fichier_demande_changement_codirecteur'), uploadFile, demandeController.updateDemande);
router.put('/imists/:id_demande', verifyToken, upload.single('fichiers_cv'), uploadFile, demandeController.updateDemande);
router.put('/tirage/:id_demande', verifyToken, upload.single('fichier_demande'), uploadFile, demandeController.updateDemande);

module.exports = router;



