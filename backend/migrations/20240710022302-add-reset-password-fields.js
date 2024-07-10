'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Utilisateurs', 'resetPasswordToken', {
      type: Sequelize.STRING,
    });

    await queryInterface.addColumn('Utilisateurs', 'resetPasswordExpires', {
      type: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Utilisateurs', 'resetPasswordToken');
    await queryInterface.removeColumn('Utilisateurs', 'resetPasswordExpires');
  },
};
