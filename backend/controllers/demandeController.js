// const { Demande, DemandeInscription, Doctorant } = require('../models');

// // Create a new demand
// exports.createDemande = async (req, res) => {
//   try {
//     const id_utilisateur = req.user.userId; // Récupérer l'ID de l'utilisateur depuis le token JWT
//     const doctorant = await Doctorant.findOne({ where: { id_utilisateur } });

//     if (!doctorant) {
//       return res.status(404).json({ message: 'Doctorant non trouvé.' });
//     }

//     const id_doctorant = doctorant.id_doctorant;
//     const { type_demande, date_soumission, demandeData } = req.body;

//     // Vérifier que type_demande n'est pas vide
//     if (!type_demande) {
//       return res.status(400).json({ message: 'Le type de demande est requis.' });
//     }

//     // Créer une nouvelle demande avec statut par défaut 'en cours de traitement'
//     const newDemande = await Demande.create({
//       type_demande,
//       statut: 'en cours de traitement',
//       date_soumission: new Date(date_soumission), // Assurez-vous que date_soumission est au format Date
//       id_doctorant,
//     });

//     // Si la demande est de type 'inscription', créer une DemandeInscription correspondante
//     if (type_demande === 'Inscription') {
//       const { diplomes_precedents, specialisation_souhaitee, notes_transcription, fichier_demande } = demandeData;
//       await DemandeInscription.create({
//         id_demande: newDemande.id_demande,
//         diplomes_precedents,
//         specialisation_souhaitee,
//         notes_transcription,
//         fichier_demande,
//       });
//     }

//     res.status(201).json(newDemande);
//   } catch (error) {
//     console.error('Error creating demand:', error);
//     res.status(500).json({ error: 'Failed to create demand' });
//   }
// };


// const { Demande, DemandeInscription, Doctorant } = require('../models');

// // Create a new demand
// exports.createDemande = async (req, res) => {
//   try {
//     const id_utilisateur = req.user.userId; // Récupérer l'ID de l'utilisateur depuis le token JWT
//     const doctorant = await Doctorant.findOne({ where: { id_utilisateur } });

//     if (!doctorant) {
//       return res.status(404).json({ message: 'Doctorant non trouvé.' });
//     }

//     const id_doctorant = doctorant.id_doctorant;
//     const { type_demande, date_soumission, demandeData } = req.body;

//     console.log('Type de demande reçu:', type_demande);
//     console.log('Données de la demande:', demandeData);

//     // Vérifier que type_demande n'est pas vide
//     if (!type_demande) {
//       return res.status(400).json({ message: 'Le type de demande est requis.' });
//     }

//     // Créer une nouvelle demande avec statut par défaut 'en cours de traitement'
//     const newDemande = await Demande.create({
//       type_demande,
//       statut: 'en cours de traitement',
//       date_soumission: new Date(date_soumission), // Assurez-vous que date_soumission est au format Date
//       id_doctorant,
//     });

//     console.log('Nouvelle demande créée:', newDemande);

//     // Si la demande est de type 'Inscription', créer une DemandeInscription correspondante
//     if (type_demande === 'inscription') {
//       console.log('Création de la DemandeInscription');

//       const { diplomes_precedents, specialisation_souhaitee, notes_transcription, fichier_demande } = demandeData;

//       const newDemandeInscription = await DemandeInscription.create({
//         id_demande: newDemande.id_demande,
//         diplomes_precedents,
//         specialisation_souhaitee,
//         notes_transcription,
//         fichier_demande,
//       });

//       console.log('DemandeInscription créée:', newDemandeInscription);
//     }

//     res.status(201).json(newDemande);
//   } catch (error) {
//     console.error('Error creating demand:', error);
//     res.status(500).json({ error: 'Failed to create demand' });
//   }
// };


// const { Demande, DemandeInscription, Doctorant } = require('../models');

// // Create a new demand
// exports.createDemande = async (req, res) => {
//   try {
//     const id_utilisateur = req.user.userId; // Récupérer l'ID de l'utilisateur depuis le token JWT
//     const doctorant = await Doctorant.findOne({ where: { id_utilisateur } });

//     if (!doctorant) {
//       return res.status(404).json({ message: 'Doctorant non trouvé.' });
//     }

//     const id_doctorant = doctorant.id_doctorant;
//     const { type_demande, date_soumission, demandeData } = req.body;

//     console.log('Type de demande reçu:', type_demande);
//     console.log('Données de la demande:', demandeData);

//     // Vérifier que type_demande n'est pas vide
//     if (!type_demande) {
//       return res.status(400).json({ message: 'Le type de demande est requis.' });
//     }

