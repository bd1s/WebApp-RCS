'use strict';
module.exports = (sequelize, DataTypes) => {
  const DemandeTirages = sequelize.define('DemandeTirages', {
    id_demande: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'Demandes',
        key: 'id_demande'
      },
      onDelete: 'CASCADE',
      allowNull: false
    },
    titre_these: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nombre_exemplaires: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date_soutenance: {
      type: DataTypes.DATE,
      allowNull: false
    },
    fichier_demande: {
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

  DemandeTirages.associate = (models) => {
    DemandeTirages.belongsTo(models.Demande, {
      foreignKey: 'id_demande',
      onDelete: 'CASCADE'
    });
  };

  return DemandeTirages;
};
