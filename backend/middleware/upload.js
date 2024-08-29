// const multer = require('multer');
// const path = require('path');

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     const destinationPath = path.join(__dirname, '../uploads');
//     console.log('Destination Path:', destinationPath); 
//     cb(null, destinationPath);
//   },
//   filename: (req, file, cb) => {
//     const fileName = `${Date.now()}-${file.originalname}`;
//     console.log('Generated File Name:', fileName); 
//     cb(null, fileName);
//   },
// });

// const fileFilter = (req, file, cb) => {
//   if (file.mimetype === 'application/pdf') {
//     console.log('File Accepted:', file.originalname); 
//     cb(null, true);
//   } else {
//     console.log('File Rejected:', file.originalname); 
//     cb(new Error('Seuls les fichiers PDF sont autorisés.'));
//   }
// };

// const upload = multer({ storage: storage, fileFilter: fileFilter });

// module.exports = upload;



const multer = require('multer');
const path = require('path');

// Configuration du stockage pour multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Chemin de destination mis à jour pour stocker les fichiers dans un répertoire spécifique
    const destinationPath = path.join(__dirname, '../uploads/demandes');
    console.log('Destination Path:', destinationPath);
    cb(null, destinationPath);
  },
  filename: (req, file, cb) => {
    // Génération du nom de fichier avec un timestamp pour éviter les collisions
    const fileName = `${Date.now()}-${file.originalname}`;
    console.log('Generated File Name:', fileName);
    cb(null, fileName);
  },
});

// Filtrage des fichiers pour autoriser uniquement les fichiers PDF
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'application/pdf') {
    console.log('File Accepted:', file.originalname);
    cb(null, true);
  } else {
    console.log('File Rejected:', file.originalname);
    cb(new Error('Seuls les fichiers PDF sont autorisés.'));
  }
};

// Création de l'instance de multer avec la configuration
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

module.exports = upload;
