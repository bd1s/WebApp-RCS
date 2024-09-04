const express = require('express');
const router = express.Router();
const reunionController = require('../controllers/reunionController');
const verifyToken = require('../middleware/verifyToken');


// Routes CRUD pour les réunions
router.get('/doctorants/departement/:departement',reunionController.getDoctorantsByDepartement);

router.get('/departements', reunionController.getDepartementsDoctorants);


router.get('/', verifyToken, reunionController.getAllReunions);
router.post('/', verifyToken, reunionController.createReunion);
router.get('/:id', verifyToken, reunionController.getReunionById);
router.put('/:id', verifyToken, reunionController.updateReunion);
router.delete('/:id', verifyToken, reunionController.deleteReunion);
router.get('/doctorant/meetings',verifyToken, reunionController.getReunionsForDoctorant);



module.exports = router;
