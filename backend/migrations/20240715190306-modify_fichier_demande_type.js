'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('DemandeInscriptions', 'fichier_demande', {
      type: Sequelize.BLOB('long'),
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('DemandeInscriptions', 'fichier_demande', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },
};
