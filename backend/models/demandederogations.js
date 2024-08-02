// models/ReinscriptionDerogation.js

module.exports = (sequelize, DataTypes) => {
  const DemandeDerogations = sequelize.define('DemandeDerogations', {
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
    annee_academique: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    motif: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    decision_prise: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    fichier_demande_reinscription: {
      type: DataTypes.BLOB('long'),
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
  });

  DemandeDerogations.associate = (models) => {
    DemandeDerogations.belongsTo(models.Demande, {
      foreignKey: 'id_demande',
      onDelete: 'CASCADE',
    });
  };

  return DemandeDerogations;
};
