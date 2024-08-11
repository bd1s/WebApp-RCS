
const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const DemandeCarteEtudiants = sequelize.define('DemandeCarteEtudiants', {
    id_demande: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'Demandes',
        key: 'id_demande'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',    },
    numero_etudiant: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_delivrance: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    fichier_carte_etudiant: {
      type: DataTypes.STRING, 
      allowNull: true,
    },
  });

  DemandeCarteEtudiants.associate = (models) => {
    DemandeCarteEtudiants.belongsTo(models.Demande, {
      foreignKey: 'id_demande',
      onDelete: 'CASCADE',
    });
  };

  return DemandeCarteEtudiants;
};
