const { Demande, Doctorant, Utilisateur, InfosCycleDoctorals, DemandeInscription, DemandeRetraitProvisoires, DemandeRetraitDefinitifs, DemandeCarteEtudiants, DemandeEmailAcademiques, DemandeChangementDirecteurTheses, DemandeChangementSujetTheses, DemandeDerogations, ConventionStages, Cotutelles, DemandeChangementCodirecteurTheses, DemandeIMISTs, DemandeTirages } = require('../models');

const adminController = {
  getAllDoctorantRequests: async (req, res) => {
    try {
      const doctorantRequests = await Demande.findAll({
        attributes: ['id_demande', 'type_demande', 'statut', 'date_soumission'],
        include: [
          {
            model: Doctorant,
            attributes: ['id_doctorant', 'id_utilisateur'],
            include: [
              {
                model: Utilisateur,
                as: 'utilisateur', // Utiliser l'alias correct défini dans le modèle Doctorant
                attributes: ['prenom', 'nom'],
              },
              {
                model: InfosCycleDoctorals,
                attributes: ['departement_doctorant'],
              },
            ],
          },
        ],
        order: [['date_soumission', 'DESC']],
      });

      // Format the response
      const formattedRequests = doctorantRequests.map((request) => {
        const doctorant = request.Doctorant;
        const utilisateur = doctorant.utilisateur; // Utiliser l'alias correct ici
        const infosCycleDoctorals = doctorant.InfosCycleDoctorals[0]; // Assuming there's always at least one entry

        return {
          id_demande: request.id_demande,
          type_demande: request.type_demande,
          statut: request.statut,
          date_soumission: request.date_soumission,
          nom: utilisateur.nom,
          prenom: utilisateur.prenom,
          departement: infosCycleDoctorals.departement_doctorant,
        };
      });

      res.status(200).json(formattedRequests);
    } catch (error) {
      console.error('Error fetching doctorant requests:', error);
      res.status(500).json({ error: 'An error occurred while fetching doctorant requests.' });
    }
  },



  // controllers/demandeController.js

getDemandeDetails:async (req, res) => {
  const { id_demande } = req.params;
  console.log('Received id_demande:', id_demande); // Debugging

  try {
    const demande = await Demande.findByPk(id_demande);
    if (!demande) {
      return res.status(404).json({ error: 'Demande non trouvée' });
    }

    let details;
    let fileUrl = null;

    switch (demande.type_demande) {
      case 'inscription':
        details = await DemandeInscription.findOne({ where: { id_demande } });
        fileUrl = details.fichier_demande;
        break;

      case 'retrait-provisoire':
        details = await DemandeRetraitProvisoires.findOne({ where: { id_demande } });
        fileUrl = details.fichier_demande_retrait;
        break;

      case 'retrait-definitif':
        details = await DemandeRetraitDefinitifs.findOne({ where: { id_demande } });
        fileUrl = details.fichier_retrait_definitif;
        break;

      case 'carte-etudiant':
        details = await DemandeCarteEtudiants.findOne({ where: { id_demande } });
        fileUrl = details.fichier_carte_etudiant;
        break;

      case 'email-academique':
        details = await DemandeEmailAcademiques.findOne({ where: { id_demande } });
        // Pas de fichier pour ce type de demande
        break;

      case 'changement-sujet-these':
        details = await DemandeChangementSujetTheses.findOne({ where: { id_demande } });
        fileUrl = details.fichier_demande_changement_sujet;
        break;

      case 'changement-directeur-these':
        details = await DemandeChangementDirecteurTheses.findOne({ where: { id_demande } });
        fileUrl = details.fichier_demande_changement_directeur;
        break;

      case 'reinscription-derogation':
        details = await DemandeDerogations.findOne({ where: { id_demande } });
        fileUrl = details.fichier_demande_reinscription;
        break;

      case 'convention-stage':
        details = await ConventionStages.findOne({ where: { id_demande } });
        fileUrl = details.fichier_demande_stage;
        break;

      case 'cotutelle':
        details = await Cotutelles.findOne({ where: { id_demande } });
        fileUrl = details.fichier_demande_cotutelle;
        break;

      case 'changement-codirecteur-these':
        details = await DemandeChangementCodirecteurTheses.findOne({ where: { id_demande } });
        fileUrl = details.fichier_demande_changement_codirecteur;
        break;

      case 'imists':
        details = await DemandeIMISTs.findOne({ where: { id_demande } });
        fileUrl = details.fichier_demande_imists;
        break;

      case 'tirage':
        details = await DemandeTirages.findOne({ where: { id_demande } });
        fileUrl = details.fichier_demande_tirage;
        break;

      default:
        return res.status(400).json({ error: 'Type de demande non pris en charge.' });
    }

    if (!details) {
      return res.status(404).json({ error: 'Détails de la demande non trouvés.' });
    }

    return res.status(200).json({
      message: 'Détails de la demande récupérés avec succès.',
      demande,
      details,
      fileUrl,
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des détails de la demande:', error);
    return res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des détails de la demande.' });
  }
},



downloadDemandeFile: async (req, res) => {
  const { id_demande } = req.params;

  try {
    const demande = await Demande.findByPk(id_demande);
    if (!demande) {
      return res.status(404).json({ error: 'Demande not found' });
    }

    let fichierUrl = null;

    switch (demande.type_demande) {
      case 'inscription':
        const insc = await DemandeInscription.findOne({ where: { id_demande } });
        fichierUrl = insc?.fichier_demande;
        break;
      case 'retrait-provisoire':
        const retrait = await DemandeRetraitProvisoires.findOne({ where: { id_demande } });
        fichierUrl = retrait?.fichier_demande_retrait;
        break;
      case 'retrait-definitif':
        const retraitDef = await DemandeRetraitDefinitifs.findOne({ where: { id_demande } });
        fichierUrl = retraitDef?.fichier_retrait_definitif;
        break;
      case 'carte-etudiant':
        const carte = await DemandeCarteEtudiants.findOne({ where: { id_demande } });
        fichierUrl = carte?.fichier_carte_etudiant;
        break;
      case 'reinscription-derogation':
        const derogation = await DemandeDerogations.findOne({ where: { id_demande } });
        fichierUrl = derogation?.fichier_demande_reinscription;
        break;
      case 'changement-sujet-these':
        const changementSujet = await DemandeChangementSujetTheses.findOne({ where: { id_demande } });
        fichierUrl = changementSujet?.fichier_demande_changement_sujet;
        break;
      case 'changement-directeur-these':
        const changementDirecteur = await DemandeChangementDirecteurTheses.findOne({ where: { id_demande } });
        fichierUrl = changementDirecteur?.fichier_demande_changement_directeur;
        break;
      case 'convention-stage':
        const convention = await ConventionStages.findOne({ where: { id_demande } });
        fichierUrl = convention?.fichier_demande_stage;
        break;
      case 'cotutelle':
        const cotutelle = await Cotutelles.findOne({ where: { id_demande } });
        fichierUrl = cotutelle?.fichier_demande_cotutelle;
        break;
      case 'changement-codirecteur-these':
        const changementCodirecteur = await DemandeChangementCodirecteurTheses.findOne({ where: { id_demande } });
        fichierUrl = changementCodirecteur?.fichier_demande_changement_codirecteur;
        break;
      case 'imists':
        const imists = await DemandeIMISTs.findOne({ where: { id_demande } });
        fichierUrl = imists?.fichiers_cv;
        break;
      case 'tirage':
        const tirage = await DemandeTirages.findOne({ where: { id_demande } });
        fichierUrl = tirage?.fichier_demande_tirage;
        break;
      default:
        return res.status(400).json({ error: 'Unknown type of demande' });
    }

    if (!fichierUrl) {
      return res.status(404).json({ error: 'File not found' });
    }

    console.log(`Sending file URL: ${fichierUrl}`);

    // Envoyer l'URL du fichier dans la réponse JSON
    res.json({ fileUrl: fichierUrl });

  } catch (error) {
    console.error('Error fetching demande file:', error);
    res.status(500).json({ error: 'An error occurred while fetching the demande file.' });
  }
},




//
  updateRequestStatus: async (req, res) => {
    const { id } = req.params;
    const { statut } = req.body;

    try {
      const demande = await Demande.findByPk(id);
      if (!demande) {
        return res.status(404).json({ error: 'Demande not found' });
      }

      demande.statut = statut;
      await demande.save();

      res.status(200).json({ message: 'Request status updated successfully.' });
    } catch (error) {
      console.error('Error updating request status:', error);
      res.status(500).json({ error: 'An error occurred while updating the request status.' });
    }
  },
};

module.exports = adminController;
