// Migration pour doctorant
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('doctorants', { // Utilisation du nom pluriel 'doctorants'
      id_doctorant: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('doctorants');
  }
};
