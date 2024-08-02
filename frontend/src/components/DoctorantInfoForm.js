// // src/components/DoctorantInfoForm.js
// import React, { useState } from 'react';
// import axios from '../api/axios'; // Utiliser l'instance Axios configurée

// const DoctorantInfoForm = () => {
//   const [formData, setFormData] = useState({
//     // Informations Personnelles
//     civilite: '',
//     sexe: '',
//     nom: '',
//     prenom: '',
//     date_naissance: '',
//     email: '',
//     telephone: '',
//     lieu_naissance: '',
//     cnie: '',
//     situation_socioprofessionnelle: '',

//     // Informations sur le Baccalauréat
//     annee_bac: '',
//     type_bac: '',
//     mention: '',
//     cne_massar: '',
//     serie_bac: '',
//     academie: '',
//     province: '',

//     // Informations Universitaires
//     diplome: '',
//     etablissement: '',
//     universite: '',

//     // Informations sur le Cycle Doctoral
//     formation_doctorale: '',
//     annee_soutenance_prevue: '',
//     specialite: '',
//     directeur_these: '',
//     structure_recherche_directeur: '',
//     co_directeur_these: '',
//     structure_recherche_co_directeur: '',
//     universite_cotutelle: '',
//     sujet_recherche: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/doctorant/doctorant-info', formData);
//       console.log(response.data); // Afficher la réponse du backend
//       // Réinitialiser le formulaire ou afficher une confirmation
//     } catch (error) {
//       console.error('Erreur lors de l\'enregistrement des informations:', error);
//       // Gérer l'erreur
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Informations Personnelles</h2>
//       <input type="text" name="civilite" value={formData.civilite} onChange={handleChange} placeholder="Civilité" required />
//       <input type="text" name="sexe" value={formData.sexe} onChange={handleChange} placeholder="Sexe" required />
//       <input type="text" name="nom" value={formData.nom} onChange={handleChange} placeholder="Nom" required />
//       <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} placeholder="Prénom" required />
//       <input type="text" name="date_naissance" value={formData.date_naissance} onChange={handleChange} placeholder="Date de Naissance" required />
//       <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
//       <input type="text" name="telephone" value={formData.telephone} onChange={handleChange} placeholder="Téléphone" required />
//       <input type="text" name="lieu_naissance" value={formData.lieu_naissance} onChange={handleChange} placeholder="Lieu de Naissance" required />
//       <input type="text" name="cnie" value={formData.cnie} onChange={handleChange} placeholder="Numéro CNI" required />
//       <input type="text" name="situation_socioprofessionnelle" value={formData.situation_socioprofessionnelle} onChange={handleChange} placeholder="Situation Socioprofessionnelle" required />

//       <h2>Informations sur le Baccalauréat</h2>
//       <input type="text" name="annee_bac" value={formData.annee_bac} onChange={handleChange} placeholder="Année d'obtention" required />
//       <input type="text" name="type_bac" value={formData.type_bac} onChange={handleChange} placeholder="Type de baccalauréat" required />
//       <input type="text" name="mention" value={formData.mention} onChange={handleChange} placeholder="Mention obtenue" required />
//       <input type="text" name="cne_massar" value={formData.cne_massar} onChange={handleChange} placeholder="Numéro CNE ou Massar" required />
//       <input type="text" name="serie_bac" value={formData.serie_bac} onChange={handleChange} placeholder="Série du baccalauréat" required />
//       <input type="text" name="academie" value={formData.academie} onChange={handleChange} placeholder="Académie d'obtention" required />
//       <input type="text" name="province" value={formData.province} onChange={handleChange} placeholder="Province d'obtention" required />

//       <h2>Informations Universitaires</h2>
//       <input type="text" name="diplome" value={formData.diplome} onChange={handleChange} placeholder="Diplôme obtenu" required />
//       <input type="text" name="etablissement" value={formData.etablissement} onChange={handleChange} placeholder="Établissement" required />
//       <input type="text" name="universite" value={formData.universite} onChange={handleChange} placeholder="Université" required />

//       <h2>Informations sur le Cycle Doctoral</h2>
//       <input type="text" name="formation_doctorale" value={formData.formation_doctorale} onChange={handleChange} placeholder="Formation Doctorale" required />
//       <input type="text" name="annee_soutenance_prevue" value={formData.annee_soutenance_prevue} onChange={handleChange} placeholder="Année de Soutenance Prévue" required />
//       <input type="text" name="specialite" value={formData.specialite} onChange={handleChange} placeholder="Spécialité de Recherche" required />
//       <input type="text" name="directeur_these" value={formData.directeur_these} onChange={handleChange} placeholder="Directeur de Thèse" required />
//       <input type="text" name="structure_recherche_directeur" value={formData.structure_recherche_directeur} onChange={handleChange} placeholder="Structure de Recherche du Directeur" required />
//       <input type="text" name="co_directeur_these" value={formData.co_directeur_these} onChange={handleChange} placeholder="Co-directeur de Thèse (optionnel)" />
//       <input type="text" name="structure_recherche_co_directeur" value={formData.structure_recherche_co_directeur} onChange={handleChange} placeholder="Structure de Recherche du Co-directeur" />
//       <input type="text" name="universite_cotutelle" value={formData.universite_cotutelle} onChange={handleChange} placeholder="Université de Cotutelle (optionnel)" />
//       <input type="text" name="sujet_recherche" value={formData.sujet_recherche} onChange={handleChange} placeholder="Sujet de Recherche de Thèse" required />

//       <button type="submit">Enregistrer</button>
//     </form>
//   );
// };

// export default DoctorantInfoForm;










// import React, { useState, useEffect } from 'react';
// import axios from '../api/axios'; // Utiliser l'instance Axios configurée

// const DoctorantInfoForm = () => {
//   const [formData, setFormData] = useState({
//     // Informations Personnelles
//     civilite: '',
//     sexe: '',
//     nom: '',
//     prenom: '',
//     date_naissance: '',
//     email: '',
//     telephone: '',
//     lieu_naissance: '',
//     cnie: '',
//     situation_socioprofessionnelle: '',

//     // Informations sur le Baccalauréat
//     annee_bac: '',
//     type_bac: '',
//     mention: '',
//     cne_massar: '',
//     serie_bac: '',
//     academie: '',
//     province: '',

