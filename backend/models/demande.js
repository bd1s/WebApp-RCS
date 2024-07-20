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
    Demande.belongsTo(models.Doctorant, { foreignKey: 'id_doctorant' });
  };

  return Demande;
};
