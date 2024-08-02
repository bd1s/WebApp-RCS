'use strict';

module.exports = (sequelize, DataTypes) => {
  const Ouvrages = sequelize.define('Ouvrages', {
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
    auteurs: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    maison_edition_isbn_annee_publication: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});

  Ouvrages.associate = function(models) {
    Ouvrages.belongsTo(models.DossierSoutenance, { foreignKey: 'id_dossier_soutenance' });
  };

  return Ouvrages;
};
