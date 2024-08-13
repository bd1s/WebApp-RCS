// controllers/demandeController.js
const { Demande, DemandeInscription, DemandeRetraitProvisoires, DemandeRetraitDefinitifs, DemandeCarteEtudiants, DemandeEmailAcademiques, Doctorant, DemandeChangementDirecteurTheses, DemandeChangementSujetTheses, DemandeDerogations, ConventionStages, Cotutelles, DemandeChangementCodirecteurTheses, DemandeIMISTs, DemandeTirages } = require('../models');

// Fonction pour créer une demande
exports.createDemande = async (req, res) => {
  try {
    // Upload le fichier
    const fileUrl = req.fileUrl;
    console.log('fileUrl:', fileUrl);

    const id_utilisateur = req.user.userId;
    const doctorant = await Doctorant.findOne({ where: { id_utilisateur } });

    if (!doctorant) {
      return res.status(404).json({ message: 'Doctorant non trouvé.' });
    }

    const id_doctorant = doctorant.id_doctorant;
    const { type_demande, date_soumission, demandeData } = req.body;

    if (!type_demande) {
      return res.status(400).json({ message: 'Le type de demande est requis.' });
    }

    // Valider et formater la date de soumission
    const formattedDateSoumission = new Date(date_soumission || Date.now());

    const newDemande = await Demande.create({
      type_demande,
      statut: 'en cours de traitement',
      date_soumission: formattedDateSoumission,
      id_doctorant,
    });

    let newDemandeDetails = null;

    switch (type_demande) {
      case 'inscription':
        const { diplomes_precedents, specialisation_souhaitee, notes_transcription } = demandeData;

        const newDemandeInscription = await DemandeInscription.create({
          id_demande: newDemande.id_demande,
          diplomes_precedents,
          specialisation_souhaitee,
          notes_transcription,
          fichier_demande: fileUrl,
        });

        newDemandeDetails = newDemandeInscription;
        console.log('DemandeInscription créée:', newDemandeInscription);
        break;

      case 'retrait-provisoire':
        const { motif_retrait, date_debut_prevue, date_retour_prevue } = demandeData;

        const newDemandeRetraitProvisoires = await DemandeRetraitProvisoires.create({
          id_demande: newDemande.id_demande,
          motif_retrait,
          date_debut_prevue: new Date(date_debut_prevue),
          date_retour_prevue: new Date(date_retour_prevue),
          fichier_demande_retrait: fileUrl,
        });

        newDemandeDetails = newDemandeRetraitProvisoires;
        console.log('DemandeRetraitProvisoires créée:', newDemandeRetraitProvisoires);
        break;

      case 'retrait-definitif':
        const { motif_retrait_definitif, date_retrait, observations } = demandeData;

        const newDemandeRetraitDefinitifs = await DemandeRetraitDefinitifs.create({
          id_demande: newDemande.id_demande,
          motif_retrait_definitif,
          date_retrait: new Date(date_retrait),
          observations,
          fichier_retrait_definitif: fileUrl,
        });

        newDemandeDetails = newDemandeRetraitDefinitifs;
        console.log('DemandeRetraitDefinitifs créée:', newDemandeRetraitDefinitifs);
        break;

      case 'carte-etudiant':
        const { numero_etudiant, date_delivrance } = demandeData;

        const newDemandeCarteEtudiants = await DemandeCarteEtudiants.create({
          id_demande: newDemande.id_demande,
          numero_etudiant,
          date_delivrance: new Date(date_delivrance),
          fichier_carte_etudiant: fileUrl,
        });

        newDemandeDetails = newDemandeCarteEtudiants;
        console.log('DemandeCarteEtudiants créée:', newDemandeCarteEtudiants);
        break;

      case 'email-academique':
        const { identifiant_souhaite	,motif_demande} = demandeData;

        const newDemandeEmailAcademiques = await DemandeEmailAcademiques.create({
          id_demande: newDemande.id_demande,
          identifiant_souhaite,
          motif_demande,
        });

        newDemandeDetails = newDemandeEmailAcademiques;
        console.log('DemandeEmailAcademiques créée:', newDemandeEmailAcademiques);
        break;

      case 'changement-sujet-these':
        const { sujet_actuel, nouveau_sujet_propose, justification } = demandeData;

        const newDemandeChangementSujetTheses = await DemandeChangementSujetTheses.create({
          id_demande: newDemande.id_demande,
          sujet_actuel,
          nouveau_sujet_propose,
          justification,
          fichier_demande_changement_sujet: fileUrl,
        });

        newDemandeDetails = newDemandeChangementSujetTheses;
        console.log('DemandeChangementSujetTheses créée:', newDemandeChangementSujetTheses);
        break;

      case 'changement-directeur-these':
        const { directeur_actuel	,nouveau_directeur_propose,	raisons_changement } = demandeData;

        const newDemandeChangementDirecteurTheses = await DemandeChangementDirecteurTheses.create({
          id_demande: newDemande.id_demande,
          directeur_actuel,
          nouveau_directeur_propose,
          raisons_changement,
          fichier_demande_changement_directeur: fileUrl,
        });

        newDemandeDetails = newDemandeChangementDirecteurTheses;
        console.log('DemandeChangementDirecteurTheses créée:', newDemandeChangementDirecteurTheses);
        break;

      case 'reinscription-derogation':
        const { annee_academique, motif, decision_prise } = demandeData;

        const newDemandeDerogations = await DemandeDerogations.create({
          id_demande: newDemande.id_demande,
          annee_academique,
          motif,
          decision_prise,
          fichier_demande_reinscription: fileUrl,
        });

        newDemandeDetails = newDemandeDerogations;
        console.log('DemandeDerogations créée:', newDemandeDerogations);
        break;

      case 'convention-stage':
        const { entreprise_accueil, periode_stage, objectifs_stage } = demandeData;

        const newDemandeConventionStages = await ConventionStages.create({
          id_demande: newDemande.id_demande,
          entreprise_accueil,
          periode_stage: new Date(periode_stage),
          objectifs_stage,
          fichier_demande_stage: fileUrl,
        });

        newDemandeDetails = newDemandeConventionStages;
        console.log('ConventionStages créée:', newDemandeConventionStages);
        break;

      case 'cotutelle':
        const { universite_partenaire, pays, duree_cotutelle } = demandeData;

        const newDemandeCotutelles = await Cotutelles.create({
          id_demande: newDemande.id_demande,
          universite_partenaire,
          pays,
          duree_cotutelle,
          fichier_demande_cotutelle: fileUrl,
        });

        newDemandeDetails = newDemandeCotutelles;
        console.log('DemandeCotutelles créée:', newDemandeCotutelles);
        break;

      case 'changement-codirecteur-these':
        const { co_directeur_actuel, nouveau_co_directeur_propose, motifs_changement } = demandeData;

        const newDemandeChangementCodirecteurTheses = await DemandeChangementCodirecteurTheses.create({
          id_demande: newDemande.id_demande,
          co_directeur_actuel,
          nouveau_co_directeur_propose,
          motifs_changement,
          fichier_demande_changement_codirecteur: fileUrl,
        });

        newDemandeDetails = newDemandeChangementCodirecteurTheses;
        console.log('DemandeChangementCodirecteurTheses créée:', newDemandeChangementCodirecteurTheses);
        break;

      case 'imists':
        const { titre_de_these , directeur_these	,date_debut_these,date_prevue_soutenance } = demandeData;
        const newDemandeIMISTs = await DemandeIMISTs.create({
          id_demande: newDemande.id_demande,
          titre_de_these,
          	directeur_these	,
            date_debut_these,
            date_prevue_soutenance	,
            fichiers_cv	: fileUrl,
        });

        newDemandeDetails = newDemandeIMISTs;
        console.log('DemandeIMISTs créée:', newDemandeIMISTs);
        break;

      case 'tirage':
        const { titre_these ,
          nombre_exemplaires ,
          date_soutenance	 } = demandeData;

        const newDemandeTirages = await DemandeTirages.create({
          id_demande: newDemande.id_demande,
          titre_these,
          nombre_exemplaires,
          date_soutenance	,
          fichier_demande: fileUrl,
        });

        newDemandeDetails = newDemandeTirages;
        console.log('DemandeTirages créée:', newDemandeTirages);
        break;

      default:
        return res.status(400).json({ message: 'Type de demande non pris en charge.' });
    }

    return res.status(201).json({
      message: 'Demande créée avec succès.',
      demande: newDemande,
      details: newDemandeDetails,
    });
  } catch (error) {
    console.error('Erreur lors de la création de la demande:', error);
    return res.status(500).json({ message: 'Une erreur est survenue lors de la création de la demande.', error });
  }
};

