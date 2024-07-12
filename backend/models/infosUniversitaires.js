// models/infosUniversitaires.js

'use strict';
module.exports = (sequelize, DataTypes) => {
  const InfosUniversitaires = sequelize.define('InfosUniversitaires', {
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
    diplome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    etablissement: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    universite: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});
  
  InfosUniversitaires.associate = function(models) {
    InfosUniversitaires.belongsTo(models.Doctorant, { foreignKey: 'id_doctorant' });
  };

  return InfosUniversitaires;
};
