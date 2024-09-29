const fs = require('fs');
const path = require('path');
const { Demande, DemandeInscription, DemandeRetraitProvisoires, DemandeRetraitDefinitifs, DemandeCarteEtudiants, DemandeEmailAcademiques, Doctorant, DemandeChangementDirecteurTheses, DemandeChangementSujetTheses, DemandeDerogations, ConventionStages, Cotutelles, DemandeChangementCodirecteurTheses, DemandeIMISTs, DemandeTirages } = require('../models');

exports.createDemande = async (req, res) => {
  try {
    const id_utilisateur = req.user.userId;
    const doctorant = await Doctorant.findOne({ where: { id_utilisateur } });

    if (!doctorant) {
      return res.status(404).json({ message: 'Doctorant non trouvé.' });
    }

    const id_doctorant = doctorant.id_doctorant;
    const { type_demande, date_soumission, demandeData } = req.body;
    const formattedDateSoumission = new Date(date_soumission || Date.now());

    let fichier_lien = null;

    if (req.file) {
      const destinationPath = path.join(__dirname, '../uploads/demandes', req.file.filename);
      
      // Déplace le fichier vers un répertoire permanent
      fs.renameSync(req.file.path, destinationPath);
      
      // Générer un lien vers le fichier
      fichier_lien = `/uploads/demandes/${req.file.filename}`;
      console.log('Fichier de demande enregistré:', fichier_lien);
    }

if (!type_demande) {
  return res.status(400).json({ message: 'Le type de demande est requis.' });
}

const newDemande = await Demande.create({
  type_demande,
  statut: 'en cours de traitement',
  date_soumission: formattedDateSoumission,
  id_doctorant,
});


    let newDemandeDetails = null;

    if (type_demande === 'inscription') {
      const { diplomes_precedents, specialisation_souhaitee, notes_transcription } = demandeData;

      newDemandeDetails = await DemandeInscription.create({
        id_demande: newDemande.id_demande,
        diplomes_precedents,
        specialisation_souhaitee,
        notes_transcription,
        fichier_demande: fichier_lien,
      });
    } else if (type_demande === 'retrait-provisoire') {
      const { motif_retrait, date_debut_prevue, date_retour_prevue } = demandeData;

      newDemandeDetails = await DemandeRetraitProvisoires.create({
        id_demande: newDemande.id_demande,
        motif_retrait,
        date_debut_prevue: new Date(date_debut_prevue),
        date_retour_prevue: new Date(date_retour_prevue),
        fichier_demande_retrait: fichier_lien,
      });
    } else if (type_demande === 'retrait-definitif') {
      const { motif_retrait_definitif, date_retrait, observations } = demandeData;

      newDemandeDetails = await DemandeRetraitDefinitifs.create({
        id_demande: newDemande.id_demande,
        motif_retrait_definitif,
        date_retrait: new Date(date_retrait),
        observations,
        fichier_retrait_definitif: fichier_lien,
      });
    } 
    else if (type_demande === 'carte-etudiant') {
      const { numero_etudiant, date_delivrance } = demandeData;

      newDemandeDetails = await DemandeCarteEtudiants.create({
        id_demande: newDemande.id_demande,
        numero_etudiant,
        date_delivrance: new Date(date_delivrance),
        fichier_carte_etudiant: fichier_lien,
      });
    } else if (type_demande === 'email-academique') {
      const { identifiant_souhaite, motif_demande } = demandeData;

      newDemandeDetails = await DemandeEmailAcademiques.create({
        id_demande: newDemande.id_demande,
        identifiant_souhaite,
        motif_demande,
        document_necessaire: fichier_lien,
      });
    } else if (type_demande === 'changement-sujet-these') {
      const { sujet_actuel, nouveau_sujet_propose, justification } = demandeData;

      newDemandeDetails = await DemandeChangementSujetTheses.create({
        id_demande: newDemande.id_demande,
        sujet_actuel,
        nouveau_sujet_propose,
        justification,
        fichier_demande_changement_sujet:fichier_lien,
      });
    } else if (type_demande === 'changement-directeur-these') {
      const { directeur_actuel, nouveau_directeur_propose, raisons_changement } = demandeData;

      newDemandeDetails = await DemandeChangementDirecteurTheses.create({
        id_demande: newDemande.id_demande,
        directeur_actuel,
        nouveau_directeur_propose,
        raisons_changement,
        fichier_demande_changement_directeur:fichier_lien,
      });
    } else if (type_demande === 'reinscription-derogation') {
      const { annee_academique, motif, decision_prise } = demandeData;

      newDemandeDetails = await DemandeDerogations.create({
        id_demande: newDemande.id_demande,
        annee_academique,
        motif,
        decision_prise,
        fichier_demande_reinscription:fichier_lien,
      });
    } else if (type_demande === 'convention-stage') {
      const { entreprise_accueil, periode_stage, objectifs_stage } = demandeData;

      newDemandeDetails = await ConventionStages.create({
        id_demande: newDemande.id_demande,
        entreprise_accueil,
        periode_stage,
        objectifs_stage,
        fichier_demande_stage:fichier_lien,
      });
    } else if (type_demande === 'cotutelle') {
      const { universite_partenaire, pays, duree_cotutelle } = demandeData;

      newDemandeDetails = await Cotutelles.create({
        id_demande: newDemande.id_demande,
        universite_partenaire,
        pays,
        duree_cotutelle,
        fichier_demande_cotutelle:fichier_lien,
      });
    } else if (type_demande === 'changement-codirecteur-these') {
      const { co_directeur_actuel, nouveau_co_directeur_propose, motifs_changement } = demandeData;

      newDemandeDetails = await DemandeChangementCodirecteurTheses.create({
        id_demande: newDemande.id_demande,
        co_directeur_actuel,
        nouveau_co_directeur_propose,
        motifs_changement,
        fichier_demande_changement_codirecteur:fichier_lien,
      });
    } else if (type_demande === 'imists') {
      const { titre_these, directeur_these, date_debut_these, date_prevue_soutenance, fichiers_cv } = demandeData;

      newDemandeDetails = await DemandeIMISTs.create({
        id_demande: newDemande.id_demande,
        titre_these,
        directeur_these,
        date_debut_these,
        date_prevue_soutenance,
        fichiers_cv: fichier_lien,
      });
    } else if (type_demande === 'tirage') {
      const { titre_these, nombre_exemplaires, date_soutenance } = demandeData;

      newDemandeDetails = await DemandeTirages.create({
        id_demande: newDemande.id_demande,
        titre_these,
        nombre_exemplaires,
        date_soutenance: new Date(date_soutenance),
        fichier_demande:fichier_lien,
      });
    }

    res.status(201).json({ newDemande, newDemandeDetails });
  } catch (error) {
    console.error('Erreur lors de la création de la demande:', error);
    res.status(500).json({ error: 'Échec de la création de la demande' });
  }
};