exports.getDemandesForDoctorant = async (req, res) => {
  try {
    const id_utilisateur = req.user.userId; // Récupérer l'ID de l'utilisateur depuis le token JWT
    const doctorant = await Doctorant.findOne({ where: { id_utilisateur } });

    if (!doctorant) {
      return res.status(404).json({ message: 'Doctorant non trouvé.' });
    }

    const id_doctorant = doctorant.id_doctorant;

    // Récupérer les demandes pour ce doctorant avec les associations nécessaires
    const demandes = await Demande.findAll({
      where: { id_doctorant },
      include: [
        { model: DemandeInscription },
        { model: DemandeRetraitProvisoires },
        { model: DemandeRetraitDefinitifs },
        { model: DemandeCarteEtudiants },
        { model: DemandeEmailAcademiques },
        { model: DemandeChangementDirecteurTheses },
        { model: DemandeChangementSujetTheses },
        { model: DemandeDerogations },
        { model: ConventionStages },
        { model: Cotutelles },
        { model: DemandeChangementCodirecteurTheses },
        { model: DemandeTirages },
      ],
    });

    res.status(200).json(demandes);
  } catch (error) {
    console.error('Erreur lors de la récupération des demandes :', error);
    res.status(500).json({ message: 'Erreur lors de la récupération des demandes.', error });
  }
};



