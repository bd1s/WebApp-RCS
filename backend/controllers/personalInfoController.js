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

const validateAndFormatDate = (dateStr) => {
  // Vérifier si la date correspond au format YYYY-MM-DD ou YYYY/MM/DD
  const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/; // YYYY-MM-DD
  const altDateRegex = /^\d{4}\/(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])$/; // YYYY/MM/DD

  if (dateRegex.test(dateStr)) {
    return new Date(dateStr).toISOString();
  } else if (altDateRegex.test(dateStr)) {
    return new Date(dateStr.replace('/', '-')).toISOString();
  } else {
    throw new Error('Format de date invalide. Veuillez utiliser YYYY-MM-DD ou YYYY/MM/DD.');
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

    // Vérifier l'existence des informations personnelles
    let personalInfo = await InfosPersonnelles.findOne({ where: { id_doctorant } });

    if (!personalInfo) {
      // Créer un nouvel enregistrement si aucun n'existe
      personalInfo = await InfosPersonnelles.create({
        id_doctorant,
        civilite: req.body.civilite,
        sexe: req.body.sexe,
        nom: req.body.nom,
        prenom: req.body.prenom,
        date_naissance: validateAndFormatDate(req.body.date_naissance), // Valider et convertir la date
        email: req.body.email,
        telephone: req.body.telephone,
        lieu_naissance: req.body.lieu_naissance,
        cnie: req.body.cnie,
        situation_socioprofessionnelle: req.body.situation_socioprofessionnelle
      });
    } else {
      // Mettre à jour les informations existantes
      await InfosPersonnelles.update({
        civilite: req.body.civilite,
        sexe: req.body.sexe,
        nom: req.body.nom,
        prenom: req.body.prenom,
        date_naissance: validateAndFormatDate(req.body.date_naissance),
        email: req.body.email,
        telephone: req.body.telephone,
        lieu_naissance: req.body.lieu_naissance,
        cnie: req.body.cnie,
        situation_socioprofessionnelle: req.body.situation_socioprofessionnelle
      }, {
        where: { id_doctorant }
      });
    }
    // Informations de baccalauréat
    // Informations de baccalauréat
let baccalaureatInfo = await InfosBaccalaureats.findOne({ where: { id_doctorant } });

if (!baccalaureatInfo) {
  // Créer un nouvel enregistrement si aucun n'existe
  baccalaureatInfo = await InfosBaccalaureats.create({
    id_doctorant,
    annee_bac: req.body.annee_bac,
    type_bac: req.body.type_bac,
    mention: req.body.mention,
    cne_massar: req.body.cne_massar,
    serie_bac: req.body.serie_bac,
    academie: req.body.academie,
    province: req.body.province
  });
} else {
  // Mettre à jour les informations existantes
  await InfosBaccalaureats.update({
    annee_bac: req.body.annee_bac,
    type_bac: req.body.type_bac,
    mention: req.body.mention,
    cne_massar: req.body.cne_massar,
    serie_bac: req.body.serie_bac,
    academie: req.body.academie,
    province: req.body.province
  }, {
    where: { id_doctorant }
  });
}

    // Informations universitaires
let universitairesInfo = await InfosUniversitaires.findOne({ where: { id_doctorant } });

if (!universitairesInfo) {
  // Créer un nouvel enregistrement si aucun n'existe
  universitairesInfo = await InfosUniversitaires.create({
    id_doctorant,
    diplome: req.body.diplome,
    etablissement: req.body.etablissement,
    universite: req.body.universite
  });
} else {
  // Mettre à jour les informations existantes
  await InfosUniversitaires.update({
    diplome: req.body.diplome,
    etablissement: req.body.etablissement,
    universite: req.body.universite
  }, {
    where: { id_doctorant }
  });
}


    // Informations du cycle doctoral
    // Informations du cycle doctoral
let cycleDoctoralInfo = await InfosCycleDoctorals.findOne({ where: { id_doctorant } });

if (!cycleDoctoralInfo) {
  // Créer un nouvel enregistrement si aucun n'existe
  cycleDoctoralInfo = await InfosCycleDoctorals.create({
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
} else {
  // Mettre à jour les informations existantes
  await InfosCycleDoctorals.update({
    formation_doctorale: req.body.formation_doctorale,
    annee_soutenance_prevue: req.body.annee_soutenance_prevue,
    specialite: req.body.specialite,
    directeur_these: req.body.directeur_these,
    structure_recherche_directeur: req.body.structure_recherche_directeur,
    co_directeur_these: req.body.co_directeur_these,
    structure_recherche_co_directeur: req.body.structure_recherche_co_directeur,
    universite_cotutelle: req.body.universite_cotutelle,
    sujet_recherche: req.body.sujet_recherche
  }, {
    where: { id_doctorant }
  });
}


    res.status(200).json({ message: 'Informations mises à jour avec succès.' });
  } catch (error) {
    console.error('Erreur lors de la mise à jour des informations :', error);
    res.status(500).json({ message: 'Erreur lors de la mise à jour des informations.', error });
  }
};