exports.getDemandesForDoctorant = async (req, res) => {
  try {
    const id_utilisateur = req.user.userId; 
    const doctorant = await Doctorant.findOne({ where: { id_utilisateur } });

    if (!doctorant) {
      return res.status(404).json({ message: 'Doctorant non trouvé.' });
    }

    const id_doctorant = doctorant.id_doctorant;

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





//récupérer les informations d'une demande
exports.getDemandeById = async (req, res) => {
  try {
    const id_utilisateur = req.user.userId;
    // Trouver le doctorant correspondant à l'utilisateur
    const doctorant = await Doctorant.findOne({ where: { id_utilisateur } });
    if (!doctorant) {
      return res.status(404).json({ message: 'Doctorant non trouvé pour cet utilisateur.' });
    }
    const id_doctorant = doctorant.id_doctorant;
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
      ...demandeDetails.dataValues 
    });
  } catch (error) {
    console.error('Erreur lors de la récupération de la demande:', error);
    res.status(500).json({ error: 'Échec de la récupération de la demande' });
  }
};


// exports.updateDemande = async (req, res) => {
//   try {
//     const id_utilisateur = req.user.userId;
//     console.log('ID utilisateur:', id_utilisateur);
//     // Vérifier les données envoyées par le frontend
//     console.log('Corps de la requête (req.body):', req.body);
//     console.log('Fichier uploadé (req.file):', req.file);

