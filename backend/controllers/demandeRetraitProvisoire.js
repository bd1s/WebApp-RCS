// // controllers/demandeRetraitProvisoire.js

// const fs = require('fs');
// const path = require('path');
// const { Demande, DemandeRetraitProvisoire } = require('../models');

// exports.createDemandeRetraitProvisoire = async (req, res) => {
//   try {
//     const id_utilisateur = req.user.userId;
//     const doctorant = await Doctorant.findOne({ where: { id_utilisateur } });

//     if (!doctorant) {
//       return res.status(404).json({ message: 'Doctorant non trouvé.' });
//     }

//     const id_doctorant = doctorant.id_doctorant;
//     const { motif_retrait, date_debut_prevue, date_retour_prevue } = req.body;

//     if (!motif_retrait || !date_debut_prevue || !date_retour_prevue) {
//       return res.status(400).json({ message: 'Motif de retrait et dates sont requis.' });
//     }

//     const formattedDateDebut = new Date(date_debut_prevue);
//     const formattedDateRetour = new Date(date_retour_prevue);
//     if (isNaN(formattedDateDebut) || isNaN(formattedDateRetour)) {
//       return res.status(400).json({ message: 'Dates de retrait invalides.' });
//     }

//     let fichier_demande = null;

//     // Gérer l'upload du fichier si présent
//     if (req.file) {
//       const filePath = path.join(__dirname, '../uploads', req.file.filename);
//       fichier_demande = fs.readFileSync(filePath);
//       fs.unlinkSync(filePath); // Supprimer le fichier après lecture
//     }

//     const newDemandeRetraitProvisoire = await DemandeRetraitProvisoire.create({
//       motif_retrait,
//       date_debut_prevue: formattedDateDebut,
//       date_retour_prevue: formattedDateRetour,
//       fichier_demande,
//     });

//     console.log('DemandeRetraitProvisoire créée:', newDemandeRetraitProvisoire);
//     res.status(201).json(newDemandeRetraitProvisoire);
//   } catch (error) {
//     console.error('Erreur lors de la création de la demande de retrait provisoire:', error);
//     res.status(500).json({ error: 'Échec de la création de la demande de retrait provisoire' });
//   }
// };

module.exports = (sequelize, DataTypes) => {
  const DemandeRetraitProvisoires = sequelize.define('DemandeRetraitProvisoires', {
    id_demande: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    motif_retrait: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_debut_prevue: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    date_retour_prevue: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    fichier_demande_retrait: {
      type: DataTypes.BLOB('long'),
      allowNull: true,
    },
  });

  DemandeRetraitProvisoires.associate = (models) => {
    DemandeRetraitProvisoires.belongsTo(models.Demande, {
      foreignKey: 'id_demande',
      onDelete: 'CASCADE',
    });
  };

  return DemandeRetraitProvisoires;
};
