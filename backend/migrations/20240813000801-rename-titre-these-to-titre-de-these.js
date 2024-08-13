'use strict';

/** @type {import('sequelize-cli').Migration} */


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('DemandeIMISTs', 'titre_these', 'titre_de_these');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('DemandeIMISTs', 'titre_de_these', 'titre_these');
  }
};

