'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Administrateurs', {
      id_administrateur: {
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
      role_administratif: {
        type: Sequelize.STRING
      },
      departement: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Administrateurs');
  }
};