//     // Informations Universitaires
//     diplome: '',
//     etablissement: '',
//     universite: '',

//     // Informations sur le Cycle Doctoral
//     formation_doctorale: '',
//     annee_soutenance_prevue: '',
//     specialite: '',
//     directeur_these: '',
//     structure_recherche_directeur: '',
//     co_directeur_these: '',
//     structure_recherche_co_directeur: '',
//     universite_cotutelle: '',
//     sujet_recherche: ''
//   });

//   useEffect(() => {
//     const fetchDoctorantInfo = async () => {
//       try {
//         const response = await axios.get('/doctorant/doctorant-info');
//         const { personalInfo, baccalaureatInfo, universitairesInfo, cycleDoctoralInfo } = response.data;

//         setFormData({
//           // Informations Personnelles
//           civilite: personalInfo.civilite,
//           sexe: personalInfo.sexe,
//           nom: personalInfo.nom,
//           prenom: personalInfo.prenom,
//           date_naissance: personalInfo.date_naissance,
//           email: personalInfo.email,
//           telephone: personalInfo.telephone,
//           lieu_naissance: personalInfo.lieu_naissance,
//           cnie: personalInfo.cnie,
//           situation_socioprofessionnelle: personalInfo.situation_socioprofessionnelle,

//           // Informations sur le Baccalauréat
//           annee_bac: baccalaureatInfo.annee_bac,
//           type_bac: baccalaureatInfo.type_bac,
//           mention: baccalaureatInfo.mention,
//           cne_massar: baccalaureatInfo.cne_massar,
//           serie_bac: baccalaureatInfo.serie_bac,
//           academie: baccalaureatInfo.academie,
//           province: baccalaureatInfo.province,

//           // Informations Universitaires
//           diplome: universitairesInfo.diplome,
//           etablissement: universitairesInfo.etablissement,
//           universite: universitairesInfo.universite,

//           // Informations sur le Cycle Doctoral
//           formation_doctorale: cycleDoctoralInfo.formation_doctorale,
//           annee_soutenance_prevue: cycleDoctoralInfo.annee_soutenance_prevue,
//           specialite: cycleDoctoralInfo.specialite,
//           directeur_these: cycleDoctoralInfo.directeur_these,
//           structure_recherche_directeur: cycleDoctoralInfo.structure_recherche_directeur,
//           co_directeur_these: cycleDoctoralInfo.co_directeur_these,
//           structure_recherche_co_directeur: cycleDoctoralInfo.structure_recherche_co_directeur,
//           universite_cotutelle: cycleDoctoralInfo.universite_cotutelle,
//           sujet_recherche: cycleDoctoralInfo.sujet_recherche
//         });
//       } catch (error) {
//         console.error('Erreur lors de la récupération des informations:', error);
//         // Gérer l'erreur de récupération
//       }
//     };

//     fetchDoctorantInfo();
//   }, []); // Effectué uniquement une fois après le montage initial

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/doctorant/doctorant-info', formData);
//       console.log(response.data); // Afficher la réponse du backend
//       // Réinitialiser le formulaire ou afficher une confirmation
//     } catch (error) {
//       console.error('Erreur lors de l\'enregistrement des informations:', error);
//       // Gérer l'erreur
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Informations Personnelles</h2>
//       <input type="text" name="civilite" value={formData.civilite} onChange={handleChange} placeholder="Civilité" required />
//       <input type="text" name="sexe" value={formData.sexe} onChange={handleChange} placeholder="Sexe" required />
//       <input type="text" name="nom" value={formData.nom} onChange={handleChange} placeholder="Nom" required />
//       <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} placeholder="Prénom" required />
//       <input type="text" name="date_naissance" value={formData.date_naissance} onChange={handleChange} placeholder="Date de Naissance" required />
//       <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
//       <input type="text" name="telephone" value={formData.telephone} onChange={handleChange} placeholder="Téléphone" required />
//       <input type="text" name="lieu_naissance" value={formData.lieu_naissance} onChange={handleChange} placeholder="Lieu de Naissance" required />
//       <input type="text" name="cnie" value={formData.cnie} onChange={handleChange} placeholder="Numéro CNI" required />
//       <input type="text" name="situation_socioprofessionnelle" value={formData.situation_socioprofessionnelle} onChange={handleChange} placeholder="Situation Socioprofessionnelle" required />

//       <h2>Informations sur le Baccalauréat</h2>
//       <input type="text" name="annee_bac" value={formData.annee_bac} onChange={handleChange} placeholder="Année d'obtention" required />
//       <input type="text" name="type_bac" value={formData.type_bac} onChange={handleChange} placeholder="Type de baccalauréat" required />
//       <input type="text" name="mention" value={formData.mention} onChange={handleChange} placeholder="Mention obtenue" required />
//       <input type="text" name="cne_massar" value={formData.cne_massar} onChange={handleChange} placeholder="Numéro CNE ou Massar" required />
//       <input type="text" name="serie_bac" value={formData.serie_bac} onChange={handleChange} placeholder="Série du baccalauréat" required />
//       <input type="text" name="academie" value={formData.academie} onChange={handleChange} placeholder="Académie d'obtention" required />
//       <input type="text" name="province" value={formData.province} onChange={handleChange} placeholder="Province d'obtention" required />

//       <h2>Informations Universitaires</h2>
//       <input type="text" name="diplome" value={formData.diplome} onChange={handleChange} placeholder="Diplôme obtenu" required />
//       <input type="text" name="etablissement" value={formData.etablissement} onChange={handleChange} placeholder="Établissement" required />
//       <input type="text" name="universite" value={formData.universite} onChange={handleChange} placeholder="Université" required />

