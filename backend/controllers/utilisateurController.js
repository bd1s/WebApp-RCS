const { Doctorant, Administrateur, Enseignant, Utilisateur } = require('../models');

// Récupérer les utilisateurs par rôle
exports.getUsersByRole = async (req, res) => {
    try {
        const { role } = req.query; 

        let users;
        switch(role) {
            case 'doctorant':
                users = await Doctorant.findAll({
                    include: [{
                        model: Utilisateur,
                        as: 'utilisateur',
                        attributes: ['id_utilisateur', 'prenom', 'nom']
                    }]
                });
                break;
            case 'administrateur':
                users = await Administrateur.findAll({
                    include: [{
                        model: Utilisateur,
                        as: 'utilisateur',
                        attributes: ['id_utilisateur', 'prenom', 'nom']
                    }]
                });
                break;
            case 'enseignant':
                users = await Enseignant.findAll({
                    include: [{
                        model: Utilisateur,
                        as: 'utilisateur',
                        attributes: ['id_utilisateur', 'prenom', 'nom']
                    }]
                });
                break;
            default:
                return res.status(400).json({ error: 'Rôle invalide' });
        }

        // Mapper les résultats pour ne retourner que les informations nécessaires
        const userList = users.map(user => ({
            id: user.utilisateur.id_utilisateur,
            prenom: user.utilisateur.prenom,
            nom: user.utilisateur.nom
        }));

        res.status(200).json(userList);
    } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs par rôle:', error);
        res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs' });
    }
};
