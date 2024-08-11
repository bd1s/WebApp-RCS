'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      // Table DemandeInscription
      queryInterface.changeColumn('demandeinscriptions', 'fichier_demande', {
        type: Sequelize.STRING,
        allowNull: true,
      }),

      // Table DemandeRetraitProvisoire
      queryInterface.changeColumn('demanderetraitprovisoires', 'fichier_demande_retrait', {
        type: Sequelize.STRING,
        allowNull: true,
      }),

      // Table DemandeRetraitDefinitif
      queryInterface.changeColumn('demanderetraitdefinitifs', 'fichier_retrait_definitif', {
        type: Sequelize.STRING,
        allowNull: true,
      }),

      // Table DemandeCarteEtudiant
      queryInterface.changeColumn('demandecarteetudiants', 'fichier_carte_etudiant', {
        type: Sequelize.STRING,
        allowNull: true,
      }),

      

      // Table DemandeChangementSujetThese
      queryInterface.changeColumn('demandechangementsujettheses', 'fichier_demande_changement_sujet', {
        type: Sequelize.STRING,
        allowNull: true,
      }),

      // Table DemandeChangementDirecteurThese
      queryInterface.changeColumn('demandechangementdirecteurtheses', 'fichier_demande_changement_directeur', {
        type: Sequelize.STRING,
        allowNull: true,
      }),

      // Table DemandeReinscriptionDerogation
      queryInterface.changeColumn('demandederogations', 'fichier_demande_reinscription', {
        type: Sequelize.STRING,
        allowNull: true,
      }),

      // Table DemandeConventionStage
      queryInterface.changeColumn('conventionstages', 'fichier_demande_stage', {
        type: Sequelize.STRING,
        allowNull: true,
      }),

      // Table DemandeCotutelle
      queryInterface.changeColumn('cotutelles', 'fichier_demande_cotutelle', {
        type: Sequelize.STRING,
        allowNull: true,
      }),

      // Table DemandeChangementCodirecteurThese
      queryInterface.changeColumn('demandechangementcodirecteurtheses', 'fichier_demande_changement_codirecteur', {
        type: Sequelize.STRING,
        allowNull: true,
      }),

      // Table DemandeIMISTs
      queryInterface.changeColumn('demandeimists', 'fichiers_cv', {
        type: Sequelize.STRING,
        allowNull: true,
      }),

      // Table DemandeTirages
      queryInterface.changeColumn('demandetirages', 'fichier_demande', {
        type: Sequelize.STRING,
        allowNull: true,
      }),
    ]);
  },

  async down(queryInterface, Sequelize) {
    return Promise.all([
      // Reverting changes: restore BLOB type
      queryInterface.changeColumn('DemandeInscription', 'fichier_demande', {
        type: Sequelize.BLOB('long'),
        allowNull: true,
      }),

      queryInterface.changeColumn('demanderetraitprovisoires', 'fichier_demande_retrait', {
        type: Sequelize.BLOB('long'),
        allowNull: true,
      }),

      queryInterface.changeColumn('demanderetraitdefinitifs', 'fichier_retrait_definitif', {
        type: Sequelize.BLOB('long'),
        allowNull: true,
      }),

      queryInterface.changeColumn('demandecarteetudiants', 'fichier_carte_etudiant', {
        type: Sequelize.BLOB('long'),
        allowNull: true,
      }),


      queryInterface.changeColumn('demandechangementsujettheses', 'fichier_demande_changement_sujet', {
        type: Sequelize.BLOB('long'),
        allowNull: true,
      }),

      queryInterface.changeColumn('demandechangementdirecteurtheses', 'fichier_demande_changement_directeur', {
        type: Sequelize.BLOB('long'),
        allowNull: true,
      }),

      queryInterface.changeColumn('demandederogations', 'fichier_demande_reinscription', {
        type: Sequelize.BLOB('long'),
        allowNull: true,
      }),

      queryInterface.changeColumn('conventionstages', 'fichier_demande_stage', {
        type: Sequelize.BLOB('long'),
        allowNull: true,
      }),

      queryInterface.changeColumn('cotutelles', 'fichier_demande_cotutelle', {
        type: Sequelize.BLOB('long'),
        allowNull: true,
      }),

      queryInterface.changeColumn('demandechangementcodirecteurtheses', 'fichier_demande_changement_codirecteur', {
        type: Sequelize.BLOB('long'),
        allowNull: true,
      }),

      queryInterface.changeColumn('demandeimists', 'fichiers_cv', {
        type: Sequelize.BLOB('long'),
        allowNull: true,
      }),

      queryInterface.changeColumn('demandetirages', 'fichier_demande', {
        type: Sequelize.BLOB('long'),
        allowNull: true,
      }),
    ]);
  }
};