//       <h2>Informations sur le Cycle Doctoral</h2>
//       <input type="text" name="formation_doctorale" value={formData.formation_doctorale} onChange={handleChange} placeholder="Formation Doctorale" required />
//       <input type="text" name="annee_soutenance_prevue" value={formData.annee_soutenance_prevue} onChange={handleChange} placeholder="Année de Soutenance Prévue" required />
//       <input type="text" name="specialite" value={formData.specialite} onChange={handleChange} placeholder="Spécialité de Recherche" required />
//       <input type="text" name="directeur_these" value={formData.directeur_these} onChange={handleChange} placeholder="Directeur de Thèse" required />
//       <input type="text" name="structure_recherche_directeur" value={formData.structure_recherche_directeur} onChange={handleChange} placeholder="Structure de Recherche du Directeur" required />
//       <input type="text" name="co_directeur_these" value={formData.co_directeur_these} onChange={handleChange} placeholder="Co-directeur de Thèse (optionnel)" />
//       <input type="text" name="structure_recherche_co_directeur" value={formData.structure_recherche_co_directeur} onChange={handleChange} placeholder="Structure de Recherche du Co-directeur" />
//       <input type="text" name="universite_cotutelle" value={formData.universite_cotutelle} onChange={handleChange} placeholder="Université de Cotutelle (optionnel)" />
//       <input type="text" name="sujet_recherche" value={formData.sujet_recherche} onChange={handleChange} placeholder="Sujet de Recherche de Thèse" required />

//       <button type="submit">Enregistrer</button>
//     </form>
//   );
// };

// export default DoctorantInfoForm;







// import React, { useState, useEffect } from 'react';
// import axios from '../api/axios'; // Utiliser l'instance Axios configurée

// const DoctorantInfoForm = () => {
//   const [formData, setFormData] = useState({
//     // Informations Personnelles
//     civilite: '',
//     sexe: '',
//     nom: '',
//     prenom: '',
//     date_naissance: '',
//     email: '',
//     telephone: '',
//     lieu_naissance: '',
//     cnie: '',
//     situation_socioprofessionnelle: '',

//     // Informations sur le Baccalauréat
//     annee_bac: '',
//     type_bac: '',
//     mention: '',
//     cne_massar: '',
//     serie_bac: '',
//     academie: '',
//     province: '',

//     // Informations Universitaires
//     diplome: '',
//     etablissement: '',
//     universite: '',

//     // Informations sur le Cycle Doctoral
//     formation_doctorale: '',
//     annee_soutenance_prevue: '',
//     specialite: '',
//     directeur_these: '',
//     structure_recherche_directeur: '',
//     co_directeur_these: '',
//     structure_recherche_co_directeur: '',
//     universite_cotutelle: '',
//     sujet_recherche: ''
//   });

//   useEffect(() => {
//     const fetchDoctorantInfo = async () => {
//       try {
//         const response = await axios.get('/doctorant/doctorant-info');
//         const { personalInfo, baccalaureatInfo, universitairesInfo, cycleDoctoralInfo } = response.data;

//         setFormData({
//           // Informations Personnelles
//           civilite: personalInfo.civilite,
//           sexe: personalInfo.sexe,
//           nom: personalInfo.nom,
//           prenom: personalInfo.prenom,
//           date_naissance: personalInfo.date_naissance,
//           email: personalInfo.email,
//           telephone: personalInfo.telephone,
//           lieu_naissance: personalInfo.lieu_naissance,
//           cnie: personalInfo.cnie,
//           situation_socioprofessionnelle: personalInfo.situation_socioprofessionnelle,

//           // Informations sur le Baccalauréat
//           annee_bac: baccalaureatInfo.annee_bac,
//           type_bac: baccalaureatInfo.type_bac,
//           mention: baccalaureatInfo.mention,
//           cne_massar: baccalaureatInfo.cne_massar,
//           serie_bac: baccalaureatInfo.serie_bac,
//           academie: baccalaureatInfo.academie,
//           province: baccalaureatInfo.province,

//           // Informations Universitaires
//           diplome: universitairesInfo.diplome,
//           etablissement: universitairesInfo.etablissement,
//           universite: universitairesInfo.universite,

//           // Informations sur le Cycle Doctoral
//           formation_doctorale: cycleDoctoralInfo.formation_doctorale,
//           annee_soutenance_prevue: cycleDoctoralInfo.annee_soutenance_prevue,
//           specialite: cycleDoctoralInfo.specialite,
//           directeur_these: cycleDoctoralInfo.directeur_these,
//           structure_recherche_directeur: cycleDoctoralInfo.structure_recherche_directeur,
//           co_directeur_these: cycleDoctoralInfo.co_directeur_these,
//           structure_recherche_co_directeur: cycleDoctoralInfo.structure_recherche_co_directeur,
//           universite_cotutelle: cycleDoctoralInfo.universite_cotutelle,
//           sujet_recherche: cycleDoctoralInfo.sujet_recherche
//         });
//       } catch (error) {
//         console.error('Erreur lors de la récupération des informations:', error);
//         // Gérer l'erreur de récupération
//       }
//     };

//     fetchDoctorantInfo();
//   }, []); // Effectué uniquement une fois après le montage initial

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/doctorant/doctorant-info', formData);
//       console.log(response.data); // Afficher la réponse du backend
//       // Réinitialiser le formulaire ou afficher une confirmation
//     } catch (error) {
//       console.error('Erreur lors de l\'enregistrement des informations:', error);
//       // Gérer l'erreur
//     }
//   };

//   return (
//     <div className="h-full flex flex-col justify-between w-9/12">
//       <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
//         <h2 className="text-2xl font-bold mb-4">Informations Personnelles</h2>
//         <div className="grid grid-cols-2 gap-4 mb-4">
//           <input type="text" name="civilite" value={formData.civilite} onChange={handleChange} placeholder="Civilité" required className="input-field" />
//           <input type="text" name="sexe" value={formData.sexe} onChange={handleChange} placeholder="Sexe" required className="input-field" />
//           <input type="text" name="nom" value={formData.nom} onChange={handleChange} placeholder="Nom" required className="input-field" />
//           <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} placeholder="Prénom" required className="input-field" />
//           <input type="text" name="date_naissance" value={formData.date_naissance} onChange={handleChange} placeholder="Date de Naissance" required className="input-field" />
//           <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="input-field" />
//           <input type="text" name="telephone" value={formData.telephone} onChange={handleChange} placeholder="Téléphone" required className="input-field" />
//           <input type="text" name="lieu_naissance" value={formData.lieu_naissance} onChange={handleChange} placeholder="Lieu de Naissance" required className="input-field" />
//           <input type="text" name="cnie" value={formData.cnie} onChange={handleChange} placeholder="Numéro CNI" required className="input-field" />
//           <input type="text" name="situation_socioprofessionnelle" value={formData.situation_socioprofessionnelle} onChange={handleChange} placeholder="Situation Socioprofessionnelle" required className="input-field" />
//         </div>

