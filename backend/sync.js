const sequelize = require('./config/database');
const Utilisateur = require('./models/utilisateur');

const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true });  // Utilisez alter: true pour ajuster les tables existantes
    console.log('La base de données a été synchronisée avec succès.');
  } catch (error) {
    console.error('Erreur lors de la synchronisation de la base de données :', error);
  } finally {
    await sequelize.close();
  }
};

syncDatabase();
