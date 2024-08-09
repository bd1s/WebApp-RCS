// // controllers/dashboardController.js
// const { Doctorant,Utilisateur, Enseignant, InfosCycleDoctorals } = require('../models');

// async function getDashboardData(req, res) {
//   try {
//     // Récupération des doctorants avec les informations sur leurs encadrants
//     const doctorants = await Doctorant.findAll({
//       include: [
//         {
//           model: InfosCycleDoctorals,
//           attributes: ['sujet_recherche']
//         },
//         {
//           model: Enseignant,
//           include: [
//             {
//               model: Utilisateur,
//               attributes: ['nom', 'prenom']
//             }
//           ]
//         }
//       ]
//     });

//     // Calcul de la répartition par spécialisation
//     const repartitionSpecialisation = await Doctorant.findAll({
//       attributes: ['specialisation_doctorant', [sequelize.fn('COUNT', sequelize.col('specialisation_doctorant')), 'count']],
//       group: ['specialisation_doctorant']
//     });

//     res.json({
//       doctorants,
//       repartitionSpecialisation
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Erreur interne du serveur' });
//   }
// }

// module.exports = {
//   getDashboardData,
// };






// // controllers/dashboardController.js
// const { Doctorant, InfosCycleDoctorals, Enseignant, Utilisateur } = require('../models');
// const sequelize = require('sequelize');

// async function getDashboardData(req, res) {
//   try {
//     // Récupération des doctorants avec les informations sur leurs encadrants
//     const doctorants = await Doctorant.findAll({
//       attributes: ['id_doctorant'],
//       include: [
//         {
//           model: InfosCycleDoctorals,
//           attributes: ['enseignant_encadrant', 'departement_doctorant', 'specialisation_doctorant'],
//           include: [
//             {
//               model: Enseignant,
//               required: true,
//               attributes: ['departement_enseignement', 'specialisation'],
//               include: [
//                 {
//                   model: Utilisateur,
//                   attributes: ['nom'],
//                   required: true,
//                   where: sequelize.where(
//                     sequelize.col('InfosCycleDoctorals.enseignant_encadrant'),
//                     '=',
//                     sequelize.col('Enseignant->Utilisateur.nom')
//                   ),
//                 },
//               ],
//               where: {
//                 departement_enseignement: sequelize.col('InfosCycleDoctorals.departement_doctorant'),
//                 specialisation: sequelize.col('InfosCycleDoctorals.specialisation_doctorant'),
//               }
//             }
//           ]
//         }
//       ]
//     });

//     res.json({
//       doctorants
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Erreur interne du serveur' });
//   }
// }

// module.exports = {
//   getDashboardData,
// };



// // controllers/dashboardController.js
// const { Doctorant, InfosCycleDoctorals, Enseignant, Utilisateur } = require('../models');
// const sequelize = require('sequelize');

// async function getDashboardData(req, res) {
//   try {
//     // Récupération des doctorants et de leurs informations de cycle doctoral
//     const doctorantsWithCycleInfo = await Doctorant.findAll({
//       include: [
//         {
//           model: InfosCycleDoctorals,
//           attributes: ['enseignant_encadrant', 'departement_doctorant', 'specialisation_doctorant'],
//         }
//       ]
//     });

//     // Récupération des enseignants avec leurs informations utilisateur
//     const enseignantsWithUserInfo = await Enseignant.findAll({
//       include: [
//         {
//           model: Utilisateur,
//           attributes: ['nom']
//         }
//       ]
//     });

//     // Construction de la réponse en associant manuellement les enseignants aux doctorants
//     const results = doctorantsWithCycleInfo.map(doctorant => {
//       const cycleInfo = doctorant.InfosCycleDoctorals;
//       const enseignant = enseignantsWithUserInfo.find(ens => 
//         ens.Utilisateur.nom === cycleInfo.enseignant_encadrant &&
//         ens.departement_enseignement === cycleInfo.departement_doctorant &&
//         ens.specialisation === cycleInfo.specialisation_doctorant
//       );

//       return {
//         doctorant: doctorant,
//         cycleInfo: cycleInfo,
//         enseignant: enseignant ? enseignant.Utilisateur : null
//       };
//     });

//     res.json({
//       doctorants: results
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Erreur interne du serveur' });
//   }
// }

// module.exports = {
//   getDashboardData,
// };





// const { Doctorant, InfosCycleDoctorals, Enseignant, Utilisateur } = require('../models');
// const sequelize = require('sequelize');

// async function getDashboardData(req, res) {
//   try {
//     // Récupération des doctorants et de leurs informations de cycle doctoral
//     const doctorantsWithCycleInfo = await Doctorant.findAll({
//       include: [
//         {
//           model: InfosCycleDoctorals,
//           attributes: ['enseignant_encadrant', 'departement_doctorant', 'specialisation_doctorant'],
//         }
//       ]
//     });

//     // Récupération des enseignants avec leurs informations utilisateur
//     const enseignantsWithUserInfo = await Enseignant.findAll({
//       include: [
//         {
//           model: Utilisateur,
//           attributes: ['nom']
//         }
//       ]
//     });