//         <h2 className="text-2xl font-bold mb-4">Informations sur le Baccalauréat</h2>
//         <div className="grid grid-cols-2 gap-4 mb-4">
//           <input type="text" name="annee_bac" value={formData.annee_bac} onChange={handleChange} placeholder="Année d'obtention" required className="input-field" />
//           <input type="text" name="type_bac" value={formData.type_bac} onChange={handleChange} placeholder="Type de baccalauréat" required className="input-field" />
//           <input type="text" name="mention" value={formData.mention} onChange={handleChange} placeholder="Mention obtenue" required className="input-field" />
//           <input type="text" name="cne_massar" value={formData.cne_massar} onChange={handleChange} placeholder="Numéro CNE ou Massar" required className="input-field" />
//           <input type="text" name="serie_bac" value={formData.serie_bac} onChange={handleChange} placeholder="Série du baccalauréat" required className="input-field" />
//           <input type="text" name="academie" value={formData.academie} onChange={handleChange} placeholder="Académie d'obtention" required className="input-field" />
//           <input type="text" name="province" value={formData.province} onChange={handleChange} placeholder="Province d'obtention" required className="input-field" />
//         </div>

//         <h2 className="text-2xl font-bold mb-4">Informations Universitaires</h2>
//         <div className="grid grid-cols-2 gap-4 mb-4">
//           <input type="text" name="diplome" value={formData.diplome} onChange={handleChange} placeholder="Diplôme obtenu" required className="input-field" />
//           <input type="text" name="etablissement" value={formData.etablissement} onChange={handleChange} placeholder="Établissement" required className="input-field" />
//           <input type="text" name="universite" value={formData.universite} onChange={handleChange} placeholder="Université" required className="input-field" />
//         </div>

//         <h2 className="text-2xl font-bold mb-4">Informations sur le Cycle Doctoral</h2>
//         <div className="grid grid-cols-2 gap-4 mb-4">
//           <input type="text" name="formation_doctorale" value={formData.formation_doctorale} onChange={handleChange} placeholder="Formation Doctorale" required className="input-field" />
//           <input type="text" name="annee_soutenance_prevue" value={formData.annee_soutenance_prevue} onChange={handleChange} placeholder="Année de Soutenance Prévue" required className="input-field" />
//           <input type="text" name="specialite" value={formData.specialite} onChange={handleChange} placeholder="Spécialité de Recherche" required className="input-field" />
//           <input type="text" name="directeur_these" value={formData.directeur_these} onChange={handleChange} placeholder="Directeur de Thèse" required className="input-field" />
//           <input type="text" name="structure_recherche_directeur" value={formData.structure_recherche_directeur} onChange={handleChange} placeholder="Structure de Recherche du Directeur" required className="input-field" />
//           <input type="text" name="co_directeur_these" value={formData.co_directeur_these} onChange={handleChange} placeholder="Co-directeur de Thèse (optionnel)" className="input-field" />
//           <input type="text" name="structure_recherche_co_directeur" value={formData.structure_recherche_co_directeur} onChange={handleChange} placeholder="Structure de Recherche du Co-directeur" required className="input-field" />
//           <input type="text" name="universite_cotutelle" value={formData.universite_cotutelle} onChange={handleChange} placeholder="Université de Cotutelle (optionnel)" className="input-field" />
//           <input type="text" name="sujet_recherche" value={formData.sujet_recherche} onChange={handleChange} placeholder="Sujet de Recherche de Thèse" required className="input-field" />
//         </div>

//         <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Enregistrer</button>
//       </form>
//     </div>
//   );
// };

// export default DoctorantInfoForm;








// import React, { useState, useEffect } from 'react';
// import axios from '../api/axios'; // Utiliser l'instance Axios configurée

// const DoctorantInfoForm = () => {
//   const [formData, setFormData] = useState({
//     // Informations Personnelles
//     civilite: '',
//     sexe: '',
//     nom: '',
//     prenom: '',
//     date_naissance: '',
//     email: '',
//     telephone: '',
//     lieu_naissance: '',
//     cnie: '',
//     situation_socioprofessionnelle: '',

//     // Informations sur le Baccalauréat
//     annee_bac: '',
//     type_bac: '',
//     mention: '',
//     cne_massar: '',
//     serie_bac: '',
//     academie: '',
//     province: '',

//     // Informations Universitaires
//     diplome: '',
//     etablissement: '',
//     universite: '',

//     // Informations sur le Cycle Doctoral
//     formation_doctorale: '',
//     annee_soutenance_prevue: '',
//     specialite: '',
//     directeur_these: '',
//     structure_recherche_directeur: '',
//     co_directeur_these: '',
//     structure_recherche_co_directeur: '',
//     universite_cotutelle: '',
//     sujet_recherche: ''
//   });

//   useEffect(() => {
//     const fetchDoctorantInfo = async () => {
//       try {
//         const response = await axios.get('/doctorant/doctorant-info');
//         const { personalInfo, baccalaureatInfo, universitairesInfo, cycleDoctoralInfo } = response.data;

//         setFormData({
//           // Informations Personnelles
//           civilite: personalInfo.civilite,
//           sexe: personalInfo.sexe,
//           nom: personalInfo.nom,
//           prenom: personalInfo.prenom,
//           date_naissance: personalInfo.date_naissance,
//           email: personalInfo.email,
//           telephone: personalInfo.telephone,
//           lieu_naissance: personalInfo.lieu_naissance,
//           cnie: personalInfo.cnie,
//           situation_socioprofessionnelle: personalInfo.situation_socioprofessionnelle,

//           // Informations sur le Baccalauréat
//           annee_bac: baccalaureatInfo.annee_bac,
//           type_bac: baccalaureatInfo.type_bac,
//           mention: baccalaureatInfo.mention,
//           cne_massar: baccalaureatInfo.cne_massar,
//           serie_bac: baccalaureatInfo.serie_bac,
//           academie: baccalaureatInfo.academie,
//           province: baccalaureatInfo.province,

