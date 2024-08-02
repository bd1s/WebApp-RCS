'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('BrevetsInvention', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      id_dossier_soutenance: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'DossierSoutenances',
          key: 'id_dossier_soutenance',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      titre_brevet: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      inventeurs: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      references: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      annee_pays_depot: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('BrevetsInvention');
  },
};
