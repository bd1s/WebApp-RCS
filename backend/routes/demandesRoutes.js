// // routes/demandes.js

// const express = require('express');
// const router = express.Router();
// const demandeController = require('../controllers/demandeController');
// const verifyToken = require('../middleware/verifyToken'); // Importez le middleware

// // Create a new demand
// router.post('/create',verifyToken, demandeController.createDemande);

// module.exports = router;


// const express = require('express');
// const router = express.Router();
// const demandeController = require('../controllers/demandeController');
// const verifyToken = require('../middleware/verifyToken');
// const multer = require('multer');

// // Configuration de multer pour gérer les fichiers
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// // Create a new demand
// router.post('/create', verifyToken, upload.single('fichier_demande'), demandeController.createDemande);

// module.exports = router;




// // routes/demandeRoutes.js
// const express = require('express');
// const router = express.Router();
// const demandeController = require('../controllers/demandeController');
// const verifyToken = require('../middleware/verifyToken');
// const multer = require('multer');

// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// router.post('/create', verifyToken, upload.single('fichier_demande'), demandeController.createDemande);

// module.exports = router;



// routes/demandesRoutes.js
const express = require('express');
const router = express.Router();
const demandeController = require('../controllers/demandeController');


const verifyToken = require('../middleware/verifyToken');
const upload = require('../middleware/upload');


router.post('/inscription', verifyToken, upload.single('fichier_demande'), demandeController.createDemande);
router.post('/retrait-provisoire', verifyToken, upload.single('fichier_demande_retrait'), demandeController.createDemande);
router.post('/retrait-definitif', verifyToken, upload.single('fichier_retrait_definitif'), demandeController.createDemande);
router.post('/carte-etudiant', verifyToken, upload.single('fichier_carte_etudiant'), demandeController.createDemande);
router.post('/email-academique', verifyToken, demandeController.createDemande);
router.post('/reinscription-derogation', verifyToken, upload.single('fichier_demande_reinscription'), demandeController.createDemande);
router.post('/changement-sujet-these', verifyToken, upload.single('fichier_demande_changement_sujet'), demandeController.createDemande);
router.post('/changement-directeur-these', verifyToken, upload.single('fichier_demande_changement_directeur'), demandeController.createDemande);

router.post('/convention-stage', verifyToken, upload.single('fichier_demande_stage'), demandeController.createDemande);
router.post('/cotutelle', verifyToken, upload.single('fichier_demande_cotutelle'), demandeController.createDemande);
router.post('/changement-codirecteur-these', verifyToken, upload.single('fichier_demande_changement_codirecteur'), demandeController.createDemande);
router.post('/imists', verifyToken, upload.single('fichiers_cv'), demandeController.createDemande);
router.post('/tirage', verifyToken, upload.single('fichier_demande_tirage'), demandeController.createDemande);

// router.get('/all', verifyToken, demandeController.getAllDemandes);

// router.get('/:id_demande', verifyToken, demandeController.getDemande);
// router.get('/getDemandesForDoctorant', verifyToken, demandeController.getDemandesForDoctorant);
router.get('/doctorant/:doctorantId', verifyToken, demandeController.getDemandesForDoctorant);
router.get('/:id_demande', verifyToken, demandeController.getDemandeById); // Nouvelle route GET pour récupérer une demande par ID

router.put('/:id_demande', verifyToken, upload.single('fichier'), demandeController.updateDemande);

module.exports = router;


