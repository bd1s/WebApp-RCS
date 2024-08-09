'use strict';
const {
  Model
} = require('sequelize');
// models/reunionDoctorants.js
'use strict';
module.exports = (sequelize, DataTypes) => {
  const ReunionDoctorants = sequelize.define('ReunionDoctorants', {
    id_reunion_doctorant: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    id_reunion: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Reunions',
        key: 'id_reunion',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    id_doctorant: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Doctorants',
        key: 'id_doctorant',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  }, {});

  return ReunionDoctorants;
};
