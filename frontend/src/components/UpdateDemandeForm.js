
// import React, { useState, useEffect } from 'react';
// import axios from '../api/axios'; // Utiliser l'instance Axios configurée
// import { useParams } from 'react-router-dom';

// const UpdateDemandeForm = () => {
//   const { demandeId } = useParams(); // Utilisez useParams pour obtenir demandeId
//   const [demande, setDemande] = useState(null);
//   const [formData, setFormData] = useState({});
//   const [file, setFile] = useState(null);
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     const fetchDemande = async () => {
//       try {
//         const response = await axios.get(`/demandes/${demandeId}`);
//         const demandeData = response.data;
//         setDemande(demandeData);
//         setFormData(demandeData);
//       } catch (error) {
//         console.error('Erreur lors de la récupération de la demande:', error);
//       }
//     };

//     fetchDemande();
//   }, [demandeId]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formDataToSend = new FormData();

//     // Ajout des données du formulaire
//     Object.keys(formData).forEach((key) => {
//       if (key !== 'file') { // Exclure le fichier du formData
//         formDataToSend.append(key, formData[key]);
//       }
//     });

//     // Ajout du fichier
//     if (file) {
//       formDataToSend.append('file', file);
//     }

//     try {
//       const response = await axios.put(`/demandes/${demandeId}`, formDataToSend, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       setMessage(response.data.message);
//     } catch (error) {
//       console.error('Erreur lors de la mise à jour de la demande:', error);
//       setMessage('Erreur lors de la mise à jour de la demande.');
//     }
//   };

//   if (!demande) return <p>Loading...</p>;

//   return (
//     <div>
//       <h2>Modifier la Demande</h2>
//       <p>ID de la Demande: {demandeId}</p> {/* Affichage de l'ID de la demande */}
//       <form onSubmit={handleSubmit}>
//         <label>Date de Soumission</label>
//         <input
//           type="date"
//           name="date_soumission"
//           value={formData.date_soumission || ''}
//           onChange={handleChange}
//         />

//         {formData.type_demande === 'inscription' && (
//           <>
//             <label>Diplômes Précédents</label>
//             <input
//               type="text"
//               name="diplomes_precedents"
//               value={formData.diplomes_precedents || ''}
//               onChange={handleChange}
//             />
//             <label>Spécialisation Souhaitée</label>
//             <input
//               type="text"
//               name="specialisation_souhaitee"
//               value={formData.specialisation_souhaitee || ''}
//               onChange={handleChange}
//             />
//             <label>Notes de Transcription</label>
//             <input
//               type="file"
//               name="notes_transcription"
//               onChange={handleFileChange}
//             />
//           </>
//         )}

//         {formData.type_demande === 'retrait-provisoire' && (
//           <>
//             <label>Motif de Retrait</label>
//             <input
//               type="text"
//               name="motif_retrait"
//               value={formData.motif_retrait || ''}
//               onChange={handleChange}
//             />
//             <label>Date de Début Prévue</label>
//             <input
//               type="date"
//               name="date_debut_prevue"
//               value={formData.date_debut_prevue || ''}
//               onChange={handleChange}
//             />
//             <label>Date de Retour Prévue</label>
//             <input
//               type="date"
//               name="date_retour_prevue"
//               value={formData.date_retour_prevue || ''}
//               onChange={handleChange}
//             />
//             <label>Fichier de Demande de Retrait</label>
//             <input
//               type="file"
//               name="file"
//               onChange={handleFileChange}
//             />
//           </>
//         )}

//         {formData.type_demande === 'retrait-definitif' && (
//           <>
//             <label>Motif de Retrait</label>
//             <input
//               type="text"
//               name="motif_retrait"
//               value={formData.motif_retrait || ''}
//               onChange={handleChange}
//             />
//             <label>Date de Retrait</label>
//             <input
//               type="date"
//               name="date_retrait"
//               value={formData.date_retrait || ''}
//               onChange={handleChange}
//             />
//             <label>Observations</label>
//             <textarea
//               name="observations"
//               value={formData.observations || ''}
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

//         {formData.type_demande === 'carte-etudiant' && (
//           <>
//             <label>Numéro d'Étudiant</label>
//             <input
//               type="text"
//               name="numero_etudiant"
//               value={formData.numero_etudiant || ''}
//               onChange={handleChange}
//             />
//             <label>Date de Délivrance</label>
//             <input
//               type="date"
//               name="date_delivrance"
//               value={formData.date_delivrance || ''}
//               onChange={handleChange}
//             />
//             <label>Fichier de Carte Étudiant</label>
//             <input
//               type="file"
//               name="file"
//               onChange={handleFileChange}
//             />
//           </>
//         )}

//         {formData.type_demande === 'email-academique' && (
//           <>
//             <label>Identifiant Souhaité</label>
//             <input
//               type="text"
//               name="identifiant_souhaite"
//               value={formData.identifiant_souhaite || ''}
//               onChange={handleChange}
//             />
//             <label>Motif de Demande</label>
//             <input
//               type="text"
//               name="motif_demande"
//               value={formData.motif_demande || ''}
//               onChange={handleChange}
//             />
//           </>
//         )}

//         {formData.type_demande === 'changement-sujet-these' && (
//           <>
//             <label>Sujet Actuel</label>
//             <input
//               type="text"
//               name="sujet_actuel"
//               value={formData.sujet_actuel || ''}
//               onChange={handleChange}
//             />
//             <label>Nouveau Sujet Proposé</label>
//             <input
//               type="text"
//               name="nouveau_sujet_propose"
//               value={formData.nouveau_sujet_propose || ''}
//               onChange={handleChange}
//             />
//             <label>Justification</label>
//             <textarea
//               name="justification"
//               value={formData.justification || ''}
//               onChange={handleChange}
//             />
//             <label>Fichier de Demande de Changement de Sujet</label>
//             <input
//               type="file"
//               name="file"
//               onChange={handleFileChange}
//             />
//           </>
//         )}

//         {formData.type_demande === 'changement-directeur-these' && (
//           <>
//             <label>Directeur Actuel</label>
//             <input
//               type="text"
//               name="directeur_actuel"
//               value={formData.directeur_actuel || ''}
//               onChange={handleChange}
//             />
//             <label>Nouveau Directeur Proposé</label>
//             <input
//               type="text"
//               name="nouveau_directeur_propose"
//               value={formData.nouveau_directeur_propose || ''}
//               onChange={handleChange}
//             />
//             <label>Raisons du Changement</label>
//             <textarea
//               name="raisons_changement"
//               value={formData.raisons_changement || ''}
//               onChange={handleChange}
//             />
//             <label>Fichier de Demande de Changement de Directeur</label>
//             <input
//               type="file"
//               name="file"
//               onChange={handleFileChange}
//             />
//           </>
//         )}

//         <button type="submit">Mettre à jour</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default UpdateDemandeForm;


// import React, { useState, useEffect } from 'react';
// import axios from '../api/axios'; // Utiliser l'instance Axios configurée
// import { useParams } from 'react-router-dom';

// const UpdateDemandeForm = () => {
//   const { demandeId } = useParams(); // Utilisez useParams pour obtenir demandeId
//   const [demande, setDemande] = useState(null);
//   const [formData, setFormData] = useState({});
//   const [file, setFile] = useState(null);
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     const fetchDemande = async () => {
//       try {
//         const response = await axios.get(`/demandes/${demandeId}`);
//         const demandeData = response.data;
//         setDemande(demandeData);

//         // Initialisation de formData en fonction du type de demande
//         const initialFormData = {
//           type_demande: demandeData.type_demande || '',
//           statut: demandeData.statut || '',
//           date_soumission: demandeData.date_soumission || '',
//           id_doctorant: demandeData.id_doctorant || '',
//           diplomes_precedents: demandeData.diplomes_precedents || '',
//           specialisation_souhaitee: demandeData.specialisation_souhaitee || '',
//           notes_transcription: demandeData.notes_transcription || '',
//           motif_retrait: demandeData.motif_retrait || '',
//           date_debut_prevue: demandeData.date_debut_prevue || '',
//           date_retour_prevue: demandeData.date_retour_prevue || '',
//           date_retrait: demandeData.date_retrait || '',
//           observations: demandeData.observations || '',
//           numero_etudiant: demandeData.numero_etudiant || '',
//           date_delivrance: demandeData.date_delivrance || '',
//           identifiant_souhaite: demandeData.identifiant_souhaite || '',
//           motif_demande: demandeData.motif_demande || '',
//           sujet_actuel: demandeData.sujet_actuel || '',
//           nouveau_sujet_propose: demandeData.nouveau_sujet_propose || '',
//           justification: demandeData.justification || '',
//           directeur_actuel: demandeData.directeur_actuel || '',
//           nouveau_directeur_propose: demandeData.nouveau_directeur_propose || '',
//           raisons_changement: demandeData.raisons_changement || '',
//           annee_academique: demandeData.annee_academique || '',
//           motif: demandeData.motif || '',
//           decision_prise: demandeData.decision_prise || '',
//           entreprise_accueil: demandeData.entreprise_accueil || '',
//           periode_stage: demandeData.periode_stage || '',
//           objectifs_stage: demandeData.objectifs_stage || '',
//           universite_partenaire: demandeData.universite_partenaire || '',
//           pays: demandeData.pays || '',
//           duree_cotutelle: demandeData.duree_cotutelle || '',
//           co_directeur_actuel: demandeData.co_directeur_actuel || '',
//           nouveau_co_directeur_propose: demandeData.nouveau_co_directeur_propose || '',
//           motifs_changement: demandeData.motifs_changement || '',
//           titre_these: demandeData.titre_these || '',
//           directeur_these: demandeData.directeur_these || '',
//           date_debut_these: demandeData.date_debut_these || '',
//           date_prevue_soutenance: demandeData.date_prevue_soutenance || '',
//           nombre_exemplaires: demandeData.nombre_exemplaires || '',
//           date_soutenance: demandeData.date_soutenance || '',
//         };

//         setFormData(initialFormData);
//       } catch (error) {
//         console.error('Erreur lors de la récupération de la demande:', error);
//       }
//     };

//     fetchDemande();
//   }, [demandeId]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formDataToSend = new FormData();

//     // Ajout des données du formulaire
//     Object.keys(formData).forEach((key) => {
//       if (key !== 'file') { // Exclure le fichier du formData
//         formDataToSend.append(key, formData[key]);
//       }
//     });

//     // Ajout du fichier
//     if (file) {
//       formDataToSend.append('file', file);
//     }

//     try {
//       const response = await axios.put(`/demandes/${demandeId}`, formDataToSend, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       setMessage(response.data.message);
//     } catch (error) {
//       console.error('Erreur lors de la mise à jour de la demande:', error);
//       setMessage('Erreur lors de la mise à jour de la demande.');
//     }
//   };

//   if (!demande) return <p>Loading...</p>;

//   return (
//     <div>
//       <h2>Modifier la Demande</h2>
//       <p>ID de la Demande: {demandeId}</p> {/* Affichage de l'ID de la demande */}
//       <form onSubmit={handleSubmit}>
//         <label>Date de Soumission</label>
//         <input
//           type="date"
//           name="date_soumission"
//           value={formData.date_soumission || ''}
//           onChange={handleChange}
//         />

//         {formData.type_demande === 'inscription' && (
//           <>
//             <label>Diplômes Précédents</label>
//             <input
//               type="text"
//               name="diplomes_precedents"
//               value={formData.diplomes_precedents || ''}
//               onChange={handleChange}
//             />
//             <label>Spécialisation Souhaitée</label>
//             <input
//               type="text"
//               name="specialisation_souhaitee"
//               value={formData.specialisation_souhaitee || ''}
//               onChange={handleChange}
//             />
//             <label>Notes de Transcription</label>
//             <input
//               type="file"
//               name="notes_transcription"
//               onChange={handleFileChange}
//             />
//           </>
//         )}

//         {formData.type_demande === 'retrait-provisoire' && (
//           <>
//             <label>Motif de Retrait</label>
//             <input
//               type="text"
//               name="motif_retrait"
//               value={formData.motif_retrait || ''}
//               onChange={handleChange}
//             />
//             <label>Date de Début Prévue</label>
//             <input
//               type="date"
//               name="date_debut_prevue"
//               value={formData.date_debut_prevue || ''}
//               onChange={handleChange}
//             />
//             <label>Date de Retour Prévue</label>
//             <input
//               type="date"
//               name="date_retour_prevue"
//               value={formData.date_retour_prevue || ''}
//               onChange={handleChange}
//             />
//             <label>Fichier de Demande de Retrait</label>
//             <input
//               type="file"
//               name="file"
//               onChange={handleFileChange}
//             />
//           </>
//         )}

//         {formData.type_demande === 'retrait-definitif' && (
//           <>
//             <label>Motif de Retrait</label>
//             <input
//               type="text"
//               name="motif_retrait"
//               value={formData.motif_retrait || ''}
//               onChange={handleChange}
//             />
//             <label>Date de Retrait</label>
//             <input
//               type="date"
//               name="date_retrait"
//               value={formData.date_retrait || ''}
//               onChange={handleChange}
//             />
//             <label>Observations</label>
//             <textarea
//               name="observations"
//               value={formData.observations || ''}
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

//         {formData.type_demande === 'carte-etudiant' && (
//           <>
//             <label>Numéro d'Étudiant</label>
//             <input
//               type="text"
//               name="numero_etudiant"
//               value={formData.numero_etudiant || ''}
//               onChange={handleChange}
//             />
//             <label>Date de Délivrance</label>
//             <input
//               type="date"
//               name="date_delivrance"
//               value={formData.date_delivrance || ''}
//               onChange={handleChange}
//             />
//             <label>Fichier de Carte Étudiant</label>
//             <input
//               type="file"
//               name="file"
//               onChange={handleFileChange}
//             />
//           </>
//         )}

//         {formData.type_demande === 'email-academique' && (
//           <>
//             <label>Identifiant Souhaité</label>
//             <input
//               type="text"
//               name="identifiant_souhaite"
//               value={formData.identifiant_souhaite || ''}
//               onChange={handleChange}
//             />
//             <label>Motif de Demande</label>
//             <textarea
//               name="motif_demande"
//               value={formData.motif_demande || ''}
//               onChange={handleChange}
//             />
//           </>
//         )}

//         {formData.type_demande === 'changement-sujet-these' && (
//           <>
//             <label>Sujet Actuel</label>
//             <input
//               type="text"
//               name="sujet_actuel"
//               value={formData.sujet_actuel || ''}
//               onChange={handleChange}
//             />
//             <label>Nouveau Sujet Proposé</label>
//             <input
//               type="text"
//               name="nouveau_sujet_propose"
//               value={formData.nouveau_sujet_propose || ''}
//               onChange={handleChange}
//             />
//             <label>Justification</label>
//             <textarea
//               name="justification"
//               value={formData.justification || ''}
//               onChange={handleChange}
//             />
//             <label>Fichier de Demande de Changement de Sujet</label>
//             <input
//               type="file"
//               name="file"
//               onChange={handleFileChange}
//             />
//           </>
//         )}

//         {formData.type_demande === 'changement-directeur-these' && (
//           <>
//             <label>Directeur Actuel</label>
//             <input
//               type="text"
//               name="directeur_actuel"
//               value={formData.directeur_actuel || ''}
//               onChange={handleChange}
//             />
//             <label>Nouveau Directeur Proposé</label>
//             <input
//               type="text"
//               name="nouveau_directeur_propose"
//               value={formData.nouveau_directeur_propose || ''}
//               onChange={handleChange}
//             />
//             <label>Raisons du Changement</label>
//             <textarea
//               name="raisons_changement"
//               value={formData.raisons_changement || ''}
//               onChange={handleChange}
//             />
//             <label>Fichier de Demande de Changement de Directeur</label>
//             <input
//               type="file"
//               name="file"
//               onChange={handleFileChange}
//             />
//           </>
//         )}

//         {formData.type_demande === 'reinscription-derogation' && (
//           <>
//             <label>Année Académique</label>
//             <input
//               type="text"
//               name="annee_academique"
//               value={formData.annee_academique || ''}
//               onChange={handleChange}
//             />
//             <label>Motif</label>
//             <textarea
//               name="motif"
//               value={formData.motif || ''}
//               onChange={handleChange}
//             />
//             <label>Décision Prise</label>
//             <textarea
//               name="decision_prise"
//               value={formData.decision_prise || ''}
//               onChange={handleChange}
//             />
//             <label>Fichier de Demande de Réinscription</label>
//             <input
//               type="file"
//               name="file"
//               onChange={handleFileChange}
//             />
//           </>
//         )}

//         {formData.type_demande === 'convention-stage' && (
//           <>
//             <label>Entreprise d'Accueil</label>
//             <input
//               type="text"
//               name="entreprise_accueil"
//               value={formData.entreprise_accueil || ''}
//               onChange={handleChange}
//             />
//             <label>Période de Stage</label>
//             <input
//               type="text"
//               name="periode_stage"
//               value={formData.periode_stage || ''}
//               onChange={handleChange}
//             />
//             <label>Objectifs du Stage</label>
//             <textarea
//               name="objectifs_stage"
//               value={formData.objectifs_stage || ''}
//               onChange={handleChange}
//             />
//             <label>Fichier de Demande de Stage</label>
//             <input
//               type="file"
//               name="file"
//               onChange={handleFileChange}
//             />
//           </>
//         )}

//         {formData.type_demande === 'cotutelle' && (
//           <>
//             <label>Université Partenaire</label>
//             <input
//               type="text"
//               name="universite_partenaire"
//               value={formData.universite_partenaire || ''}
//               onChange={handleChange}
//             />
//             <label>Pays</label>
//             <input
//               type="text"
//               name="pays"
//               value={formData.pays || ''}
//               onChange={handleChange}
//             />
//             <label>Durée de la Cotutelle</label>
//             <input
//               type="text"
//               name="duree_cotutelle"
//               value={formData.duree_cotutelle || ''}
//               onChange={handleChange}
//             />
//             <label>Fichier de Demande de Cotutelle</label>
//             <input
//               type="file"
//               name="file"
//               onChange={handleFileChange}
//             />
//           </>
//         )}

//         {formData.type_demande === 'changement-codirecteur-these' && (
//           <>
//             <label>Co-directeur Actuel</label>
//             <input
//               type="text"
//               name="co_directeur_actuel"
//               value={formData.co_directeur_actuel || ''}
//               onChange={handleChange}
//             />
//             <label>Nouveau Co-directeur Proposé</label>
//             <input
//               type="text"
//               name="nouveau_co_directeur_propose"
//               value={formData.nouveau_co_directeur_propose || ''}
//               onChange={handleChange}
//             />
//             <label>Motifs du Changement</label>
//             <textarea
//               name="motifs_changement"
//               value={formData.motifs_changement || ''}
//               onChange={handleChange}
//             />
//             <label>Fichier de Demande de Changement de Co-directeur</label>
//             <input
//               type="file"
//               name="file"
//               onChange={handleFileChange}
//             />
//           </>
//         )}

//         {formData.type_demande === 'imists' && (
//           <>
//             <label>Titre de la Thèse</label>
//             <input
//               type="text"
//               name="titre_these"
//               value={formData.titre_these || ''}
//               onChange={handleChange}
//             />
//             <label>Directeur de la Thèse</label>
//             <input
//               type="text"
//               name="directeur_these"
//               value={formData.directeur_these || ''}
//               onChange={handleChange}
//             />
//             <label>Date de Début de la Thèse</label>
//             <input
//               type="date"
//               name="date_debut_these"
//               value={formData.date_debut_these || ''}
//               onChange={handleChange}
//             />
//             <label>Date Prévue de Soutenance</label>
//             <input
//               type="date"
//               name="date_prevue_soutenance"
//               value={formData.date_prevue_soutenance || ''}
//               onChange={handleChange}
//             />
//             <label>Fichiers CV</label>
//             <input
//               type="file"
//               name="fichiers_cv"
//               onChange={handleFileChange}
//             />
//           </>
//         )}

//         {formData.type_demande === 'tirage' && (
//           <>
//             <label>Titre de la Thèse</label>
//             <input
//               type="text"
//               name="titre_these"
//               value={formData.titre_these || ''}
//               onChange={handleChange}
//             />
//             <label>Nombre d'Exemplaires</label>
//             <input
//               type="number"
//               name="nombre_exemplaires"
//               value={formData.nombre_exemplaires || ''}
//               onChange={handleChange}
//             />
//             <label>Date de Soutenance</label>
//             <input
//               type="date"
//               name="date_soutenance"
//               value={formData.date_soutenance || ''}
//               onChange={handleChange}
//             />
//             <label>Fichier de Tirage</label>
//             <input
//               type="file"
//               name="file"
//               onChange={handleFileChange}
//             />
//           </>
//         )}

//         <button type="submit">Mettre à Jour</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default UpdateDemandeForm;








// import React, { useState, useEffect } from 'react';
// import axios from '../api/axios'; // Utiliser l'instance Axios configurée
// import { useParams } from 'react-router-dom';

// const UpdateDemandeForm = () => {
//   const { demandeId } = useParams(); // Utilisez useParams pour obtenir demandeId
//   const [formData, setFormData] = useState({});
//   const [file, setFile] = useState(null);
//   const [message, setMessage] = useState('');
//   const [loading, setLoading] = useState(true); // État pour gérer le chargement

//   useEffect(() => {
//     const fetchDemande = async () => {
//       try {
//         const response = await axios.get(`/demandes/${demandeId}`);
//         console.log('Réponse de l\'API :', response); // Ajoutez cette ligne pour vérifier la réponse brute
//         const { data } = response;
//         console.log('Données de la demande :', data); // Ajoutez cette ligne pour vérifier les données
//         setFormData({
//           type_demande: data.type_demande || '',
//           statut: data.statut || '',
//           date_soumission: data.date_soumission || '',
//           id_doctorant: data.id_doctorant || '',
//           diplomes_precedents: data.diplomes_precedents || '',
//           specialisation_souhaitee: data.specialisation_souhaitee || '',
//           notes_transcription: data.notes_transcription || '',
//           motif_retrait: data.motif_retrait || '',
//           date_debut_prevue: data.date_debut_prevue || '',
//           date_retour_prevue: data.date_retour_prevue || '',
//           date_retrait: data.date_retrait || '',
//           observations: data.observations || '',
//           numero_etudiant: data.numero_etudiant || '',
//           date_delivrance: data.date_delivrance || '',
//           identifiant_souhaite: data.identifiant_souhaite || '',
//           motif_demande: data.motif_demande || '',
//           sujet_actuel: data.sujet_actuel || '',
//           nouveau_sujet_propose: data.nouveau_sujet_propose || '',
//           justification: data.justification || '',
//           directeur_actuel: data.directeur_actuel || '',
//           nouveau_directeur_propose: data.nouveau_directeur_propose || '',
//           raisons_changement: data.raisons_changement || '',
//           annee_academique: data.annee_academique || '',
//           motif: data.motif || '',
//           decision_prise: data.decision_prise || '',
//           entreprise_accueil: data.entreprise_accueil || '',
//           periode_stage: data.periode_stage || '',
//           objectifs_stage: data.objectifs_stage || '',
//           universite_partenaire: data.universite_partenaire || '',
//           pays: data.pays || '',
//           duree_cotutelle: data.duree_cotutelle || '',
//           co_directeur_actuel: data.co_directeur_actuel || '',
//           nouveau_co_directeur_propose: data.nouveau_co_directeur_propose || '',
//           motifs_changement: data.motifs_changement || '',
//           titre_these: data.titre_these || '',
//           directeur_these: data.directeur_these || '',
//           date_debut_these: data.date_debut_these || '',
//           date_prevue_soutenance: data.date_prevue_soutenance || '',
//           nombre_exemplaires: data.nombre_exemplaires || '',
//           date_soutenance: data.date_soutenance || '',
//         });
//         setLoading(false); // Fin du chargement
//       } catch (error) {
//         console.error('Erreur lors de la récupération de la demande:', error);
//         setMessage('Erreur lors de la récupération de la demande.');
//         setLoading(false); // Fin du chargement
//       }
//     };

//     fetchDemande();
//   }, [demandeId]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
//   };

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0] || null); // Accepter null si aucun fichier n'est sélectionné
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formDataToSend = new FormData();

