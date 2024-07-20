
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DemandeDerogations', {
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
      annee_academique: {
        type: Sequelize.STRING,
        allowNull: false
      },
      motif: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      decision_prise: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      fichier_demande_reinscription: {
        type: Sequelize.BLOB('long'),
        allowNull: true
      },createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('DemandeDerogations');
  }
};
