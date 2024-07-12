'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Création de la table infosbaccalaureat
    await queryInterface.createTable('InfosBaccalaureats', {
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
      annee_bac: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      type_bac: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      mention: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cne_massar: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      serie_bac: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      academie: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      province: {
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
    // Suppression de la table infosbaccalaureat
    await queryInterface.dropTable('InfosBaccalaureats');
  }
};