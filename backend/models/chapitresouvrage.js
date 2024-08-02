'use strict';

module.exports = (sequelize, DataTypes) => {
  const ChapitresOuvrage = sequelize.define('ChapitresOuvrage', {
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
    titre_ouvrage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    titre_complet_chapitre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    auteurs: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    maison_edition_isbn_annee_publication: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});

  ChapitresOuvrage.associate = function(models) {
    ChapitresOuvrage.belongsTo(models.DossierSoutenance, { foreignKey: 'id_dossier_soutenance' });
  };

  return ChapitresOuvrage;
};
