// // models/infosBaccalaureat.js

// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const InfosBaccalaureat = sequelize.define('InfosBaccalaureat', {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
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
//     annee_bac: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     type_bac: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     mention: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     cne_massar: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     serie_bac: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     academie: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     province: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   }, {});
  
//   InfosBaccalaureat.associate = function(models) {
//     InfosBaccalaureat.belongsTo(models.Doctorant, { foreignKey: 'id_doctorant' });
//   };

//   return InfosBaccalaureat;
// };

// models/infosBaccalaureat.js

'use strict';
module.exports = (sequelize, DataTypes) => {
  const InfosBaccalaureats = sequelize.define('InfosBaccalaureats', {
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
    annee_bac: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type_bac: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mention: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cne_massar: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    serie_bac: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    academie: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    province: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});

  InfosBaccalaureats.associate = function(models) {
    InfosBaccalaureats.belongsTo(models.Doctorant, { foreignKey: 'id_doctorant' });
  };

  return InfosBaccalaureats;
};
