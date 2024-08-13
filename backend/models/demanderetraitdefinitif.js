const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const DemandeRetraitDefinitifs = sequelize.define('DemandeRetraitDefinitifs', {
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
    motif_retrait_definitif: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_retrait: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    observations: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    fichier_retrait_definitif: {
      type: DataTypes.STRING, 
      allowNull: true,
    },
  });

  DemandeRetraitDefinitifs.associate = (models) => {
    DemandeRetraitDefinitifs.belongsTo(models.Demande, {
      foreignKey: 'id_demande',
      onDelete: 'CASCADE',
    });
  };

  return DemandeRetraitDefinitifs;
};
