
// import React, { useState, useEffect } from 'react';
// import axios from '../api/axios';

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
//           console.error('Error fetching request details:', error);
//         });
//     }
//   }, [request.id_demande]);

//   const handleStatusChange = (newStatus) => {
//     axios.put(`/admin/update-request-status/${request.id_demande}`, { statut: newStatus })
//       .then(() => {
//         setStatus(newStatus);
//       })
//       .catch(error => {
//         console.error('Error updating request status:', error);
//       });
//   };

//   const renderFormFields = () => {
//     switch (request.type_demande) {
//       case 'inscription':
//         return (
//           <div>
//             <p><strong>Diplômes Précédents:</strong> {details.diplomes_precedents}</p>
//             <p><strong>Spécialisation Souhaitée:</strong> {details.specialisation_souhaitee}</p>
//             <p><strong>Notes de Transcription:</strong> {details.notes_transcription}</p>
//             {details.fichier_demande && (
//               <a href={details.fichier_demande} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
//                 Télécharger le fichier de demande
//               </a>
//             )}
//           </div>
//         );
//       case 'retrait-provisoire':
//         return (
//           <div>
//             <p><strong>Motif de Retrait:</strong> {details.motif_retrait}</p>
//             <p><strong>Date de Début Prévue:</strong> {details.date_debut_prevue}</p>
//             <p><strong>Date de Retour Prévue:</strong> {details.date_retour_prevue}</p>
//             {details.fichier_demande_retrait && (
//               <a href={details.fichier_demande_retrait} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
//                 Télécharger le fichier de retrait provisoire
//               </a>
//             )}
//           </div>
//         );
//       case 'retrait-definitif':
//         return (
//           <div>
//             <p><strong>Motif de Retrait:</strong> {details.motif_retrait}</p>
//             <p><strong>Date de Retrait:</strong> {details.date_retrait}</p>
//             <p><strong>Observations:</strong> {details.observations}</p>
//             {details.fichier_retrait_definitif && (
//               <a href={details.fichier_retrait_definitif} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
//                 Télécharger le fichier de retrait définitif
//               </a>
//             )}
//           </div>
//         );
//       case 'carte-etudiant':
//         return (
//           <div>
//             <p><strong>Numéro Étudiant:</strong> {details.numero_etudiant}</p>
//             <p><strong>Date de Délivrance:</strong> {details.date_delivrance}</p>
//             {details.fichier_carte_etudiant && (
//               <a href={details.fichier_carte_etudiant} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
//                 Télécharger le fichier de carte étudiant
//               </a>
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
//       case 'Changement-sujet-these':
//         return (
//           <div>
//             <p><strong>Sujet Actuel:</strong> {details.sujet_actuel}</p>
//             <p><strong>Nouveau Sujet Proposé:</strong> {details.nouveau_sujet_propose}</p>
//             <p><strong>Justification:</strong> {details.justification}</p>
//             {details.fichier_demande_changement_sujet && (
//               <a href={details.fichier_demande_changement_sujet} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
//                 Télécharger le fichier de demande de changement de sujet
//               </a>
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
//               <a href={details.fichier_demande_changement_directeur} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
//                 Télécharger le fichier de demande de changement de directeur
//               </a>
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
//               <a href={details.fichier_demande_reinscription} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
//                 Télécharger le fichier de demande de réinscription
//               </a>
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
//               <a href={details.fichier_demande_stage} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
//                 Télécharger le fichier de demande de stage
//               </a>
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
//               <a href={details.fichier_demande_cotutelle} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
//                 Télécharger le fichier de demande de cotutelle
//               </a>
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
//               <a href={details.fichier_demande_changement_codirecteur} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
//                 Télécharger le fichier de demande de changement de co-directeur
//               </a>
//             )}
//           </div>
//         );
//       case 'imists':
//         return (
//           <div>
//             <p><strong>Date de Début de Thèse:</strong> {details.date_debut_these}</p>
//             <p><strong>Date Prévue pour la Soutenance:</strong> {details.date_prevue_soutenance}</p>
//             {details.fichiers_cv && (
//               <a href={details.fichiers_cv} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
//                 Télécharger les fichiers CV
//               </a>
//             )}
//           </div>
//         );
//       case 'tirage':
//         return (
//           <div>
//             <p><strong>Titre de Thèse:</strong> {details.titre_these}</p>
//             <p><strong>Nombre d'Exemplaires:</strong> {details.nombre_exemplaires}</p>
//             <p><strong>Date de Soutenance:</strong> {details.date_soutenance}</p>
//             {details.fichier_demande_tirage && (
//               <a href={details.fichier_demande_tirage} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
//                 Télécharger le fichier de demande de tirage
//               </a>
//             )}
//           </div>
//         );
//       default:
//         return <p>Type de demande inconnu.</p>;
//     }
//   };

