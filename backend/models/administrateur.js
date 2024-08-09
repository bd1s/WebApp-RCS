'use strict';
module.exports = (sequelize, DataTypes) => {
  const Administrateur = sequelize.define('Administrateur', {
    id_administrateur: {
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
    role_administratif: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    departement: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  }, {});
  Administrateur.associate = function(models) {
    // associations can be defined here
    Administrateur.belongsTo(models.Utilisateur, { foreignKey: 'id_utilisateur' });
  };
  return Administrateur;
};
