'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Evenement extends Model {
    static associate(models) {
    }
  }
  Evenement.init({
    titre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    heure_debut: {
      type: DataTypes.TIME,
      allowNull: false
    },
    heure_fin: {
      type: DataTypes.TIME,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Evenement',
    tableName: 'Evenements', // S'assurer que le nom de la table est correct
  });
  return Evenement;
};
