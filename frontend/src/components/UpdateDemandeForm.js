// import React, { useState, useEffect } from 'react';
// import axios from '../api/axios'; // Utiliser l'instance Axios configurée
// import { useParams } from 'react-router-dom';

// const UpdateDemandeForm = () => {
//   const { demandeId } = useParams();
//   const [demandeData, setDemandeData] = useState({});
//   const [file, setFile] = useState(null);
//   const [message, setMessage] = useState('');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchDemande = async () => {
//       try {
//         const response = await axios.get(`/demandes/${demandeId}`);
//         console.log('Réponse de l\'API :', response);
//         const { data } = response;
//         setDemandeData(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Erreur lors de la récupération de la demande:', error);
//         setMessage('Erreur lors de la récupération de la demande.');
//         setLoading(false);
//       }
//     };

//     fetchDemande();
//   }, [demandeId]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setDemandeData(prevDemandeData => ({ ...prevDemandeData, [name]: value }));
//   };

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0] || null);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formDataToSend = new FormData();

//     // Ajouter toutes les données de demandeData sauf 'file'
//     Object.keys(demandeData).forEach((key) => {
//       if (key !== 'file') {
//         formDataToSend.append(key, demandeData[key]);
//       }
//     });

//     // Ajouter le fichier si présent
//     if (file) {
//       formDataToSend.append('file', file);
//     }

//     // Ajouter des métadonnées supplémentaires si nécessaire
//     formDataToSend.append('date_soumission', new Date().toISOString().split('T')[0]);

//     // Afficher les données envoyées pour le débogage
//     console.log('Données envoyées :');
//     for (const pair of formDataToSend.entries()) {
//       console.log(`${pair[0]}: ${pair[1]}`);
//     }

//     try {
//       const response = await axios.put(`/demandes/${demandeId}`, formDataToSend, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       console.log('Réponse de la mise à jour :', response);
//       setMessage(response.data.message);
//     } catch (error) {
//       console.error('Erreur lors de la mise à jour de la demande:', error);
//       setMessage('Erreur lors de la mise à jour de la demande.');
//     }
//   };

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div>
//       <h2>Modifier la Demande</h2>
//       <p>ID de la Demande: {demandeId}</p>
//       <form onSubmit={handleSubmit}>
//         {demandeData.type_demande === 'inscription' && (
//           <>
//             <label>Diplômes Précédents</label>
//             <input
//               type="text"
//               name="diplomes_precedents"
//               value={demandeData.diplomes_precedents || ''}
//               onChange={handleChange}
//             />
//             <label>Spécialisation Souhaitée</label>
//             <input
//               type="text"
//               name="specialisation_souhaitee"
//               value={demandeData.specialisation_souhaitee || ''}
//               onChange={handleChange}
//             />
//             <label>Notes de Transcription</label>
//             <input
//               type="text"
//               name="notes_transcription"
//               value={demandeData.notes_transcription || ''}
//               onChange={handleChange}
//             />
//             <label>Fichier de Demande</label>
//             <input
//               type="file"
//               name="file"
//               onChange={handleFileChange}
//             />
//           </>
//         )}

