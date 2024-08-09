// const express = require('express');
// const router = express.Router();
// const adminController = require('../controllers/adminController');
// const authMiddleware = require('../middlewares/authMiddleware');


// router.get('/dashboard', adminController.getDashboard);
// router.post('/create-user', adminController.createUser);
// router.put('/update-user/:id', adminController.updateUser);
// router.delete('/delete-user/:id', adminController.deleteUser);
// router.get('/projects', adminController.getProjects);
// router.post('/send-notification', adminController.sendNotification);
// router.get('/reports', adminController.getReports);

// module.exports = router;



// routes/adminRoutes.js
// const express = require('express');
// const router = express.Router();
// const adminController = require('../controllers/adminController');
// const verifyToken = require('../middleware/verifyToken');


// router.get('/doctorant-requests',verifyToken, adminController.getAllDoctorantRequests);
// router.get('/demande-details/:id_demande', verifyToken, adminController.getDemandeDetails);

// router.put('/update-request-status/:id', verifyToken, adminController.updateRequestStatus);

// module.exports = router;


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
