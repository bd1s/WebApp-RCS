// 'use strict';

// module.exports = (sequelize, DataTypes) => {
//   const DocumentPartage = sequelize.define('DocumentPartage', {
//     id_partage: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//       allowNull: false,
//     },
//     id_document: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: 'Documents',
//         key: 'id_document',
//       },
//     },
//     id_utilisateur_recepteur: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: 'Utilisateurs',
//         key: 'id_utilisateur',
//       },
//     },
//   }, {
//     tableName: 'documents_partages',
//     timestamps: true,
//   });

//   DocumentPartage.associate = function(models) {
//     DocumentPartage.belongsTo(models.Document, { foreignKey: 'id_document' });
//     DocumentPartage.belongsTo(models.Utilisateur, { foreignKey: 'id_utilisateur_recepteur' });
//   };

//   return DocumentPartage;
// };



'use strict';

module.exports = (sequelize, DataTypes) => {
  const DocumentPartage = sequelize.define('DocumentPartage', {
    id_partage: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    id_document: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Documents',
        key: 'id_document',
      },
    },
    id_utilisateur_recepteur: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Utilisateurs',
        key: 'id_utilisateur',
      },
    },
  }, {
    tableName: 'documents_partages',
    timestamps: true,
  });

  DocumentPartage.associate = function(models) {
    DocumentPartage.belongsTo(models.Document, { as: 'document', foreignKey: 'id_document' }); // Ajout de l'alias 'document'
    DocumentPartage.belongsTo(models.Utilisateur, { as: 'recepteur', foreignKey: 'id_utilisateur_recepteur' }); // Ajout de l'alias 'recepteur'
  };

  return DocumentPartage;
};
