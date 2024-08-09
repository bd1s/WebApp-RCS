// const { Demande, Doctorant, Utilisateur, InfosCycleDoctorals } = require('../models');

// const adminController = {
//   getAllDoctorantRequests: async (req, res) => {
//     try {
//       const doctorantRequests = await Demande.findAll({
//         attributes: ['id_demande', 'type_demande', 'statut', 'date_soumission'],
//         include: [
//           {
//             model: Doctorant,
//             attributes: ['id_doctorant', 'id_utilisateur'],
//             include: [
//               {
//                 model: Utilisateur,
//                 attributes: ['prenom', 'nom'],
//               },
//               {
//                 model: InfosCycleDoctorals,
//                 attributes: ['departement_doctorant'],
//               },
//             ],
//           },
//         ],
//         order: [['date_soumission', 'DESC']],
//       });

//       // Format the response
//       const formattedRequests = doctorantRequests.map(request => {
//         const doctorant = request.Doctorant;
//         const utilisateur = doctorant.Utilisateur;
//         const infosCycleDoctorals = doctorant.InfosCycleDoctorals[0]; // Assuming there's always at least one entry

//         return {
//           id_demande: request.id_demande,
//           type_demande: request.type_demande,
//           statut: request.statut,
//           date_soumission: request.date_soumission,
//           nom: utilisateur.nom,
//           prenom: utilisateur.prenom,
//           departement: infosCycleDoctorals.departement_doctorant,
//         };
//       });

//       res.status(200).json(formattedRequests);
//     } catch (error) {
//       console.error('Error fetching doctorant requests:', error);
//       res.status(500).json({ error: 'An error occurred while fetching doctorant requests.' });
//     }
    
//   },
// };

// module.exports = adminController;










// const { Demande, Doctorant, Utilisateur, InfosCycleDoctorals,DemandeInscription, DemandeRetraitProvisoires, DemandeRetraitDefinitifs, DemandeCarteEtudiants, DemandeEmailAcademiques,DemandeChangementDirecteurTheses , DemandeChangementSujetTheses ,DemandeDerogations,ConventionStages,Cotutelles,DemandeChangementCodirecteurTheses ,DemandeIMISTs,DemandeTirages } = require('../models');

// const adminController = {
//   getAllDoctorantRequests: async (req, res) => {
//     try {
//       const doctorantRequests = await Demande.findAll({
//         attributes: ['id_demande', 'type_demande', 'statut', 'date_soumission'],
//         include: [
//           {
//             model: Doctorant,
//             attributes: ['id_doctorant', 'id_utilisateur'],
//             include: [
//               {
//                 model: Utilisateur,
//                 attributes: ['prenom', 'nom'],
//               },
//               {
//                 model: InfosCycleDoctorals,
//                 attributes: ['departement_doctorant'],
//               },
//             ],
//           },
//         ],
//         order: [['date_soumission', 'DESC']],
//       });

//       // Format the response
//       const formattedRequests = doctorantRequests.map((request) => {
//         const doctorant = request.Doctorant;
//         const utilisateur = doctorant.Utilisateur;
//         const infosCycleDoctorals = doctorant.InfosCycleDoctorals[0]; // Assuming there's always at least one entry

//         return {
//           id_demande: request.id_demande,
//           type_demande: request.type_demande,
//           statut: request.statut,
//           date_soumission: request.date_soumission,
//           nom: utilisateur.nom,
//           prenom: utilisateur.prenom,
//           departement: infosCycleDoctorals.departement_doctorant,
//         };
//       });

//       res.status(200).json(formattedRequests);
//     } catch (error) {
//       console.error('Error fetching doctorant requests:', error);
//       res.status(500).json({ error: 'An error occurred while fetching doctorant requests.' });
//     }
//   },

//   getDemandeDetails: async (req, res) => {
//     const { id_demande } = req.params;

//     try {
//       const demande = await Demande.findByPk(id_demande);
//       if (!demande) {
//         return res.status(404).json({ error: 'Demande not found' });
//       }

