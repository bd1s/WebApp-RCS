// models/enseignant.js
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Enseignant = sequelize.define('Enseignant', {
    id_enseignant: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    id_utilisateur: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Utilisateurs',
        key: 'id_utilisateur',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    departement_enseignement: { // Nom mis à jour ici
      type: DataTypes.STRING,
      allowNull: false,
    },
    specialisation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {});

  Enseignant.associate = function(models) {
    // Association avec le modèle Utilisateur
    Enseignant.belongsTo(models.Utilisateur, { foreignKey: 'id_utilisateur' });
    Enseignant.hasMany(models.Reunion, { foreignKey: 'id_enseignant' });

    // Association avec Doctorant via Encadrement
// Enseignant.belongsToMany(models.Doctorant, {
//   through: models.Encadrement,
//   foreignKey: 'id_enseignant',
//   otherKey: 'id_doctorant',
// });

  
  };

  
  return Enseignant;
};