//     // Trouver le doctorant correspondant à l'utilisateur
//     const doctorant = await Doctorant.findOne({ where: { id_utilisateur } });
//     if (!doctorant) {
//       console.log('Doctorant non trouvé pour cet utilisateur.');
//       return res.status(404).json({ message: 'Doctorant non trouvé pour cet utilisateur.' });
//     }

//     const id_doctorant = doctorant.id_doctorant;
//     console.log('ID doctorant:', id_doctorant);

//     const { id_demande } = req.params;
//     console.log('ID de la demande:', id_demande);
//     const demandeData = req.body.demandeData || {}; // Assurez-vous que demandeData est défini

//     const {type_demande} = req.body;


//     // Gérer le fichier uploadé, si présent
//     let fichier_lien = null;
//     if (req.file) {
//       const destinationPath = path.join(__dirname, '../uploads/demandes', req.file.filename);

//       // Déplace le fichier vers un répertoire permanent
//       fs.renameSync(req.file.path, destinationPath);

//       // Générer un lien vers le fichier
//       fichier_lien = `/uploads/demandes/${req.file.filename}`;
//       console.log('Fichier de demande mis à jour:', fichier_lien);
//     }

//     // Trouver la demande correspondante
//     const demande = await Demande.findOne({ where: { id_demande, id_doctorant } });
//     if (!demande) {
//       console.log('Demande non trouvée ou accès non autorisé.');
//       return res.status(404).json({ message: 'Demande non trouvée ou accès non autorisé.' });
//     }

//     let updatedDemandeDetails = null;

// switch (type_demande) {
//     case 'inscription':
//         const { diplomes_precedents, specialisation_souhaitee, notes_transcription } = demandeData;
        
//         updatedDemandeDetails = await DemandeInscription.update({
//             diplomes_precedents,
//             specialisation_souhaitee,
//             notes_transcription,
//             fichier_demande: fichier_lien || demande.fichier_demande, // Conserver l'ancien fichier si aucun nouveau n'est fourni
//         }, { where: { id_demande: demande.id_demande } });

//         if (updatedDemandeDetails[0] === 0) {
//             console.log('Aucune mise à jour effectuée. Vérifiez que les données ont changé.');
//         }
//         break;


//       case 'retrait-provisoire':
//         const { motif_retrait, date_debut_prevue, date_retour_prevue } = demandeData;
//         console.log('Mise à jour pour DemandeRetraitProvisoires');
//         updatedDemandeDetails = await DemandeRetraitProvisoires.update({
//           motif_retrait,
//           date_debut_prevue: new Date(date_debut_prevue),
//           date_retour_prevue: new Date(date_retour_prevue),
//           fichier_demande_retrait: fichier_lien || demande.fichier_demande_retrait,
//         }, { where: { id_demande } });
//         break;

//       case 'retrait-definitif':
//         console.log('Mise à jour pour DemandeRetraitDefinitifs');
//         const { motif_retrait_definitif, date_retrait, observations } = demandeData;

//         updatedDemandeDetails = await DemandeRetraitDefinitifs.update({
//           motif_retrait_definitif,
//           date_retrait: new Date(date_retrait),
//           observations,
//           fichier_retrait_definitif: fichier_lien || demande.fichier_retrait_definitif,
//         }, { where: { id_demande } });
//         break;

//       case 'carte-etudiant':
//         console.log('Mise à jour pour DemandeCarteEtudiants');
//         const { numero_etudiant, date_delivrance } = demandeData;

//         updatedDemandeDetails = await DemandeCarteEtudiants.update({
//           numero_etudiant,
//           date_delivrance: new Date(date_delivrance),
//           fichier_carte_etudiant: fichier_lien || demande.fichier_carte_etudiant,
//         }, { where: { id_demande } });
//         break;

//       case 'email-academique':
//         console.log('Mise à jour pour DemandeEmailAcademiques');
//         const { identifiant_souhaite, motif_demande } = demandeData;

//         updatedDemandeDetails = await DemandeEmailAcademiques.update({
//           identifiant_souhaite,
//           motif_demande,
//           document_necessaire,

