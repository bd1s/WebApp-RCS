// const express = require('express');
// const router = express.Router();
// const { getDoctorantDetails } = require('../controllers/dashboardController');
// const verifyToken = require('../middleware/verifyToken');

// // Route pour obtenir les données du tableau de bord
// router.get('/data', verifyToken, getDoctorantDetails);

// module.exports = router;


const express = require('express');
const router = express.Router();
const { getDoctorantDetails, getSpecialisationDistribution } = require('../controllers/dashboardController');
const verifyToken = require('../middleware/verifyToken');

// Route pour obtenir les détails des doctorants
router.get('/data', verifyToken, getDoctorantDetails);

// Route pour obtenir la répartition des doctorants selon la spécialisation
router.get('/specialisations', verifyToken, getSpecialisationDistribution);

module.exports = router;
