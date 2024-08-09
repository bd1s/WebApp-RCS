const { Utilisateur, Enseignant, Doctorant, InfosCycleDoctorals} = require('../models');

async function getDoctorantsEncadres(req, res) {
  try {
    const userId = req.user.userId; 
    console.log('userId:', userId); 

    if (!userId) {
      return res.status(400).json({ error: 'ID utilisateur manquant' });
    }

    // Trouver l'enseignant connecté
    const enseignant = await Enseignant.findOne({
      where: { id_utilisateur: userId },
      include: [{
        model: Utilisateur,
        attributes: ['nom', 'prenom'],
      }]
    });

    if (!enseignant) {
      return res.status(404).json({ error: 'Enseignant non trouvé' });
    }

    // Nom complet de l'enseignant
    const nomCompletEnseignant = `${enseignant.Utilisateur.nom} ${enseignant.Utilisateur.prenom}`;

    // Trouver tous les doctorants encadrés par cet enseignant
    const doctorants = await InfosCycleDoctorals.findAll({
      where: {
        enseignant_encadrant: nomCompletEnseignant,
        departement_doctorant: enseignant.departement_enseignement,
        specialisation_doctorant: enseignant.specialisation,
      },
      include: [
        {
          model: Doctorant,
          include: [{
            model: Utilisateur,
            attributes: ['nom', 'prenom'],
          }]
        }
      ]
    });

    if (!doctorants.length) {
      return res.status(404).json({ error: 'Aucun doctorant trouvé' });
    }

    // Préparer les données pour la réponse
    const response = doctorants.map(info => ({
      nomDoctorant: `${info.Doctorant.Utilisateur.nom} ${info.Doctorant.Utilisateur.prenom}`,
      sujetRecherche: info.sujet_recherche,
    }));

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur interne du serveur' });
  }
}

module.exports = {
  getDoctorantsEncadres,
};