//         }, { where: { id_demande } });
//         break;

//       case 'changement-sujet-these':
//         console.log('Mise à jour pour DemandeChangementSujetTheses');
//         const { sujet_actuel, nouveau_sujet_propose, justification } = demandeData;
//         updatedDemandeDetails = await DemandeChangementSujetTheses.update({
//           sujet_actuel,
//           nouveau_sujet_propose,
//           justification,
//           fichier_demande_changement_sujet: fichier_lien || demande.fichier_demande_changement_sujet,
//         }, { where: { id_demande } });
//         break;

//       case 'changement-directeur-these':
//         console.log('Mise à jour pour DemandeChangementDirecteurTheses');
//         const { directeur_actuel, nouveau_directeur_propose, raisons_changement } = demandeData;

//         updatedDemandeDetails = await DemandeChangementDirecteurTheses.update({
//           directeur_actuel,
//           nouveau_directeur_propose,
//           raisons_changement,
//           fichier_demande_changement_directeur: fichier_lien || demande.fichier_demande_changement_directeur,
//         }, { where: { id_demande } });
//         break;

//       case 'reinscription-derogation':
//         console.log('Mise à jour pour DemandeDerogations');
//         const { annee_academique, motif, decision_prise } = demandeData;

//         updatedDemandeDetails = await DemandeDerogations.update({
//           annee_academique,
//           motif,
//           decision_prise,
//           fichier_demande_reinscription: fichier_lien || demande.fichier_demande_reinscription,
//         }, { where: { id_demande } });
//         break;

//       case 'convention-stage':
//         console.log('Mise à jour pour ConventionStages');
//         const { entreprise_accueil, periode_stage, objectifs_stage } = demandeData;
//         updatedDemandeDetails = await ConventionStages.update({
//           entreprise_accueil,
//           periode_stage: new Date(periode_stage),
//           objectifs_stage,
//           fichier_demande_stage: fichier_lien || demande.fichier_demande_stage,
//         }, { where: { id_demande } });
//         break;

//       case 'cotutelle':
//         console.log('Mise à jour pour Cotutelles');
//         const { universite_partenaire, pays, duree_cotutelle } = demandeData;

//         updatedDemandeDetails = await Cotutelles.update({
//           universite_partenaire,
//           pays,
//           duree_cotutelle,
//           fichier_demande_cotutelle: fichier_lien || demande.fichier_demande_cotutelle,
//         }, { where: { id_demande } });
//         break;

//       case 'changement-codirecteur-these':
//         console.log('Mise à jour pour DemandeChangementCodirecteurTheses');
//         const { co_directeur_actuel, nouveau_co_directeur_propose, motifs_changement } = demandeData;

//         updatedDemandeDetails = await DemandeChangementCodirecteurTheses.update({
//           co_directeur_actuel,
//           nouveau_co_directeur_propose,
//           motifs_changement,
//           fichier_demande_changement_codirecteur: fichier_lien || demande.fichier_demande_changement_codirecteur,
//         }, { where: { id_demande } });
//         break;

//       case 'imists':
//         console.log('Mise à jour pour DemandeIMISTs');
//         const { titre_de_these	, directeur_these, date_debut_these, date_prevue_soutenance } = demandeData;

//         updatedDemandeDetails = await DemandeIMISTs.update({
//           titre_de_these	,
//           directeur_these,
//           date_debut_these,
//           date_prevue_soutenance,
//           fichiers_cv: fichier_lien || demande.fichiers_cv,
//         }, { where: { id_demande } });
//         break;

//       case 'tirage':
//         console.log('Mise à jour pour DemandeTirages');
//         const { titre_these, nombre_exemplaires, date_soutenance } = demandeData;

//         updatedDemandeDetails = await DemandeTirages.update({
//           titre_these,
//           nombre_exemplaires,
//           date_soutenance,
//           fichier_demande: fichier_lien || demande.fichier_demande,
//         }, { where: { id_demande } });
//         break;

//       default:
//         console.log('Type de demande non pris en charge.');
//         return res.status(400).json({ message: 'Type de demande non pris en charge.' });
//     }

