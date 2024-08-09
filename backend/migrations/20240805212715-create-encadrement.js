'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Encadrement', {
      id_encadrement: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      id_enseignant: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Enseignants', // Nom de la table référencée
          key: 'id_enseignant',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_doctorant: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Doctorants', // Nom de la table référencée
          key: 'id_doctorant',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Encadrement');
  },
};
