const express = require('express');
const router = express.Router();
const doctorantController = require('../controllers/doctorantController');
const authMiddleware = require('../middlewares/authMiddleware');



router.get('/profile', doctorantController.getProfile);
router.put('/profile', doctorantController.updateProfile);
router.post('/request-change', doctorantController.requestChange);
router.post('/request-attestation', doctorantController.requestAttestation);
router.get('/calendar', doctorantController.getCalendar);
router.post('/upload-request', doctorantController.uploadRequest);

module.exports = router;
