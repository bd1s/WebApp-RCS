
// controllers/uploadDemandeController.js
const multer = require('multer');
const path = require('path');
const s3 = require('../config/aws');
const { PutObjectCommand } = require('@aws-sdk/client-s3');

const storage = multer.memoryStorage();
const upload = multer({ storage });

const uploadFile = async (req, res, next) => {
  try {
    if (!req.file) {
      console.log('Aucun fichier uploadé');
      return res.status(400).json({ error: 'Aucun fichier uploadé' });
    }

    const file = req.file;
    console.log('Détails du fichier reçu:', {
      originalname: file.originalname,
      mimetype: file.mimetype,
      size: file.size
    });

    const uploadParams = {
      Bucket: process.env.DO_SPACES_NAME,
      Key: `documents/${Date.now()}${path.extname(file.originalname)}`,
      Body: file.buffer,
      ACL: 'public-read',
    };

    console.log('Paramètres d\'upload:', uploadParams);

    const command = new PutObjectCommand(uploadParams);
    const result = await s3.send(command);

    console.log('Résultat de l\'upload:', result);

    const fileUrl = `https://${process.env.DO_SPACES_NAME}.${process.env.DO_SPACES_ENDPOINT.replace('https://', '')}/${uploadParams.Key}`;
    console.log('URL du fichier:', fileUrl);

    req.fileUrl = fileUrl; // Ajoutez l'URL du fichier à l'objet req pour la transmettre à la prochaine fonction
    next(); // Passez le contrôle à la prochaine fonction middleware
  } catch (error) {
    console.error('Erreur lors de l\'upload du fichier:', error);
    res.status(500).json({ error: 'Erreur lors de l\'upload du fichier' });
  }
};


module.exports = {
  upload,
  uploadFile,
};