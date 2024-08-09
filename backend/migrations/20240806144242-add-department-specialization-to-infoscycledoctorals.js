'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('InfosCycleDoctorals', 'departement_doctorant', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn('InfosCycleDoctorals', 'specialisation_doctorant', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('InfosCycleDoctorals', 'departement_doctorant');
    await queryInterface.removeColumn('InfosCycleDoctorals', 'specialisation_doctorant');
  }
};