//     // Ajout des données du formulaire
//     Object.keys(formData).forEach((key) => {
//       if (key !== 'file') { // Exclure le fichier du formData
//         formDataToSend.append(key, formData[key]);
//       }
//     });

//     // Ajout du fichier
//     if (file) {
//       formDataToSend.append('file', file);
//     }

//     // Ajouter la date de soumission automatiquement
//     formDataToSend.append('date_soumission', new Date().toISOString().split('T')[0]);

//     try {
//       const response = await axios.put(`/demandes/${demandeId}`, formDataToSend, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       setMessage(response.data.message);
//     } catch (error) {
//       console.error('Erreur lors de la mise à jour de la demande:', error);
//       setMessage('Erreur lors de la mise à jour de la demande.');
//     }
//   };

//   if (loading) return <p>Loading...</p>; // Afficher un message de chargement pendant la récupération des données

//   return (
//     <div>
//       <h2>Modifier la Demande</h2>
//       <p>ID de la Demande: {demandeId}</p> {/* Affichage de l'ID de la demande */}
//       <form onSubmit={handleSubmit}>
//         {/* La date de soumission est ajoutée automatiquement */}
//         {formData.type_demande === 'inscription' && (
//           <>
//             <label>Diplômes Précédents</label>
//             <input
//               type="text"
//               name="diplomes_precedents"
//               value={formData.diplomes_precedents || ''}
//               onChange={handleChange}
//             />
//             <label>Spécialisation Souhaitée</label>
//             <input
//               type="text"
//               name="specialisation_souhaitee"
//               value={formData.specialisation_souhaitee || ''}
//               onChange={handleChange}
//             />
//             <label>Notes de Transcription</label>
//             <input
//               type="file"
//               name="notes_transcription"
//               onChange={handleFileChange}
//             />
//           </>
//         )}

