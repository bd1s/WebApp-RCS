// import React, { useState, useEffect } from 'react';
// import axios from '../api/axios';
// import { formatDate } from '../utils/formatDate';

// const RequestDetails = ({ request }) => {
//   const [details, setDetails] = useState(null);
//   const [status, setStatus] = useState(request.statut);

//   useEffect(() => {
//     if (request.id_demande) {
//       axios.get(`/admin/demande-details/${request.id_demande}`)
//         .then(response => {
//           setDetails(response.data.details);
//         })
//         .catch(error => {
//           console.error('Erreur lors de la récupération des détails de la demande :', error);
//         });
//     }
//   }, [request.id_demande]);

//   const handleStatusChange = (newStatus) => {
//     axios.put(`/admin/update-request-status/${request.id_demande}`, { statut: newStatus })
//       .then(() => {
//         setStatus(newStatus);
//       })
//       .catch(error => {
//         console.error('Erreur lors de la mise à jour du statut de la demande :', error);
//       });
//   };

//   const handleDownload = async (id_demande, titre) => {
//     try {
//       // Envoyer une requête pour obtenir l'URL du fichier
//       const response = await axios.get(`/admin/demande-file/${id_demande}`);
//       const fileUrl = response.data.fileUrl; // URL du fichier renvoyée par le backend

//       if (fileUrl) {
//         // Créer un lien temporaire pour télécharger le fichier
//         const link = document.createElement('a');
//         link.href = fileUrl;
//         link.setAttribute('download', titre); // Définir le nom du fichier à télécharger
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//       } else {
//         console.error('URL du fichier non trouvée.');
//       }
//     } catch (error) {
//       console.error('Erreur lors de la récupération du lien de téléchargement :', error);
//     }
//   };

//   const renderFormFields = () => {
//     if (!details) return null;

