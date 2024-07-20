module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DemandeRetraitProvisoires', {
      id_demande: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Demandes',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      motif_retrait: {
        type: Sequelize.STRING,
        allowNull: false
      },
      date_debut_prevue: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      date_retour_prevue: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      fichier_demande_retrait: {
        type: Sequelize.BLOB('long'), // Utilisation de BLOB pour stocker des données binaires
        allowNull: true // Peut être nullable si le fichier n'est pas toujours requis
      },
      createdAt: {
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
    await queryInterface.dropTable('DemandeRetraitProvisoires');
  }
};