//         {formData.type_demande === 'retrait-provisoire' && (
//           <>
//             <label>Motif de Retrait</label>
//             <input
//               type="text"
//               name="motif_retrait"
//               value={formData.motif_retrait || ''}
//               onChange={handleChange}
//             />
//             <label>Date de Début Prévue</label>
//             <input
//               type="date"
//               name="date_debut_prevue"
//               value={formData.date_debut_prevue || ''}
//               onChange={handleChange}
//             />
//             <label>Date de Retour Prévue</label>
//             <input
//               type="date"
//               name="date_retour_prevue"
//               value={formData.date_retour_prevue || ''}
//               onChange={handleChange}
//             />
//             <label>Fichier de Demande de Retrait</label>
//             <input
//               type="file"
//               name="file"
//               onChange={handleFileChange}
//             />
//           </>
//         )}

//         {formData.type_demande === 'retrait-definitif' && (
//           <>
//             <label>Motif de Retrait</label>
//             <input
//               type="text"
//               name="motif_retrait"
//               value={formData.motif_retrait || ''}
//               onChange={handleChange}
//             />
//             <label>Date de Retrait</label>
//             <input
//               type="date"
//               name="date_retrait"
//               value={formData.date_retrait || ''}
//               onChange={handleChange}
//             />
//             <label>Observations</label>
//             <textarea
//               name="observations"
//               value={formData.observations || ''}
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