// Méthode GET pour récupérer les informations d'une demande
exports.getDemandeById = async (req, res) => {
  try {
    const id_utilisateur = req.user.userId;

    // Trouver le doctorant correspondant à l'utilisateur
    const doctorant = await Doctorant.findOne({ where: { id_utilisateur } });
    if (!doctorant) {
      return res.status(404).json({ message: 'Doctorant non trouvé pour cet utilisateur.' });
    }

    const id_doctorant = doctorant.id_doctorant; // Utiliser l'ID du doctorant pour la recherche

    const { id_demande } = req.params;

    // Trouver la demande
    const demande = await Demande.findOne({ where: { id_demande, id_doctorant } });

    if (!demande) {
      return res.status(404).json({ message: 'Demande non trouvée ou accès non autorisé.' });
    }

    // Récupérer le type de la demande
    const { type_demande } = demande;

    // Récupérer les détails de la demande en fonction du type de demande
    let demandeDetails = null;

    switch (type_demande) {
      case 'inscription':
        demandeDetails = await DemandeInscription.findOne({ where: { id_demande } });
        break;
      case 'retrait-provisoire':
        demandeDetails = await DemandeRetraitProvisoires.findOne({ where: { id_demande } });
        break;
      case 'retrait-definitif':
        demandeDetails = await DemandeRetraitDefinitifs.findOne({ where: { id_demande } });
        break;
      case 'carte-etudiant':
        demandeDetails = await DemandeCarteEtudiants.findOne({ where: { id_demande } });
        break;
      case 'email-academique':
        demandeDetails = await DemandeEmailAcademiques.findOne({ where: { id_demande } });
        break;
      case 'changement-sujet-these':
        demandeDetails = await DemandeChangementSujetTheses.findOne({ where: { id_demande } });
        break;
      case 'changement-directeur-these':
        demandeDetails = await DemandeChangementDirecteurTheses.findOne({ where: { id_demande } });
        break;
      case 'reinscription-derogation':
        demandeDetails = await DemandeDerogations.findOne({ where: { id_demande } });
        break;
      case 'convention-stage':
        demandeDetails = await ConventionStages.findOne({ where: { id_demande } });
        break;
      case 'cotutelle':
        demandeDetails = await Cotutelles.findOne({ where: { id_demande } });
        break;
      case 'changement-codirecteur-these':
        demandeDetails = await DemandeChangementCodirecteurTheses.findOne({ where: { id_demande } });
        break;
      case 'imists':
        demandeDetails = await DemandeIMISTs.findOne({ where: { id_demande } });
        break;
      case 'tirage':
        demandeDetails = await DemandeTirages.findOne({ where: { id_demande } });
        break;
      default:
        return res.status(404).json({ message: 'Type de demande non reconnu.' });
    }

    if (!demandeDetails) {
      return res.status(404).json({ message: 'Détails de la demande non trouvés.' });
    }

    // Inclure le type de demande dans la réponse
    res.status(200).json({
      type_demande: demande.type_demande,
      ...demandeDetails.dataValues // Assurez-vous que les détails spécifiques sont renvoyés correctement
    });
  } catch (error) {
    console.error('Erreur lors de la récupération de la demande:', error);
    res.status(500).json({ error: 'Échec de la récupération de la demande' });
  }
};



