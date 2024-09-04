// routes/documentRoutes.js
const express = require('express');
const router = express.Router();
const documentController = require('../controllers/documentController');
const multer = require('multer');
const upload = require('../middleware/upload');
const verifyToken = require('../middleware/verifyToken');

router.post('/documents',upload.single('file'),verifyToken, documentController.createDocument);
router.post('/documents/share', verifyToken, documentController.shareDocument);
router.get('/documents/shared', verifyToken, documentController.getSharedDocuments);

router.get('/documents/:id_document/download', verifyToken, documentController.downloadDocument);
router.get('/usersByRole', documentController.getUsersByRole);
router.get('/departments', documentController.getDepartments);
router.get('/doctorantsByDepartment', documentController.getDoctorantsByDepartement);


module.exports = router;
