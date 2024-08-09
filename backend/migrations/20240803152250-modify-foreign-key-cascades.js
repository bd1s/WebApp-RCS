'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Remove existing foreign key constraint for Enseignants
    await queryInterface.removeConstraint('Enseignants', 'enseignants_ibfk_1');
    // Add new foreign key constraint with cascade options
    await queryInterface.addConstraint('Enseignants', {
      fields: ['id_utilisateur'],
      type: 'foreign key',
      name: 'fk_enseignants_utilisateurs',
      references: {
        table: 'Utilisateurs',
        field: 'id_utilisateur',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });

    // Repeat the same for Administrateurs and Doctorants tables
    await queryInterface.removeConstraint('Administrateurs', 'administrateurs_ibfk_1');
    await queryInterface.addConstraint('Administrateurs', {
      fields: ['id_utilisateur'],
      type: 'foreign key',
      name: 'fk_administrateurs_utilisateurs',
      references: {
        table: 'Utilisateurs',
        field: 'id_utilisateur',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });

    
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the new foreign key constraints with cascade options
    await queryInterface.removeConstraint('Enseignants', 'fk_enseignants_utilisateurs');
    await queryInterface.addConstraint('Enseignants', {
      fields: ['id_utilisateur'],
      type: 'foreign key',
      name: 'enseignants_ibfk_1',
      references: {
        table: 'Utilisateurs',
        field: 'id_utilisateur',
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });

    await queryInterface.removeConstraint('Administrateurs', 'fk_administrateurs_utilisateurs');
    await queryInterface.addConstraint('Administrateurs', {
      fields: ['id_utilisateur'],
      type: 'foreign key',
      name: 'administrateurs_ibfk_1',
      references: {
        table: 'Utilisateurs',
        field: 'id_utilisateur',
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });

  }
};
