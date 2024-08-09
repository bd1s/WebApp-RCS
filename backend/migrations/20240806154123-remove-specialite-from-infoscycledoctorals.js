'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('InfosCycleDoctorals', 'specialite');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('InfosCycleDoctorals', 'specialite', {
      type: Sequelize.STRING,
      allowNull: false, // ou true selon vos besoins
    });
  }
};