//   return (
//     <div className="container mx-auto p-4 mt-4 border border-gray-300 bg-white">
//       <h2 className="text-xl font-bold mb-4">Détails de la Demande</h2>
//       {details ? (
//         <div>
//           {renderFormFields()}
//           <div className="mt-4">
//             <button
//               onClick={() => handleStatusChange('validé')}
//               className="bg-green-500 text-white px-4 py-2 mr-2 rounded"
//             >
//               Valider
//             </button>
//             <button
//               onClick={() => handleStatusChange('rejeté')}
//               className="bg-red-500 text-white px-4 py-2 rounded"
//             >
//               Rejeter
//             </button>
//           </div>
//         </div>
//       ) : (
//         <p>Chargement des détails...</p>
//       )}
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
              <a href={`${process.env.REACT_APP_API_BASE_URL}/admin/demande-file/${request.id_demande}`} 
                 download 
                 className="text-blue-500 underline">
                Télécharger le fichier de demande
              </a>
            )}
          </div>
        );
      case 'retrait-provisoire':
        return (
          <div>
            <p><strong>Motif de Retrait:</strong> {details.motif_retrait}</p>
            <p><strong>Date de Début Prévue:</strong>{formatDate (details.date_debut_prevue)}</p>
            <p><strong>Date de Retour Prévue:</strong> {formatDate (details.date_retour_prevue)}</p>
            {details.fichier_demande_retrait && (
              <a href={`${process.env.REACT_APP_API_BASE_URL}/admin/demande-file/${request.id_demande}`} 
                 download 
                 className="text-blue-500 underline">
                Télécharger le fichier de retrait provisoire
              </a>
            )}
          </div>
        );
      case 'retrait-definitif':
        return (
          <div>
            <p><strong>Motif de Retrait:</strong> {details.motif_retrait}</p>
            <p><strong>Date de Retrait:</strong> {formatDate(details.date_retrait)}</p>
            <p><strong>Observations:</strong> {details.observations}</p>
            {details.fichier_retrait_definitif && (
              <a href={`${process.env.REACT_APP_API_BASE_URL}/admin/demande-file/${request.id_demande}`} 
                 download 
                 className="text-blue-500 underline">
                Télécharger le fichier de retrait définitif
              </a>
            )}
          </div>
        );
      case 'carte-etudiant':
        return (
          <div>
            <p><strong>Numéro Étudiant:</strong> {details.numero_etudiant}</p>
            <p><strong>Date de Délivrance:</strong> {formatDate(details.date_delivrance)}</p>
            {details.fichier_carte_etudiant && (
              <a href={`${process.env.REACT_APP_API_BASE_URL}/admin/demande-file/${request.id_demande}`} 
                 download 
                 className="text-blue-500 underline">
                Télécharger le fichier de carte étudiant
              </a>
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
              <a href={`${process.env.REACT_APP_API_BASE_URL}/admin/demande-file/${request.id_demande}`} 
                 download 
                 className="text-blue-500 underline">
                Télécharger le fichier de demande de changement de sujet
              </a>
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
              <a href={`${process.env.REACT_APP_API_BASE_URL}/admin/demande-file/${request.id_demande}`} 
                 download 
                 className="text-blue-500 underline">
                Télécharger le fichier de demande de changement de directeur
              </a>
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
              <a href={`${process.env.REACT_APP_API_BASE_URL}/admin/demande-file/${request.id_demande}`} 
                 download 
                 className="text-blue-500 underline">
                Télécharger le fichier de demande de réinscription
              </a>
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
              <a href={`${process.env.REACT_APP_API_BASE_URL}/admin/demande-file/${request.id_demande}`} 
                 download 
                 className="text-blue-500 underline">
                Télécharger le fichier de demande de stage
              </a>
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
              <a href={`${process.env.REACT_APP_API_BASE_URL}/admin/demande-file/${request.id_demande}`} 
                 download 
                 className="text-blue-500 underline">
                Télécharger le fichier de demande de cotutelle
              </a>
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
              <a href={`${process.env.REACT_APP_API_BASE_URL}/admin/demande-file/${request.id_demande}`} 
                 download 
                 className="text-blue-500 underline">
                Télécharger le fichier de demande de changement de co-directeur
              </a>
            )}
          </div>
        );
      case 'imists':
        return (
          <div>
             <p><strong>Date de Début de Thèse:</strong> {details.date_debut_these}</p>
             <p><strong>Date Prévue pour la Soutenance:</strong> {formatDate(details.date_prevue_soutenance)}</p>
            {details.fichiers_cv && (
              <a href={`${process.env.REACT_APP_API_BASE_URL}/admin/demande-file/${request.id_demande}`} 
                 download 
                 className="text-blue-500 underline">
                Télécharger les fichiers CV
              </a>
            )}
          </div>
        );
      case 'tirage':
        return (
          <div>
            <p><strong>Titre de Thèse:</strong> {details.titre_these}</p>
            <p><strong>Nombre de Tirages Demandés:</strong> {details.nombre_exemplaires}</p>
            <p><strong>Date_soutenance:</strong> {formatDate(details.date_soutenance)}</p>
            {details.fichier_demande_tirage && (
              <a href={`${process.env.REACT_APP_API_BASE_URL}/admin/demande-file/${request.id_demande}`} 
                 download 
                 className="text-blue-500 underline">
                Télécharger le fichier de demande de tirage
              </a>
            )}
          </div>
        );
      default:
        return <p>Aucun détail disponible pour ce type de demande.</p>;
    }
  };

  return (
    <div className="container mx-auto p-4 mt-4 border border-gray-300 bg-white">
      <h2>Détails de la Demande</h2>
      {renderFormFields()}
      <div className="mt-4">
        <button onClick={() => handleStatusChange('validé')} className="btn btn-success">Valider</button>
        <button onClick={() => handleStatusChange('rejeté')} className="btn btn-danger">Rejeter</button>
      </div>
    </div>
  );
};

