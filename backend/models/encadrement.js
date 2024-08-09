// models/encadrement.js
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Encadrement = sequelize.define('Encadrement', {
    id_encadrement: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_enseignant: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Enseignants',
        key: 'id_enseignant',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
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
  }, {});

  Encadrement.associate = function(models) {
    Encadrement.belongsTo(models.Enseignant, { foreignKey: 'id_enseignant' });
    Encadrement.belongsTo(models.Doctorant, { foreignKey: 'id_doctorant' });
  };

  return Encadrement;
};