//         {formData.type_demande === 'carte-etudiant' && (
//           <>
//             <label>Numéro d'Étudiant</label>
//             <input
//               type="text"
//               name="numero_etudiant"
//               value={formData.numero_etudiant || ''}
//               onChange={handleChange}
//             />
//             <label>Date de Délivrance</label>
//             <input
//               type="date"
//               name="date_delivrance"
//               value={formData.date_delivrance || ''}
//               onChange={handleChange}
//             />
//             <label>Fichier de Demande de Carte Étudiant</label>
//             <input
//               type="file"
//               name="file"
//               onChange={handleFileChange}
//             />
//           </>
//         )}

//         {formData.type_demande === 'identifiant' && (
//           <>
//             <label>Identifiant Souhaité</label>
//             <input
//               type="text"
//               name="identifiant_souhaite"
//               value={formData.identifiant_souhaite || ''}
//               onChange={handleChange}
//             />
//             <label>Motif de Demande</label>
//             <input
//               type="text"
//               name="motif_demande"
//               value={formData.motif_demande || ''}
//               onChange={handleChange}
//             />
//             <label>Fichier de Demande d'Email</label>
//             <input
//               type="file"
//               name="file"
//               onChange={handleFileChange}
//             />
//           </>
//         )}

//         {formData.type_demande === 'changement-sujet' && (
//           <>
//             <label>Sujet Actuel</label>
//             <input
//               type="text"
//               name="sujet_actuel"
//               value={formData.sujet_actuel || ''}
//               onChange={handleChange}
//             />
//             <label>Nouveau Sujet Proposé</label>
//             <input
//               type="text"
//               name="nouveau_sujet_propose"
//               value={formData.nouveau_sujet_propose || ''}
//               onChange={handleChange}
//             />
//             <label>Justification</label>
//             <textarea
//               name="justification"
//               value={formData.justification || ''}
//               onChange={handleChange}
//             />
//             <label>Fichier de Demande de Changement</label>
//             <input
//               type="file"
//               name="file"
//               onChange={handleFileChange}
//             />
//           </>
//         )}