//           // Informations Universitaires
//           diplome: universitairesInfo.diplome,
//           etablissement: universitairesInfo.etablissement,
//           universite: universitairesInfo.universite,

//           // Informations sur le Cycle Doctoral
//           formation_doctorale: cycleDoctoralInfo.formation_doctorale,
//           annee_soutenance_prevue: cycleDoctoralInfo.annee_soutenance_prevue,
//           specialite: cycleDoctoralInfo.specialite,
//           directeur_these: cycleDoctoralInfo.directeur_these,
//           structure_recherche_directeur: cycleDoctoralInfo.structure_recherche_directeur,
//           co_directeur_these: cycleDoctoralInfo.co_directeur_these,
//           structure_recherche_co_directeur: cycleDoctoralInfo.structure_recherche_co_directeur,
//           universite_cotutelle: cycleDoctoralInfo.universite_cotutelle,
//           sujet_recherche: cycleDoctoralInfo.sujet_recherche
//         });
//       } catch (error) {
//         console.error('Erreur lors de la récupération des informations:', error);
//         // Gérer l'erreur de récupération
//       }
//     };

//     fetchDoctorantInfo();
//   }, []); // Effectué uniquement une fois après le montage initial

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/doctorant/doctorant-info', formData);
//       console.log(response.data); // Afficher la réponse du backend
//       // Réinitialiser le formulaire ou afficher une confirmation

//       // Rediriger l'utilisateur après soumission réussie
//       window.location.replace('/DoctorantInfo');
//     } catch (error) {
//       console.error('Erreur lors de l\'enregistrement des informations:', error);
//       // Gérer l'erreur
//     }
//   };

//   return (
//     <div className="h-full flex flex-col justify-between w-9/12">
//       <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
//         <h2 className="text-2xl font-bold mb-4">Informations Personnelles</h2>
//         <div className="grid grid-cols-2 gap-4 mb-4">
//           <input type="text" name="civilite" value={formData.civilite} onChange={handleChange} placeholder="Civilité" required className="input-field" />
//           <input type="text" name="sexe" value={formData.sexe} onChange={handleChange} placeholder="Sexe" required className="input-field" />
//           <input type="text" name="nom" value={formData.nom} onChange={handleChange} placeholder="Nom" required className="input-field" />
//           <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} placeholder="Prénom" required className="input-field" />
//           <input type="text" name="date_naissance" value={formData.date_naissance} onChange={handleChange} placeholder="Date de Naissance" required className="input-field" />
//           <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="input-field" />
//           <input type="text" name="telephone" value={formData.telephone} onChange={handleChange} placeholder="Téléphone" required className="input-field" />
//           <input type="text" name="lieu_naissance" value={formData.lieu_naissance} onChange={handleChange} placeholder="Lieu de Naissance" required className="input-field" />
//           <input type="text" name="cnie" value={formData.cnie} onChange={handleChange} placeholder="Numéro CNI" required className="input-field" />
//           <input type="text" name="situation_socioprofessionnelle" value={formData.situation_socioprofessionnelle} onChange={handleChange} placeholder="Situation Socioprofessionnelle" required className="input-field" />
//         </div>

//         <h2 className="text-2xl font-bold mb-4">Informations sur le Baccalauréat</h2>
//         <div className="grid grid-cols-2 gap-4 mb-4">
//           <input type="text" name="annee_bac" value={formData.annee_bac} onChange={handleChange} placeholder="Année d'obtention" required className="input-field" />
//           <input type="text" name="type_bac" value={formData.type_bac} onChange={handleChange} placeholder="Type de baccalauréat" required className="input-field" />
//           <input type="text" name="mention" value={formData.mention} onChange={handleChange} placeholder="Mention obtenue" required className="input-field" />
//           <input type="text" name="cne_massar" value={formData.cne_massar} onChange={handleChange} placeholder="Numéro CNE ou Massar" required className="input-field" />
//           <input type="text" name="serie_bac" value={formData.serie_bac} onChange={handleChange} placeholder="Série du baccalauréat" required className="input-field" />
//           <input type="text" name="academie" value={formData.academie} onChange={handleChange} placeholder="Académie d'obtention" required className="input-field" />
//           <input type="text" name="province" value={formData.province} onChange={handleChange} placeholder="Province d'obtention" required className="input-field" />
//         </div>

//         <h2 className="text-2xl font-bold mb-4">Informations Universitaires</h2>
//         <div className="grid grid-cols-2 gap-4 mb-4">
//           <input type="text" name="diplome" value={formData.diplome} onChange={handleChange} placeholder="Diplôme obtenu" required className="input-field" />
//           <input type="text" name="etablissement" value={formData.etablissement} onChange={handleChange} placeholder="Établissement" required className="input-field" />
//           <input type="text" name="universite" value={formData.universite} onChange={handleChange} placeholder="Université" required className="input-field" />
//         </div>

//         <h2 className="text-2xl font-bold mb-4">Informations sur le Cycle Doctoral</h2>
//         <div className="grid grid-cols-2 gap-4 mb-4">
//           <input type="text" name="formation_doctorale" value={formData.formation_doctorale} onChange={handleChange} placeholder="Formation Doctorale" required className="input-field" />
//           <input type="text" name="annee_soutenance_prevue" value={formData.annee_soutenance_prevue} onChange={handleChange} placeholder="Année de Soutenance Prévue" required className="input-field" />
//           <input type="text" name="specialite" value={formData.specialite} onChange={handleChange} placeholder="Spécialité de Recherche" required className="input-field" />
//           <input type="text" name="directeur_these" value={formData.directeur_these} onChange={handleChange} placeholder="Directeur de Thèse" required className="input-field" />
//           <input type="text" name="structure_recherche_directeur" value={formData.structure_recherche_directeur} onChange={handleChange} placeholder="Structure de Recherche du Directeur" required className="input-field" />
//           <input type="text" name="co_directeur_these" value={formData.co_directeur_these} onChange={handleChange} placeholder="Co-directeur de Thèse (optionnel)" className="input-field" />
//           <input type="text" name="structure_recherche_co_directeur" value={formData.structure_recherche_co_directeur} onChange={handleChange} placeholder="Structure de Recherche du Co-directeur" required className="input-field" />
//           <input type="text" name="universite_cotutelle" value={formData.universite_cotutelle} onChange={handleChange} placeholder="Université de Cotutelle (optionnel)" className="input-field" />
//           <input type="text" name="sujet_recherche" value={formData.sujet_recherche} onChange={handleChange} placeholder="Sujet de Recherche de Thèse" required className="input-field" />
//         </div>

