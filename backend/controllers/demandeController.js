const fs = require('fs');
const path = require('path');
const { Demande, DemandeInscription, DemandeRetraitProvisoires, DemandeRetraitDefinitifs, DemandeCarteEtudiants, DemandeEmailAcademiques, Doctorant,DemandeChangementDirecteurTheses , DemandeChangementSujetTheses ,DemandeDerogations,ConventionStages,Cotutelles,DemandeChangementCodirecteurTheses ,DemandeIMISTs,DemandeTirages } = require('../models');

exports.createDemande = async (req, res) => {
  try {
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

    let fichier_demande = null;

    if (req.file) {
      const filePath = path.join(__dirname, '../uploads', req.file.filename);
      fichier_demande = fs.readFileSync(filePath);
      fs.unlinkSync(filePath); // Supprimer le fichier après lecture
      console.log('Fichier de demande lu et supprimé:', req.file.filename);
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

      const newDemandeInscription = await DemandeInscription.create({
        id_demande: newDemande.id_demande,
        diplomes_precedents,
        specialisation_souhaitee,
        notes_transcription,
        fichier_demande: fichier_demande,

      });

      newDemandeDetails = newDemandeInscription;
      console.log('DemandeInscription créée:', newDemandeInscription);
    } else if (type_demande === 'retrait-provisoire') {
      const { motif_retrait, date_debut_prevue, date_retour_prevue } = demandeData;

      const newDemandeRetraitProvisoires = await DemandeRetraitProvisoires.create({
        id_demande: newDemande.id_demande,
        motif_retrait,
        date_debut_prevue: new Date(date_debut_prevue),
        date_retour_prevue: new Date(date_retour_prevue),
        fichier_demande_retrait: fichier_demande,
      });

      newDemandeDetails = newDemandeRetraitProvisoires;
      console.log('DemandeRetraitProvisoires créée:', newDemandeRetraitProvisoires);
    } else if (type_demande === 'retrait-definitif') {
      const { motif_retrait, date_retrait, observations } = demandeData;

      const newDemandeRetraitDefinitifs = await DemandeRetraitDefinitifs.create({
        id_demande: newDemande.id_demande,
        motif_retrait,
        date_retrait: new Date(date_retrait),
        observations,
        fichier_retrait_definitif: fichier_demande,
      });

      newDemandeDetails = newDemandeRetraitDefinitifs;
      console.log('DemandeRetraitDefinitifs créée:', newDemandeRetraitDefinitifs);
    } else if (type_demande === 'carte-etudiant') {
      const { numero_etudiant, date_delivrance } = demandeData;

      const newDemandeCarteEtudiants = await DemandeCarteEtudiants.create({
        id_demande: newDemande.id_demande,
        numero_etudiant,
        date_delivrance: new Date(date_delivrance),
        fichier_carte_etudiant: fichier_demande,
      });

      newDemandeDetails = newDemandeCarteEtudiants;
      console.log('DemandeCarteEtudiants créée:', newDemandeCarteEtudiants);
    } else if (type_demande === 'email-academique') {
      const { identifiant_souhaite, motif_demande } = demandeData;

      const newDemandeEmailAcademiques = await DemandeEmailAcademiques.create({
        id_demande: newDemande.id_demande,
        identifiant_souhaite,
        motif_demande,
      });

      newDemandeDetails = newDemandeEmailAcademiques;
      console.log('DemandeEmailAcademiques créée:', newDemandeEmailAcademiques);
    }else if (type_demande === 'changement-sujet-these') {
      const { sujet_actuel, nouveau_sujet_propose, justification } = demandeData;

      const newDemandeChangementSujetTheses = await DemandeChangementSujetTheses.create({
        id_demande: newDemande.id_demande,
        sujet_actuel,
        nouveau_sujet_propose,
        justification,
        fichier_demande_changement_sujet:fichier_demande,
      });

      newDemandeDetails = newDemandeChangementSujetTheses;

      console.log('DemandeChangementSujetTheses créée:', newDemandeChangementSujetTheses);
    } else if (type_demande === 'changement-directeur-these') {
      const { directeur_actuel, nouveau_directeur_propose, raisons_changement } = demandeData;

      const newDemandeChangementDirecteurTheses = await DemandeChangementDirecteurTheses.create({
        id_demande: newDemande.id_demande,
        directeur_actuel,
        nouveau_directeur_propose,
        raisons_changement,
        fichier_demande_changement_directeur:fichier_demande,
      });

      newDemandeDetails = newDemandeChangementDirecteurTheses;
      console.log('DemandeChangementDirecteurThese créée:', newDemandeChangementDirecteurTheses

        
      );
    } else if (type_demande === 'reinscription-derogation') {
      const { annee_academique, motif, decision_prise } = demandeData;

      const newDemandeDerogations = await DemandeDerogations.create({
        id_demande: newDemande.id_demande,
        annee_academique,
        motif,
        decision_prise,
        fichier_demande_reinscription:fichier_demande,
      });

      newDemandeDetails = newDemandeDerogations;
      console.log('ReinscriptionDerogation créée:', newDemandeDerogations);


     } else if (type_demande === 'convention-stage') {
      const { entreprise_accueil, periode_stage, objectifs_stage } = demandeData;

      const newConventionStages = await ConventionStages.create({
        id_demande: newDemande.id_demande,
        entreprise_accueil,
        periode_stage,
        objectifs_stage,
        fichier_demande_stage: fichier_demande,
      });

      newDemandeDetails = newConventionStages;
      console.log('ConventionStages créée:', newConventionStages);
    } else if (type_demande === 'cotutelle') {
      const { universite_partenaire, pays, duree_cotutelle } = demandeData;

      const newCotutelles = await Cotutelles.create({
        id_demande: newDemande.id_demande,
        universite_partenaire,
        pays,
        duree_cotutelle,
        fichier_demande_cotutelle: fichier_demande,
      });

      newDemandeDetails = newCotutelles;
      console.log('Cotutelles créée:', newCotutelles);
    } else if (type_demande === 'changement-codirecteur-these') {
      const { co_directeur_actuel, nouveau_co_directeur_propose, motifs_changement } = demandeData;

      const newDemandeChangementCodirecteurTheses = await DemandeChangementCodirecteurTheses.create({
        id_demande: newDemande.id_demande,
        co_directeur_actuel,
        nouveau_co_directeur_propose,
        motifs_changement,
        fichier_demande_changement_codirecteur: fichier_demande,
      });

      newDemandeDetails = newDemandeChangementCodirecteurTheses;
      console.log('DemandeChangementCodirecteurTheses créée:', newDemandeChangementCodirecteurTheses);
    } else if (type_demande === 'imists') { const { titre_these, directeur_these, date_debut_these, date_prevue_soutenance, fichiers_cv } = demandeData; const newDemandeIMISTs = await DemandeIMISTs.create({ id_demande: newDemande.id_demande, titre_these, directeur_these,
        date_debut_these,
        date_prevue_soutenance,
        fichiers_cv: fichier_demande,
      });

      newDemandeDetails = newDemandeIMISTs;
      console.log('DemandeIMIST créée:', newDemandeIMISTs);
    } else if (type_demande === 'tirage') {
      const { titre_these, nombre_exemplaires, date_soutenance } = demandeData;

      const newDemandeTirages = await DemandeTirages.create({
        id_demande: newDemande.id_demande,
        titre_these,
        nombre_exemplaires,
        date_soutenance: new Date(date_soutenance),
        fichier_demande_tirage: fichier_demande,
      });

      newDemandeDetails = newDemandeTirages;
      console.log('DemandeTirages créée:', newDemandeTirages);
    }
    
  
    res.status(201).json({ newDemande, newDemandeDetails });
  } catch (error) {
    console.error('Erreur lors de la création de la demande:', error);
    res.status(500).json({ error: 'Échec de la création de la demande' });
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




// Méthode PUT pour mettre à jour une demande
exports.updateDemande = async (req, res) => {
  try {
    const id_utilisateur = req.user.userId;

    // Trouver le doctorant correspondant à l'utilisateur
    const doctorant = await Doctorant.findOne({ where: { id_utilisateur } });
    if (!doctorant) {
      return res.status(404).json({ message: 'Doctorant non trouvé pour cet utilisateur.' });
    }

    const id_doctorant = doctorant.id_doctorant; // Utiliser l'ID du doctorant pour la recherche

    const { id_demande } = req.params;
    const { type_demande } = req.body;
    const demandeData = req.body.demandeData || {}; // Assurez-vous que demandeData est défini

    const demande = await Demande.findOne({ where: { id_demande, id_doctorant } });

    if (!demande) {
      return res.status(404).json({ message: 'Demande non trouvée ou accès non autorisé.' });
    }

    let fichier_demande = null;
    if (req.file) {
      const filePath = path.join(__dirname, '../uploads', req.file.filename);
      fichier_demande = fs.readFileSync(filePath);
      fs.unlinkSync(filePath); // Supprimer le fichier après lecture
    }

    let updatedDemandeDetails = null;

    // Logique de mise à jour selon le type de demande
    if (type_demande === 'inscription') {
      const { diplomes_precedents, specialisation_souhaitee, notes_transcription } = demandeData;
      console.log('Données de la demande :', demandeData);

      updatedDemandeDetails = await DemandeInscription.update({
        diplomes_precedents,
        specialisation_souhaitee,
        notes_transcription,
        fichier_demande,
      }, { where: { id_demande } });

    } else if (type_demande === 'retrait-provisoire') {
      const { motif_retrait, date_debut_prevue, date_retour_prevue } = demandeData;
      updatedDemandeDetails = await DemandeRetraitProvisoires.update({
        motif_retrait,
        date_debut_prevue: new Date(date_debut_prevue),
        date_retour_prevue: new Date(date_retour_prevue),
        fichier_demande_retrait: fichier_demande,
      }, { where: { id_demande } });

    } else if (type_demande === 'retrait-definitif') {
      const { motif_retrait, date_retrait, observations } = demandeData;
      updatedDemandeDetails = await DemandeRetraitDefinitifs.update({
        motif_retrait,
        date_retrait: new Date(date_retrait),
        observations,
        fichier_retrait_definitif: fichier_demande,
      }, { where: { id_demande } });

    } else if (type_demande === 'carte-etudiant') {
      const { numero_etudiant, date_delivrance } = demandeData;
      updatedDemandeDetails = await DemandeCarteEtudiants.update({
        numero_etudiant,
        date_delivrance: new Date(date_delivrance),
        fichier_carte_etudiant: fichier_demande,
      }, { where: { id_demande } });

    } else if (type_demande === 'email-academique') {
      const { identifiant_souhaite, motif_demande } = demandeData;
      updatedDemandeDetails = await DemandeEmailAcademiques.update({
        identifiant_souhaite,
        motif_demande,
      }, { where: { id_demande } });

    } else if (type_demande === 'changement-sujet-these') {
      const { sujet_actuel, nouveau_sujet_propose, justification } = demandeData;
      updatedDemandeDetails = await DemandeChangementSujetTheses.update({
        sujet_actuel,
        nouveau_sujet_propose,
        justification,
        fichier_demande_changement_sujet: fichier_demande,
      }, { where: { id_demande } });

    } else if (type_demande === 'changement-directeur-these') {
      const { directeur_actuel, nouveau_directeur_propose, raisons_changement } = demandeData;
      updatedDemandeDetails = await DemandeChangementDirecteurTheses.update({
        directeur_actuel,
        nouveau_directeur_propose,
        raisons_changement,
        fichier_demande_changement_directeur: fichier_demande,
      }, { where: { id_demande } });

    } else if (type_demande === 'reinscription-derogation') {
      const { annee_academique, motif, decision_prise } = demandeData;
      updatedDemandeDetails = await DemandeDerogations.update({
        annee_academique,
        motif,
        decision_prise,
        fichier_demande_reinscription: fichier_demande,
      }, { where: { id_demande } });

    } else if (type_demande === 'convention-stage') {
      const { entreprise_accueil, periode_stage, objectifs_stage } = demandeData;
      updatedDemandeDetails = await ConventionStages.update({
        entreprise_accueil,
        periode_stage,
        objectifs_stage,
        fichier_demande_stage: fichier_demande,
      }, { where: { id_demande } });

    } else if (type_demande === 'cotutelle') {
      const { universite_partenaire, pays, duree_cotutelle } = demandeData;
      updatedDemandeDetails = await Cotutelles.update({
        universite_partenaire,
        pays,
        duree_cotutelle,
        fichier_demande_cotutelle: fichier_demande,
      }, { where: { id_demande } });

    } else if (type_demande === 'changement-codirecteur-these') {
      const { co_directeur_actuel, nouveau_co_directeur_propose, motifs_changement } = demandeData;
      updatedDemandeDetails = await DemandeChangementCodirecteurTheses.update({
        co_directeur_actuel,
        nouveau_co_directeur_propose,
        motifs_changement,
        fichier_demande_changement_codirecteur: fichier_demande,
      }, { where: { id_demande } });

    } else if (type_demande === 'imists') {
      const { titre_these, directeur_these, date_debut_these, date_prevue_soutenance } = demandeData;
      updatedDemandeDetails = await DemandeIMISTs.update({
        titre_these,
        directeur_these,
        date_debut_these,
        date_prevue_soutenance,
        fichiers_cv: fichier_demande,
      }, { where: { id_demande } });

    } else if (type_demande === 'tirage') {
      const { titre_these, nombre_exemplaires, date_soutenance } = demandeData;
      updatedDemandeDetails = await DemandeTirages.update({
        titre_these,
        nombre_exemplaires,
        date_soutenance: new Date(date_soutenance),
        fichier_demande_tirage: fichier_demande,
      }, { where: { id_demande } });

    }

    if (!updatedDemandeDetails) {
      return res.status(400).json({ message: 'Échec de la mise à jour de la demande.' });
    }

    console.log('Type de demande:', type_demande);
console.log('Données de la demande:', demandeData);

    res.status(200).json({ message: 'Demande mise à jour avec succès.', updatedDemandeDetails });
  } catch (error) {
    console.error('Erreur lors de la mise à jour de la demande:', error);
    res.status(500).json({ error: 'Échec de la mise à jour de la demande' });
  }
};