//         {formData.type_demande === 'changement-directeur' && (
//           <>
//             <label>Directeur Actuel</label>
//             <input
//               type="text"
//               name="directeur_actuel"
//               value={formData.directeur_actuel || ''}
//               onChange={handleChange}
//             />
//             <label>Nouveau Directeur Proposé</label>
//             <input
//               type="text"
//               name="nouveau_directeur_propose"
//               value={formData.nouveau_directeur_propose || ''}
//               onChange={handleChange}
//             />
//             <label>Raisons du Changement</label>
//             <textarea
//               name="raisons_changement"
//               value={formData.raisons_changement || ''}
//               onChange={handleChange}
//             />
//             <label>Fichier de Demande de Changement de Directeur</label>
//             <input
//               type="file"
//               name="file"
//               onChange={handleFileChange}
//             />
//           </>
//         )}

//         {formData.type_demande === 'candidature-cotutelle' && (
//           <>
//             <label>Année Académique</label>
//             <input
//               type="text"
//               name="annee_academique"
//               value={formData.annee_academique || ''}
//               onChange={handleChange}
//             />
//             <label>Motif</label>
//             <input
//               type="text"
//               name="motif"
//               value={formData.motif || ''}
//               onChange={handleChange}
//             />
//             <label>Fichier de Demande de Cotutelle</label>
//             <input
//               type="file"
//               name="file"
//               onChange={handleFileChange}
//             />
//           </>
//         )}

