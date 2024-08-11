// 'use strict';

// module.exports = (sequelize, DataTypes) => {
//   const Document = sequelize.define('Document', {
//     id_document: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//       allowNull: false,
//     },
//     titre: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     fichier: {
//       type: DataTypes.BLOB('long'),
//       allowNull: false,
//     },
//     id_utilisateur: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: 'Utilisateurs',
//         key: 'id_utilisateur',
//       },
//     },
//   }, {
//     tableName: 'documents',
//     timestamps: true,
//   });

//   Document.associate = function(models) {
//     Document.belongsTo(models.Utilisateur, { as: 'utilisateur', foreignKey: 'id_utilisateur' }); // Ajout de l'alias 'utilisateur'
//     Document.hasMany(models.DocumentPartage, { as: 'partages', foreignKey: 'id_document' }); // Ajout de l'alias 'partages'
//   };

//   return Document;
// };



module.exports = (sequelize, DataTypes) => {
  const Document = sequelize.define('Document', {
    id_document: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    titre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fichier_url: { // Stocker l'URL du fichier
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_utilisateur: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Utilisateurs',
        key: 'id_utilisateur',
      },
    },
  }, {
    tableName: 'documents',
    timestamps: true,
  });

  Document.associate = function(models) {
    Document.belongsTo(models.Utilisateur, { as: 'utilisateur', foreignKey: 'id_utilisateur' });
    Document.hasMany(models.DocumentPartage, { as: 'partages', foreignKey: 'id_document' });
  };

  return Document;
};
