'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('InfosCycleDoctoral', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_doctorant: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Doctorants',
          key: 'id_doctorant',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      formation_doctorale: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      annee_soutenance_prevue: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      specialite: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      directeur_these: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      structure_recherche_directeur: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      co_directeur_these: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      structure_recherche_co_directeur: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      universite_cotutelle: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      sujet_recherche: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('InfosCycleDoctoral');
  }
};
