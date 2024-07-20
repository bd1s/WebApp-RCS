'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cotutelles', {
      id_demande: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Demandes',
          key: 'id_demande'
        }
      },
      universite_partenaire: {
        type: Sequelize.STRING,
        allowNull: false
      },
      pays: {
        type: Sequelize.STRING,
        allowNull: false
      },
      duree_cotutelle: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('Cotutelles');
  }
};