//         {demandeData.type_demande === 'retrait-provisoire' && (
//           <>
//             <label>Motif de Retrait</label>
//             <input
//               type="text"
//               name="motif_retrait"
//               value={demandeData.motif_retrait || ''}
//               onChange={handleChange}
//             />
//             <label>Date de Début Prévue</label>
//             <input
//               type="date"
//               name="date_debut_prevue"
//               value={demandeData.date_debut_prevue || ''}
//               onChange={handleChange}
//             />
//             <label>Date de Retour Prévue</label>
//             <input
//               type="date"
//               name="date_retour_prevue"
//               value={demandeData.date_retour_prevue || ''}
//               onChange={handleChange}
//             />
//             <label>Fichier de Retrait</label>
//             <input
//               type="file"
//               name="file"
//               onChange={handleFileChange}
//             />
//           </>
//         )}
//         {demandeData.type_demande === 'retrait-definitif' && (
//           <>
//             <label>Motif de Retrait Définitif</label>
//             <input
//               type="text"
//               name="motif_retrait_definitif"
//               value={demandeData.motif_retrait_definitif || ''}
//               onChange={handleChange}
//             />
//             <label>Date de Retrait</label>
//             <input
//               type="date"
//               name="date_retrait"
//               value={demandeData.date_retrait || ''}
//               onChange={handleChange}
//             />
//             <label>Observations</label>
//             <input
//               type="text"
//               name="observations"
//               value={demandeData.observations || ''}
//               onChange={handleChange}
//             />
//             <label>Fichier de Retrait Définitif</label>
//             <input
//               type="file"
//               name="file"
//               onChange={handleFileChange}
//             />
//           </>
//         )}
//         {demandeData.type_demande === 'carte-etudiant' && (
//           <>
//             <label>Numéro Étudiant</label>
//             <input
//               type="text"
//               name="numero_etudiant"
//               value={demandeData.numero_etudiant || ''}
//               onChange={handleChange}
//             />
//             <label>Date de Délivrance</label>
//             <input
//               type="date"
//               name="date_delivrance"
//               value={demandeData.date_delivrance || ''}
//               onChange={handleChange}
//             />
//             <label>Fichier Carte Étudiant</label>
//             <input
//               type="file"
//               name="file"
//               onChange={handleFileChange}
//             />
//           </>
//         )}
//         {demandeData.type_demande === 'email-academique' && (
//           <>
//             <label>Identifiant Souhaité</label>
//             <input
//               type="text"
//               name="identifiant_souhaite"
//               value={demandeData.identifiant_souhaite || ''}
//               onChange={handleChange}
//             />
//             <label>Motif de la Demande</label>
//             <input
//               type="text"
//               name="motif_demande"
//               value={demandeData.motif_demande || ''}
//               onChange={handleChange}
//             />
//           </>
//         )}
//         {demandeData.type_demande === 'changement-sujet-these' && (
//           <>
//             <label>Sujet Actuel</label>
//             <input
//               type="text"
//               name="sujet_actuel"
//               value={demandeData.sujet_actuel || ''}
//               onChange={handleChange}
//             />
//             <label>Nouveau Sujet Proposé</label>
//             <input
//               type="text"
//               name="nouveau_sujet_propose"
//               value={demandeData.nouveau_sujet_propose || ''}
//               onChange={handleChange}
//             />
//             <label>Justification</label>
//             <input
//               type="text"
//               name="justification"
//               value={demandeData.justification || ''}
//               onChange={handleChange}
//             />
//             <label>Fichier de Changement de Sujet</label>
//             <input
//               type="file"
//               name="file"
//               onChange={handleFileChange}
//             />
//           </>
//         )}
//         {demandeData.type_demande === 'changement-directeur-these' && (
//           <>
//             <label>Directeur Actuel</label>
//             <input
//               type="text"
//               name="directeur_actuel"
//               value={demandeData.directeur_actuel || ''}
//               onChange={handleChange}
//             />
//             <label>Nouveau Directeur Proposé</label>
//             <input
//               type="text"
//               name="nouveau_directeur_propose"
//               value={demandeData.nouveau_directeur_propose || ''}
//               onChange={handleChange}
//             />
//             <label>Raisons du Changement</label>
//             <input
//               type="text"
//               name="raisons_changement"
//               value={demandeData.raisons_changement || ''}
//               onChange={handleChange}
//             />
//             <label>Fichier de Changement de Directeur</label>
//             <input
//               type="file"
//               name="file"
//               onChange={handleFileChange}
//             />
//           </>
//         )}
//         {demandeData.type_demande === 'reinscription-derogation' && (
//           <>
//             <label>Année Académique</label>
//             <input
//               type="text"
//               name="annee_academique"
//               value={demandeData.annee_academique || ''}
//               onChange={handleChange}
//             />

//             <label>Motif</label>
//             <input
//               type="text"
//               name="motif"
//               value={demandeData.motif || ''}
//               onChange={handleChange}
//             />

//             <label>Décision Prise</label>
//             <input
//               type="text"
//               name="decision_prise"
//               value={demandeData.decision_prise || ''}
//               onChange={handleChange}
//             />

//             <label>Fichier de Réinscription</label>
//             <input
//               type="file"
//               name="file"
//               onChange={handleFileChange}
//             />
//           </>
//         )}

