'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ChapitresOuvrage', {
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
      titre_ouvrage: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      titre_complet_chapitre: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      auteurs: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      maison_edition_isbn_annee_publication: {
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
    return queryInterface.dropTable('ChapitresOuvrage');
  },
};
