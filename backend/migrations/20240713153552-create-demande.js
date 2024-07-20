'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Demandes', {
      id_demande: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type_demande: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      statut: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      date_soumission: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      id_doctorant: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Doctorants',
          key: 'id_doctorant',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Demandes');
  }
};