//       let details;
//       switch (demande.type_demande) {
//         case 'inscription':
//           details = await DemandeInscription.findOne({ where: { id_demande } });
//           break;
//         case 'retrait provisoire':
//           details = await DemandeRetraitProvisoires.findOne({ where: { id_demande } });
//           break;
//         case 'retrait définitif':
//           details = await DemandeRetraitDefinitifs.findOne({ where: { id_demande } });
//           break;
//         case 'carte étudiant':
//           details = await DemandeCarteEtudiants.findOne({ where: { id_demande } });
//           break;
//         case 'email académique':
//           details = await DemandeEmailAcademiques.findOne({ where: { id_demande } });
//           break;
//         case 'changement sujet thèse':
//           details = await DemandeChangementSujetTheses.findOne({ where: { id_demande } });
//           break;
//         case 'changement directeur thèse':
//           details = await DemandeChangementDirecteurTheses.findOne({ where: { id_demande } });
//           break;
//         case 'réinscription dérogation':
//           details = await DemandeDerogations.findOne({ where: { id_demande } });
//           break;
//         case 'convention stage':
//           details = await ConventionStages.findOne({ where: { id_demande } });
//           break;
//         case 'cotutelle':
//           details = await Cotutelles.findOne({ where: { id_demande } });
//           break;
//         case 'changement co-directeur thèse':
//           details = await DemandeChangementCodirecteurTheses.findOne({ where: { id_demande } });
//           break;
//         case 'imists':
//           details = await DemandeIMISTs.findOne({ where: { id_demande } });
//           break;
//         case 'tirages':
//           details = await DemandeTirages.findOne({ where: { id_demande } });
//           break;
//         default:
//           return res.status(400).json({ error: 'Unknown type of demande' });
//       }

//       res.status(200).json(details);
//     } catch (error) {
//       console.error('Error fetching demande details:', error);
//       res.status(500).json({ error: 'An error occurred while fetching demande details.' });
//     }
//   },

//   updateRequestStatus: async (req, res) => {
//     const { id } = req.params;
//     const { statut } = req.body;

//     try {
//       const demande = await Demande.findByPk(id);
//       if (!demande) {
//         return res.status(404).json({ error: 'Demande not found' });
//       }

//       demande.statut = statut;
//       await demande.save();

//       res.status(200).json({ message: 'Request status updated successfully.' });
//     } catch (error) {
//       console.error('Error updating request status:', error);
//       res.status(500).json({ error: 'An error occurred while updating the request status.' });
//     }
//   },
// };

// module.exports = adminController;




const { Demande, Doctorant, Utilisateur, InfosCycleDoctorals, DemandeInscription, DemandeRetraitProvisoires, DemandeRetraitDefinitifs, DemandeCarteEtudiants, DemandeEmailAcademiques, DemandeChangementDirecteurTheses, DemandeChangementSujetTheses, DemandeDerogations, ConventionStages, Cotutelles, DemandeChangementCodirecteurTheses, DemandeIMISTs, DemandeTirages } = require('../models');

