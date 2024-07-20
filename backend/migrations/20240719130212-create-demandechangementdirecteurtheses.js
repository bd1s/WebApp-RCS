'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DemandeChangementDirecteurTheses', {
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
      directeur_actuel: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nouveau_directeur_propose: {
        type: Sequelize.STRING,
        allowNull: false
      },
      raisons_changement: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      fichier_demande_changement_directeur: {
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
    await queryInterface.dropTable('DemandeChangementDirecteurTheses');
  }
};