// // Méthode PUT pour mettre à jour une demande
// exports.updateDemande = async (req, res) => {
//   try {
//     const id_utilisateur = req.user.userId;

//     // Trouver le doctorant correspondant à l'utilisateur
//     const doctorant = await Doctorant.findOne({ where: { id_utilisateur } });
//     if (!doctorant) {
//       return res.status(404).json({ message: 'Doctorant non trouvé pour cet utilisateur.' });
//     }

//     const id_doctorant = doctorant.id_doctorant; // Utiliser l'ID du doctorant pour la recherche

//     const { id_demande } = req.params;
//     const { type_demande } = req.body;
//     const demandeData = req.body.demandeData || {}; // Assurez-vous que demandeData est défini

//     const demande = await Demande.findOne({ where: { id_demande, id_doctorant } });

//     if (!demande) {
//       return res.status(404).json({ message: 'Demande non trouvée ou accès non autorisé.' });
//     }

//     let fichier_demande = null;
//     if (req.file) {
//       const filePath = path.join(__dirname, '../uploads', req.file.filename);
//       fichier_demande = fs.readFileSync(filePath);
//       fs.unlinkSync(filePath); // Supprimer le fichier après lecture
//     }

//     let updatedDemandeDetails = null;

//     // Logique de mise à jour selon le type de demande
//     if (type_demande === 'inscription') {
//       const { diplomes_precedents, specialisation_souhaitee, notes_transcription } = demandeData;
//       console.log('Données de la demande :', demandeData);

//       updatedDemandeDetails = await DemandeInscription.update({
//         diplomes_precedents,
//         specialisation_souhaitee,
//         notes_transcription,
//         fichier_demande,
//       }, { where: { id_demande } });

//     } else if (type_demande === 'retrait-provisoire') {
//       const { motif_retrait, date_debut_prevue, date_retour_prevue } = demandeData;
//       updatedDemandeDetails = await DemandeRetraitProvisoires.update({
//         motif_retrait,
//         date_debut_prevue: new Date(date_debut_prevue),
//         date_retour_prevue: new Date(date_retour_prevue),
//         fichier_demande_retrait: fichier_demande,
//       }, { where: { id_demande } });

//     } else if (type_demande === 'retrait-definitif') {
//       const { motif_retrait_definitif, date_retrait, observations } = demandeData;
//       updatedDemandeDetails = await DemandeRetraitDefinitifs.update({
//         motif_retrait_definitif,
//         date_retrait: new Date(date_retrait),
//         observations,
//         fichier_retrait_definitif: fichier_demande,
//       }, { where: { id_demande } });

//     } else if (type_demande === 'carte-etudiant') {
//       const { numero_etudiant, date_delivrance } = demandeData;
//       updatedDemandeDetails = await DemandeCarteEtudiants.update({
//         numero_etudiant,
//         date_delivrance: new Date(date_delivrance),
//         fichier_carte_etudiant: fichier_demande,
//       }, { where: { id_demande } });

//     } else if (type_demande === 'email-academique') {
//       const { identifiant_souhaite, motif_demande } = demandeData;
//       updatedDemandeDetails = await DemandeEmailAcademiques.update({
//         identifiant_souhaite,
//         motif_demande,
//       }, { where: { id_demande } });

//     } else if (type_demande === 'changement-sujet-these') {
//       const { sujet_actuel, nouveau_sujet_propose, justification } = demandeData;
//       updatedDemandeDetails = await DemandeChangementSujetTheses.update({
//         sujet_actuel,
//         nouveau_sujet_propose,
//         justification,
//         fichier_demande_changement_sujet: fichier_demande,
//       }, { where: { id_demande } });

//     } else if (type_demande === 'changement-directeur-these') {
//       const { directeur_actuel, nouveau_directeur_propose, raisons_changement } = demandeData;
//       updatedDemandeDetails = await DemandeChangementDirecteurTheses.update({
//         directeur_actuel,
//         nouveau_directeur_propose,
//         raisons_changement,
//         fichier_demande_changement_directeur: fichier_demande,
//       }, { where: { id_demande } });

//     } else if (type_demande === 'reinscription-derogation') {
//       const { annee_academique, motif, decision_prise } = demandeData;
//       updatedDemandeDetails = await DemandeDerogations.update({
//         annee_academique,
//         motif,
//         decision_prise,
//         fichier_demande_reinscription: fichier_demande,
//       }, { where: { id_demande } });