//         <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Enregistrer</button>
//       </form>
//     </div>
//   );
// };

// export default DoctorantInfoForm;







// import React, { useState, useEffect } from 'react';
// import axios from '../api/axios'; // Utiliser l'instance Axios configurée
// const DoctorantInfoForm = () => {
//   const [formData, setFormData] = useState({
//     // Informations Personnelles
//     civilite: '',
//     sexe: '',
//     nom: '',
//     prenom: '',
//     date_naissance: '',
//     email: '',
//     telephone: '',
//     lieu_naissance: '',
//     cnie: '',
//     situation_socioprofessionnelle: '',

//     // Informations sur le Baccalauréat
//     annee_bac: '',
//     type_bac: '',
//     mention: '',
//     cne_massar: '',
//     serie_bac: '',
//     academie: '',
//     province: '',

//     // Informations Universitaires
//     diplome: '',
//     etablissement: '',
//     universite: '',

//     // Informations sur le Cycle Doctoral
//     formation_doctorale: '',
//     annee_soutenance_prevue: '',
//     specialite: '',
//     directeur_these: '',
//     structure_recherche_directeur: '',
//     co_directeur_these: '',
//     structure_recherche_co_directeur: '',
//     universite_cotutelle: '',
//     sujet_recherche: ''
//   });

//   useEffect(() => {
//     const fetchDoctorantInfo = async () => {
//       try {
//         const response = await axios.get('/doctorant/doctorant-info');
//         const { personalInfo, baccalaureatInfo, universitairesInfo, cycleDoctoralInfo } = response.data;

//         setFormData({
//           // Informations Personnelles
//           civilite: personalInfo.civilite,
//           sexe: personalInfo.sexe,
//           nom: personalInfo.nom,
//           prenom: personalInfo.prenom,
//           date_naissance: personalInfo.date_naissance,
//           email: personalInfo.email,
//           telephone: personalInfo.telephone,
//           lieu_naissance: personalInfo.lieu_naissance,
//           cnie: personalInfo.cnie,
//           situation_socioprofessionnelle: personalInfo.situation_socioprofessionnelle,

//           // Informations sur le Baccalauréat
//           annee_bac: baccalaureatInfo.annee_bac,
//           type_bac: baccalaureatInfo.type_bac,
//           mention: baccalaureatInfo.mention,
//           cne_massar: baccalaureatInfo.cne_massar,
//           serie_bac: baccalaureatInfo.serie_bac,
//           academie: baccalaureatInfo.academie,
//           province: baccalaureatInfo.province,

//           // Informations Universitaires
//           diplome: universitairesInfo.diplome,
//           etablissement: universitairesInfo.etablissement,
//           universite: universitairesInfo.universite,

//           // Informations sur le Cycle Doctoral
//           formation_doctorale: cycleDoctoralInfo.formation_doctorale,
//           annee_soutenance_prevue: cycleDoctoralInfo.annee_soutenance_prevue,
//           specialite: cycleDoctoralInfo.specialite,
//           directeur_these: cycleDoctoralInfo.directeur_these,
//           structure_recherche_directeur: cycleDoctoralInfo.structure_recherche_directeur,
//           co_directeur_these: cycleDoctoralInfo.co_directeur_these,
//           structure_recherche_co_directeur: cycleDoctoralInfo.structure_recherche_co_directeur,
//           universite_cotutelle: cycleDoctoralInfo.universite_cotutelle,
//           sujet_recherche: cycleDoctoralInfo.sujet_recherche
//         });
//       } catch (error) {
//         console.error('Erreur lors de la récupération des informations:', error);
//         // Gérer l'erreur de récupération
//       }
//     };

//     fetchDoctorantInfo();
//   }, []); // Effectué uniquement une fois après le montage initial

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/doctorant/doctorant-info', formData);
//       console.log(response.data); // Afficher la réponse du backend
//       // Réinitialiser le formulaire ou afficher une confirmation

//       // Rediriger l'utilisateur après soumission réussie
//       window.location.replace('/DoctorDashboard');
//     } catch (error) {
//       console.error('Erreur lors de l\'enregistrement des informations:', error);
//       // Gérer l'erreur
//     }
//   };

//   return (
//     <div className="h-full flex flex-col justify-between w-9/12">
//       <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
//         <h2 className="text-2xl font-bold mb-4">Informations Personnelles</h2>
//         <div className="grid grid-cols-2 gap-4 mb-4">
//           <select name="civilite" value={formData.civilite} onChange={handleChange} required className="input-field">
//             <option value="">Civilité</option>
//             <option value="Monsieur">Monsieur</option>
//             <option value="Madame">Madame</option>
//           </select>
//           <select name="sexe" value={formData.sexe} onChange={handleChange} required className="input-field">
//             <option value="">Sexe</option>
//             <option value="Homme">Homme</option>
//             <option value="Femme">Femme</option>
//           </select>
//           <input type="text" name="nom" value={formData.nom} onChange={handleChange} placeholder="Nom" required className="input-field" />
//           <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} placeholder="Prénom" required className="input-field" />
//           <input type="text" name="date_naissance" value={formData.date_naissance} onChange={handleChange} placeholder="Date de Naissance" required className="input-field" />
//           <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="input-field" />
//           <input type="text" name="telephone" value={formData.telephone} onChange={handleChange} placeholder="Téléphone" required className="input-field" />
//           <input type="text" name="lieu_naissance" value={formData.lieu_naissance} onChange={handleChange} placeholder="Lieu de Naissance" required className="input-field" />
//           <input type="text" name="cnie" value={formData.cnie} onChange={handleChange} placeholder="Numéro CNI" required className="input-field" />
//           <select name="situation_socioprofessionnelle" value={formData.situation_socioprofessionnelle} onChange={handleChange} required className="input-field">
//             <option value="">Situation Socioprofessionnelle</option>
//             <option value="Étudiant">Étudiant</option>
//             <option value="En activité">En activité</option>
//             <option value="Sans emploi">Sans emploi</option>
//           </select>
//         </div>

