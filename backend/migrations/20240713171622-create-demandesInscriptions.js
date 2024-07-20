'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DemandeInscriptions', {
      id_demande: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: 'Demandes',
          key: 'id_demande',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      diplomes_precedents: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      specialisation_souhaitee: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      notes_transcription: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      fichier_demande: {
        type: Sequelize.STRING,
        allowNull: true,
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

    await queryInterface.addConstraint('DemandeInscriptions', {
      type: 'foreign key',
      fields: ['id_demande'],
      references: {
        table: 'Demandes',
        field: 'id_demande',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('DemandeInscriptions');
  }
};
