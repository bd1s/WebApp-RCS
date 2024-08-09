'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Doctorants', 'departement_doctorant');
    await queryInterface.removeColumn('Doctorants', 'specialisation_doctorant');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Doctorants', 'departement_doctorant', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn('Doctorants', 'specialisation_doctorant', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  }
};