//     // Construction de la réponse en associant manuellement les enseignants aux doctorants
//     const results = doctorantsWithCycleInfo.map(doctorant => {
//       const cycleInfo = doctorant.InfosCycleDoctorals;
//       const enseignant = enseignantsWithUserInfo.find(ens => 
//         ens.Utilisateur.nom === cycleInfo.enseignant_encadrant &&
//         ens.departement_enseignement === cycleInfo.departement_doctorant &&
//         ens.specialisation === cycleInfo.specialisation_doctorant
//       );

//       return {
//         doctorant: doctorant,
//         cycleInfo: cycleInfo,
//         enseignant: enseignant ? enseignant.Utilisateur : null
//       };
//     });

//     // Calcul de la répartition par spécialisation
//     const repartitionSpecialisation = results.reduce((acc, item) => {
//       const specialisation = item.cycleInfo.specialisation_doctorant;
//       if (specialisation) {
//         if (acc[specialisation]) {
//           acc[specialisation]++;
//         } else {
//           acc[specialisation] = 1;
//         }
//       }
//       return acc;
//     }, {});

//     // Convertir l'objet de répartition en tableau pour le frontend
//     const repartitionArray = Object.keys(repartitionSpecialisation).map(key => ({
//       specialisation_doctorant: key,
//       count: repartitionSpecialisation[key]
//     }));

//     // Vérifier les données avant l'envoi
//     console.log('Données des doctorants avec informations de cycle:', results);
//     console.log('Répartition par spécialisation:', repartitionArray);

//     res.json({
//       doctorants: results,
//       repartitionSpecialisation: repartitionArray
//     });
//   } catch (error) {
//     console.error('Erreur dans la récupération des données:', error);
//     res.status(500).json({ error: 'Erreur interne du serveur' });
//   }
// }

// module.exports = {
//   getDashboardData,
// };

// const { Doctorant,Utilisateur, InfosCycleDoctorals } = require('../models');
// const sequelize = require('sequelize');

// async function getDashboardData(req, res) {
//   try {
//     // Récupération des doctorants avec leurs informations de cycle doctoral
//     const doctorantsWithCycleInfo = await Doctorant.findAll({
//       attributes: ['id_doctorant'],
//       include: [
//         {
//           model: InfosCycleDoctorals,
//           attributes: ['sujet_recherche', 'enseignant_encadrant', 'departement_doctorant', 'specialisation_doctorant'],
//         },
//         {
//           model: Utilisateur,
//           attributes: ['nom', 'prenom'],
//         }
//       ]
//     });

//     // Transformation des données pour correspondre à la structure attendue
//     const results = doctorantsWithCycleInfo.map(doctorant => {
//       const cycleInfo = doctorant.InfosCycleDoctorals;
//       return {
//         Utilisateur: doctorant.Utilisateur,
//         sujet_recherche: cycleInfo.sujet_recherche,
//         enseignant_encadrant: cycleInfo.enseignant_encadrant,
//         departement_doctorant: cycleInfo.departement_doctorant,
//         specialisation_doctorant: cycleInfo.specialisation_doctorant,
//       };
//     });

//     // Calcul de la répartition par spécialisation
//     const repartitionSpecialisation = results.reduce((acc, item) => {
//       const specialisation = item.specialisation_doctorant;
//       if (specialisation) {
//         if (acc[specialisation]) {
//           acc[specialisation]++;
//         } else {
//           acc[specialisation] = 1;
//         }
//       }
//       return acc;
//     }, {});

//     // Convertir l'objet de répartition en tableau pour le frontend
//     const repartitionArray = Object.keys(repartitionSpecialisation).map(key => ({
//       specialisation_doctorant: key,
//       count: repartitionSpecialisation[key]
//     }));

//     // Vérifier les données avant l'envoi
//     console.log('Données des doctorants avec informations de cycle:', results);
//     console.log('Répartition par spécialisation:', repartitionArray);

//     res.json({
//       doctorants: results,
//       repartitionSpecialisation: repartitionArray
//     });
//   } catch (error) {
//     console.error('Erreur dans la récupération des données:', error);
//     res.status(500).json({ error: 'Erreur interne du serveur' });
//   }
// }

// module.exports = {
//   getDashboardData,
// };















// ca marche tres bien specialisation :
// const { Doctorant, InfosCycleDoctorals, Utilisateur } = require('../models');
// const sequelize = require('sequelize');

// async function getDashboardData(req, res) {
//   try {
//     // Récupération des doctorants et de leurs informations de cycle doctoral
//     const doctorantsWithCycleInfo = await Doctorant.findAll({
//       include: [
//         {
//           model: InfosCycleDoctorals,
//           attributes: ['sujet_recherche', 'enseignant_encadrant', 'departement_doctorant', 'specialisation_doctorant'],
//           required: true // Utilise INNER JOIN
//         },
//         {
//           model: Utilisateur,
//           attributes: ['prenom', 'nom'],
//           required: true // Utilise INNER JOIN
//         }
//       ]
//     });

