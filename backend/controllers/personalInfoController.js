// const { InfosPersonnelles, InfosBaccalaureat, InfosUniversitaires, InfosCycleDoctoral } = require('../models');

// // Récupérer les informations personnelles d'un doctorant
// exports.getPersonalInfo = async (req, res) => {
//   try {
//     const id_doctorant = req.user.userId; // Utiliser req.user.userId, car c'est ce que vous avez stocké dans le token JWT
//     const personalInfo = await InfosPersonnelles.findOne({ where: { id_doctorant } });
//     const baccalaureatInfo = await InfosBaccalaureat.findOne({ where: { id_doctorant } });
//     const universitairesInfo = await InfosUniversitaires.findOne({ where: { id_doctorant } });
//     const cycleDoctoralInfo = await InfosCycleDoctoral.findOne({ where: { id_doctorant } });

//     res.status(200).json({
//       personalInfo,
//       baccalaureatInfo,
//       universitairesInfo,
//       cycleDoctoralInfo
//     });
//   } catch (error) {
//     console.error('Erreur lors de la récupération des informations :', error);
//     res.status(500).json({ message: 'Erreur lors de la récupération des informations.', error });
//   }
// };

// // Créer ou mettre à jour les informations personnelles
// exports.createOrUpdatePersonalInfo = async (req, res) => {
//   try {
//     const id_doctorant = req.user.userId; // Utiliser req.user.userId

//     // Informations personnelles
//     await InfosPersonnelles.upsert({
//       id_doctorant,
//       civilite: req.body.civilite,
//       sexe: req.body.sexe,
//       nom: req.body.nom,
//       prenom: req.body.prenom,
//       date_naissance: new Date(req.body.date_naissance), // Assurez-vous que la date est correctement traitée
//       email: req.body.email,
//       telephone: req.body.telephone,
//       lieu_naissance: req.body.lieu_naissance,
//       cnie: req.body.cnie,
//       situation_socioprofessionnelle: req.body.situation_socioprofessionnelle
//     });

//     // Informations de baccalauréat
//     await InfosBaccalaureat.upsert({
//       id_doctorant,
//       annee_bac: req.body.annee_bac,
//       type_bac: req.body.type_bac,
//       mention: req.body.mention,
//       cne_massar: req.body.cne_massar,
//       serie_bac: req.body.serie_bac,
//       academie: req.body.academie,
//       province: req.body.province
//     });

//     // Informations universitaires
//     await InfosUniversitaires.upsert({
//       id_doctorant,
//       diplome: req.body.diplome,
//       etablissement: req.body.etablissement,
//       universite: req.body.universite
//     });

//     // Informations du cycle doctoral
//     await InfosCycleDoctoral.upsert({
//       id_doctorant,
//       formation_doctorale: req.body.formation_doctorale,
//       annee_soutenance_prevue: req.body.annee_soutenance_prevue,
//       specialite: req.body.specialite,
//       directeur_these: req.body.directeur_these,
//       structure_recherche_directeur: req.body.structure_recherche_directeur,
//       co_directeur_these: req.body.co_directeur_these,
//       structure_recherche_co_directeur: req.body.structure_recherche_co_directeur,
//       universite_cotutelle: req.body.universite_cotutelle,
//       sujet_recherche: req.body.sujet_recherche
//     });

//     res.status(200).json({ message: 'Informations mises à jour avec succès.' });
//   } catch (error) {
//     console.error('Erreur lors de la mise à jour des informations :', error);
//     res.status(500).json({ message: 'Erreur lors de la mise à jour des informations.', error });
//   }
// };

const { InfosPersonnelles, InfosBaccalaureats, InfosUniversitaires, InfosCycleDoctorals, Doctorant } = require('../models');

// Récupérer les informations personnelles d'un doctorant
exports.getPersonalInfo = async (req, res) => {
  try {
    const id_utilisateur = req.user.userId; // Récupérer l'ID de l'utilisateur depuis le token JWT
    const doctorant = await Doctorant.findOne({ where: { id_utilisateur } });

    if (!doctorant) {
      return res.status(404).json({ message: 'Doctorant non trouvé.' });
    }

    const id_doctorant = doctorant.id_doctorant;

    const personalInfo = await InfosPersonnelles.findOne({ where: { id_doctorant } });
    const baccalaureatInfo = await InfosBaccalaureats.findOne({ where: { id_doctorant } });
    const universitairesInfo = await InfosUniversitaires.findOne({ where: { id_doctorant } });
    const cycleDoctoralInfo = await InfosCycleDoctorals.findOne({ where: { id_doctorant } });

    res.status(200).json({
      personalInfo,
      baccalaureatInfo,
      universitairesInfo,
      cycleDoctoralInfo
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des informations :', error);
    res.status(500).json({ message: 'Erreur lors de la récupération des informations.', error });
  }
};

// Créer ou mettre à jour les informations personnelles
exports.createOrUpdatePersonalInfo = async (req, res) => {
  try {
    const id_utilisateur = req.user.userId; // Récupérer l'ID de l'utilisateur depuis le token JWT
    const doctorant = await Doctorant.findOne({ where: { id_utilisateur } });

    if (!doctorant) {
      return res.status(404).json({ message: 'Doctorant non trouvé.' });
    }

    const id_doctorant = doctorant.id_doctorant;

    // Informations personnelles
    await InfosPersonnelles.upsert({
      id_doctorant,
      civilite: req.body.civilite,
      sexe: req.body.sexe,
      nom: req.body.nom,
      prenom: req.body.prenom,
      date_naissance: new Date(req.body.date_naissance), // Assurez-vous que la date est correctement traitée
      email: req.body.email,
      telephone: req.body.telephone,
      lieu_naissance: req.body.lieu_naissance,
      cnie: req.body.cnie,
      situation_socioprofessionnelle: req.body.situation_socioprofessionnelle
    });

    // Informations de baccalauréat
    await InfosBaccalaureats.upsert({
      id_doctorant,
      annee_bac: req.body.annee_bac,
      type_bac: req.body.type_bac,
      mention: req.body.mention,
      cne_massar: req.body.cne_massar,
      serie_bac: req.body.serie_bac,
      academie: req.body.academie,
      province: req.body.province
    });

    // Informations universitaires
    await InfosUniversitaires.upsert({
      id_doctorant,
      diplome: req.body.diplome,
      etablissement: req.body.etablissement,
      universite: req.body.universite
    });

    // Informations du cycle doctoral
    await InfosCycleDoctorals.upsert({
      id_doctorant,
      formation_doctorale: req.body.formation_doctorale,
      annee_soutenance_prevue: req.body.annee_soutenance_prevue,
      specialite: req.body.specialite,
      directeur_these: req.body.directeur_these,
      structure_recherche_directeur: req.body.structure_recherche_directeur,
      co_directeur_these: req.body.co_directeur_these,
      structure_recherche_co_directeur: req.body.structure_recherche_co_directeur,
      universite_cotutelle: req.body.universite_cotutelle,
      sujet_recherche: req.body.sujet_recherche
    });

    res.status(200).json({ message: 'Informations mises à jour avec succès.' });
  } catch (error) {
    console.error('Erreur lors de la mise à jour des informations :', error);
    res.status(500).json({ message: 'Erreur lors de la mise à jour des informations.', error });
  }
};