//     switch (request.type_demande) {
//       case 'inscription':
//         return (
//           <div>
//             <p><strong>Diplômes Précédents:</strong> {details.diplomes_precedents}</p>
//             <p><strong>Spécialisation Souhaitée:</strong> {details.specialisation_souhaitee}</p>
//             <p><strong>Notes de Transcription:</strong> {details.notes_transcription}</p>
//             {details.fichier_demande && (
//               <button 
//                 onClick={() => handleDownload(request.id_demande, 'nom_du_fichier.pdf')} 
//                 className="text-blue-500 underline"
//               >
//                 Télécharger le fichier de demande
//               </button>
//             )}
//           </div>
//         );
//       case 'retrait-provisoire':
//         return (
//           <div>
//             <p><strong>Motif de Retrait:</strong> {details.motif_retrait}</p>
//             <p><strong>Date de Début Prévue:</strong>{formatDate(details.date_debut_prevue)}</p>
//             <p><strong>Date de Retour Prévue:</strong> {formatDate(details.date_retour_prevue)}</p>
//             {details.fichier_demande_retrait && (
//               <button 
//                 onClick={() => handleDownload(request.id_demande, 'fichier_retrait_provisoire.pdf')} 
//                 className="text-blue-500 underline"
//               >
//                 Télécharger le fichier de retrait provisoire
//               </button>
//             )}
//           </div>
//         );
//       case 'retrait-definitif':
//         return (
//           <div>
//             <p><strong>Motif de Retrait:</strong> {details.motif_retrait_definitif}</p>
//             <p><strong>Date de Retrait:</strong> {formatDate(details.date_retrait)}</p>
//             <p><strong>Observations:</strong> {details.observations}</p>
//             {details.fichier_retrait_definitif && (
//               <button 
//                 onClick={() => handleDownload(request.id_demande, 'fichier_retrait_definitif.pdf')} 
//                 className="text-blue-500 underline"
//               >
//                 Télécharger le fichier de retrait définitif
//               </button>
//             )}
//           </div>
//         );
//       case 'carte-etudiant':
//         return (
//           <div>
//             <p><strong>Numéro Étudiant:</strong> {details.numero_etudiant}</p>
//             <p><strong>Date de Délivrance:</strong> {formatDate(details.date_delivrance)}</p>
//             {details.fichier_carte_etudiant && (
//               <button 
//                 onClick={() => handleDownload(request.id_demande, 'fichier_carte_etudiant.pdf')} 
//                 className="text-blue-500 underline"
//               >
//                 Télécharger le fichier de carte étudiant
//               </button>
//             )}
//           </div>
//         );
//       case 'email-academique':
//         return (
//           <div>
//             <p><strong>Identifiant Souhaité:</strong> {details.identifiant_souhaite}</p>
//             <p><strong>Motif de Demande:</strong> {details.motif_demande}</p>
//           </div>
//         );
//       case 'changement-sujet-these':
//         return (
//           <div>
//             <p><strong>Sujet Actuel:</strong> {details.sujet_actuel}</p>
//             <p><strong>Nouveau Sujet Proposé:</strong> {details.nouveau_sujet_propose}</p>
//             <p><strong>Justification:</strong> {details.justification}</p>
//             {details.fichier_demande_changement_sujet && (
//               <button 
//                 onClick={() => handleDownload(request.id_demande, 'fichier_changement_sujet.pdf')} 
//                 className="text-blue-500 underline"
//               >
//                 Télécharger le fichier de demande de changement de sujet
//               </button>
//             )}
//           </div>
//         );
//       case 'changement-directeur-these':
//         return (
//           <div>
//             <p><strong>Directeur Actuel:</strong> {details.directeur_actuel}</p>
//             <p><strong>Nouveau Directeur Proposé:</strong> {details.nouveau_directeur_propose}</p>
//             <p><strong>Raisons du Changement:</strong> {details.raisons_changement}</p>
//             {details.fichier_demande_changement_directeur && (
//               <button 
//                 onClick={() => handleDownload(request.id_demande, 'fichier_changement_directeur.pdf')} 
//                 className="text-blue-500 underline"
//               >
//                 Télécharger le fichier de demande de changement de directeur
//               </button>
//             )}
//           </div>
//         );
//       case 'reinscription-derogation':
//         return (
//           <div>
//             <p><strong>Année Académique:</strong> {details.annee_academique}</p>
//             <p><strong>Motif:</strong> {details.motif}</p>
//             <p><strong>Décision Prise:</strong> {details.decision_prise}</p>
//             {details.fichier_demande_reinscription && (
//               <button 
//                 onClick={() => handleDownload(request.id_demande, 'fichier_reinscription.pdf')} 
//                 className="text-blue-500 underline"
//               >
//                 Télécharger le fichier de demande de réinscription
//               </button>
//             )}
//           </div>
//         );
//       case 'convention-stage':
//         return (
//           <div>
//             <p><strong>Entreprise d'Accueil:</strong> {details.entreprise_accueil}</p>
//             <p><strong>Période de Stage:</strong> {details.periode_stage}</p>
//             <p><strong>Objectifs du Stage:</strong> {details.objectifs_stage}</p>
//             {details.fichier_demande_stage && (
//               <button 
//                 onClick={() => handleDownload(request.id_demande, 'fichier_demande_stage.pdf')} 
//                 className="text-blue-500 underline"
//               >
//                 Télécharger le fichier de demande de stage
//               </button>
//             )}
//           </div>
//         );
//       case 'cotutelle':
//         return (
//           <div>
//             <p><strong>Université Partenaire:</strong> {details.universite_partenaire}</p>
//             <p><strong>Pays:</strong> {details.pays}</p>
//             <p><strong>Durée de Cotutelle:</strong> {details.duree_cotutelle}</p>
//             {details.fichier_demande_cotutelle && (
//               <button 
//                 onClick={() => handleDownload(request.id_demande, 'fichier_demande_cotutelle.pdf')} 
//                 className="text-blue-500 underline"
//               >
//                 Télécharger le fichier de demande de cotutelle
//               </button>
//             )}
//           </div>
//         );
//       case 'changement-codirecteur-these':
//         return (
//           <div>
//             <p><strong>Co-directeur Actuel:</strong> {details.co_directeur_actuel}</p>
//             <p><strong>Nouveau Co-directeur Proposé:</strong> {details.nouveau_co_directeur_propose}</p>
//             <p><strong>Motifs de Changement:</strong> {details.motifs_changement}</p>
//             {details.fichier_demande_changement_codirecteur && (
//               <button 
//                 onClick={() => handleDownload(request.id_demande, 'fichier_changement_codirecteur.pdf')} 
//                 className="text-blue-500 underline"
//               >
//                 Télécharger le fichier de demande de changement de co-directeur
//               </button>
//             )}
//           </div>
//         );
//       case 'imists':
//         return (
//           <div>
//             <p><strong>Date de Début de Thèse:</strong> {details.date_debut_these}</p>
//             <p><strong>Date Prévue pour la Soutenance:</strong> {formatDate(details.date_prevue_soutenance)}</p>
//             {details.fichiers_cv && (
//               <button 
//                 onClick={() => handleDownload(request.id_demande, 'fichiers_cv.pdf')} 
//                 className="text-blue-500 underline"
//               >
//                 Télécharger les fichiers CV
//               </button>
//             )}
//           </div>
//         );
//       case 'tirage':
//         return (
//           <div>
//             <p><strong>Titre de Thèse:</strong> {details.titre_these}</p>
//             <p><strong>Nombre de Tirages Demandés:</strong> {details.nombre_exemplaires}</p>
//             <p><strong>Date de Soutenance:</strong> {formatDate(details.date_soutenance)}</p>
//             {details.fichier_demande_tirage && (
//               <button 
//                 onClick={() => handleDownload(request.id_demande, 'fichier_demande_tirage.pdf')} 
//                 className="text-blue-500 underline"
//               >
//                 Télécharger le fichier de demande de tirage
//               </button>
//             )}
//           </div>
//         );
//       default:
//         return <p>Aucun détail disponible pour ce type de demande.</p>;
//     }
//   };

