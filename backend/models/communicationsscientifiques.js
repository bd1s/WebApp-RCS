'use strict';

module.exports = (sequelize, DataTypes) => {
  const CommunicationsScientifiques = sequelize.define('CommunicationsScientifiques', {
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
    titre_complet_communication: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    auteurs: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nom_complet_rencontre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lieu_date_rencontre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});

  CommunicationsScientifiques.associate = function(models) {
    CommunicationsScientifiques.belongsTo(models.DossierSoutenance, { foreignKey: 'id_dossier_soutenance' });
  };

  return CommunicationsScientifiques;
};
