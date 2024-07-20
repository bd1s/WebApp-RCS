'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('DemandeRetraitProvisoire', 'date_debut_prevue', {
      type: Sequelize.DATEONLY,
      allowNull: false,
    });
    await queryInterface.changeColumn('DemandeRetraitProvisoire', 'date_retour_prevue', {
      type: Sequelize.DATEONLY,
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('DemandeRetraitProvisoire', 'date_debut_prevue', {
      type: Sequelize.DATE,
      allowNull: false,
    });
    await queryInterface.changeColumn('DemandeRetraitProvisoire', 'date_retour_prevue', {
      type: Sequelize.DATE,
      allowNull: false,
    });
  },
};
