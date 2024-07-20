'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('DemandeRetraitProvisoire', 'fichier_demande', 'fichier_demande_retrait');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('DemandeRetraitProvisoire', 'fichier_demande_retrait', 'fichier_demande');
  }
};