//         <h2 className="text-2xl font-bold mb-4">Informations sur le Baccalauréat</h2>
//         <div className="grid grid-cols-2 gap-4 mb-4">
//           <input type="text" name="annee_bac" value={formData.annee_bac} onChange={handleChange} placeholder="Année d'obtention" required className="input-field" />
//           <input type="text" name="type_bac" value={formData.type_bac} onChange={handleChange} placeholder="Type de baccalauréat" required className="input-field" />
//           <input type="text" name="mention" value={formData.mention} onChange={handleChange} placeholder="Mention obtenue" required className="input-field" />
//           <input type="text" name="cne_massar" value={formData.cne_massar} onChange={handleChange} placeholder="Numéro CNE ou Massar" required className="input-field" />
//           <input type="text" name="serie_bac" value={formData.serie_bac} onChange={handleChange} placeholder="Série du baccalauréat" required className="input-field" />
//           <input type="text" name="academie" value={formData.academie} onChange={handleChange} placeholder="Académie d'obtention" required className="input-field" />
//           <input type="text" name="province" value={formData.province} onChange={handleChange} placeholder="Province d'obtention" required className="input-field" />
//         </div>

//         <h2 className="text-2xl font-bold mb-4">Informations Universitaires</h2>
//         <div className="grid grid-cols-2 gap-4 mb-4">
//           <input type="text" name="diplome" value={formData.diplome} onChange={handleChange} placeholder="Diplôme obtenu" required className="input-field" />
//           <input type="text" name="etablissement" value={formData.etablissement} onChange={handleChange} placeholder="Établissement" required className="input-field" />
//           <input type="text" name="universite" value={formData.universite} onChange={handleChange} placeholder="Université" required className="input-field" />
//         </div>

//         <h2 className="text-2xl font-bold mb-4">Informations sur le Cycle Doctoral</h2>
//         <div className="grid grid-cols-2 gap-4 mb-4">
//           <input type="text" name="formation_doctorale" value={formData.formation_doctorale} onChange={handleChange} placeholder="Formation Doctorale" required className="input-field" />
//           <input type="text" name="annee_soutenance_prevue" value={formData.annee_soutenance_prevue} onChange={handleChange} placeholder="Année de Soutenance Prévue" required className="input-field" />
//           <input type="text" name="specialite" value={formData.specialite} onChange={handleChange} placeholder="Spécialité de Recherche" required className="input-field" />
//           <input type="text" name="directeur_these" value={formData.directeur_these} onChange={handleChange} placeholder="Directeur de Thèse" required className="input-field" />
//           <input type="text" name="structure_recherche_directeur" value={formData.structure_recherche_directeur} onChange={handleChange} placeholder="Structure de Recherche du Directeur" required className="input-field" />
//           <input type="text" name="co_directeur_these" value={formData.co_directeur_these} onChange={handleChange} placeholder="Co-directeur de Thèse (optionnel)" className="input-field" />
//           <input type="text" name="structure_recherche_co_directeur" value={formData.structure_recherche_co_directeur} onChange={handleChange} placeholder="Structure de Recherche du Co-directeur" required className="input-field" />
//           <input type="text" name="universite_cotutelle" value={formData.universite_cotutelle} onChange={handleChange} placeholder="Université de Cotutelle (optionnel)" className="input-field" />
//           <input type="text" name="sujet_recherche" value={formData.sujet_recherche} onChange={handleChange} placeholder="Sujet de Recherche de Thèse" required className="input-field" />
//         </div>

//         <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Enregistrer</button>
//       </form>
//     </div>
//   );
// };

// export default DoctorantInfoForm;



import React, { useState, useEffect } from 'react';
import axios from '../api/axios'; // Utiliser l'instance Axios configurée

