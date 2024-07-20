'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DemandeIMISTs', {
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
      titre_these: {
        type: Sequelize.STRING,
        allowNull: false
      },
      directeur_these: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fichier_resume_these: {
        type: Sequelize.BLOB('long'),
        allowNull: true
      },
      date_debut_these: {
        type: Sequelize.DATE,
        allowNull: false
      },
      date_prevue_soutenance: {
        type: Sequelize.DATE,
        allowNull: false
      },
      fichiers_cv: {
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
    await queryInterface.dropTable('DemandeIMISTs');
  }
};
