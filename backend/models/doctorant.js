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
      references: {
        model: 'Utilisateurs',
        key: 'id_utilisateur',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  }, {});

  Doctorant.associate = function(models) {
    Doctorant.belongsTo(models.Utilisateur, { 
      foreignKey: 'id_utilisateur',
      as: 'utilisateur'  
    });   
    Doctorant.hasMany(models.InfosPersonnelles, { foreignKey: 'id_doctorant' });
    Doctorant.hasMany(models.InfosBaccalaureats, { foreignKey: 'id_doctorant' });
    Doctorant.hasMany(models.InfosUniversitaires, { foreignKey: 'id_doctorant' });
    Doctorant.hasMany(models.InfosCycleDoctorals, { foreignKey: 'id_doctorant' });
    Doctorant.hasMany(models.Demande, { foreignKey: 'id_doctorant' }); // Ajout de l'association avec Demande

    Doctorant.belongsToMany(models.Reunion, {
      through: 'ReunionDoctorants',
      foreignKey: 'id_doctorant',
      otherKey: 'id_reunion',
    });


    // // Association avec Enseignant via Encadrement
    // Doctorant.belongsToMany(models.Enseignant, {
    //   through: models.Encadrement,
    //   foreignKey: 'id_doctorant',
    //   otherKey: 'id_enseignant',
    // });

  };
  return Doctorant;
};



// // models/doctorant.js
// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const Doctorant = sequelize.define('Doctorant', {
//     id_doctorant: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//       allowNull: false,
//     },
//     id_utilisateur: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: 'Utilisateurs',
//         key: 'id_utilisateur',
//       },
//       onUpdate: 'CASCADE',
//       onDelete: 'CASCADE',
//     },
//   }, {});

//   Doctorant.associate = function(models) {
//     Doctorant.belongsTo(models.Utilisateur, { foreignKey: 'id_utilisateur' });
//     Doctorant.hasOne(models.InfosCycleDoctorals, { foreignKey: 'id_doctorant' });
//     // Assurez-vous que les autres associations sont également correctes
//   };

//   return Doctorant;
// };
