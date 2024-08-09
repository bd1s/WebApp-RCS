// models/infosCycleDoctoral.js

'use strict';
module.exports = (sequelize, DataTypes) => {
  const InfosCycleDoctorals = sequelize.define('InfosCycleDoctorals', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    id_doctorant: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Doctorants',
        key: 'id_doctorant',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    formation_doctorale: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    annee_soutenance_prevue: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    specialite: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    directeur_these: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    structure_recherche_directeur: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    co_directeur_these: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    structure_recherche_co_directeur: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    universite_cotutelle: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sujet_recherche: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    enseignant_encadrant: {
      type: DataTypes.STRING,
      allowNull: true, // Mettre à false si ce champ est obligatoire
    },
    departement_doctorant: {
      type: DataTypes.STRING,
      allowNull: true, // Mettre à false si ce champ est obligatoire
    },
    specialisation_doctorant: {
      type: DataTypes.STRING,
      allowNull: true, // Mettre à false si ce champ est obligatoire
    },
    
  }, {});
  
  InfosCycleDoctorals.associate = function(models) {
    InfosCycleDoctorals.belongsTo(models.Doctorant, { foreignKey: 'id_doctorant' });
  };

  return InfosCycleDoctorals;
};
