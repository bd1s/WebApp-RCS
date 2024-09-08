// // routes/documentRoutes.js
// const express = require('express');
// const router = express.Router();
// const documentController = require('../controllers/documentController');
// const multer = require('multer');
// const upload = require('../middleware/upload');
// const verifyToken = require('../middleware/verifyToken');

// router.post('/documents',upload.single('file'),verifyToken, documentController.createDocument);
// router.post('/documents/share', verifyToken, documentController.shareDocument);
// router.get('/documents/shared', verifyToken, documentController.getSharedDocuments);

// router.get('/documents/:id_document/download', verifyToken, documentController.downloadDocument);
// router.get('/usersByRole', documentController.getUsersByRole);
// router.get('/departments', documentController.getDepartments);
// router.get('/getDoctorantDepartments', documentController.getDoctorantDepartments);


// module.exports = router;


const express = require('express');
const router = express.Router();
const documentController = require('../controllers/documentController');
const multer = require('multer');
const upload = require('../middleware/upload');
const verifyToken = require('../middleware/verifyToken');

// Route for creating a new document
router.post('/documents', upload.single('file'), verifyToken, documentController.createDocument);

// Route for sharing a document with a user
router.post('/documents/share', verifyToken, documentController.shareDocument);

// Route for retrieving documents shared with the logged-in user
router.get('/documents/shared', verifyToken, documentController.getSharedDocuments);

// Route for downloading a document by ID
router.get('/documents/:id_document/download', verifyToken, documentController.downloadDocument);

// Route for retrieving users by role (doctorant, administrateur, enseignant)
router.get('/usersByRole', verifyToken, documentController.getUsersByRole);

// Route for retrieving all departments associated with enseignants
router.get('/departments', verifyToken, documentController.getDepartments);

// Route for retrieving departments associated with doctorants
router.get('/getDoctorantDepartments',verifyToken, documentController.getDoctorantDepartments);

// Route for retrieving doctorants by selected department
router.get('/doctorantsByDepartment/:departement',verifyToken,documentController.getDoctorantsByDepartement);

module.exports = router;
