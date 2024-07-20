
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DemandeChangementSujetTheses', {
      id_demande: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Demandes',
          key: 'id_demande'
        },
        onDelete: 'CASCADE',
        allowNull: false
      },
      sujet_actuel: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nouveau_sujet_propose: {
        type: Sequelize.STRING,
        allowNull: false
      },
      justification: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      fichier_demande_changement_sujet: {
        type: Sequelize.BLOB('long'),
        allowNull: true
      },createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('DemandeChangementSujetTheses');
  }
};