//   return (
//     <div className="container mx-auto p-4 mt-4 border border-gray-300 bg-white">
//       <h2>Détails de la Demande</h2>
//       {renderFormFields()}
//       <div className="mt-4">
//         <button 
//           onClick={() => handleStatusChange('validé')} 
//           className="btn btn-success"
//         >
//           Valider
//         </button>
//         <button 
//           onClick={() => handleStatusChange('rejeté')} 
//           className="btn btn-danger"
//         >
//           Rejeter
//         </button>
//       </div>
//     </div>
//   );
// };

// export default RequestDetails;


import React, { useState, useEffect } from 'react';
import axios from '../api/axios';
import { formatDate } from '../utils/formatDate';

const RequestDetails = ({ request }) => {
  const [details, setDetails] = useState(null);
  const [status, setStatus] = useState(request.statut);

  useEffect(() => {
    if (request.id_demande) {
      axios.get(`/admin/demande-details/${request.id_demande}`)
        .then(response => {
          setDetails(response.data.details);
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des détails de la demande :', error);
        });
    }
  }, [request.id_demande]);

  const handleStatusChange = (newStatus) => {
    axios.put(`/admin/update-request-status/${request.id_demande}`, { statut: newStatus })
      .then(() => {
        setStatus(newStatus);
      })
      .catch(error => {
        console.error('Erreur lors de la mise à jour du statut de la demande :', error);
      });
  };

  const handleDownload = async (id_demande, titre) => {
    try {
      const response = await axios.get(`/admin/demande-file/${id_demande}`, {
        responseType: 'blob', // Get the response as a blob
      });
      const blob = new Blob([response.data], { type: response.headers['content-type'] });
      const fileUrl = window.URL.createObjectURL(blob);

      // Create a link element and trigger download
      const link = document.createElement('a');
      link.href = fileUrl;
      link.setAttribute('download', titre); // Set the name of the file to download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(fileUrl); // Clean up the URL.createObjectURL
    } catch (error) {
      console.error('Erreur lors de la récupération du lien de téléchargement :', error);
    }
  };

  const renderFormFields = () => {
    if (!details) return null;

    switch (request.type_demande) {
      case 'inscription':
        return (
          <div>
            <p><strong>Diplômes Précédents:</strong> {details.diplomes_precedents}</p>
            <p><strong>Spécialisation Souhaitée:</strong> {details.specialisation_souhaitee}</p>
            <p><strong>Notes de Transcription:</strong> {details.notes_transcription}</p>
            {details.fichier_demande && (
              <button 
                onClick={() => handleDownload(request.id_demande, 'fichier_demande_inscription.pdf')} 
                className="text-blue-500 underline"
              >
                Télécharger le fichier de demande
              </button>
            )}
          </div>
        );
      case 'retrait-provisoire':
        return (
          <div>
            <p><strong>Motif de Retrait:</strong> {details.motif_retrait}</p>
            <p><strong>Date de Début Prévue:</strong> {formatDate(details.date_debut_prevue)}</p>
            <p><strong>Date de Retour Prévue:</strong> {formatDate(details.date_retour_prevue)}</p>
            {details.fichier_demande_retrait && (
              <button 
                onClick={() => handleDownload(request.id_demande, 'fichier_retrait_provisoire.pdf')} 
                className="text-blue-500 underline"
              >
                Télécharger le fichier de retrait provisoire
              </button>
            )}
          </div>
        );
      case 'retrait-definitif':
        return (
          <div>
            <p><strong>Motif de Retrait:</strong> {details.motif_retrait_definitif}</p>
            <p><strong>Date de Retrait:</strong> {formatDate(details.date_retrait)}</p>
            <p><strong>Observations:</strong> {details.observations}</p>
            {details.fichier_retrait_definitif && (
              <button 
                onClick={() => handleDownload(request.id_demande, 'fichier_retrait_definitif.pdf')} 
                className="text-blue-500 underline"
              >
                Télécharger le fichier de retrait définitif
              </button>
            )}
          </div>
        );
      case 'carte-etudiant':
        return (
          <div>
            <p><strong>Numéro Étudiant:</strong> {details.numero_etudiant}</p>
            <p><strong>Date de Délivrance:</strong> {formatDate(details.date_delivrance)}</p>
            {details.fichier_carte_etudiant && (
              <button 
                onClick={() => handleDownload(request.id_demande, 'fichier_carte_etudiant.pdf')} 
                className="text-blue-500 underline"
              >
                Télécharger le fichier de carte étudiant
              </button>
            )}
          </div>
        );
      case 'email-academique':
        return (
          <div>
            <p><strong>Identifiant Souhaité:</strong> {details.identifiant_souhaite}</p>
            <p><strong>Motif de Demande:</strong> {details.motif_demande}</p>
          </div>
        );
      case 'changement-sujet-these':
        return (
          <div>
            <p><strong>Sujet Actuel:</strong> {details.sujet_actuel}</p>
            <p><strong>Nouveau Sujet Proposé:</strong> {details.nouveau_sujet_propose}</p>
            <p><strong>Justification:</strong> {details.justification}</p>
            {details.fichier_demande_changement_sujet && (
              <button 
                onClick={() => handleDownload(request.id_demande, 'fichier_changement_sujet.pdf')} 
                className="text-blue-500 underline"
              >
                Télécharger le fichier de demande de changement de sujet
              </button>
            )}
          </div>
        );
      case 'changement-directeur-these':
        return (
          <div>
            <p><strong>Directeur Actuel:</strong> {details.directeur_actuel}</p>
            <p><strong>Nouveau Directeur Proposé:</strong> {details.nouveau_directeur_propose}</p>
            <p><strong>Raisons du Changement:</strong> {details.raisons_changement}</p>
            {details.fichier_demande_changement_directeur && (
              <button 
                onClick={() => handleDownload(request.id_demande, 'fichier_changement_directeur.pdf')} 
                className="text-blue-500 underline"
              >
                Télécharger le fichier de demande de changement de directeur
              </button>
            )}
          </div>
        );
      case 'reinscription-derogation':
        return (
          <div>
            <p><strong>Année Académique:</strong> {details.annee_academique}</p>
            <p><strong>Motif:</strong> {details.motif}</p>
            <p><strong>Décision Prise:</strong> {details.decision_prise}</p>
            {details.fichier_demande_reinscription && (
              <button 
                onClick={() => handleDownload(request.id_demande, 'fichier_reinscription.pdf')} 
                className="text-blue-500 underline"
              >
                Télécharger le fichier de demande de réinscription
              </button>
            )}
          </div>
        );
      case 'convention-stage':
        return (
          <div>
            <p><strong>Entreprise d'Accueil:</strong> {details.entreprise_accueil}</p>
            <p><strong>Période de Stage:</strong> {details.periode_stage}</p>
            <p><strong>Objectifs du Stage:</strong> {details.objectifs_stage}</p>
            {details.fichier_demande_stage && (
              <button 
                onClick={() => handleDownload(request.id_demande, 'fichier_demande_stage.pdf')} 
                className="text-blue-500 underline"
              >
                Télécharger le fichier de demande de stage
              </button>
            )}
          </div>
        );
      case 'cotutelle':
        return (
          <div>
            <p><strong>Université Partenaire:</strong> {details.universite_partenaire}</p>
            <p><strong>Pays:</strong> {details.pays}</p>
            <p><strong>Durée de Cotutelle:</strong> {details.duree_cotutelle}</p>
            {details.fichier_demande_cotutelle && (
              <button 
                onClick={() => handleDownload(request.id_demande, 'fichier_demande_cotutelle.pdf')} 
                className="text-blue-500 underline"
              >
                Télécharger le fichier de demande de cotutelle
              </button>
            )}
          </div>
        );
      case 'changement-codirecteur-these':
        return (
          <div>
            <p><strong>Co-directeur Actuel:</strong> {details.co_directeur_actuel}</p>
            <p><strong>Nouveau Co-directeur Proposé:</strong> {details.nouveau_co_directeur_propose}</p>
            <p><strong>Motifs de Changement:</strong> {details.motifs_changement}</p>
            {details.fichier_demande_changement_codirecteur && (
              <button 
                onClick={() => handleDownload(request.id_demande, 'fichier_demande_changement_codirecteur.pdf')} 
                className="text-blue-500 underline"
              >
                Télécharger le fichier de demande de changement de co-directeur
              </button>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-lg font-bold">Détails de la Demande</h2>
      <p><strong>ID Demande:</strong> {request.id_demande}</p>
      <p><strong>Nom:</strong> {request.nom}</p>
      <p><strong>Prénom:</strong> {request.prenom}</p>
      <p><strong>Statut:</strong> {status}</p>
      <p><strong>Date de Soumission:</strong> {formatDate(request.date_soumission)}</p>
      {renderFormFields()}
      <div className="mt-4">
        <button 
          onClick={() => handleStatusChange('validé')} 
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Valider
        </button>
        <button 
          onClick={() => handleStatusChange('rejeté')} 
          className="bg-red-500 text-white px-4 py-2 rounded ml-2"
        >
          Rejeter
        </button>
      </div>
    </div>
  );
};

export default RequestDetails;
