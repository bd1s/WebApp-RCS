'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('demanderetraitdefinitifs', 'motif_retrait', 'motif_retrait_definitif');
  },

  down: async (queryInterface, Sequelize) => {
    // Revert the column name back to `motif_retrait` in case of rollback
    await queryInterface.renameColumn('demanderetraitdefinitifs', 'motif_retrait_definitif', 'motif_retrait');
  }
};
