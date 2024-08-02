'use strict';

module.exports = (sequelize, DataTypes) => {
  const BrevetsInvention = sequelize.define('BrevetsInvention', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    id_dossier_soutenance: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'DossierSoutenances',
        key: 'id_dossier_soutenance',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    titre_brevet: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    inventeurs: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    references: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    annee_pays_depot: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});

  BrevetsInvention.associate = function(models) {
    BrevetsInvention.belongsTo(models.DossierSoutenance, { foreignKey: 'id_dossier_soutenance' });
  };

  return BrevetsInvention;
};