const adminController = {
  getAllDoctorantRequests: async (req, res) => {
    try {
      const doctorantRequests = await Demande.findAll({
        attributes: ['id_demande', 'type_demande', 'statut', 'date_soumission'],
        include: [
          {
            model: Doctorant,
            attributes: ['id_doctorant', 'id_utilisateur'],
            include: [
              {
                model: Utilisateur,
                attributes: ['prenom', 'nom'],
              },
              {
                model: InfosCycleDoctorals,
                attributes: ['departement_doctorant'],
              },
            ],
          },
        ],
        order: [['date_soumission', 'DESC']],
      });

      // Format the response
      const formattedRequests = doctorantRequests.map((request) => {
        const doctorant = request.Doctorant;
        const utilisateur = doctorant.Utilisateur;
        const infosCycleDoctorals = doctorant.InfosCycleDoctorals[0]; // Assuming there's always at least one entry

        return {
          id_demande: request.id_demande,
          type_demande: request.type_demande,
          statut: request.statut,
          date_soumission: request.date_soumission,
          nom: utilisateur.nom,
          prenom: utilisateur.prenom,
          departement: infosCycleDoctorals.departement_doctorant,
        };
      });

      res.status(200).json(formattedRequests);
    } catch (error) {
      console.error('Error fetching doctorant requests:', error);
      res.status(500).json({ error: 'An error occurred while fetching doctorant requests.' });
    }
  },




  //details with lien Encode fileBuffer as base64 string
  // getDemandeDetails: async (req, res) => {
  //   const { id_demande } = req.params;

  //   try {
  //     const demande = await Demande.findByPk(id_demande);
  //     if (!demande) {
  //       return res.status(404).json({ error: 'Demande not found' });
  //     }

  //     let details;
  //     let fileBuffer = null;
  //     let fileName = null;

  //     switch (demande.type_demande) {
  //       case 'inscription':
  //         details = await DemandeInscription.findOne({ where: { id_demande } });
  //         fileBuffer = details.fichier_demande;
  //         fileName = 'demande_inscription.pdf';
  //         break;
  //       case 'retrait provisoire':
  //         details = await DemandeRetraitProvisoires.findOne({ where: { id_demande } });
  //         fileBuffer = details.fichier_demande_retrait;
  //         fileName = 'demande_retrait_provisoire.pdf';
  //         break;
  //       case 'retrait définitif':
  //         details = await DemandeRetraitDefinitifs.findOne({ where: { id_demande } });
  //         fileBuffer = details.fichier_retrait_definitif;
  //         fileName = 'demande_retrait_definitif.pdf';
  //         break;
  //       case 'carte étudiant':
  //         details = await DemandeCarteEtudiants.findOne({ where: { id_demande } });
  //         fileBuffer = details.fichier_carte_etudiant;
  //         fileName = 'demande_carte_etudiant.pdf';
  //         break;
  //       case 'email académique':
  //         details = await DemandeEmailAcademiques.findOne({ where: { id_demande } });
  //         break;
  //       case 'changement sujet thèse':
  //         details = await DemandeChangementSujetTheses.findOne({ where: { id_demande } });
  //         fileBuffer = details.fichier_demande_changement_sujet;
  //         fileName = 'demande_changement_sujet_these.pdf';
  //         break;
  //       case 'changement directeur thèse':
  //         details = await DemandeChangementDirecteurTheses.findOne({ where: { id_demande } });
  //         fileBuffer = details.fichier_demande_changement_directeur;
  //         fileName = 'demande_changement_directeur_these.pdf';
  //         break;
  //       case 'réinscription dérogation':
  //         details = await DemandeDerogations.findOne({ where: { id_demande } });
  //         fileBuffer = details.fichier_demande_reinscription;
  //         fileName = 'demande_reinscription_derogation.pdf';
  //         break;
  //       case 'convention stage':
  //         details = await ConventionStages.findOne({ where: { id_demande } });
  //         fileBuffer = details.fichier_demande_stage;
  //         fileName = 'convention_stage.pdf';
  //         break;
  //       case 'cotutelle':
  //         details = await Cotutelles.findOne({ where: { id_demande } });
  //         fileBuffer = details.fichier_demande_cotutelle;
  //         fileName = 'demande_cotutelle.pdf';
  //         break;
  //       case 'changement co-directeur thèse':
  //         details = await DemandeChangementCodirecteurTheses.findOne({ where: { id_demande } });
  //         fileBuffer = details.fichier_demande_changement_codirecteur;
  //         fileName = 'demande_changement_codirecteur_these.pdf';
  //         break;
  //       case 'imists':
  //         details = await DemandeIMISTs.findOne({ where: { id_demande } });
  //         fileBuffer = details.fichiers_cv;
  //         fileName = 'demande_imists.pdf';
  //         break;
  //       case 'tirages':
  //         details = await DemandeTirages.findOne({ where: { id_demande } });
  //         fileBuffer = details.fichier_demande_tirage;
  //         fileName = 'demande_tirage.pdf';
  //         break;
  //       default:
  //         return res.status(400).json({ error: 'Unknown type of demande' });
  //     }

  //     // Prepare the response
  //     const response = {
  //       details: details,
  //       file: fileBuffer ? {
  //         data: fileBuffer.toString('base64'),  // Encode fileBuffer as base64 string
  //         name: fileName,
  //         type: 'application/pdf'
  //       } : null
  //     };

  //     res.status(200).json(response);
  //   } catch (error) {
  //     console.error('Error fetching demande details:', error);
  //     res.status(500).json({ error: 'An error occurred while fetching demande details.' });
  //   }
  // },





  //just pdf 
  // getDemandeDetails: async (req, res) => {
  //   const { id_demande } = req.params;

  //   try {
  //     const demande = await Demande.findByPk(id_demande);
  //     if (!demande) {
  //       return res.status(404).json({ error: 'Demande not found' });
  //     }

  //     let details;
  //     let fileBuffer = null;
  //     let fileName = null;

  //     switch (demande.type_demande) {
  //       case 'inscription':
  //         details = await DemandeInscription.findOne({ where: { id_demande } });
  //         fileBuffer = details.fichier_demande;
  //         fileName = 'demande_inscription.pdf';
  //         break;
  //       case 'retrait provisoire':
  //         details = await DemandeRetraitProvisoires.findOne({ where: { id_demande } });
  //         fileBuffer = details.fichier_demande_retrait;
  //         fileName = 'demande_retrait_provisoire.pdf';
  //         break;
  //       case 'retrait définitif':
  //         details = await DemandeRetraitDefinitifs.findOne({ where: { id_demande } });
  //         fileBuffer = details.fichier_retrait_definitif;
  //         fileName = 'demande_retrait_definitif.pdf';
  //         break;
  //       case 'carte étudiant':
  //         details = await DemandeCarteEtudiants.findOne({ where: { id_demande } });
  //         fileBuffer = details.fichier_carte_etudiant;
  //         fileName = 'demande_carte_etudiant.pdf';
  //         break;
  //       case 'email académique':
  //         details = await DemandeEmailAcademiques.findOne({ where: { id_demande } });
  //         // Assuming there's no file for this type
  //         break;
  //       case 'changement sujet thèse':
  //         details = await DemandeChangementSujetTheses.findOne({ where: { id_demande } });
  //         fileBuffer = details.fichier_demande_changement_sujet;
  //         fileName = 'demande_changement_sujet_these.pdf';
  //         break;
  //       case 'changement directeur thèse':
  //         details = await DemandeChangementDirecteurTheses.findOne({ where: { id_demande } });
  //         fileBuffer = details.fichier_demande_changement_directeur;
  //         fileName = 'demande_changement_directeur_these.pdf';
  //         break;
  //       case 'réinscription dérogation':
  //         details = await DemandeDerogations.findOne({ where: { id_demande } });
  //         fileBuffer = details.fichier_demande_reinscription;
  //         fileName = 'demande_reinscription_derogation.pdf';
  //         break;
  //       case 'convention stage':
  //         details = await ConventionStages.findOne({ where: { id_demande } });
  //         fileBuffer = details.fichier_demande_stage;
  //         fileName = 'demande_convention_stage.pdf';
  //         break;
  //       case 'cotutelle':
  //         details = await Cotutelles.findOne({ where: { id_demande } });
  //         fileBuffer = details.fichier_demande_cotutelle;
  //         fileName = 'demande_cotutelle.pdf';
  //         break;
  //       case 'changement co-directeur thèse':
  //         details = await DemandeChangementCodirecteurTheses.findOne({ where: { id_demande } });
  //         fileBuffer = details.fichier_demande_changement_codirecteur;
  //         fileName = 'demande_changement_codirecteur_these.pdf';
  //         break;
  //       case 'imists':
  //         details = await DemandeIMISTs.findOne({ where: { id_demande } });
  //         fileBuffer = details.fichiers_cv;
  //         fileName = 'demande_imists.pdf';
  //         break;
  //       case 'tirages':
  //         details = await DemandeTirages.findOne({ where: { id_demande } });
  //         fileBuffer = details.fichier_demande_tirage;
  //         fileName = 'demande_tirage.pdf';
  //         break;
  //       default:
  //         return res.status(400).json({ error: 'Unknown type of demande' });
  //     }

  //     if (fileBuffer) {
  //       // For file download
  //       res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
  //       res.setHeader('Content-Type', 'application/pdf');
  //       res.send(fileBuffer);
  //     } else {
  //       // For details display only
  //       res.status(200).json(details);
  //     }
  //   } catch (error) {
  //     console.error('Error fetching demande details:', error);
  //     res.status(500).json({ error: 'An error occurred while fetching demande details.' });
  //   }
  // },


  getDemandeDetails: async (req, res) => {
    const { id_demande } = req.params;
    console.log('Received id_demande:', id_demande); // Ajout pour débogage


    try {
      const demande = await Demande.findByPk(id_demande);
      if (!demande) {
        return res.status(404).json({ error: 'Demande not found' });
      }

      let details;
      let fileUrl = null;

      switch (demande.type_demande) {
        case 'inscription':
          details = await DemandeInscription.findOne({ where: { id_demande } });
          fileUrl = `/api/admin/demande-file/${id_demande}`;
          break;
        case 'retrait-provisoire':
          details = await DemandeRetraitProvisoires.findOne({ where: { id_demande } });
          fileUrl = `/api/admin/demande-file/${id_demande}`;
          break;
        case 'retrait-definitif':
          details = await DemandeRetraitDefinitifs.findOne({ where: { id_demande } });
          fileUrl = `/api/admin/demande-file/${id_demande}`;
          break;
        case 'carte-etudiant':
          details = await DemandeCarteEtudiants.findOne({ where: { id_demande } });
          fileUrl = `/api/admin/demande-file/${id_demande}`;
          break;
        case 'email-academique':
          details = await DemandeEmailAcademiques.findOne({ where: { id_demande } });
          // Assuming there's no file for this type
          break;
        case 'reinscription-derogation':
          details = await DemandeDerogations.findOne({ where: { id_demande } });
          fileUrl = `/api/admin/demande-file/${id_demande}`;
          break;
        case 'changement-sujet-these':
          details = await DemandeChangementSujetTheses.findOne({ where: { id_demande } });
          fileUrl = `/api/admin/demande-file/${id_demande}`;
          break;
        case 'changement-directeur-these':
          details = await DemandeChangementDirecteurTheses.findOne({ where: { id_demande } });
          fileUrl = `/api/admin/demande-file/${id_demande}`;
          break;
        case 'convention-stage':
          details = await ConventionStages.findOne({ where: { id_demande } });
          fileUrl = `/api/admin/demande-file/${id_demande}`;
          break;
        case 'cotutelle':
          details = await Cotutelles.findOne({ where: { id_demande } });
          fileUrl = `/api/admin/demande-file/${id_demande}`;
          break;
        case 'changement-codirecteur-these':
          details = await DemandeChangementCodirecteurTheses.findOne({ where: { id_demande } });
          fileUrl = `/api/admin/demande-file/${id_demande}`;
          break;
        case 'imists':
          details = await DemandeIMISTs.findOne({ where: { id_demande } });
          fileUrl = `/api/admin/demande-file/${id_demande}`;
          break;
        case 'tirage':
          details = await DemandeTirages.findOne({ where: { id_demande } });
          fileUrl = `/api/admin/demande-file/${id_demande}`;
          break;
        default:
          console.log('Type de demande inconnu:', demande.type_demande); // Ajout pour débogage

          return res.status(400).json({ error: 'Unknown type of demande' });
      }

      console.log('Details:', details); // Ajout pour débogage
      console.log('File URL:', fileUrl); // Ajout pour débogage


      // Prepare the response
      const response = {
        details: details,
        fileUrl: fileUrl
      };

      res.status(200).json(response);
    } catch (error) {
      console.error('Error fetching demande details:', error);
      res.status(500).json({ error: 'An error occurred while fetching demande details.' });
    }
  },

  downloadDemandeFile: async (req, res) => {
    const { id_demande } = req.params;

    try {
      const demande = await Demande.findByPk(id_demande);
      if (!demande) {
        return res.status(404).json({ error: 'Demande not found' });
      }

      let fileBuffer = null;
      let fileName = null;

      switch (demande.type_demande) {
        case 'inscription':
          const insc = await DemandeInscription.findOne({ where: { id_demande } });
          fileBuffer = insc.fichier_demande;
          fileName = 'demande_inscription.pdf';
          break;
        case 'retrait-provisoire':
          const retrait = await DemandeRetraitProvisoires.findOne({ where: { id_demande } });
          fileBuffer = retrait.fichier_demande_retrait;
          fileName = 'demande_retrait_provisoire.pdf';
          break;
        case 'retrait-definitif':
          const retraitDef = await DemandeRetraitDefinitifs.findOne({ where: { id_demande } });
          fileBuffer = retraitDef.fichier_retrait_definitif;
          fileName = 'demande_retrait_definitif.pdf';
          break;
        case 'carte-etudiant':
          const carte = await DemandeCarteEtudiants.findOne({ where: { id_demande } });
          fileBuffer = carte.fichier_carte_etudiant;
          fileName = 'demande_carte_etudiant.pdf';
          break;
        case 'email-academique':
          // Assuming there's no file for this type
          return res.status(404).json({ error: 'File not found' });
        case 'reinscription-derogation':
          const derogation = await DemandeDerogations.findOne({ where: { id_demande } });
          fileBuffer = derogation.fichier_demande_reinscription;
          fileName = 'demande_reinscription_derogation.pdf';
          break;
        case 'changement-sujet-these':
          const changementSujet = await DemandeChangementSujetTheses.findOne({ where: { id_demande } });
          fileBuffer = changementSujet.fichier_demande_changement_sujet;
          fileName = 'demande_changement_sujet_these.pdf';
          break;
        case 'changement-directeur-these':
          const changementDirecteur = await DemandeChangementDirecteurTheses.findOne({ where: { id_demande } });
          fileBuffer = changementDirecteur.fichier_demande_changement_directeur;
          fileName = 'demande_changement_directeur_these.pdf';
          break;
        case 'convention-stage':
          const convention = await ConventionStages.findOne({ where: { id_demande } });
          fileBuffer = convention.fichier_demande_stage;
          fileName = 'convention_stage.pdf';
          break;
        case 'cotutelle':
          const cotutelle = await Cotutelles.findOne({ where: { id_demande } });
          fileBuffer = cotutelle.fichier_demande_cotutelle;
          fileName = 'demande_cotutelle.pdf';
          break;
        case 'changement-codirecteur-these':
          const changementCodirecteur = await DemandeChangementCodirecteurTheses.findOne({ where: { id_demande } });
          fileBuffer = changementCodirecteur.fichier_demande_changement_codirecteur;
          fileName = 'demande_changement_codirecteur_these.pdf';
          break;
        case 'imists':
          const imists = await DemandeIMISTs.findOne({ where: { id_demande } });
          fileBuffer = imists.fichiers_cv;
          fileName = 'demande_imists.pdf';
          break;
        case 'tirage':
          const tirage = await DemandeTirages.findOne({ where: { id_demande } });
          fileBuffer = tirage.fichier_demande_tirage;
          fileName = 'demande_tirage.pdf';
          break;
        default:
          return res.status(400).json({ error: 'Unknown type of demande' });
      }

      if (!fileBuffer) {
        return res.status(404).json({ error: 'File not found' });
      }

      res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
      res.setHeader('Content-Type', 'application/pdf');
      res.send(fileBuffer);

    } catch (error) {
      console.error('Error fetching demande file:', error);
      res.status(500).json({ error: 'An error occurred while fetching the demande file.' });
    }
  },





//
  updateRequestStatus: async (req, res) => {
    const { id } = req.params;
    const { statut } = req.body;

    try {
      const demande = await Demande.findByPk(id);
      if (!demande) {
        return res.status(404).json({ error: 'Demande not found' });
      }

      demande.statut = statut;
      await demande.save();

      res.status(200).json({ message: 'Request status updated successfully.' });
    } catch (error) {
      console.error('Error updating request status:', error);
      res.status(500).json({ error: 'An error occurred while updating the request status.' });
    }
  },
};

module.exports = adminController;
