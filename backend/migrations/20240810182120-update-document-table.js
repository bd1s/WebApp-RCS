'use strict';

/** @type {import('sequelize-cli').Migration} */


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('documents', 'fichier_url', {
      type: Sequelize.STRING,
      allowNull: false,
    });

    await queryInterface.removeColumn('documents', 'fichier'); // Assuming 'fichier' is the old column name
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('documents', 'fichier', {
      type: Sequelize.BLOB('long'), // Assuming the old type was BLOB
      allowNull: false,
    });

    await queryInterface.removeColumn('documents', 'fichier_url');
  }
};