//     // Vérifiez et formatez la date de soumission
//     const formattedDateSoumission = new Date(date_soumission);
//     if (isNaN(formattedDateSoumission)) {
//       return res.status(400).json({ message: 'Date de soumission invalide.' });
//     }

//     // Créer une nouvelle demande avec statut par défaut 'en cours de traitement'
//     const newDemande = await Demande.create({
//       type_demande,
//       statut: 'en cours de traitement',
//       date_soumission: formattedDateSoumission,
//       id_doctorant,
//     });

//     console.log('Nouvelle demande créée:', newDemande);

//     // Si la demande est de type 'inscription', créer une DemandeInscription correspondante
//     if (type_demande === 'inscription') {
//       console.log('Création de la DemandeInscription');

//       const { diplomes_precedents, specialisation_souhaitee, notes_transcription, fichier_demande } = demandeData;

//       // Convertir fichier_demande en chaîne (par exemple base64) avant de le sauvegarder
//       const fichierDemandeString = fichier_demande ? fichier_demande.toString('base64') : null;

//       const newDemandeInscription = await DemandeInscription.create({
//         id_demande: newDemande.id_demande,
//         diplomes_precedents,
//         specialisation_souhaitee,
//         notes_transcription,
//         fichier_demande: fichierDemandeString,
//       });

//       console.log('DemandeInscription créée:', newDemandeInscription);
//     }

//     res.status(201).json(newDemande);
//   } catch (error) {
//     console.error('Error creating demand:', error);
//     res.status(500).json({ error: 'Failed to create demand' });
//   }
// };






// const { Demande, DemandeInscription, Doctorant } = require('../models');
// const fs = require('fs');
// const path = require('path');

// // Create a new demand
// exports.createDemande = async (req, res) => {
//   try {
//     const id_utilisateur = req.user.userId; // Récupérer l'ID de l'utilisateur depuis le token JWT
//     const doctorant = await Doctorant.findOne({ where: { id_utilisateur } });

//     if (!doctorant) {
//       return res.status(404).json({ message: 'Doctorant non trouvé.' });
//     }

//     const id_doctorant = doctorant.id_doctorant;
//     const { type_demande, date_soumission } = req.body;
//     const demandeData = JSON.parse(req.body.demandeData);

//     console.log('Type de demande reçu:', type_demande);
//     console.log('Données de la demande:', demandeData);

//     // Vérifier que type_demande n'est pas vide
//     if (!type_demande) {
//       return res.status(400).json({ message: 'Le type de demande est requis.' });
//     }

//     // Vérifiez et formatez la date de soumission
//     const formattedDateSoumission = new Date(date_soumission);
//     if (isNaN(formattedDateSoumission)) {
//       return res.status(400).json({ message: 'Date de soumission invalide.' });
//     }

//     // Créer une nouvelle demande avec statut par défaut 'en cours de traitement'
//     const newDemande = await Demande.create({
//       type_demande,
//       statut: 'en cours de traitement',
//       date_soumission: formattedDateSoumission,
//       id_doctorant,
//     });

//     console.log('Nouvelle demande créée:', newDemande);

//     // Si la demande est de type 'inscription', créer une DemandeInscription correspondante
//     if (type_demande === 'inscription') {
//       console.log('Création de la DemandeInscription');

//       const { diplomes_precedents, specialisation_souhaitee, notes_transcription } = demandeData;
//       let fichierDemandeString = null;

//       if (req.file) {
//         fichierDemandeString = req.file.buffer.toString('base64');
//       }

//       const newDemandeInscription = await DemandeInscription.create({
//         id_demande: newDemande.id_demande,
//         diplomes_precedents,
//         specialisation_souhaitee,
//         notes_transcription,
//         fichier_demande: fichierDemandeString,
//       });

//       console.log('DemandeInscription créée:', newDemandeInscription);
//     }

//     res.status(201).json(newDemande);
//   } catch (error) {
//     console.error('Error creating demand:', error);
//     res.status(500).json({ error: 'Failed to create demand' });
//   }
// };









// const { Demande, DemandeInscription, Doctorant } = require('../models');

// // Create a new demand
// exports.createDemande = async (req, res) => {
//   try {
//     const id_utilisateur = req.user.userId; // Récupérer l'ID de l'utilisateur depuis le token JWT
//     const doctorant = await Doctorant.findOne({ where: { id_utilisateur } });

//     if (!doctorant) {
//       return res.status(404).json({ message: 'Doctorant non trouvé.' });
//     }

