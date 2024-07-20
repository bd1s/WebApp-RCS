'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Renommer les colonnes fichier_demande pour les différencier
    await queryInterface.renameColumn('ConventionStages', 'fichier_demande', 'fichier_demande_stage');
    await queryInterface.renameColumn('Cotutelles', 'fichier_demande', 'fichier_demande_cotutelle');
    await queryInterface.renameColumn('DemandeChangementCodirecteurTheses', 'fichier_demande', 'fichier_demande_changement_codirecteur');
    await queryInterface.renameColumn('DossierTOUBKALs', 'fichier_demande', 'fichier_demande_toubkal');
  },

  down: async (queryInterface, Sequelize) => {
    // Revenir aux noms de colonnes d'origine
    await queryInterface.renameColumn('ConventionStages', 'fichier_demande_stage', 'fichier_demande');
    await queryInterface.renameColumn('Cotutelles', 'fichier_demande_cotutelle', 'fichier_demande');
    await queryInterface.renameColumn('DemandeChangementCodirecteurTheses', 'fichier_demande_changement_codirecteur', 'fichier_demande');
    await queryInterface.renameColumn('DossierTOUBKALs', 'fichier_demande_toubkal', 'fichier_demande');
  }
};
