// routes/documentRoutes.js
const express = require('express');
const router = express.Router();
const documentController = require('../controllers/documentController');
const multer = require('multer');
const upload = multer();
const verifyToken = require('../middleware/verifyToken');

router.post('/documents',verifyToken, documentController.createDocument);
router.post('/documents/share', verifyToken, documentController.shareDocument);
router.get('/documents/shared', verifyToken, documentController.getSharedDocuments);

router.get('/documents/:id_document/download', verifyToken, documentController.downloadDocument);

module.exports = router;