//     const id_doctorant = doctorant.id_doctorant;
//     const { type_demande, date_soumission, demandeData } = req.body;

//     console.log('Type de demande reçu:', type_demande);
//     console.log('Données de la demande:', demandeData);

//     // Vérifier que type_demande n'est pas vide
//     if (!type_demande) {
//       return res.status(400).json({ message: 'Le type de demande est requis.' });
//     }

//     // Vérifiez et formatez la date de soumission
//     const formattedDateSoumission = new Date(date_soumission);
//     if (isNaN(formattedDateSoumission)) {
//       return res.status(400).json({ message: 'Date de soumission invalide.' });
//     }

//     // Créer une nouvelle demande avec statut par défaut 'en cours de traitement'
//     const newDemande = await Demande.create({
//       type_demande,
//       statut: 'en cours de traitement',
//       date_soumission: formattedDateSoumission,
//       id_doctorant,
//     });

//     console.log('Nouvelle demande créée:', newDemande);

//     // Si la demande est de type 'inscription', créer une DemandeInscription correspondante
//     if (type_demande === 'inscription') {
//       console.log('Création de la DemandeInscription');

//       const { diplomes_precedents, specialisation_souhaitee, notes_transcription } = demandeData;

//       // Utilisez req.file pour accéder au fichier téléchargé
//       const fichier_demande = req.file ? req.file.buffer.toString('base64') : null;

//       const newDemandeInscription = await DemandeInscription.create({
//         id_demande: newDemande.id_demande,
//         diplomes_precedents,
//         specialisation_souhaitee,
//         notes_transcription,
//         fichier_demande,
//       });

//       console.log('DemandeInscription créée:', newDemandeInscription);
//     }

//     res.status(201).json(newDemande);
//   } catch (error) {
//     console.error('Error creating demand:', error);
//     res.status(500).json({ error: 'Failed to create demand' });
//   }
// };




// // controllers/demandeController.js

// const { Demande, DemandeInscription, Doctorant } = require('../models');

// exports.createDemande = async (req, res) => {
//   try {
//     const id_utilisateur = req.user.userId; // Récupérer l'ID de l'utilisateur depuis le token JWT
//     const doctorant = await Doctorant.findOne({ where: { id_utilisateur } });

//     if (!doctorant) {
//       return res.status(404).json({ message: 'Doctorant non trouvé.' });
//     }

//     const id_doctorant = doctorant.id_doctorant;
//     const { type_demande, date_soumission, demandeData } = req.body;

//     // Vérifier que type_demande n'est pas vide
//     if (!type_demande) {
//       return res.status(400).json({ message: 'Le type de demande est requis.' });
//     }

//     // Vérifiez et formatez la date de soumission
//     const formattedDateSoumission = new Date(date_soumission);
//     if (isNaN(formattedDateSoumission)) {
//       return res.status(400).json({ message: 'Date de soumission invalide.' });
//     }

//     // Créer une nouvelle demande avec statut par défaut 'en cours de traitement'
//     const newDemande = await Demande.create({
//       type_demande,
//       statut: 'en cours de traitement',
//       date_soumission: formattedDateSoumission,
//       id_doctorant,
//     });

//     // Si la demande est de type 'inscription', créer une DemandeInscription correspondante
//     if (type_demande === 'inscription') {
//       const { diplomes_precedents, specialisation_souhaitee, notes_transcription } = demandeData;

//       // Utilisez req.file pour accéder au fichier téléchargé
//       const fichier_demande = req.file ? req.file.buffer : null;
//       const newDemandeInscription = await DemandeInscription.create({
//         id_demande: newDemande.id_demande,
//         diplomes_precedents,
//         specialisation_souhaitee,
//         notes_transcription,
//         fichier_demande,
//       });

//       console.log('DemandeInscription créée:', newDemandeInscription);
//     }

//     res.status(201).json(newDemande);
//   } catch (error) {
//     console.error('Error creating demand:', error);
//     res.status(500).json({ error: 'Failed to create demand' });
//   }
// };












// const { Demande, DemandeInscription, Doctorant } = require('../models');

// exports.createDemande = async (req, res) => {
//   try {
//     const id_utilisateur = req.user.userId;
//     const doctorant = await Doctorant.findOne({ where: { id_utilisateur } });

//     if (!doctorant) {
//       return res.status(404).json({ message: 'Doctorant non trouvé.' });
//     }

//     const id_doctorant = doctorant.id_doctorant;
//     const { type_demande, date_soumission, demandeData } = req.body;

//     if (!type_demande) {
//       return res.status(400).json({ message: 'Le type de demande est requis.' });
//     }

