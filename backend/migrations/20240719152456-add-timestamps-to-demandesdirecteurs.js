'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
await queryInterface.addColumn('Demandechangementdirecteurtheses', 'createdAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    });
    await queryInterface.addColumn('Demandechangementdirecteurtheses', 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    });
  },

  down: async (queryInterface, Sequelize) => {
   
    await queryInterface.removeColumn('DemandeChangementDirecteurTheses', 'createdAt');
    await queryInterface.removeColumn('Demandechangementdirecteurtheses', 'updatedAt');
  }
};