export default RequestDetails;




































// const RequestDetails = ({ request }) => {
//     const [details, setDetails] = useState(null);
//     const [status, setStatus] = useState(request.statut);
  
//     useEffect(() => {
//     console.log('Request object:', request); // Ajout pour débogage

//       if (request.id_demande) {
//         axios.get(`/admin/demande-details/${request.id_demande}`)
//           .then(response => {
//             console.log('Response from backend:', response.data); // Ajout pour débogage

//             setDetails(response.data.details);
//           })
//           .catch(error => {
//             console.error('Error fetching request details:', error);
//           });
//       }
//     }, [request.id_demande]);
  
//     const handleStatusChange = (newStatus) => {
//       axios.put(`/admin/update-request-status/${request.id_demande}`, { statut: newStatus })
//         .then(() => {
//           setStatus(newStatus);
//         })
//         .catch(error => {
//           console.error('Error updating request status:', error);
//         });
//     };
  
//     const renderFormFields = () => {
//         console.log('Details object:', details); // Ajout pour débogage

//       switch (request.type_demande) {
//         case 'inscription':
//           return (
//             <div>
//               <p><strong>Diplômes Précédents:</strong> {details.diplomes_precedents}</p>
//               <p><strong>Spécialisation Souhaitée:</strong> {details.specialisation_souhaitee}</p>
//               <p><strong>Notes de Transcription:</strong> {details.notes_transcription}</p>
//               {details.fileUrl && (
//                 <a href={details.fileUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
//                   Télécharger le fichier de demande
//                 </a>
//               )}
//             </div>
//           );
//         // ... autres cas
//       }
//     };
  
//     return (
//       <div className="container mx-auto p-4 mt-4 border border-gray-300 bg-white">
//         <h2 className="text-xl font-bold mb-4">Détails de la Demande</h2>
//         {details ? (
//           <div>
//             {renderFormFields()}
//             <div className="mt-4">
//               <button
//                 onClick={() => handleStatusChange('validé')}
//                 className="bg-green-500 text-white px-4 py-2 mr-2 rounded"
//               >
//                 Valider
//               </button>
//               <button
//                 onClick={() => handleStatusChange('rejeté')}
//                 className="bg-red-500 text-white px-4 py-2 rounded"
//               >
//                 Rejeter
//               </button>
//             </div>
//           </div>
//         ) : (
//           <p>Chargement des détails...</p>
//         )}
//       </div>
//     );
//   };
  