//         {demandeData.type_demande === 'convention-stage' && (
//           <>
//             <label>Entreprise d'Accueil</label>
//             <input
//               type="text"
//               name="entreprise_accueil"
//               value={demandeData.entreprise_accueil || ''}
//               onChange={handleChange}
//             />

//             <label>Période de Stage</label>
//             <input
//               type="date"
//               name="periode_stage"
//               value={demandeData.periode_stage || ''}
//               onChange={handleChange}
//             />

//             <label>Objectifs du Stage</label>
//             <input
//               type="text"
//               name="objectifs_stage"
//               value={demandeData.objectifs_stage || ''}
//               onChange={handleChange}
//             />

//             <label>Fichier de Convention de Stage</label>
//             <input
//               type="file"
//               name="file"
//               onChange={handleFileChange}
//             />
//           </>
//         )}

//         {demandeData.type_demande === 'cotutelle' && (
//           <>
//             <label>Université Partenaire</label>
//             <input
//               type="text"
//               name="universite_partenaire"
//               value={demandeData.universite_partenaire || ''}
//               onChange={handleChange}
//             />

//             <label>Pays</label>
//             <input
//               type="text"
//               name="pays"
//               value={demandeData.pays || ''}
//               onChange={handleChange}
//             />

//             <label>Durée de la Cotutelle</label>
//             <input
//               type="text"
//               name="duree_cotutelle"
//               value={demandeData.duree_cotutelle || ''}
//               onChange={handleChange}
//             />

//             <label>Fichier de Cotutelle</label>
//             <input
//               type="file"
//               name="file"
//               onChange={handleFileChange}
//             />
//           </>
//         )}

//         {demandeData.type_demande === 'changement-codirecteur-these' && (
//           <>
//             <label>Co-Directeur Actuel</label>
//             <input
//               type="text"
//               name="co_directeur_actuel"
//               value={demandeData.co_directeur_actuel || ''}
//               onChange={handleChange}
//             />

//             <label>Nouveau Co-Directeur Proposé</label>
//             <input
//               type="text"
//               name="nouveau_co_directeur_propose"
//               value={demandeData.nouveau_co_directeur_propose || ''}
//               onChange={handleChange}
//             />

//             <label>Motifs du Changement</label>
//             <input
//               type="text"
//               name="motifs_changement"
//               value={demandeData.motifs_changement || ''}
//               onChange={handleChange}
//             />

//             <label>Fichier de Changement de Co-Directeur</label>
//             <input
//               type="file"
//               name="file"
//               onChange={handleFileChange}
//             />
//           </>
//         )}

//         {demandeData.type_demande === 'imists' && (
//   <>
//     <label>Titre de la Thèse</label>
//     <input
//       type="text"
//       name="titre_these"
//       value={demandeData.titre_these || ''}
//       onChange={handleChange}
//     />

//     <label>Directeur de Thèse</label>
//     <input
//       type="text"
//       name="directeur_these"
//       value={demandeData.directeur_these || ''}
//       onChange={handleChange}
//     />

//     <label>Date de Début de la Thèse</label>
//     <input
//       type="date"
//       name="date_debut_these"
//       value={demandeData.date_debut_these || ''}
//       onChange={handleChange}
//     />

//     <label>Date Prévue de Soutenance</label>
//     <input
//       type="date"
//       name="date_prevue_soutenance"
//       value={demandeData.date_prevue_soutenance || ''}
//       onChange={handleChange}
//     />

//     <label>Fichiers CV</label>
//     <input
//       type="file"
//       name="file"
//       onChange={handleFileChange}
//     />
//   </>
// )}


//         {demandeData.type_demande === 'tirage' && (
//   <>
//     <label>Titre de la Thèse</label>
//     <input
//       type="text"
//       name="titre_these"
//       value={demandeData.titre_these || ''}
//       onChange={handleChange}
//     />

//     <label>Nombre d'Exemplaires</label>
//     <input
//       type="number"
//       name="nombre_exemplaires"
//       value={demandeData.nombre_exemplaires || ''}
//       onChange={handleChange}
//     />

//     <label>Date de Soutenance</label>
//     <input
//       type="date"
//       name="date_soutenance"
//       value={demandeData.date_soutenance || ''}
//       onChange={handleChange}
//     />

//     <label>Fichier de la Demande</label>
//     <input
//       type="file"
//       name="file"
//       onChange={handleFileChange}
//     />
//   </>
// )}