//         {formData.type_demande === 'attestation-stage' && (
//           <>
//             <label>Entreprise d'Accueil</label>
//             <input
//               type="text"
//               name="entreprise_accueil"
//               value={formData.entreprise_accueil || ''}
//               onChange={handleChange}
//             />
//             <label>Période de Stage</label>
//             <input
//               type="text"
//               name="periode_stage"
//               value={formData.periode_stage || ''}
//               onChange={handleChange}
//             />
//             <label>Objectifs du Stage</label>
//             <textarea
//               name="objectifs_stage"
//               value={formData.objectifs_stage || ''}
//               onChange={handleChange}
//             />
//             <label>Université Partenaire</label>
//             <input
//               type="text"
//               name="universite_partenaire"
//               value={formData.universite_partenaire || ''}
//               onChange={handleChange}
//             />
//             <label>Pays</label>
//             <input
//               type="text"
//               name="pays"
//               value={formData.pays || ''}
//               onChange={handleChange}
//             />
//             <label>Durée de Cotutelle</label>
//             <input
//               type="text"
//               name="duree_cotutelle"
//               value={formData.duree_cotutelle || ''}
//               onChange={handleChange}
//             />
//             <label>Fichier d'Attestation de Stage</label>
//             <input
//               type="file"
//               name="file"
//               onChange={handleFileChange}
//             />
//           </>
//         )}

