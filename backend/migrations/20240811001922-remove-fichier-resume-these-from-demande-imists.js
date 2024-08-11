'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('DemandeIMISTs', 'fichier_resume_these');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('DemandeIMISTs', 'fichier_resume_these', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  }
};
