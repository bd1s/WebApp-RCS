'use strict';
module.exports = (sequelize, DataTypes) => {
  const DemandeChangementCodirecteurTheses = sequelize.define('DemandeChangementCodirecteurTheses', {
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
    co_directeur_actuel: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nouveau_co_directeur_propose: {
      type: DataTypes.STRING,
      allowNull: false
    },
    motifs_changement: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    fichier_demande_changement_codirecteur: {
      type: DataTypes.BLOB('long'), // ou DataTypes.STRING si vous utilisez une URL
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
  
  DemandeChangementCodirecteurTheses.associate = (models) => {
    DemandeChangementCodirecteurTheses.belongsTo(models.Demande, {
      foreignKey: 'id_demande',
      onDelete: 'CASCADE'
    });
  };
  
  return DemandeChangementCodirecteurTheses;
};
