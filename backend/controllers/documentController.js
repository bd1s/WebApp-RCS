

// const { Op } = require('sequelize');
// // controllers/documentController.js
// const { Document, DocumentPartage, Utilisateur } = require('../models');

// // Créer un document
// exports.createDocument = async (req, res) => {
//     try {    
//     const userId = req.user.userId; 
//     console.log('userId:', userId); 

//         const { titre } = req.body;
//         const fichier = req.file.buffer; // Le fichier est déjà en mémoire
//         const id_utilisateur = userId; // ID de l'utilisateur connecté

//         console.log('Titre:', titre);
//         console.log('ID Utilisateur:', id_utilisateur);
        
//         // Création d'un nouvel enregistrement de document avec le fichier en mémoire
//         const newDocument = await Document.create({ titre, fichier, id_utilisateur });

//         res.status(201).json(newDocument);
//     } catch (error) {
//         console.error('Erreur lors de la création du document:', error);
//         res.status(500).json({ error: 'Erreur lors de la création du document' });
//     }
// };



// // Partager un document
// exports.shareDocument = async (req, res) => {
//     try {
//         const { id_document, nom_complet_recepteur } = req.body;

//         // Chercher l'utilisateur recepteur par nom complet
//         const utilisateur = await Utilisateur.findOne({
//             where: {
//                 [Op.and]: [
//                     { nom: nom_complet_recepteur.nom },
//                     { prenom: nom_complet_recepteur.prenom }
//                 ]
//             }
//         });

//         if (!utilisateur) {
//             return res.status(404).json({ error: 'Utilisateur recepteur non trouvé' });
//         }

//         const partage = await DocumentPartage.create({
//             id_document,
//             id_utilisateur_recepteur: utilisateur.id_utilisateur,
//         });

//         res.status(201).json(partage);
//     } catch (error) {
//         res.status(500).json({ error: 'Erreur lors du partage du document' });
//     }
// };




// // Récupérer les documents partagés pour un utilisateur
// exports.getSharedDocuments = async (req, res) => {
//     try {
//         const userId = req.user.userId;

//         // Trouver les documents partagés pour l'utilisateur
//         const documents = await DocumentPartage.findAll({
//             where: { id_utilisateur_recepteur: userId },
//             include: [
//                 {
//                     model: Document,
//                     as: 'document', // Utiliser l'alias 'document'
//                     include: [
//                         {
//                             model: Utilisateur,
//                             as: 'utilisateur', // Utiliser l'alias 'utilisateur'
//                             attributes: ['prenom', 'nom', 'email']
//                         }
//                     ]
//                 }
//             ]
//         });

//         // Extraire et structurer les informations des documents
//         const sharedDocuments = documents.map(docPartage => {
//             const { id_document, titre, fichier, createdAt } = docPartage.document;
//             const { prenom, nom, email } = docPartage.document.utilisateur;

//             return {
//                 id_document,
//                 titre,
//                 fichier,
//                 createdAt,
//                 prenom,
//                 nom,
//                 email
//             };
//         });

//         console.log('Documents partagés envoyés:', sharedDocuments);

//         res.status(200).json(sharedDocuments);
//     } catch (error) {
//         console.error('Erreur lors de la récupération des documents partagés:', error);
//         res.status(500).json({ error: 'Erreur lors de la récupération des documents partagés' });
//     }
// };



// // Télécharger un document
// exports.downloadDocument = async (req, res) => {
//     try {
//         const { id_document } = req.params;

//         const document = await Document.findByPk(id_document);
//         if (!document) {
//             return res.status(404).json({ error: 'Document non trouvé' });
//         }

//         res.setHeader('Content-Disposition', `attachment; filename=${document.titre}`);
//         res.setHeader('Content-Type', 'application/octet-stream');
//         res.send(document.fichier);
//     } catch (error) {
//         res.status(500).json({ error: 'Erreur lors du téléchargement du document' });
//     }
// };






/// controllers/documentController.js
const { Op } = require('sequelize');
const { Document, DocumentPartage, Utilisateur ,InfosCycleDoctoral} = require('../models');



// Créer un document
exports.createDocument = async (req, res) => {
    try {
        const userId = req.user.userId; 
        console.log('userId:', userId); 

        const { titre, fichier_url } = req.body; // Récupérer l'URL du fichier depuis le frontend
        const id_utilisateur = userId; // ID de l'utilisateur connecté

        console.log('Titre:', titre);
        console.log('ID Utilisateur:', id_utilisateur);
        console.log('URL Fichier:', fichier_url);

        // Création d'un nouvel enregistrement de document avec l'URL du fichier
        const newDocument = await Document.create({ titre, fichier_url, id_utilisateur });

        console.log('Document créé:', newDocument);

        res.status(201).json(newDocument);
    } catch (error) {
        console.error('Erreur lors de la création du document:', error);
        res.status(500).json({ error: 'Erreur lors de la création du document' });
    }
};




