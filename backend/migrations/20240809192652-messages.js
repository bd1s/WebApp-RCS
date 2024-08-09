"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Messages", {
      id_message: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      contenu: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      date_envoi: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      id_expediteur: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Utilisateurs",
          key: "id_utilisateur",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      id_destinataire: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Utilisateurs",
          key: "id_utilisateur",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Messages");
  },
};
