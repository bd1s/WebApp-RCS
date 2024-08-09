'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ReunionDoctorants', {
      id_reunion_doctorant: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      id_reunion: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Reunions',
          key: 'id_reunion',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_doctorant: {
        type: Sequelize.INTEGER,
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
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ReunionDoctorants');
  },
};
