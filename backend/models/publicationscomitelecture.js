'use strict';

module.exports = (sequelize, DataTypes) => {
  const PublicationsComiteLecture = sequelize.define('PublicationsComiteLecture', {
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
    titre_complet_publication: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    auteurs: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nom_complet_revue: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vol_issue_pages_annee: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});

  PublicationsComiteLecture.associate = function(models) {
    PublicationsComiteLecture.belongsTo(models.DossierSoutenance, { foreignKey: 'id_dossier_soutenance' });
  };

  return PublicationsComiteLecture;
};