const DoctorantInfoForm = () => {
  const [formData, setFormData] = useState({
    // Informations Personnelles
    civilite: '',
    sexe: '',
    nom: '',
    prenom: '',
    date_naissance: '',
    email: '',
    telephone: '',
    lieu_naissance: '',
    cnie: '',
    situation_socioprofessionnelle: '',

    // Informations sur le Baccalauréat
    annee_bac: '',
    type_bac: '',
    mention: '',
    cne_massar: '',
    serie_bac: '',
    academie: '',
    province: '',

    // Informations Universitaires
    diplome: '',
    etablissement: '',
    universite: '',

    // Informations sur le Cycle Doctoral
    formation_doctorale: '',
    annee_soutenance_prevue: '',
    specialite: '',
    directeur_these: '',
    structure_recherche_directeur: '',
    co_directeur_these: '',
    structure_recherche_co_directeur: '',
    universite_cotutelle: '',
    sujet_recherche: ''
  });

  useEffect(() => {
    const fetchDoctorantInfo = async () => {
      try {
        const response = await axios.get('/doctorant/doctorant-info');
        const { personalInfo, baccalaureatInfo, universitairesInfo, cycleDoctoralInfo } = response.data;

        setFormData({
          // Informations Personnelles
          civilite: personalInfo.civilite,
          sexe: personalInfo.sexe,
          nom: personalInfo.nom,
          prenom: personalInfo.prenom,
          date_naissance: personalInfo.date_naissance,
          email: personalInfo.email,
          telephone: personalInfo.telephone,
          lieu_naissance: personalInfo.lieu_naissance,
          cnie: personalInfo.cnie,
          situation_socioprofessionnelle: personalInfo.situation_socioprofessionnelle,

          // Informations sur le Baccalauréat
          annee_bac: baccalaureatInfo.annee_bac,
          type_bac: baccalaureatInfo.type_bac,
          mention: baccalaureatInfo.mention,
          cne_massar: baccalaureatInfo.cne_massar,
          serie_bac: baccalaureatInfo.serie_bac,
          academie: baccalaureatInfo.academie,
          province: baccalaureatInfo.province,

          // Informations Universitaires
          diplome: universitairesInfo.diplome,
          etablissement: universitairesInfo.etablissement,
          universite: universitairesInfo.universite,

          // Informations sur le Cycle Doctoral
          formation_doctorale: cycleDoctoralInfo.formation_doctorale,
          annee_soutenance_prevue: cycleDoctoralInfo.annee_soutenance_prevue,
          specialite: cycleDoctoralInfo.specialite,
          directeur_these: cycleDoctoralInfo.directeur_these,
          structure_recherche_directeur: cycleDoctoralInfo.structure_recherche_directeur,
          co_directeur_these: cycleDoctoralInfo.co_directeur_these,
          structure_recherche_co_directeur: cycleDoctoralInfo.structure_recherche_co_directeur,
          universite_cotutelle: cycleDoctoralInfo.universite_cotutelle,
          sujet_recherche: cycleDoctoralInfo.sujet_recherche
        });
      } catch (error) {
        console.error('Erreur lors de la récupération des informations:', error);
        // Gérer l'erreur de récupération
      }
    };

    fetchDoctorantInfo();
  }, []); // Effectué uniquement une fois après le montage initial

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/doctorant/doctorant-info', formData);
      console.log(response.data); // Afficher la réponse du backend
      // Réinitialiser le formulaire ou afficher une confirmation

      // Rediriger l'utilisateur après soumission réussie
      window.location.replace('DoctorantInfo');
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement des informations:', error);
      // Gérer l'erreur
    }
  };

  return (
    <div className="flex flex-col h-full w-full bg-gray-100">
      <div className="flex-grow bg-white shadow-md rounded-lg p-6 overflow-y-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-2xl font-bold mb-4">Informations Personnelles</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <select name="civilite" value={formData.civilite} onChange={handleChange} required className="input-field">
              <option value="">Civilité</option>
              <option value="Monsieur">Monsieur</option>
              <option value="Madame">Madame</option>
            </select>
            <select name="sexe" value={formData.sexe} onChange={handleChange} required className="input-field">
              <option value="">Sexe</option>
              <option value="Homme">Homme</option>
              <option value="Femme">Femme</option>
            </select>
            <input type="text" name="nom" value={formData.nom} onChange={handleChange} placeholder="Nom" required className="input-field" />
            <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} placeholder="Prénom" required className="input-field" />
            <input type="text" name="date_naissance" value={formData.date_naissance} onChange={handleChange} placeholder="Date de Naissance" required className="input-field" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="input-field" />
            <input type="text" name="telephone" value={formData.telephone} onChange={handleChange} placeholder="Téléphone" required className="input-field" />
            <input type="text" name="lieu_naissance" value={formData.lieu_naissance} onChange={handleChange} placeholder="Lieu de Naissance" required className="input-field" />
            <input type="text" name="cnie" value={formData.cnie} onChange={handleChange} placeholder="Numéro CNI" required className="input-field" />
            <select name="situation_socioprofessionnelle" value={formData.situation_socioprofessionnelle} onChange={handleChange} required className="input-field">
              <option value="">Situation Socioprofessionnelle</option>
              <option value="Étudiant">Étudiant</option>
              <option value="En activité">En activité</option>
              <option value="Sans emploi">Sans emploi</option>
            </select>
          </div>

          <h2 className="text-2xl font-bold mb-4">Informations sur le Baccalauréat</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input type="text" name="annee_bac" value={formData.annee_bac} onChange={handleChange} placeholder="Année d'obtention" required className="input-field" />
            <input type="text" name="type_bac" value={formData.type_bac} onChange={handleChange} placeholder="Type de baccalauréat" required className="input-field" />
            <input type="text" name="mention" value={formData.mention} onChange={handleChange} placeholder="Mention obtenue" required className="input-field" />
            <input type="text" name="cne_massar" value={formData.cne_massar} onChange={handleChange} placeholder="Numéro CNE ou Massar" required className="input-field" />
            <input type="text" name="serie_bac" value={formData.serie_bac} onChange={handleChange} placeholder="Série du baccalauréat" required className="input-field" />
            <input type="text" name="academie" value={formData.academie} onChange={handleChange} placeholder="Académie d'obtention" required className="input-field" />
            <input type="text" name="province" value={formData.province} onChange={handleChange} placeholder="Province" required className="input-field" />
          </div>

          <h2 className="text-2xl font-bold mb-4">Informations Universitaires</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input type="text" name="diplome" value={formData.diplome} onChange={handleChange} placeholder="Diplôme obtenu" required className="input-field" />
            <input type="text" name="etablissement" value={formData.etablissement} onChange={handleChange} placeholder="Établissement" required className="input-field" />
            <input type="text" name="universite" value={formData.universite} onChange={handleChange} placeholder="Université" required className="input-field" />
          </div>

          <h2 className="text-2xl font-bold mb-4">Informations sur le Cycle Doctoral</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input type="text" name="formation_doctorale" value={formData.formation_doctorale} onChange={handleChange} placeholder="Formation doctorale" required className="input-field" />
            <input type="text" name="annee_soutenance_prevue" value={formData.annee_soutenance_prevue} onChange={handleChange} placeholder="Année de soutenance prévue" required className="input-field" />
            <input type="text" name="specialite" value={formData.specialite} onChange={handleChange} placeholder="Spécialité" required className="input-field" />
            <input type="text" name="directeur_these" value={formData.directeur_these} onChange={handleChange} placeholder="Directeur de thèse" required className="input-field" />
            <input type="text" name="structure_recherche_directeur" value={formData.structure_recherche_directeur} onChange={handleChange} placeholder="Structure de recherche du directeur" required className="input-field" />
            <input type="text" name="co_directeur_these" value={formData.co_directeur_these} onChange={handleChange} placeholder="Co-directeur de thèse" required className="input-field" />
            <input type="text" name="structure_recherche_co_directeur" value={formData.structure_recherche_co_directeur} onChange={handleChange} placeholder="Structure de recherche du co-directeur" required className="input-field" />
            <input type="text" name="universite_cotutelle" value={formData.universite_cotutelle} onChange={handleChange} placeholder="Université de cotutelle" required className="input-field" />
            <input type="text" name="sujet_recherche" value={formData.sujet_recherche} onChange={handleChange} placeholder="Sujet de recherche" required className="input-field" />
          </div>

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4">Enregistrer</button>
        </form>
      </div>
    </div>
  );
};

export default DoctorantInfoForm;




