// controllers/dashboardController.js

const { Utilisateur, Doctorant, InfosCycleDoctorals } = require('../models');
const sequelize = require('../models').sequelize; 
const getDoctorantDetails = async (req, res) => {
  try {
    const doctorantDetails = await Doctorant.findAll({
      include: [
        {
          model: Utilisateur,
          as: 'utilisateur',

          attributes: ['prenom', 'nom']
        },
        {
          model: InfosCycleDoctorals,
          attributes: ['sujet_recherche', 'enseignant_encadrant', 'departement_doctorant', 'specialisation_doctorant']
        }
      ]
    });

    const formattedDetails = doctorantDetails.map(doctorant => {
      const utilisateur = doctorant.utilisateur;
      const infosCycle = doctorant.InfosCycleDoctorals[0]; 

      return {
        prenom: utilisateur.prenom,
        nom: utilisateur.nom,
        sujet_recherche: infosCycle.sujet_recherche,
        enseignant_encadrant: infosCycle.enseignant_encadrant,
        departement_doctorant: infosCycle.departement_doctorant,
        specialisation_doctorant: infosCycle.specialisation_doctorant,
      };
    });

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