//         {formData.type_demande === 'changement-directeur-cotutelle' && (
//           <>
//             <label>Co-Directeur Actuel</label>
//             <input
//               type="text"
//               name="co_directeur_actuel"
//               value={formData.co_directeur_actuel || ''}
//               onChange={handleChange}
//             />
//             <label>Nouveau Co-Directeur Proposé</label>
//             <input
//               type="text"
//               name="nouveau_co_directeur_propose"
//               value={formData.nouveau_co_directeur_propose || ''}
//               onChange={handleChange}
//             />
//             <label>Motifs du Changement</label>
//             <textarea
//               name="motifs_changement"
//               value={formData.motifs_changement || ''}
//               onChange={handleChange}
//             />
//             <label>Fichier de Demande de Changement de Co-Directeur</label>
//             <input
//               type="file"
//               name="file"
//               onChange={handleFileChange}
//             />
//           </>
//         )}

//         {formData.type_demande === 'soutenance' && (
//           <>
//             <label>Titre de la Thèse</label>
//             <input
//               type="text"
//               name="titre_these"
//               value={formData.titre_these || ''}
//               onChange={handleChange}
//             />
//             <label>Directeur de Thèse</label>
//             <input
//               type="text"
//               name="directeur_these"
//               value={formData.directeur_these || ''}
//               onChange={handleChange}
//             />
//             <label>Date de Début de Thèse</label>
//             <input
//               type="date"
//               name="date_debut_these"
//               value={formData.date_debut_these || ''}
//               onChange={handleChange}
//             />
//             <label>Date Prévue de Soutenance</label>
//             <input
//               type="date"
//               name="date_prevue_soutenance"
//               value={formData.date_prevue_soutenance || ''}
//               onChange={handleChange}
//             />
//             <label>Nombre d'Exemplaires</label>
//             <input
//               type="text"
//               name="nombre_exemplaires"
//               value={formData.nombre_exemplaires || ''}
//               onChange={handleChange}
//             />
//             <label>Date de Soutenance</label>
//             <input
//               type="date"
//               name="date_soutenance"
//               value={formData.date_soutenance || ''}
//               onChange={handleChange}
//             />
//             <label>Fichier de Soutenance</label>
//             <input
//               type="file"
//               name="file"
//               onChange={handleFileChange}
//             />
//           </>
//         )}

