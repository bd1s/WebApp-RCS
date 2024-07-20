// // Modèle Sequelize pour DemandeInscription (models/demandeinscription.js)

// 'use strict';
// const { Model } = require('sequelize');

// module.exports = (sequelize, DataTypes) => {
//   class DemandeInscription extends Model {
//     static associate(models) {
//       DemandeInscription.belongsTo(models.Demande, {
//         foreignKey: 'id_demande',
//         onDelete: 'CASCADE',
//       });
//     }
//   }

//   DemandeInscription.init({
//     id_demande: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       allowNull: false,
//       references: {
//         model: 'Demandes',
//         key: 'id_demande',
//       },
//       onUpdate: 'CASCADE',
//       onDelete: 'CASCADE',
//     },
//     diplomes_precedents: {
//       type: DataTypes.TEXT,
//       allowNull: false,
//     },
//     specialisation_souhaitee: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     notes_transcription: {
//       type: DataTypes.TEXT,
//       allowNull: false,
//     },
//     fichier_demande: {
//       type: DataTypes.STRING,
//       allowNull: true,
//     },
//   }, {
//     sequelize,
//     modelName: 'DemandeInscription',
//   });

//   return DemandeInscription;
// };

// models/demandeinscription.js
// 'use strict';





// module.exports = (sequelize, DataTypes) => {
//   class DemandeInscription extends Model {
//     static associate(models) {
//       DemandeInscription.belongsTo(models.Demande, {
//         foreignKey: 'id_demande',
//         onDelete: 'CASCADE',
//       });
//     }
//   }

//   DemandeInscription.init({
//     id_demande: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       allowNull: false,
//       references: {
//         model: 'Demandes',
//         key: 'id_demande',
//       },
//       onUpdate: 'CASCADE',
//       onDelete: 'CASCADE',
//     },
//     diplomes_precedents: {
//       type: DataTypes.TEXT,
//       allowNull: false,
//     },
//     specialisation_souhaitee: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     notes_transcription: {
//       type: DataTypes.TEXT,
//       allowNull: false,
//     },
//     fichier_demande: {
//       type: DataTypes.BLOB('long'),
//       allowNull: true,
//     },
//   }, {
//     sequelize,
//     modelName: 'DemandeInscription',
//   });

//   return DemandeInscription;
// };


'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class DemandeInscription extends Model {
    static associate(models) {
      DemandeInscription.belongsTo(models.Demande, {
        foreignKey: 'id_demande',
        onDelete: 'CASCADE',
      });
    }
  }

  DemandeInscription.init({
    id_demande: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: 'Demandes',
        key: 'id_demande',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    diplomes_precedents: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    specialisation_souhaitee: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    notes_transcription: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    fichier_demande: {
      type: DataTypes.BLOB('long'),
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'DemandeInscription',
  });

  return DemandeInscription;
};
