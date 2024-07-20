'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DemandeRetraitDefinitifs', {
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
      motif_retrait: {
        type: Sequelize.STRING,
        allowNull: false
      },
      date_retrait: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      observations: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      fichier_retrait_definitif: {
        type: Sequelize.BLOB('long'),
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('DemandeRetraitDefinitifs');
  }
};