exports.getDoctorantsByDepartment = async (req, res) => {
    try {
        const { departement } = req.query;

        if (!departement) {
            return res.status(400).json({ error: 'Département manquant' });
        }

        // Récupérer les doctorants associés au département
        const doctorants = await Doctorant.findAll({
            include: [{
                model: InfosCycleDoctoral,
                attributes: ['departement_doctorant'],
                where: { specialite: departement }
            }, {
                model: Utilisateur,
                as: 'utilisateur',
                attributes: ['id_utilisateur', 'prenom', 'nom']
            }]
        });

        // Mapper les résultats pour ne retourner que les informations nécessaires
        const doctorantList = doctorants.map(doctorant => ({
            id: doctorant.utilisateur.id_utilisateur,
            prenom: doctorant.utilisateur.prenom,
            nom: doctorant.utilisateur.nom,
            specialite: doctorant.infosCycleDoctoral.specialite
        }));

        res.status(200).json(doctorantList);
    } catch (error) {
        console.error('Erreur lors de la récupération des doctorants par département:', error);
        res.status(500).json({ error: 'Erreur lors de la récupération des doctorants' });
    }
};




// Récupérer les utilisateurs par rôle
const { Doctorant, Administrateur, Enseignant } = require('../models');
exports.getDepartments = async (req, res) => {
    try {
        const departments = await Enseignant.findAll({
            attributes: ['departement_enseignement'],
            group: ['departement_enseignement']
        });
        res.status(200).json(departments.map(department => department.departement_enseignement));
    } catch (error) {
        console.error('Erreur lors de la récupération des départements:', error);
        res.status(500).json({ error: 'Erreur lors de la récupération des départements' });
    }
};




// Récupérer les utilisateurs par rôle
exports.getUsersByRole = async (req, res) => {
    try {
        const { role, departement } = req.query; 

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
                    const whereClause = departement ? { departement_enseignement: departement } : {};
                    users = await Enseignant.findAll({
                        where: whereClause,
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





// Partager un document
exports.getDoctorantDepartments = async (req, res) => {
    try {
        const departments = await InfosCycleDoctoral.findAll({
            attributes: ['departement_doctorant'], 
            group: ['departement_doctorant']
        });
        res.status(200).json(departments.map(dept => dept.structure_recherche_directeur));
    } catch (error) {
        console.error('Erreur lors de la récupération des départements des doctorants:', error);
        res.status(500).json({ error: 'Erreur lors de la récupération des départements des doctorants' });
    }
};




exports.shareDocument = async (req, res) => {
    try {
        const { id_document, id_utilisateur_recepteur } = req.body;

        // Vérifier que l'id du récepteur est bien fourni
        if (!id_utilisateur_recepteur) {
            return res.status(400).json({ error: 'ID du récepteur manquant' });
        }

        // Créer l'enregistrement du partage de document
        const partage = await DocumentPartage.create({
            id_document,
            id_utilisateur_recepteur,
        });

        console.log('Document partagé:', partage);

        res.status(201).json(partage);
    } catch (error) {
        console.error('Erreur lors du partage du document:', error);
        res.status(500).json({ error: 'Erreur lors du partage du document' });
    }
};




// Récupérer les documents partagés pour un utilisateur
exports.getSharedDocuments = async (req, res) => {
    try {
        const userId = req.user.userId;

        // Trouver les documents partagés pour l'utilisateur
        const documents = await DocumentPartage.findAll({
            where: { id_utilisateur_recepteur: userId },
            include: [
                {
                    model: Document,
                    as: 'document', // Utiliser l'alias 'document'
                    include: [
                        {
                            model: Utilisateur,
                            as: 'utilisateur', // Utiliser l'alias 'utilisateur'
                            attributes: ['prenom', 'nom', 'email']
                        }
                    ]
                }
            ]
        });

        // Extraire et structurer les informations des documents
        const sharedDocuments = documents.map(docPartage => {
            const { id_document, titre, fichier_url, createdAt } = docPartage.document;
            const { prenom, nom, email } = docPartage.document.utilisateur;

            return {
                id_document,
                titre,
                fichier_url,
                createdAt,
                prenom,
                nom,
                email
            };
        });

        console.log('Documents partagés envoyés:', sharedDocuments);

        res.status(200).json(sharedDocuments);
    } catch (error) {
        console.error('Erreur lors de la récupération des documents partagés:', error);
        res.status(500).json({ error: 'Erreur lors de la récupération des documents partagés' });
    }
};

// Télécharger un document
exports.downloadDocument = async (req, res) => {
    try {
        const { id_document } = req.params;

        const document = await Document.findByPk(id_document);
        if (!document) {
            return res.status(404).json({ error: 'Document non trouvé' });
        }

        // Rediriger vers l'URL du fichier pour téléchargement
        res.redirect(document.fichier_url);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors du téléchargement du document' });
    }
};
