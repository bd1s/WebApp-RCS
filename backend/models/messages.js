"use strict";

module.exports = (sequelize, DataTypes) => {
  const Messages = sequelize.define(
    "Messages",
    {
      id_message: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      contenu: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date_envoi: {
        type: DataTypes.DATE,
        allowNull: false,
        default: DataTypes.NOW,
      },
      id_expediteur: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Utilisateurs",
          key: "id_utilisateur",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      id_destinataire: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Utilisateurs",
          key: "id_utilisateur",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    },
    {}
  );

  Messages.associate = function (models) {
    Messages.belongsTo(models.Utilisateur, { foreignKey: "id_expediteur" });
    Messages.belongsTo(models.Utilisateur, { foreignKey: "id_destinataire" });
  };

  return Messages;
};
