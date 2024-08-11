// // controllers/uploadController.js
// const multer = require('multer');
// const path = require('path');
// const s3 = require('../config/aws');
// const { PutObjectCommand } = require('@aws-sdk/client-s3');

// const storage = multer.memoryStorage();
// const upload = multer({ storage });

// const uploadFile = async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ error: 'Aucun fichier uploadé' });
//     }

//     const file = req.file;
//     const uploadParams = {
//       Bucket: process.env.DO_SPACES_NAME,
//       Key: `documents/${Date.now()}${path.extname(file.originalname)}`,
//       Body: file.buffer,
//       ACL: 'public-read',
//     };

//     const command = new PutObjectCommand(uploadParams);
//     const result = await s3.send(command);

//     const fileUrl = `https://${process.env.DO_SPACES_NAME}.${process.env.DO_SPACES_ENDPOINT}/${uploadParams.Key}`;
//     res.status(200).json({ fileUrl });
//   } catch (error) {
//     console.error('Erreur lors de l\'upload du fichier:', error);
//     res.status(500).json({ error: 'Erreur lors de l\'upload du fichier' });
//   }
// };

// module.exports = {
//   upload,
//   uploadFile,
// };



// controllers/uploadController.js
const multer = require('multer');
const path = require('path');
const s3 = require('../config/aws');
const { PutObjectCommand } = require('@aws-sdk/client-s3');

const storage = multer.memoryStorage();
const upload = multer({ storage });

const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      console.log('Aucun fichier uploadé');  // Log pour vérifier l'absence de fichier
      return res.status(400).json({ error: 'Aucun fichier uploadé' });
    }

    const file = req.file;

    // Log pour vérifier les détails du fichier
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

    console.log('Paramètres d\'upload:', uploadParams);  // Log pour vérifier les paramètres d'upload

    const command = new PutObjectCommand(uploadParams);
    const result = await s3.send(command);

    console.log('Résultat de l\'upload:', result);  // Log pour vérifier le résultat de l'upload

    const fileUrl = `https://${process.env.DO_SPACES_NAME}.${process.env.DO_SPACES_ENDPOINT.replace('https://', '')}/${uploadParams.Key}`;
    console.log('URL du fichier:', fileUrl);
        console.log('URL du fichier:', fileUrl);  // Log pour vérifier l'URL du fichier

    res.status(200).json({ fileUrl });
  } catch (error) {
    console.error('Erreur lors de l\'upload du fichier:', error);
    res.status(500).json({ error: 'Erreur lors de l\'upload du fichier' });
  }
};

module.exports = {
  upload,
  uploadFile,
};