//     } else if (type_demande === 'convention-stage') {
//       const { entreprise_accueil, periode_stage, objectifs_stage } = demandeData;
//       updatedDemandeDetails = await ConventionStages.update({
//         entreprise_accueil,
//         periode_stage,
//         objectifs_stage,
//         fichier_demande_stage: fichier_demande,
//       }, { where: { id_demande } });

//     } else if (type_demande === 'cotutelle') {
//       const { universite_partenaire, pays, duree_cotutelle } = demandeData;
//       updatedDemandeDetails = await Cotutelles.update({
//         universite_partenaire,
//         pays,
//         duree_cotutelle,
//         fichier_demande_cotutelle: fichier_demande,
//       }, { where: { id_demande } });

//     } else if (type_demande === 'changement-codirecteur-these') {
//       const { co_directeur_actuel, nouveau_co_directeur_propose, motifs_changement } = demandeData;
//       updatedDemandeDetails = await DemandeChangementCodirecteurTheses.update({
//         co_directeur_actuel,
//         nouveau_co_directeur_propose,
//         motifs_changement,
//         fichier_demande_changement_codirecteur: fichier_demande,
//       }, { where: { id_demande } });

//     } else if (type_demande === 'imists') {
//       const { titre_these, directeur_these, date_debut_these, date_prevue_soutenance } = demandeData;
//       updatedDemandeDetails = await DemandeIMISTs.update({
//         titre_these,
//         directeur_these,
//         date_debut_these,
//         date_prevue_soutenance,
//         fichiers_cv: fichier_demande,
//       }, { where: { id_demande } });

//     } else if (type_demande === 'tirage') {
//       const { titre_these, nombre_exemplaires, date_soutenance } = demandeData;
//       updatedDemandeDetails = await DemandeTirages.update({
//         titre_these,
//         nombre_exemplaires,
//         date_soutenance: new Date(date_soutenance),
//         fichier_demande_tirage: fichier_demande,
//       }, { where: { id_demande } });

//     }

//     if (!updatedDemandeDetails) {
//       return res.status(400).json({ message: 'Échec de la mise à jour de la demande.' });
//     }

//     console.log('Type de demande:', type_demande);
// console.log('Données de la demande:', demandeData);

//     res.status(200).json({ message: 'Demande mise à jour avec succès.', updatedDemandeDetails });
//   } catch (error) {
//     console.error('Erreur lors de la mise à jour de la demande:', error);
//     res.status(500).json({ error: 'Échec de la mise à jour de la demande' });
//   }
// };



