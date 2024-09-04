const { Utilisateur,Reunion, Doctorant, Enseignant,InfosCycleDoctorals } = require('../models');
const { Op, fn, col } = require('sequelize');

module.exports = {
  getAllReunions: async (req, res) => {
    try {
      const reunions = await Reunion.findAll({
        include: [Enseignant, Doctorant]
      });
      res.json(reunions);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

   getDepartementsDoctorants :async (req, res) => {
    try {
      console.log('Fetching departments...');
      const departements = await InfosCycleDoctorals.findAll({
        attributes: [[fn('DISTINCT', col('departement_doctorant')), 'departement_doctorant']],
        where: {
          departement_doctorant: {
            [Op.ne]: null
          }
        }
      });
      console.log('Departements:', departements);
      res.json(departements.map(dep => dep.departement_doctorant));
    } catch (error) {
      console.error('Error fetching departments:', error);
      res.status(500).json({ error: error.message });
    }
  },
  


  
  // Route handler for getting doctorants by department
 getDoctorantsByDepartement : async (req, res) => {
  const departement = req.params.departement;

  try {
    const doctorants = await Utilisateur.findAll({
      attributes: ['id_utilisateur', 'nom', 'prenom'],
      include: [{
        model: Doctorant,
        as: 'Doctorant',
        include: [{
          model: InfosCycleDoctorals,
          as: 'InfosCycleDoctorals',
          where: {
            departement_doctorant: departement
          },
          attributes: [] // Exclude fields of InfosCycleDoctorals from final result
        }],
        attributes: ['id_doctorant'] // Include id_doctorant here
      }],
      where: {
        '$Doctorant.InfosCycleDoctorals.departement_doctorant$': departement
      }
    });

    // Map the doctorants to include id_doctorant
    res.json(doctorants.map(doctorant => ({
      id: doctorant.Doctorant.id_doctorant, // Include id_doctorant
      nom: doctorant.nom,
      prenom: doctorant.prenom
    })));
  } catch (error) {
    console.error("Error fetching doctorants by departement:", error);
    res.status(500).json({ error: error.message });
  }
},

  
  
  
  
  createReunion: async (req, res) => {
    try {
      const { titre, description, date, heure_debut, heure_fin, doctorants } = req.body;
      const id_utilisateur = req.user.userId; // Obtenez l'ID utilisateur depuis le token

      // Trouvez l'enseignant associé à cet utilisateur
      const enseignant = await Enseignant.findOne({ where: { id_utilisateur } });
      if (!enseignant) {
        console.log('Enseignant non trouvé pour ID utilisateur:', id_utilisateur); // Log si l'enseignant n'est pas trouvé
        return res.status(404).json({ error: 'Enseignant non trouvé' });
      }
      const enseignantId = enseignant.id_enseignant; // Obtenez l'ID de l'enseignant
      console.log('Enseignant  trouvé pour ID utilisateur:', enseignantId); // Log si l'enseignant n'est pas trouvé

      // Créez la réunion
      const reunion = await Reunion.create({ titre, description, date, heure_debut, heure_fin, id_enseignant: enseignantId });

      // Associez les doctorants à la réunion si fournis
      if (doctorants && doctorants.length > 0) {
        console.log('Doctorants associés:', doctorants); // Log des doctorants associés
        await reunion.setDoctorants(doctorants);
      }


      res.status(201).json(reunion);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  // createReunion: async (req, res) => {
  //   try {
  //     const { titre, description, date, heure_debut, heure_fin, doctorantsNoms } = req.body;
  //     const id_utilisateur = req.user.userId; // Obtenez l'ID utilisateur depuis le token
  
  //     // Trouvez l'enseignant associé à cet utilisateur
  //     const enseignant = await Enseignant.findOne({ where: { id_utilisateur } });
  //     if (!enseignant) {
  //       console.log('Enseignant non trouvé pour ID utilisateur:', id_utilisateur);
  //       return res.status(404).json({ error: 'Enseignant non trouvé' });
  //     }
  //     const enseignantId = enseignant.id_enseignant;
  //     console.log('Enseignant trouvé pour ID utilisateur:', enseignantId);
  
  //     // Créez la réunion
  //     const reunion = await Reunion.create({ titre, description, date, heure_debut, heure_fin, id_enseignant: enseignantId });
  
  //     // Séparer les noms complets
  //     const doctorantsNomsArray = doctorantsNoms.split('\n').map(name => name.trim()).filter(name => name); // Utiliser '\n' si les noms sont séparés par des retours à la ligne
  
  //     // Rechercher les doctorants par nom complet (nom et prénom)
  //     const doctorantsIds = await Promise.all(doctorantsNomsArray.map(async (nomComplet) => {
  //       // Séparer le nom complet en nom et prénom
  //       const parts = nomComplet.split(' ');
  //       const nom = parts.shift(); // Le premier élément est le nom
  //       const prenom = parts.join(' '); // Le reste est le prénom
        
  //       // Rechercher le doctorant par nom et prénom
  //       const doctorant = await Doctorant.findOne({
  //         include: {
  //           model: Utilisateur,
  //           where: {
  //             nom,
  //             prenom
  //           }
  //         }
  //       });
  
  //       return doctorant ? doctorant.id_doctorant : null;
  //     }));
  
  //     // Nettoyez les IDs nulls
  //     const validDoctorants = doctorantsIds.filter(id => id !== null);
  
  //     // Associez les doctorants à la réunion
  //     if (validDoctorants.length > 0) {
  //       console.log('Doctorants associés:', validDoctorants);
  //       await reunion.setDoctorants(validDoctorants);
  //     }
  
  //     res.status(201).json(reunion);
  //   } catch (error) {
  //     res.status(500).json({ error: error.message });
  //   }
  // },
  

  getReunionById: async (req, res) => {
    try {
      const { id } = req.params;
      const reunion = await Reunion.findByPk(id, {
        include: [Enseignant, Doctorant]
      });
      if (!reunion) {
        console.log('Réunion non trouvée pour ID dans getReunionById:', id); // Log si la réunion n'est pas trouvée
        return res.status(404).json({ error: 'Réunion non trouvée' });
      }
      res.json(reunion);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateReunion: async (req, res) => {
    try {
      const { id } = req.params;
      const { titre, description, date, heure_debut, heure_fin, doctorants } = req.body;

      const reunion = await Reunion.findByPk(id);
      if (!reunion) {
        console.log('Réunion non trouvée pour ID updateReunion:', id); // Log si la réunion n'est pas trouvée
        return res.status(404).json({ error: 'Réunion non trouvée' });
      }

      // Mettez à jour les informations de la réunion
      await reunion.update({ titre, description, date, heure_debut, heure_fin });

      // Mettez à jour les doctorants associés
      if (doctorants && doctorants.length > 0) {
        console.log('Doctorants associés après mise à jour:', doctorants); // Log des doctorants associés
        await reunion.setDoctorants(doctorants);
      }

      res.json(reunion);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteReunion: async (req, res) => {
    try {
      const { id } = req.params;
      const reunion = await Reunion.findByPk(id);
      if (!reunion) {
        console.log('Réunion non trouvée pour ID   deleteReunion:', id); // Log si la réunion n'est pas trouvée
        return res.status(404).json({ error: 'Réunion non trouvée' });
      }

      await reunion.destroy();
      res.json({ message: 'Réunion supprimée avec succès' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getReunionsForDoctorant: async (req, res) => {
    try {
      // Extraire l'ID utilisateur depuis le token
      const id_utilisateur = req.user.userId;
  
      // Trouver le doctorant associé à cet utilisateur
      const doctorant = await Doctorant.findOne({ where: { id_utilisateur } });
      if (!doctorant) {
        console.log('Doctorant non trouvé pour ID utilisateur:', id_utilisateur);
        return res.status(404).json({ error: 'Doctorant non trouvé' });
      }
      const doctorantId = doctorant.id_doctorant; // Obtenez l'ID du doctorant
      console.log('Doctorant trouvé pour ID utilisateur:', doctorantId);
  
      // Rechercher les réunions associées à ce doctorant
      const reunions = await Reunion.findAll({
        attributes: ['id_reunion', 'description', 'date', 'heure_debut', 'heure_fin', 'titre'],
        include: [
          {
            model: Enseignant,
            attributes: ['id_enseignant', 'departement_enseignement', 'specialisation']
          },
          {
            model: Doctorant,
            attributes: [], // Exclure les attributs du doctorant, on n'en a pas besoin ici
            through: {
              attributes: [] // Exclure les attributs de la table de liaison
            },
            where: { id_doctorant: doctorantId }
          }
        ]
      });
  
      if (reunions.length === 0) {
        return res.status(404).json({ error: 'Aucune réunion trouvée pour ce doctorant' });
      }
  
      res.json(reunions);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  


};
