'use strict';
const {
  Model
} = require('sequelize');
// models/reunion.js
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reunion = sequelize.define('Reunion', {
    id_reunion: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    titre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    heure_debut: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    heure_fin: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    id_enseignant: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Enseignants', // Le nom de la table de la base de données
        key: 'id_enseignant',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  }, {});

  Reunion.associate = function(models) {
    // Association avec le modèle Enseignant
    Reunion.belongsTo(models.Enseignant, { foreignKey: 'id_enseignant' });

    // Association avec les Doctorants
    Reunion.belongsToMany(models.Doctorant, {
      through: 'ReunionDoctorants',
      foreignKey: 'id_reunion',
      otherKey: 'id_doctorant',
    });
  };

  return Reunion;
};