// Méthode PUT pour mettre à jour une demande
// Méthode PUT pour mettre à jour une demande
exports.updateDemande = async (req, res) => {
  try {
    const id_utilisateur = req.user.userId;
    console.log('ID utilisateur:', id_utilisateur);

    // Trouver le doctorant correspondant à l'utilisateur
    const doctorant = await Doctorant.findOne({ where: { id_utilisateur } });
    if (!doctorant) {
      console.log('Doctorant non trouvé pour cet utilisateur.');
      return res.status(404).json({ message: 'Doctorant non trouvé pour cet utilisateur.' });
    }

    const id_doctorant = doctorant.id_doctorant;
    console.log('ID doctorant:', id_doctorant);

    const { id_demande } = req.params;
    console.log('ID de la demande:', id_demande);

    // Accéder directement aux données envoyées
    const {
      type_demande,
      diplomes_precedents,
      specialisation_souhaitee,
      notes_transcription,
      motif_retrait,
      date_debut_prevue,
      date_retour_prevue,
      motif_retrait_definitif,
      date_retrait,
      observations,
      numero_etudiant,
      date_delivrance,
      identifiant_souhaite,
      motif_demande,
      sujet_actuel,
      nouveau_sujet_propose,
      justification,
      directeur_actuel,
      nouveau_directeur_propose,
      raisons_changement,
      annee_academique,
      motif,
      decision_prise,
      entreprise_accueil,
      periode_stage,
      objectifs_stage,
      universite_partenaire,
      pays,
      duree_cotutelle,
      co_directeur_actuel,
      nouveau_co_directeur_propose,
      motifs_changement,
      sujet,
      laboratoire,
      nombre_copies,
      format_tirage
    } = req.body;

    // Récupérer l'URL du fichier s'il a été uploadé
    const fileUrl = req.fileUrl || null;
    console.log('URL du fichier:', fileUrl);

    // Trouver la demande correspondante
    const demande = await Demande.findOne({ where: { id_demande, id_doctorant } });
    if (!demande) {
      console.log('Demande non trouvée ou accès non autorisé.');
      return res.status(404).json({ message: 'Demande non trouvée ou accès non autorisé.' });
    }

    let updatedDemandeDetails = null;

    // Logique de mise à jour selon le type de demande
    switch (type_demande) {
      case 'inscription':
        console.log('Données pour DemandeInscription:', { diplomes_precedents, specialisation_souhaitee, notes_transcription, fichier_demande: fileUrl });
        updatedDemandeDetails = await DemandeInscription.update({
          diplomes_precedents,
          specialisation_souhaitee,
          notes_transcription,
          fichier_demande: fileUrl,
        }, { where: { id_demande } });
        break;

      case 'retrait-provisoire':
        console.log('Données pour DemandeRetraitProvisoires:', { motif_retrait, date_debut_prevue, date_retour_prevue, fichier_demande_retrait: fileUrl });
        updatedDemandeDetails = await DemandeRetraitProvisoires.update({
          motif_retrait,
          date_debut_prevue: new Date(date_debut_prevue),
          date_retour_prevue: new Date(date_retour_prevue),
          fichier_demande_retrait: fileUrl,
        }, { where: { id_demande } });
        break;

      case 'retrait-definitif':
        console.log('Données pour DemandeRetraitDefinitifs:', { motif_retrait_definitif, date_retrait, observations, fichier_retrait_definitif: fileUrl });
        updatedDemandeDetails = await DemandeRetraitDefinitifs.update({
          motif_retrait_definitif,
          date_retrait: new Date(date_retrait),
          observations,
          fichier_retrait_definitif: fileUrl,
        }, { where: { id_demande } });
        break;

      case 'carte-etudiant':
        console.log('Données pour DemandeCarteEtudiants:', { numero_etudiant,	date_delivrance	,fichier_carte_etudiant: fileUrl });
        updatedDemandeDetails = await DemandeCarteEtudiants.update({
          numero_etudiant,
          date_delivrance: new Date(date_delivrance),
          fichier_carte_etudiant: fileUrl,
        }, { where: { id_demande } });
        break;

      case 'email-academique':
        console.log('Données pour DemandeEmailAcademiques:', { identifiant_souhaite, motif_demande });
        updatedDemandeDetails = await DemandeEmailAcademiques.update({
          identifiant_souhaite,
          motif_demande,
        }, { where: { id_demande } });
        break;

      case 'changement-sujet-these':
        console.log('Données pour DemandeChangementSujetTheses:', { sujet_actuel, nouveau_sujet_propose, justification, fichier_demande_changement_sujet: fileUrl });
        updatedDemandeDetails = await DemandeChangementSujetTheses.update({
          sujet_actuel,
          nouveau_sujet_propose,
          justification,
          fichier_demande_changement_sujet: fileUrl,
        }, { where: { id_demande } });
        break;

      case 'changement-directeur-these':
        console.log('Données pour DemandeChangementDirecteurTheses:', { directeur_actuel, nouveau_directeur_propose, raisons_changement, fichier_demande_changement_directeur: fileUrl });
        updatedDemandeDetails = await DemandeChangementDirecteurTheses.update({
          directeur_actuel,
          nouveau_directeur_propose,
          raisons_changement,
          fichier_demande_changement_directeur: fileUrl,
        }, { where: { id_demande } });
        break;

      case 'reinscription-derogation':
        console.log('Données pour DemandeDerogations:', { annee_academique, motif, decision_prise, fichier_demande_reinscription: fileUrl });
        updatedDemandeDetails = await DemandeDerogations.update({
          annee_academique,
          motif,
          decision_prise,
          fichier_demande_reinscription: fileUrl,
        }, { where: { id_demande } });
        break;

      case 'convention-stage':
        console.log('Données pour ConventionStages:', { entreprise_accueil, periode_stage, objectifs_stage, fichier_demande_stage: fileUrl });
        updatedDemandeDetails = await ConventionStages.update({
          entreprise_accueil,
          periode_stage: new Date(periode_stage),
          objectifs_stage,
          fichier_demande_stage: fileUrl,
        }, { where: { id_demande } });
        break;

      case 'cotutelle':
        console.log('Données pour Cotutelles:', { universite_partenaire, pays, duree_cotutelle, fichier_demande_cotutelle: fileUrl });
        updatedDemandeDetails = await Cotutelles.update({
          universite_partenaire,
          pays,
          duree_cotutelle,
          fichier_demande_cotutelle: fileUrl,
        }, { where: { id_demande } });
        break;

      case 'changement-codirecteur-these':
        console.log('Données pour DemandeChangementCodirecteurTheses:', { co_directeur_actuel, nouveau_co_directeur_propose, motifs_changement, fichier_demande_changement_codirecteur: fileUrl });
        updatedDemandeDetails = await DemandeChangementCodirecteurTheses.update({
          co_directeur_actuel,
          nouveau_co_directeur_propose,
          motifs_changement,
          fichier_demande_changement_codirecteur: fileUrl,
        }, { where: { id_demande } });
        break;

      case 'imists':
        console.log('Données pour DemandeIMISTs:', { titre_these,	directeur_these	,date_debut_these,	date_prevue_soutenance	,fichiers_cv	: fileUrl });
        updatedDemandeDetails = await DemandeIMISTs.update({
          titre_these,
          	directeur_these	,
            date_debut_these,
            	date_prevue_soutenance	,
              fichiers_cv	: fileUrl,
        }, { where: { id_demande } });
        break;

      case 'tirage':
        console.log('Données pour DemandeTirages:', { titre_these, nombre_exemplaires,date_soutenance	, fichier_demande	: fileUrl });
        updatedDemandeDetails = await DemandeTirages.update({
          titre_these,
          nombre_exemplaires,
          date_soutenance	,
          fichier_demande	: fileUrl,
        }, { where: { id_demande } });
        break;

      default:
        console.log('Type de demande non pris en charge.');
        return res.status(400).json({ message: 'Type de demande non pris en charge.' });
    }

    // Répondre avec le statut de la mise à jour
    if (updatedDemandeDetails) {
      res.status(200).json({ message: 'Demande mise à jour avec succès.' });
    } else {
      res.status(404).json({ message: 'Demande non trouvée pour mise à jour.' });
    }
  } catch (error) {
    console.error('Erreur lors de la mise à jour de la demande:', error);
    res.status(500).json({ message: 'Erreur lors de la mise à jour de la demande.', error });
  }
};













































