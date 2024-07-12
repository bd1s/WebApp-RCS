// models/infosPersonnelles.js

'use strict';
module.exports = (sequelize, DataTypes) => {
  const InfosPersonnelles = sequelize.define('InfosPersonnelles', {
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
    civilite: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sexe: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prenom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_naissance: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telephone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lieu_naissance: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cnie: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    situation_socioprofessionnelle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});
  
  InfosPersonnelles.associate = function(models) {
    InfosPersonnelles.belongsTo(models.Doctorant, { foreignKey: 'id_doctorant' });
  };

  return InfosPersonnelles;
};
