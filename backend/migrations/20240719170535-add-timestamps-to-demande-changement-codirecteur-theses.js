'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DemandeChangementCodirecteurTheses', {
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
      co_directeur_actuel: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nouveau_co_directeur_propose: {
        type: Sequelize.STRING,
        allowNull: false
      },
      motifs_changement: {
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
    await queryInterface.dropTable('DemandeChangementCodirecteurTheses');
  }
};
