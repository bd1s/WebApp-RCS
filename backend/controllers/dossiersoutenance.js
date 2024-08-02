// // controllers/dossiersoutenance.js
// const { DossierSoutenance, PropositionJury, PublicationsWebOfScience, PublicationsComiteLecture, PublicationsProceedings, CommunicationsScientifiques, ChapitresOuvrage, Ouvrages, BrevetsInvention } = require('../models');

// exports.createDossierSoutenance = async (req, res) => {
//   try {
//     const dossierData = req.body;

//     const dossier = await DossierSoutenance.create(dossierData, {
//       include: [
//         { model: PropositionJury },
//         { model: PublicationsWebOfScience },
//         { model: PublicationsComiteLecture },
//         { model: PublicationsProceedings },
//         { model: CommunicationsScientifiques },
//         { model: ChapitresOuvrage },
//         { model: Ouvrages },
//         { model: BrevetsInvention }
//       ]
//     });

//     res.status(201).json(dossier);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// exports.getDossiersSoutenance = async (req, res) => {
//   try {
//     const dossiers = await DossierSoutenance.findAll({
//       include: [
//         { model: PropositionJury },
//         { model: PublicationsWebOfScience },
//         { model: PublicationsComiteLecture },
//         { model: PublicationsProceedings },
//         { model: CommunicationsScientifiques },
//         { model: ChapitresOuvrage },
//         { model: Ouvrages },
//         { model: BrevetsInvention }
//       ]
//     });

//     res.status(200).json(dossiers);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };








const { DossierSoutenance, PropositionJuries, PublicationsWebOfScience, PublicationsComiteLecture, PublicationsProceedings, CommunicationsScientifiques, ChapitresOuvrage, Ouvrages, BrevetsInvention, Demande } = require('../models');

exports.createDossierSoutenance = async (req, res) => {
  
    try {
      const { type_demande, statut, date_soumission, id_doctorant, nom, prenom, grade, telephone, email, etablissement, universite, jury, publicationsWebOfScience, publicationsComiteLecture, publicationsProceedings, communicationsScientifiques, chapitresOuvrage, ouvrages, brevetsInvention } = req.body;
  
      // Créez une nouvelle demande
      const newDemande = await Demande.create({
        type_demande,
        statut,
        date_soumission,
        id_doctorant
      });
  
      // Créez le dossier de soutenance
      const newDossierSoutenance = await DossierSoutenance.create({
        id_demande: newDemande.id_demande,
        nom,
        prenom,
        grade,
        telephone,
        email,
        etablissement,
        universite
      });
  
      // Créez les autres entités associées
      if (jury) {
        await PropositionJuries.bulkCreate(jury.map(member => ({ ...member, id_dossier_soutenance: newDossierSoutenance.id_dossier_soutenance })));
      }
  
      if (publicationsWebOfScience) {
        await PublicationsWebOfScience.bulkCreate(publicationsWebOfScience.map(pub => ({ ...pub, id_dossier_soutenance: newDossierSoutenance.id_dossier_soutenance })));
      }
  
      if (publicationsComiteLecture) {
        await PublicationsComiteLecture.bulkCreate(publicationsComiteLecture.map(pub => ({ ...pub, id_dossier_soutenance: newDossierSoutenance.id_dossier_soutenance })));
      }
  
      if (publicationsProceedings) {
        await PublicationsProceedings.bulkCreate(publicationsProceedings.map(pub => ({ ...pub, id_dossier_soutenance: newDossierSoutenance.id_dossier_soutenance })));
      }
  
      if (communicationsScientifiques) {
        await CommunicationsScientifiques.bulkCreate(communicationsScientifiques.map(comm => ({ ...comm, id_dossier_soutenance: newDossierSoutenance.id_dossier_soutenance })));
      }
  
      if (chapitresOuvrage) {
        await ChapitresOuvrage.bulkCreate(chapitresOuvrage.map(chap => ({ ...chap, id_dossier_soutenance: newDossierSoutenance.id_dossier_soutenance })));
      }
  
      if (ouvrages) {
        await Ouvrages.bulkCreate(ouvrages.map(ouvrage => ({ ...ouvrage, id_dossier_soutenance: newDossierSoutenance.id_dossier_soutenance })));
      }
  
      if (brevetsInvention) {
        await BrevetsInvention.bulkCreate(brevetsInvention.map(brevet => ({ ...brevet, id_dossier_soutenance: newDossierSoutenance.id_dossier_soutenance })));
      }
  
      res.status(201).json({ message: 'Dossier de soutenance créé avec succès.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erreur lors de la création du dossier de soutenance.' });
    }
  };