'use strict';
module.exports = (sequelize, DataTypes) => {
  const ConventionStages = sequelize.define('ConventionStages', {
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
    entreprise_accueil: {
      type: DataTypes.STRING,
      allowNull: false
    },
    periode_stage: {
      type: DataTypes.STRING,
      allowNull: false
    },
    objectifs_stage: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    fichier_demande_stage: {
      type: DataTypes.STRING, 
      allowNull: true,
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

  ConventionStages.associate = function(models) {
    ConventionStages.belongsTo(models.Demande, {
      foreignKey: 'id_demande',
      onDelete: 'CASCADE'
    });
  };

  return ConventionStages;
};