//         <button type="submit">Mettre à jour</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default UpdateDemandeForm;




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
//       formDataToSend.append(key, demandeData[key]);
//     });
  
//     // Ajouter le fichier si présent
//     if (file) {
//       formDataToSend.append('file', file);
//     }
  
//     // Ajouter des métadonnées supplémentaires si nécessaire
//     formDataToSend.append('date_soumission', new Date().toISOString().split('T')[0]);
  
//     try {
//       const response = await axios.put(`/demandes/${demandeId}`, formDataToSend, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
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
//         {/* Ajoutez des blocs similaires pour chaque type de demande */}
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
  const [canEdit, setCanEdit] = useState(true);

  useEffect(() => {
    const fetchDemande = async () => {
      try {
        const response = await axios.get(`/demandes/${demandeId}`);
        console.log('Réponse de l\'API :', response);
        const { data } = response;
        setDemandeData(data);

        // Vérifier si la demande peut être modifiée
        const now = new Date();
        const submissionDate = new Date(data.date_soumission);
        const hoursSinceSubmission = (now - submissionDate) / (1000 * 60 * 60);

        if (hoursSinceSubmission > 24) {
          setCanEdit(false);
        }

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
      formDataToSend.append(key, demandeData[key]);
    });
  
    // Ajouter le fichier si présent
    if (file) {
      formDataToSend.append('file', file);
    }
  
    // Ajouter des métadonnées supplémentaires si nécessaire
    formDataToSend.append('date_soumission', new Date().toISOString().split('T')[0]);
  
    try {
      const response = await axios.put(`/demandes/${demandeId}`, formDataToSend, {
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

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Modifier la Demande</h2>
      <p className="mb-4 text-gray-700">ID de la Demande: {demandeId}</p>
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4">
        <p className="font-semibold">Information Importante :</p>
        <p>Cette demande ne peut plus être modifiée après 24 heures. Si vous avez besoin de faire des modifications après ce délai, veuillez contacter l'administration.</p>
      </div>
      {canEdit ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          {demandeData.type_demande === 'inscription' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700">Diplômes Précédents</label>
                <input
                  type="text"
                  name="diplomes_precedents"
                  value={demandeData.diplomes_precedents || ''}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Spécialisation Souhaitée</label>
                <input
                  type="text"
                  name="specialisation_souhaitee"
                  value={demandeData.specialisation_souhaitee || ''}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Notes de Transcription</label>
                <input
                  type="text"
                  name="notes_transcription"
                  value={demandeData.notes_transcription || ''}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Fichier de Demande</label>
                <input
                  type="file"
                  name="file"
                  onChange={handleFileChange}
                  className="mt-1 block w-full text-sm text-gray-500 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:text-sm file:font-medium file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
                />
              </div>
            </>
          )}
          {/* Ajoutez des blocs similaires pour chaque type de demande */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Mettre à jour la demande
          </button>
        </form>
      ) : (
        <p className="text-red-600 mt-4">Cette demande ne peut plus être modifiée car elle a été soumise il y a plus de 24 heures. Veuillez contacter l'administration pour toute modification.</p>
      )}
      {message && <p className="mt-4 text-red-600">{message}</p>}
    </div>
  );
};

export default UpdateDemandeForm;
