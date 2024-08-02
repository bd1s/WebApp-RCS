// 'use strict';

// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     return queryInterface.createTable('DossierSoutenances', {
//       id_dossier_soutenance: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//         allowNull: false,
//       },
//       id_demande: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//         references: {
//           model: 'Demandes',
//           key: 'id_demande',
//         },
//         onUpdate: 'CASCADE',
//         onDelete: 'CASCADE',
//       },
//       nom: {
//         type: Sequelize.STRING,
//         allowNull: false,
//       },
//       prenom: {
//         type: Sequelize.STRING,
//         allowNull: false,
//       },
//       grade: {
//         type: Sequelize.STRING,
//         allowNull: false,
//       },
//       telephone: {
//         type: Sequelize.STRING,
//         allowNull: false,
//       },
//       email: {
//         type: Sequelize.STRING,
//         allowNull: false,
//       },
//       etablissement: {
//         type: Sequelize.STRING,
//         allowNull: false,
//       },
//       universite: {
//         type: Sequelize.STRING,
//         allowNull: false,
//       },
//       createdAt: {
//         type: Sequelize.DATE,
//         allowNull: false,
//         defaultValue: Sequelize.NOW,
//       },
//       updatedAt: {
//         type: Sequelize.DATE,
//         allowNull: false,
//         defaultValue: Sequelize.NOW,
//       },
//     });
//   },

//   down: (queryInterface, Sequelize) => {
//     return queryInterface.dropTable('DossierSoutenances');
//   },
// };


// models/DossierSoutenance.js
// models/DossierSoutenance.js
'use strict';

module.exports = (sequelize, DataTypes) => {
  const DossierSoutenance = sequelize.define('DossierSoutenance', {
    id_dossier_soutenance: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    id_demande: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Demandes',
        key: 'id_demande',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prenom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    grade: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telephone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
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
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  }, {});

  DossierSoutenance.associate = function(models) {
    DossierSoutenance.belongsTo(models.Demande, { foreignKey: 'id_demande' });
    DossierSoutenance.hasMany(models.PropositionJuries, { foreignKey: 'id_dossier_soutenance' });
    DossierSoutenance.hasMany(models.PublicationsWebOfScience, { foreignKey: 'id_dossier_soutenance' });
    DossierSoutenance.hasMany(models.PublicationsComiteLecture, { foreignKey: 'id_dossier_soutenance' });
    DossierSoutenance.hasMany(models.PublicationsProceedings, { foreignKey: 'id_dossier_soutenance' });
    DossierSoutenance.hasMany(models.CommunicationsScientifiques, { foreignKey: 'id_dossier_soutenance' });
    DossierSoutenance.hasMany(models.ChapitresOuvrage, { foreignKey: 'id_dossier_soutenance' });
    DossierSoutenance.hasMany(models.Ouvrages, { foreignKey: 'id_dossier_soutenance' });
    DossierSoutenance.hasMany(models.BrevetsInvention, { foreignKey: 'id_dossier_soutenance' });
  };

  return DossierSoutenance;
};
