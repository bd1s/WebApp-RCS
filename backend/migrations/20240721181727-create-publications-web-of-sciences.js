'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PublicationsWebOfSciences', {
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
      titre_complet_publication: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      auteurs: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nom_complet_revue: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      vol_issue_pages_annee: {
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
    return queryInterface.dropTable('PublicationsWebOfSciences');
  },
};