// exports.updateDemande = async (req, res) => {
//   try {
//     const id_utilisateur = req.user.userId;

//     // Trouver le doctorant correspondant à l'utilisateur
//     const doctorant = await Doctorant.findOne({ where: { id_utilisateur } });
//     if (!doctorant) {
//       return res.status(404).json({ message: 'Doctorant non trouvé pour cet utilisateur.' });
//     }

//     const id_doctorant = doctorant.id_doctorant; // Utiliser l'ID du doctorant pour la recherche

//     const { id_demande } = req.params;
//     const { type_demande, demandeData } = req.body;

//     console.log('Utilisateur ID:', id_utilisateur); // Debugging
//     console.log('ID Demande:', id_demande); // Debugging
//     console.log('ID Doctorant:', id_doctorant); // Debugging

//     const demande = await Demande.findOne({ where: { id_demande, id_doctorant } });

//     if (!demande) {
//       return res.status(404).json({ message: 'Demande non trouvée ou accès non autorisé.' });
//     }

//     let fichier_demande = null;
//     if (req.file) {
//       const filePath = path.join(__dirname, '../uploads', req.file.filename);
//       fichier_demande = fs.readFileSync(filePath);
//       fs.unlinkSync(filePath); // Supprimer le fichier après lecture
//       console.log('Fichier de demande lu et supprimé:', req.file.filename);
//     }

//     let updatedDemandeDetails = null;

//     // Logique de mise à jour selon le type de demande
//     if (type_demande === 'inscription') {
//       const { diplomes_precedents, specialisation_souhaitee, notes_transcription } = demandeData;
//       updatedDemandeDetails = await DemandeInscription.update({
//         diplomes_precedents,
//         specialisation_souhaitee,
//         notes_transcription,
//         fichier_demande,
//       }, { where: { id_demande } });

//     } else if (type_demande === 'retrait-provisoire') {
//       const { motif_retrait, date_debut_prevue, date_retour_prevue } = demandeData;
//       updatedDemandeDetails = await DemandeRetraitProvisoires.update({
//         motif_retrait,
//         date_debut_prevue: new Date(date_debut_prevue),
//         date_retour_prevue: new Date(date_retour_prevue),
//         fichier_demande_retrait: fichier_demande,
//       }, { where: { id_demande } });

