'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Enseignants', {
      id_enseignant: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_utilisateur: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Utilisateurs', // Correction du nom de modèle à Utilisateurs (pluriel)
          key: 'id_utilisateur',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      departement_enseignement: { // Nom mis à jour ici
        type: Sequelize.STRING,
        allowNull: false
      },
      specialisation: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Enseignants');
  }
};
