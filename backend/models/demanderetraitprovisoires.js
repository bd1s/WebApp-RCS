const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const DemandeRetraitProvisoires = sequelize.define('DemandeRetraitProvisoires', {
    id_demande: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: 'Demandes',
        key: 'id_demande',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    motif_retrait: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_debut_prevue: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    date_retour_prevue: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    fichier_demande_retrait: { 
      type: DataTypes.STRING, 
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