//     // Construction de la réponse
//     const results = doctorantsWithCycleInfo.map(doctorant => {
//       const cycleInfo = doctorant.InfosCycleDoctorals;
//       return {
//         utilisateur: doctorant.Utilisateur,
//         cycleInfo: cycleInfo
//       };
//     });

//     // Calcul de la répartition par spécialisation via une requête d'agrégation
//     const repartitionSpecialisation = await InfosCycleDoctorals.findAll({
//       attributes: [
//         'specialisation_doctorant',
//         [sequelize.fn('COUNT', sequelize.col('id_doctorant')), 'nombre_de_doctorants']
//       ],
//       group: ['specialisation_doctorant']
//     });

//     // Convertir la répartition en tableau pour le frontend
//     const repartitionArray = repartitionSpecialisation.map(row => ({
//       specialisation_doctorant: row.specialisation_doctorant,
//       count: row.dataValues.nombre_de_doctorants
//     }));

//     // Vérifier les données avant l'envoi
//     console.log('Données des doctorants avec informations de cycle:', results);
//     console.log('Répartition par spécialisation:', repartitionArray);

//     res.json({
//       doctorants: results,
//       repartitionSpecialisation: repartitionArray
//     });
//   } catch (error) {
//     console.error('Erreur dans la récupération des données:', error);
//     res.status(500).json({ error: 'Erreur interne du serveur' });
//   }
// }

// module.exports = {
//   getDashboardData,
// };







// // controllers/dashboardController.js

// const { Utilisateur, Doctorant, InfosCycleDoctorals } = require('../models');

// const getDoctorantDetails = async (req, res) => {
//   try {
//     // Récupérer les détails des doctorants avec les informations associées
//     const doctorantDetails = await Doctorant.findAll({
//       include: [
//         {
//           model: Utilisateur,
//           attributes: ['prenom', 'nom']
//         },
//         {
//           model: InfosCycleDoctorals,
//           attributes: ['sujet_recherche', 'enseignant_encadrant', 'departement_doctorant', 'specialisation_doctorant']
//         }
//       ]
//     });

//     // Formatage des résultats pour l'envoi de la réponse
//     const formattedDetails = doctorantDetails.map(doctorant => {
//       const utilisateur = doctorant.Utilisateur;
//       const infosCycle = doctorant.InfosCycleDoctorals[0]; // Assumer qu'il y a une seule entrée par doctorant

//       return {
//         prenom: utilisateur.prenom,
//         nom: utilisateur.nom,
//         sujet_recherche: infosCycle.sujet_recherche,
//         enseignant_encadrant: infosCycle.enseignant_encadrant,
//         departement_doctorant: infosCycle.departement_doctorant,
//         specialisation_doctorant: infosCycle.specialisation_doctorant,
//       };
//     });

//     // Envoi de la réponse
//     res.json({ data: formattedDetails });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des détails des doctorants.' });
//   }
// };

// module.exports = {
//   getDoctorantDetails,
// };


// controllers/dashboardController.js

const { Utilisateur, Doctorant, InfosCycleDoctorals } = require('../models');
const sequelize = require('../models').sequelize; // Assurez-vous d'importer sequelize correctement si nécessaire

const getDoctorantDetails = async (req, res) => {
  try {
    // Récupérer les détails des doctorants avec les informations associées
    const doctorantDetails = await Doctorant.findAll({
      include: [
        {
          model: Utilisateur,
          attributes: ['prenom', 'nom']
        },
        {
          model: InfosCycleDoctorals,
          attributes: ['sujet_recherche', 'enseignant_encadrant', 'departement_doctorant', 'specialisation_doctorant']
        }
      ]
    });

    // Formatage des résultats pour l'envoi de la réponse
    const formattedDetails = doctorantDetails.map(doctorant => {
      const utilisateur = doctorant.Utilisateur;
      const infosCycle = doctorant.InfosCycleDoctorals[0]; // Assumer qu'il y a une seule entrée par doctorant

      return {
        prenom: utilisateur.prenom,
        nom: utilisateur.nom,
        sujet_recherche: infosCycle.sujet_recherche,
        enseignant_encadrant: infosCycle.enseignant_encadrant,
        departement_doctorant: infosCycle.departement_doctorant,
        specialisation_doctorant: infosCycle.specialisation_doctorant,
      };
    });

    // Envoi de la réponse
    res.json({ data: formattedDetails });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des détails des doctorants.' });
  }
};

const getSpecialisationDistribution = async (req, res) => {
  try {
    const specialisationDistribution = await InfosCycleDoctorals.findAll({
      attributes: [
        'specialisation_doctorant',
        [sequelize.fn('COUNT', sequelize.col('id_doctorant')), 'nombre_de_doctorants']
      ],
      group: ['specialisation_doctorant'],
      raw: true,
    });

    return res.status(200).json({ data: specialisationDistribution });
  } catch (error) {
    console.error('Erreur lors de la récupération de la répartition des spécialisations :', error);
    return res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des données.' });
  }
};

module.exports = {
  getDoctorantDetails,
  getSpecialisationDistribution,
};
