'use strict';
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Cotutelles = sequelize.define('Cotutelles', {
    id_demande: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Demandes',
        key: 'id_demande'
      }
    },
    universite_partenaire: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pays: {
      type: DataTypes.STRING,
      allowNull: false
    },
    duree_cotutelle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fichier_demande_cotutelle: {
      type: DataTypes.BLOB('long'),
      allowNull: true
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
  } );

  return Cotutelles;
};