//         <button type="submit">Mettre à jour la demande</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default UpdateDemandeForm;        
import React, { useState, useEffect } from 'react';
import axios from '../api/axios'; // Utiliser l'instance Axios configurée
import { useParams } from 'react-router-dom';

const UpdateDemandeForm = () => {
  const { demandeId } = useParams();
  const [demandeData, setDemandeData] = useState({});
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDemande = async () => {
      try {
        const response = await axios.get(`/demandes/${demandeId}`);
        const { data } = response;
        setDemandeData(data);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors de la récupération de la demande:', error);
        setMessage('Erreur lors de la récupération de la demande.');
        setLoading(false);
      }
    };

    fetchDemande();
  }, [demandeId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDemandeData(prevDemandeData => ({ ...prevDemandeData, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0] || null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();

    // Ajouter toutes les données de demandeData sauf 'file'
    Object.keys(demandeData).forEach((key) => {
      if (key !== 'file') {
        formDataToSend.append(key, demandeData[key]);
      }
    });

    // Ajouter le fichier si présent
    if (file) {
      formDataToSend.append('file', file);
    }

    // Ajouter des métadonnées supplémentaires si nécessaire
    formDataToSend.append('date_soumission', new Date().toISOString().split('T')[0]);

    try {
      const response = await axios.put(`/demandes/inscription/${demandeId}`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.message);
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la demande:', error);
      setMessage('Erreur lors de la mise à jour de la demande.');
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Modifier la Demande</h2>
      <p className="text-lg mb-4 text-gray-600">ID de la Demande: {demandeId}</p>
      <form onSubmit={handleSubmit} className="space-y-6">
        {demandeData.type_demande === 'inscription' && (
          <>
            <label className="block text-gray-700">Diplômes Précédents</label>
            <input
              type="text"
              name="diplomes_precedents"
              value={demandeData.diplomes_precedents || ''}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <label className="block text-gray-700">Spécialisation Souhaitée</label>
            <input
              type="text"
              name="specialisation_souhaitee"
              value={demandeData.specialisation_souhaitee || ''}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <label className="block text-gray-700">Notes de Transcription</label>
            <input
              type="text"
              name="notes_transcription"
              value={demandeData.notes_transcription || ''}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <label className="block text-gray-700">Fichier de Demande</label>
            <input type="file" name="file" accept=".pdf" onChange={handleFileChange} className="input-field" />
          </>
        )}
      {demandeData.type_demande === 'retrait-provisoire' && (
        <>
          <label className="block text-gray-700">Motif de Retrait</label>
          <input
            type="text"
            name="motif_retrait"
            value={demandeData.motif_retrait || ''}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <label className="block text-gray-700">Date de Début Prévue</label>
          <input
            type="date"
            name="date_debut_prevue"
            value={demandeData.date_debut_prevue || ''}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <label className="block text-gray-700">Date de Retour Prévue</label>
          <input
            type="date"
            name="date_retour_prevue"
            value={demandeData.date_retour_prevue || ''}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <label className="block text-gray-700">Fichier de Retrait</label>
          <input
            type="file"
            name="file"
            onChange={handleFileChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </>
      )}
      {demandeData.type_demande === 'retrait-definitif' && (
  <>
    <label className="block text-sm font-medium text-gray-700">Motif de Retrait Définitif</label>
    <input
      type="text"
      name="motif_retrait_definitif"
      value={demandeData.motif_retrait_definitif || ''}
      onChange={handleChange}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
    <label className="block text-sm font-medium text-gray-700">Date de Retrait</label>
    <input
      type="date"
      name="date_retrait"
      value={demandeData.date_retrait || ''}
      onChange={handleChange}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
    <label className="block text-sm font-medium text-gray-700">Observations</label>
    <input
      type="text"
      name="observations"
      value={demandeData.observations || ''}
      onChange={handleChange}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
    <label className="block text-sm font-medium text-gray-700">Fichier de Retrait Définitif</label>
    <input
      type="file"
      name="file"
      onChange={handleFileChange}
      className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
    />
  </>
)}

{demandeData.type_demande === 'carte-etudiant' && (
  <>
    <label className="block text-sm font-medium text-gray-700">Numéro Étudiant</label>
    <input
      type="text"
      name="numero_etudiant"
      value={demandeData.numero_etudiant || ''}
      onChange={handleChange}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
    <label className="block text-sm font-medium text-gray-700">Date de Délivrance</label>
    <input
      type="date"
      name="date_delivrance"
      value={demandeData.date_delivrance || ''}
      onChange={handleChange}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
    <label className="block text-sm font-medium text-gray-700">Fichier Carte Étudiant</label>
    <input
      type="file"
      name="file"
      onChange={handleFileChange}
      className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
    />
  </>
)}

{demandeData.type_demande === 'email-academique' && (
  <>
    <label className="block text-sm font-medium text-gray-700">Identifiant Souhaité</label>
    <input
      type="text"
      name="identifiant_souhaite"
      value={demandeData.identifiant_souhaite || ''}
      onChange={handleChange}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
    <label className="block text-sm font-medium text-gray-700">Motif de la Demande</label>
    <input
      type="text"
      name="motif_demande"
      value={demandeData.motif_demande || ''}
      onChange={handleChange}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
  </>
)}

{demandeData.type_demande === 'changement-sujet-these' && (
  <>
    <label className="block text-sm font-medium text-gray-700">Sujet Actuel</label>
    <input
      type="text"
      name="sujet_actuel"
      value={demandeData.sujet_actuel || ''}
      onChange={handleChange}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
    <label className="block text-sm font-medium text-gray-700">Nouveau Sujet Proposé</label>
    <input
      type="text"
      name="nouveau_sujet_propose"
      value={demandeData.nouveau_sujet_propose || ''}
      onChange={handleChange}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
    <label className="block text-sm font-medium text-gray-700">Justification</label>
    <input
      type="text"
      name="justification"
      value={demandeData.justification || ''}
      onChange={handleChange}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
    <label className="block text-sm font-medium text-gray-700">Fichier de Changement de Sujet</label>
    <input
      type="file"
      name="file"
      onChange={handleFileChange}
      className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
    />
  </>
)}

{demandeData.type_demande === 'changement-directeur-these' && (
  <>
    <label className="block text-sm font-medium text-gray-700">Directeur Actuel</label>
    <input
      type="text"
      name="directeur_actuel"
      value={demandeData.directeur_actuel || ''}
      onChange={handleChange}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
    <label className="block text-sm font-medium text-gray-700">Nouveau Directeur Proposé</label>
    <input
      type="text"
      name="nouveau_directeur_propose"
      value={demandeData.nouveau_directeur_propose || ''}
      onChange={handleChange}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
    <label className="block text-sm font-medium text-gray-700">Raisons du Changement</label>
    <input
      type="text"
      name="raisons_changement"
      value={demandeData.raisons_changement || ''}
      onChange={handleChange}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
    <label className="block text-sm font-medium text-gray-700">Fichier de Changement de Directeur</label>
    <input
      type="file"
      name="file"
      onChange={handleFileChange}
      className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
    />
  </>
)}

{demandeData.type_demande === 'reinscription-derogation' && (
  <>
    <label className="block text-sm font-medium text-gray-700">Année Académique</label>
    <input
      type="text"
      name="annee_academique"
      value={demandeData.annee_academique || ''}
      onChange={handleChange}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
    <label className="block text-sm font-medium text-gray-700">Motif de la Demande</label>
    <input
      type="text"
      name="motif_demande"
      value={demandeData.motif_demande || ''}
      onChange={handleChange}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
    <label className="block text-sm font-medium text-gray-700">Fichier de Réinscription/Dérogation</label>
    <input
      type="file"
      name="file"
      onChange={handleFileChange}
      className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
    />
  </>
)}

{demandeData.type_demande === 'convention-stage' && (
  <>
    <label className="block text-sm font-medium text-gray-700">Entreprise d'Accueil</label>
    <input
      type="text"
      name="entreprise_accueil"
      value={demandeData.entreprise_accueil || ''}
      onChange={handleChange}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />

    <label className="block text-sm font-medium text-gray-700">Période de Stage</label>
    <input
      type="date"
      name="periode_stage"
      value={demandeData.periode_stage || ''}
      onChange={handleChange}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />

    <label className="block text-sm font-medium text-gray-700">Objectifs du Stage</label>
    <input
      type="text"
      name="objectifs_stage"
      value={demandeData.objectifs_stage || ''}
      onChange={handleChange}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />

    <label className="block text-sm font-medium text-gray-700">Fichier de Convention de Stage</label>
    <input
      type="file"
      name="file"
      onChange={handleFileChange}
      className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
    />
  </>
)}

{demandeData.type_demande === 'cotutelle' && (
  <>
    <label className="block text-sm font-medium text-gray-700">Université Partenaire</label>
    <input
      type="text"
      name="universite_partenaire"
      value={demandeData.universite_partenaire || ''}
      onChange={handleChange}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />

    <label className="block text-sm font-medium text-gray-700">Pays</label>
    <input
      type="text"
      name="pays"
      value={demandeData.pays || ''}
      onChange={handleChange}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />

    <label className="block text-sm font-medium text-gray-700">Durée de la Cotutelle</label>
    <input
      type="text"
      name="duree_cotutelle"
      value={demandeData.duree_cotutelle || ''}
      onChange={handleChange}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />

    <label className="block text-sm font-medium text-gray-700">Fichier de Cotutelle</label>
    <input
      type="file"
      name="file"
      onChange={handleFileChange}
      className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
    />
  </>
)}

{demandeData.type_demande === 'changement-codirecteur-these' && (
  <>
    <label className="block text-sm font-medium text-gray-700">Co-Directeur Actuel</label>
    <input
      type="text"
      name="co_directeur_actuel"
      value={demandeData.co_directeur_actuel || ''}
      onChange={handleChange}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />

    <label className="block text-sm font-medium text-gray-700">Nouveau Co-Directeur Proposé</label>
    <input
      type="text"
      name="nouveau_co_directeur_propose"
      value={demandeData.nouveau_co_directeur_propose || ''}
      onChange={handleChange}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />

    <label className="block text-sm font-medium text-gray-700">Motifs du Changement</label>
    <input
      type="text"
      name="motifs_changement"
      value={demandeData.motifs_changement || ''}
      onChange={handleChange}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />

    <label className="block text-sm font-medium text-gray-700">Fichier de Changement de Co-Directeur</label>
    <input
      type="file"
      name="file"
      onChange={handleFileChange}
      className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
    />
  </>
)}

{demandeData.type_demande === 'imists' && (
  <>
    <label className="block text-sm font-medium text-gray-700">Titre de la Thèse</label>
    <input
      type="text"
      name="titre_these"
      value={demandeData.titre_these || ''}
      onChange={handleChange}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />

    <label className="block text-sm font-medium text-gray-700">Directeur de Thèse</label>
    <input
      type="text"
      name="directeur_these"
      value={demandeData.directeur_these || ''}
      onChange={handleChange}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />

    <label className="block text-sm font-medium text-gray-700">Date de Début de la Thèse</label>
    <input
      type="date"
      name="date_debut_these"
      value={demandeData.date_debut_these || ''}
      onChange={handleChange}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />

    <label className="block text-sm font-medium text-gray-700">Date Prévue de Soutenance</label>
    <input
      type="date"
      name="date_prevue_soutenance"
      value={demandeData.date_prevue_soutenance || ''}
      onChange={handleChange}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />

    <label className="block text-sm font-medium text-gray-700">Fichiers CV</label>
    <input
      type="file"
      name="file"
      onChange={handleFileChange}
      className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
    />
  </>
)}

{demandeData.type_demande === 'tirage' && (
  <>
    <label className="block text-sm font-medium text-gray-700">Titre de la Thèse</label>
    <input
      type="text"
      name="titre_these"
      value={demandeData.titre_these || ''}
      onChange={handleChange}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />

    <label className="block text-sm font-medium text-gray-700">Nombre de Copies</label>
    <input
      type="number"
      name="nombre_copies"
      value={demandeData.nombre_copies || ''}
      onChange={handleChange}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />

    <label className="block text-sm font-medium text-gray-700">Fichier à Imprimer</label>
    <input
      type="file"
      name="file"
      onChange={handleFileChange}
      className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
    />
  </>
)}

<button
  type="submit"
  className="mt-4 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
>
  Mettre à jour la demande
</button>
</form>
{message && (
  <p className="mt-4 text-center text-sm text-green-600">
    {message}
  </p>
)}
    </div>
  );
};

export default UpdateDemandeForm;        
