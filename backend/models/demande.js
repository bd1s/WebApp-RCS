// 'use strict';

// module.exports = (sequelize, DataTypes) => {
//   const Demande = sequelize.define('Demande', {
//     id_demande: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//       allowNull: false,
//     },
//     type_demande: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     statut: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     date_soumission: {
//       type: DataTypes.DATEONLY,
//       allowNull: false,
//     },
//     id_doctorant: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: 'Doctorants',
//         key: 'id_doctorant',
//       },
//       onUpdate: 'CASCADE',
//       onDelete: 'CASCADE',
//     },
//   }, {});

//   Demande.associate = function(models) {
//     Demande.belongsTo(models.Doctorant, { foreignKey: 'id_doctorant' });
//   };

//   return Demande;
// };


'use strict';

module.exports = (sequelize, DataTypes) => {
  const Demande = sequelize.define('Demande', {
    id_demande: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    type_demande: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    statut: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_soumission: {
      type: DataTypes.DATEONLY,
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
  }, {});

  Demande.associate = function(models) {
    // Associations one-to-many
    Demande.belongsTo(models.Doctorant, { foreignKey: 'id_doctorant' });

    Demande.hasMany(models.DemandeInscription, { foreignKey: 'id_demande' });
    Demande.hasMany(models.DemandeRetraitProvisoires, { foreignKey: 'id_demande' });
    Demande.hasMany(models.DemandeRetraitDefinitifs, { foreignKey: 'id_demande' });
    Demande.hasMany(models.DemandeCarteEtudiants, { foreignKey: 'id_demande' });
    Demande.hasMany(models.DemandeEmailAcademiques, { foreignKey: 'id_demande' });
    Demande.hasMany(models.DemandeChangementDirecteurTheses, { foreignKey: 'id_demande' });
    Demande.hasMany(models.DemandeChangementSujetTheses, { foreignKey: 'id_demande' });
    Demande.hasMany(models.DemandeDerogations, { foreignKey: 'id_demande' });
    Demande.hasMany(models.ConventionStages, { foreignKey: 'id_demande' });
    Demande.hasMany(models.Cotutelles, { foreignKey: 'id_demande' });
    Demande.hasMany(models.DemandeChangementCodirecteurTheses, { foreignKey: 'id_demande' });
    Demande.hasMany(models.DemandeIMISTs, { foreignKey: 'id_demande' });
    Demande.hasMany(models.DemandeTirages, { foreignKey: 'id_demande' });


  };

  return Demande;
};
