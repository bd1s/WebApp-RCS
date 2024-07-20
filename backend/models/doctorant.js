// models/doctorant.js

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Doctorant = sequelize.define('Doctorant', {
    id_doctorant: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    id_utilisateur: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});

  Doctorant.associate = function(models) {
    Doctorant.belongsTo(models.Utilisateur, { foreignKey: 'id_utilisateur' });
    Doctorant.hasMany(models.InfosPersonnelles, { foreignKey: 'id_doctorant' });
    Doctorant.hasMany(models.InfosBaccalaureats, { foreignKey: 'id_doctorant' });
    Doctorant.hasMany(models.InfosUniversitaires, { foreignKey: 'id_doctorant' });
    Doctorant.hasMany(models.InfosCycleDoctorals, { foreignKey: 'id_doctorant' });
    Doctorant.hasMany(models.Demande, { foreignKey: 'id_doctorant' }); // Ajout de l'association avec Demande

  };

  return Doctorant;
};