//     const formattedDateSoumission = new Date(date_soumission);
//     if (isNaN(formattedDateSoumission)) {
//       return res.status(400).json({ message: 'Date de soumission invalide.' });
//     }

//     const newDemande = await Demande.create({
//       type_demande,
//       statut: 'en cours de traitement',
//       date_soumission: formattedDateSoumission,
//       id_doctorant,
//     });

//     if (type_demande === 'inscription') {
//       const { diplomes_precedents, specialisation_souhaitee, notes_transcription } = demandeData;
//       const fichier_demande = req.file ? req.file.buffer : null;

//       const newDemandeInscription = await DemandeInscription.create({
//         id_demande: newDemande.id_demande,
//         diplomes_precedents,
//         specialisation_souhaitee,
//         notes_transcription,
//         fichier_demande,
//       });

//       console.log('DemandeInscription créée:', newDemandeInscription);
//     }

//     res.status(201).json(newDemande);
//   } catch (error) {
//     console.error('Erreur lors de la création de la demande:', error);
//     res.status(500).json({ error: 'Échec de la création de la demande' });
//   }
// };



// // controllers/demandeController.js
// const { Demande, DemandeInscription, Doctorant } = require('../models');
// const DemandeInscription = db.DemandeInscription;

// const createDemandeInscription = async (req, res) => {
//   const { id_demande, diplomes_precedents, specialisation_souhaitee, notes_transcription } = req.body;
//   const fichier_demande = req.file ? req.file.buffer : null;

//   try {
//     const demandeInscription = await DemandeInscription.create({
//       id_demande,
//       diplomes_precedents,
//       specialisation_souhaitee,
//       notes_transcription,
//       fichier_demande,
//     });
//     res.status(201).json(demandeInscription);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// module.exports = {
//   createDemandeInscription,
// };






// const fs = require('fs');
// const path = require('path');
// const { Demande, DemandeInscription, DemandeRetraitProvisoires, Doctorant } = require('../models');

// exports.createDemande = async (req, res) => {
//   try {
//     const id_utilisateur = req.user.userId;
//     const doctorant = await Doctorant.findOne({ where: { id_utilisateur } });

//     if (!doctorant) {
//       return res.status(404).json({ message: 'Doctorant non trouvé.' });
//     }

//     const id_doctorant = doctorant.id_doctorant;
//     const { type_demande, date_soumission, demandeData } = req.body;

//     if (!type_demande) {
//       return res.status(400).json({ message: 'Le type de demande est requis.' });
//     }

//     // Valider et formater la date de soumission
//     const formattedDateSoumission = new Date(date_soumission || Date.now());

//     let fichier_demande = null;

//     if (req.file) {
//       const filePath = path.join(__dirname, '../uploads', req.file.filename);
//       fichier_demande = fs.readFileSync(filePath);
//       fs.unlinkSync(filePath); // Supprimer le fichier après lecture
//       console.log('Fichier de demande lu et supprimé:', req.file.filename);
//     }

//     const newDemande = await Demande.create({
//       type_demande,
//       statut: 'en cours de traitement',
//       date_soumission: formattedDateSoumission,
//       id_doctorant,
//     });

//     let newDemandeDetails = null;

//     if (type_demande === 'inscription') {
//       const { diplomes_precedents, specialisation_souhaitee, notes_transcription } = demandeData;

//       const newDemandeInscription = await DemandeInscription.create({
//         id_demande: newDemande.id_demande,
//         diplomes_precedents,
//         specialisation_souhaitee,
//         notes_transcription,
//         fichier_demande,
//       });

//       newDemandeDetails = newDemandeInscription;
//       console.log('DemandeInscription créée:', newDemandeInscription);
//     } else if (type_demande === 'retrait-provisoire') {
//       const { motif_retrait, date_debut_prevue, date_retour_prevue } = demandeData;

//       const newDemandeRetraitProvisoires = await DemandeRetraitProvisoires.create({
//         id_demande: newDemande.id_demande,
//         motif_retrait,
//         date_debut_prevue: new Date(date_debut_prevue),
//         date_retour_prevue: new Date(date_retour_prevue),
//         fichier_demande,
//       });

//       newDemandeDetails = newDemandeRetraitProvisoires;
//       console.log('DemandeRetraitProvisoires créée:', newDemandeRetraitProvisoires);
//     }

//     res.status(201).json({ newDemande, newDemandeDetails });
//   } catch (error) {
//     console.error('Erreur lors de la création de la demande:', error);
//     res.status(500).json({ error: 'Échec de la création de la demande' });
//   }
// };


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

