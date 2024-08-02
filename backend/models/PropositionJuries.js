'use strict';

module.exports = (sequelize, DataTypes) => {
  const PropositionJuries = sequelize.define('PropositionJuries', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    id_dossier_soutenance: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'DossierSoutenances',
        key: 'id_dossier_soutenance',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prenom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    grade: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telephone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    etablissement: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    universite: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});

  PropositionJuries.associate = function(models) {
    PropositionJuries.belongsTo(models.DossierSoutenance, { foreignKey: 'id_dossier_soutenance' });
  };

  return PropositionJuries;
};
