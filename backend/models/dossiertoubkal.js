'use strict';

module.exports = (sequelize, DataTypes) => {
  const DossierTOUBKALs = sequelize.define('DossierTOUBKALs', {
    id_demande: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'Demandes',
        key: 'id_demande'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: false
    },
    numero_dossier: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fichier_demande_toubkal: {
      type: DataTypes.BLOB('long'),
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  }, {});

  DossierTOUBKALs.associate = (models) => {
    DossierTOUBKALs.belongsTo(models.Demande, {
      foreignKey: 'id_demande',
      onDelete: 'CASCADE'
    });
  };

  return DossierTOUBKALs;
};