//     } else if (type_demande === 'retrait-definitif') {
//       const { motif_retrait, date_retrait, observations } = demandeData;
//       updatedDemandeDetails = await DemandeRetraitDefinitifs.update({
//         motif_retrait,
//         date_retrait: new Date(date_retrait),
//         observations,
//         fichier_retrait_definitif: fichier_demande,
//       }, { where: { id_demande } });

//     } else if (type_demande === 'carte-etudiant') {
//       const { numero_etudiant, date_delivrance } = demandeData;
//       updatedDemandeDetails = await DemandeCarteEtudiants.update({
//         numero_etudiant,
//         date_delivrance: new Date(date_delivrance),
//         fichier_carte_etudiant: fichier_demande,
//       }, { where: { id_demande } });

//     } else if (type_demande === 'email-academique') {
//       const { identifiant_souhaite, motif_demande } = demandeData;
//       updatedDemandeDetails = await DemandeEmailAcademiques.update({
//         identifiant_souhaite,
//         motif_demande,
//       }, { where: { id_demande } });

//     } else if (type_demande === 'changement-sujet-these') {
//       const { sujet_actuel, nouveau_sujet_propose, justification } = demandeData;
//       updatedDemandeDetails = await DemandeChangementSujetTheses.update({
//         sujet_actuel,
//         nouveau_sujet_propose,
//         justification,
//         fichier_demande_changement_sujet: fichier_demande,
//       }, { where: { id_demande } });

//     } else if (type_demande === 'changement-directeur-these') {
//       const { directeur_actuel, nouveau_directeur_propose, raisons_changement } = demandeData;
//       updatedDemandeDetails = await DemandeChangementDirecteurTheses.update({
//         directeur_actuel,
//         nouveau_directeur_propose,
//         raisons_changement,
//         fichier_demande_changement_directeur: fichier_demande,
//       }, { where: { id_demande } });

//     } else if (type_demande === 'reinscription-derogation') {
//       const { annee_academique, motif, decision_prise } = demandeData;
//       updatedDemandeDetails = await DemandeDerogations.update({
//         annee_academique,
//         motif,
//         decision_prise,
//         fichier_demande_reinscription: fichier_demande,
//       }, { where: { id_demande } });

//     } else if (type_demande === 'convention-stage') {
//       const { entreprise_accueil, periode_stage, objectifs_stage } = demandeData;
//       updatedDemandeDetails = await ConventionStages.update({
//         entreprise_accueil,
//         periode_stage,
//         objectifs_stage,
//         fichier_demande_stage: fichier_demande,
//       }, { where: { id_demande } });

//     } else if (type_demande === 'cotutelle') {
//       const { universite_partenaire, pays, duree_cotutelle } = demandeData;
//       updatedDemandeDetails = await Cotutelles.update({
//         universite_partenaire,
//         pays,
//         duree_cotutelle,
//         fichier_demande_cotutelle: fichier_demande,
//       }, { where: { id_demande } });

//     } else if (type_demande === 'changement-codirecteur-these') {
//       const { co_directeur_actuel, nouveau_co_directeur_propose, motifs_changement } = demandeData;
//       updatedDemandeDetails = await DemandeChangementCodirecteurTheses.update({
//         co_directeur_actuel,
//         nouveau_co_directeur_propose,
//         motifs_changement,
//         fichier_demande_changement_codirecteur: fichier_demande,
//       }, { where: { id_demande } });

//     } else if (type_demande === 'imists') {
//       const { titre_these, directeur_these, date_debut_these, date_prevue_soutenance } = demandeData;
//       updatedDemandeDetails = await DemandeIMISTs.update({
//         titre_these,
//         directeur_these,
//         date_debut_these,
//         date_prevue_soutenance,
//         fichiers_cv: fichier_demande,
//       }, { where: { id_demande } });

//     } else if (type_demande === 'tirage') {
//       const { titre_these, nombre_exemplaires, date_soutenance } = demandeData;
//       updatedDemandeDetails = await DemandeTirages.update({
//         titre_these,
//         nombre_exemplaires,
//         date_soutenance: new Date(date_soutenance),
//         fichier_demande_tirage: fichier_demande,
//       }, { where: { id_demande } });

//     }

//     if (!updatedDemandeDetails) {
//       return res.status(400).json({ message: 'Échec de la mise à jour de la demande.' });
//     }

//     res.status(200).json({ message: 'Demande mise à jour avec succès.', updatedDemandeDetails });
//   } catch (error) {
//     console.error('Erreur lors de la mise à jour de la demande:', error);
//     res.status(500).json({ error: 'Échec de la mise à jour de la demande' });
//   }
// };