//     // Répondre avec le statut de la mise à jour
//     if (updatedDemandeDetails) {
//       res.status(200).json({ message: 'Demande mise à jour avec succès.' });
//     } else {
//       res.status(404).json({ message: 'Demande non trouvée pour mise à jour.' });
//     }
//   } catch (error) {
//     console.error('Erreur lors de la mise à jour de la demande:', error);
//     res.status(500).json({ message: 'Erreur lors de la mise à jour de la demande.', error });
//   }
// };



exports.updateDemande = async (req, res) => {
  try {
    const id_utilisateur = req.user.userId;
    console.log('ID utilisateur:', id_utilisateur);

    // Trouver le doctorant correspondant à l'utilisateur
    const doctorant = await Doctorant.findOne({ where: { id_utilisateur } });
    if (!doctorant) {
      return res.status(404).json({ message: 'Doctorant non trouvé pour cet utilisateur.' });
    }

    const id_doctorant = doctorant.id_doctorant;
    const { id_demande } = req.params;

    // Trouver la demande
    const demande = await Demande.findOne({ where: { id_demande, id_doctorant } });
    if (!demande) {
      return res.status(404).json({ message: 'Demande non trouvée ou accès non autorisé.' });
    }

    const { type_demande } = demande;

    // Gérer le fichier uploadé
    let fichier_lien = null;
    if (req.file) {
      const destinationPath = path.join(__dirname, '../uploads/demandes', req.file.filename);
      fs.renameSync(req.file.path, destinationPath);
      fichier_lien = `/uploads/demandes/${req.file.filename}`;
    }

    // Récupérer les données du corps de la requête
    const demandeData = req.body;

    // Appliquer les mises à jour en fonction du type de la demande
    let updatedDemandeDetails = null;
    switch (type_demande) {
      case 'inscription':
        const { diplomes_precedents, specialisation_souhaitee, notes_transcription } = demandeData;

        updatedDemandeDetails = await DemandeInscription.update({
          diplomes_precedents,
          specialisation_souhaitee,
          notes_transcription,
          fichier_demande: fichier_lien || demande.fichier_demande, // Mettre à jour avec le fichier s'il est présent
        }, { where: { id_demande: demande.id_demande } });
        break;

      case 'retrait-provisoire':
        const { motif_retrait, date_debut_prevue, date_retour_prevue } = demandeData;

        updatedDemandeDetails = await DemandeRetraitProvisoires.update({
          motif_retrait,
          date_debut_prevue: new Date(date_debut_prevue),
          date_retour_prevue: new Date(date_retour_prevue),
          fichier_demande_retrait: fichier_lien || demande.fichier_demande_retrait,
        }, { where: { id_demande } });
        break;
      // Cas : retrait-definitif
case 'retrait-definitif':
  console.log('Mise à jour pour DemandeRetraitDefinitifs');
  const { motif_retrait_definitif, date_retrait, observations } = demandeData;

  updatedDemandeDetails = await DemandeRetraitDefinitifs.update({
    motif_retrait_definitif,
    date_retrait: date_retrait ? new Date(date_retrait) : null,
    observations,
    fichier_retrait_definitif: fichier_lien || demande.fichier_retrait_definitif,
  }, { where: { id_demande } });
  break;

// Cas : carte-etudiant
case 'carte-etudiant':
  console.log('Mise à jour pour DemandeCarteEtudiants');
  const { numero_etudiant, date_delivrance } = demandeData;

  updatedDemandeDetails = await DemandeCarteEtudiants.update({
    numero_etudiant,
    date_delivrance: date_delivrance ? new Date(date_delivrance) : null,
    fichier_carte_etudiant: fichier_lien || demande.fichier_carte_etudiant,
  }, { where: { id_demande } });
  break;

// Cas : email-academique
case 'email-academique':
  console.log('Mise à jour pour DemandeEmailAcademiques');
  const { identifiant_souhaite, motif_demande, document_necessaire } = demandeData;

  updatedDemandeDetails = await DemandeEmailAcademiques.update({
    identifiant_souhaite,
    motif_demande,
    document_necessaire,
  }, { where: { id_demande } });
  break;

// Cas : changement-sujet-these
case 'changement-sujet-these':
  console.log('Mise à jour pour DemandeChangementSujetTheses');
  const { sujet_actuel, nouveau_sujet_propose, justification } = demandeData;

  updatedDemandeDetails = await DemandeChangementSujetTheses.update({
    sujet_actuel,
    nouveau_sujet_propose,
    justification,
    fichier_demande_changement_sujet: fichier_lien || demande.fichier_demande_changement_sujet,
  }, { where: { id_demande } });
  break;

// Cas : changement-directeur-these
case 'changement-directeur-these':
  console.log('Mise à jour pour DemandeChangementDirecteurTheses');
  const { directeur_actuel, nouveau_directeur_propose, raisons_changement } = demandeData;

  updatedDemandeDetails = await DemandeChangementDirecteurTheses.update({
    directeur_actuel,
    nouveau_directeur_propose,
    raisons_changement,
    fichier_demande_changement_directeur: fichier_lien || demande.fichier_demande_changement_directeur,
  }, { where: { id_demande } });
  break;

// Cas : reinscription-derogation
case 'reinscription-derogation':
  console.log('Mise à jour pour DemandeDerogations');
  const { annee_academique, motif, decision_prise } = demandeData;

  updatedDemandeDetails = await DemandeDerogations.update({
    annee_academique,
    motif,
    decision_prise,
    fichier_demande_reinscription: fichier_lien || demande.fichier_demande_reinscription,
  }, { where: { id_demande } });
  break;

// Cas : convention-stage
case 'convention-stage':
  console.log('Mise à jour pour ConventionStages');
  const { entreprise_accueil, periode_stage, objectifs_stage } = demandeData;

  updatedDemandeDetails = await ConventionStages.update({
    entreprise_accueil,
    periode_stage,
    objectifs_stage,
    fichier_demande_stage: fichier_lien || demande.fichier_demande_stage,
  }, { where: { id_demande } });
  break;

// Cas : cotutelle
case 'cotutelle':
  console.log('Mise à jour pour Cotutelles');
  const { universite_partenaire, pays, duree_cotutelle } = demandeData;

  updatedDemandeDetails = await Cotutelles.update({
    universite_partenaire,
    pays,
    duree_cotutelle,
    fichier_demande_cotutelle: fichier_lien || demande.fichier_demande_cotutelle,
  }, { where: { id_demande } });
  break;

// Cas : changement-codirecteur-these
case 'changement-codirecteur-these':
  console.log('Mise à jour pour DemandeChangementCodirecteurTheses');
  const { co_directeur_actuel, nouveau_co_directeur_propose, motifs_changement } = demandeData;

  updatedDemandeDetails = await DemandeChangementCodirecteurTheses.update({
    co_directeur_actuel,
    nouveau_co_directeur_propose,
    motifs_changement,
    fichier_demande_changement_codirecteur: fichier_lien || demande.fichier_demande_changement_codirecteur,
  }, { where: { id_demande } });
  break;

// Cas : imists
case 'imists':
  console.log('Mise à jour pour DemandeIMISTs');
  const { titre_de_these, directeur_these, date_debut_these, date_prevue_soutenance } = demandeData;

  updatedDemandeDetails = await DemandeIMISTs.update({
    titre_de_these,
    directeur_these,
    date_debut_these: date_debut_these ? new Date(date_debut_these) : null,
    date_prevue_soutenance: date_prevue_soutenance ? new Date(date_prevue_soutenance) : null,
    fichiers_cv: fichier_lien || demande.fichiers_cv,
  }, { where: { id_demande } });
  break;

// Cas : tirage
case 'tirage':
  console.log('Mise à jour pour DemandeTirages');
  const { titre_these, nombre_exemplaires, date_soutenance } = demandeData;

  updatedDemandeDetails = await DemandeTirages.update({
    titre_these,
    nombre_exemplaires,
    date_soutenance: date_soutenance ? new Date(date_soutenance) : null,
    fichier_demande: fichier_lien || demande.fichier_demande,
  }, { where: { id_demande } });
  break;

      default:
        return res.status(400).json({ message: 'Type de demande non pris en charge.' });
    }

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
