'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ConventionStages', {
      id_demande: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Demandes',
          key: 'id_demande'
        },
        onDelete: 'CASCADE',
        allowNull: false
      },
      entreprise_accueil: {
        type: Sequelize.STRING,
        allowNull: false
      },
      periode_stage: {
        type: Sequelize.STRING,
        allowNull: false
      },
      objectifs_stage: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      fichier_demande: {
        type: Sequelize.BLOB('long'),
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ConventionStages');
  }
};
