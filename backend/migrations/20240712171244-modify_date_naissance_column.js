'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('InfosPersonnelles', 'date_naissance', {
      type: Sequelize.DATEONLY,
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('InfosPersonnelles', 'date_naissance', {
      type: Sequelize.DATE,
      allowNull: false,
    });
  },
};
