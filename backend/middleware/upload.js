const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const destinationPath = path.join(__dirname, '../uploads');
    console.log('Destination Path:', destinationPath); // Ajouter un log pour vérifier le chemin de destination
    cb(null, destinationPath);
  },
  filename: (req, file, cb) => {
    const fileName = `${Date.now()}-${file.originalname}`;
    console.log('Generated File Name:', fileName); // Ajouter un log pour vérifier le nom du fichier généré
    cb(null, fileName);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'application/pdf') {
    console.log('File Accepted:', file.originalname); // Ajouter un log pour vérifier les fichiers acceptés
    cb(null, true);
  } else {
    console.log('File Rejected:', file.originalname); // Ajouter un log pour vérifier les fichiers rejetés
    cb(new Error('Seuls les fichiers PDF sont autorisés.'));
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = upload;
