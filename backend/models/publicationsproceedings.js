'use strict';

module.exports = (sequelize, DataTypes) => {
  const PublicationsProceedings = sequelize.define('PublicationsProceedings', {
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

  PublicationsProceedings.associate = function(models) {
    PublicationsProceedings.belongsTo(models.DossierSoutenance, { foreignKey: 'id_dossier_soutenance' });
  };

  return PublicationsProceedings;
};
