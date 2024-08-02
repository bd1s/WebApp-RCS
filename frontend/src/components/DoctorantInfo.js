// // src/components/DoctorantInfo.js
// import React, { useState, useEffect } from 'react';
// import axios from '../api/axios'; // Instance Axios configurée

// const DoctorantInfo = () => {
//   const [doctorantInfo, setDoctorantInfo] = useState(null);

//   useEffect(() => {
//     fetchPersonalInfo(); // Charger les informations personnelles lors du montage du composant
//   }, []);

//   const fetchPersonalInfo = async () => {
//     try {
//       const response = await axios.get('/doctorant/doctorant-info');
//       setDoctorantInfo(response.data);
//     } catch (error) {
//       console.error('Erreur lors de la récupération des informations personnelles :', error);
//     }
//   };

//   const handleEditClick = () => {
//     // Rediriger vers la page d'édition
//     window.location.href = '/DoctorantInfoForm';
//   };

//   if (!doctorantInfo) {
//     return <p>Chargement des informations...</p>;
//   }

//   return (
//     <div>
//       <h2>Informations Personnelles</h2>
//       <p>Civilité: {doctorantInfo.personalInfo.civilite}</p>
//       <p>Sexe: {doctorantInfo.personalInfo.sexe}</p>
//       <p>Nom: {doctorantInfo.personalInfo.nom}</p>
//       <p>Prénom: {doctorantInfo.personalInfo.prenom}</p>
//       <p>Date de Naissance: {doctorantInfo.personalInfo.date_naissance}</p>
//       <p>Email: {doctorantInfo.personalInfo.email}</p>
//       <p>Téléphone: {doctorantInfo.personalInfo.telephone}</p>
//       <p>Lieu de Naissance: {doctorantInfo.personalInfo.lieu_naissance}</p>
//       <p>Numéro CNI: {doctorantInfo.personalInfo.cnie}</p>
//       <p>Situation Socioprofessionnelle: {doctorantInfo.personalInfo.situation_socioprofessionnelle}</p>

//       <button onClick={handleEditClick}>Éditer</button>
//     </div>
//   );
// };

// export default DoctorantInfo;









// import React, { useState, useEffect } from 'react';
// import axios from '../api/axios'; // Instance Axios configurée

// const DoctorantInfo = () => {
//   const [doctorantInfo, setDoctorantInfo] = useState(null);

//   useEffect(() => {
//     fetchDoctorantInfo(); // Charger les informations du doctorant lors du montage du composant
//   }, []);

//   const fetchDoctorantInfo = async () => {
//     try {
//       const response = await axios.get('/doctorant/doctorant-info');
//       setDoctorantInfo(response.data);
//     } catch (error) {
//       console.error('Erreur lors de la récupération des informations du doctorant :', error);
//     }
//   };

//   const handleEditClick = () => {
//     // Rediriger vers la page d'édition
//     window.location.href = '/DoctorantInfoForm';
//   };

//   if (!doctorantInfo) {
//     return <p>Chargement des informations...</p>;
//   }

//   return (
//     <div>
//       <h2>Informations Personnelles</h2>
//       <p>Civilité: {doctorantInfo.personalInfo.civilite}</p>
//       <p>Sexe: {doctorantInfo.personalInfo.sexe}</p>
//       <p>Nom: {doctorantInfo.personalInfo.nom}</p>
//       <p>Prénom: {doctorantInfo.personalInfo.prenom}</p>
//       <p>Date de Naissance: {doctorantInfo.personalInfo.date_naissance}</p>
//       <p>Email: {doctorantInfo.personalInfo.email}</p>
//       <p>Téléphone: {doctorantInfo.personalInfo.telephone}</p>
//       <p>Lieu de Naissance: {doctorantInfo.personalInfo.lieu_naissance}</p>
//       <p>Numéro CNI: {doctorantInfo.personalInfo.cnie}</p>
//       <p>Situation Socioprofessionnelle: {doctorantInfo.personalInfo.situation_socioprofessionnelle}</p>

//       <h2>Informations sur le Baccalauréat</h2>
//       <p>Année d'obtention: {doctorantInfo.baccalaureatInfo.annee_bac}</p>
//       <p>Type de baccalauréat: {doctorantInfo.baccalaureatInfo.type_bac}</p>
//       <p>Mention obtenue: {doctorantInfo.baccalaureatInfo.mention}</p>
//       <p>Numéro CNE ou Massar: {doctorantInfo.baccalaureatInfo.cne_massar}</p>
//       <p>Série du baccalauréat: {doctorantInfo.baccalaureatInfo.serie_bac}</p>
//       <p>Académie d'obtention: {doctorantInfo.baccalaureatInfo.academie}</p>
//       <p>Province d'obtention: {doctorantInfo.baccalaureatInfo.province}</p>

//       <h2>Informations Universitaires</h2>
//       <p>Diplôme obtenu: {doctorantInfo.universitairesInfo.diplome}</p>
//       <p>Établissement: {doctorantInfo.universitairesInfo.etablissement}</p>
//       <p>Université: {doctorantInfo.universitairesInfo.universite}</p>

//       <h2>Informations sur le Cycle Doctoral</h2>
//       <p>Formation Doctorale: {doctorantInfo.cycleDoctoralInfo.formation_doctorale}</p>
//       <p>Année de Soutenance Prévue: {doctorantInfo.cycleDoctoralInfo.annee_soutenance_prevue}</p>
//       <p>Spécialité de Recherche: {doctorantInfo.cycleDoctoralInfo.specialite}</p>
//       <p>Directeur de Thèse: {doctorantInfo.cycleDoctoralInfo.directeur_these}</p>
//       <p>Structure de Recherche du Directeur: {doctorantInfo.cycleDoctoralInfo.structure_recherche_directeur}</p>
//       <p>Co-directeur de Thèse: {doctorantInfo.cycleDoctoralInfo.co_directeur_these}</p>
//       <p>Structure de Recherche du Co-directeur: {doctorantInfo.cycleDoctoralInfo.structure_recherche_co_directeur}</p>
//       <p>Université de Cotutelle: {doctorantInfo.cycleDoctoralInfo.universite_cotutelle}</p>
//       <p>Sujet de Recherche de Thèse: {doctorantInfo.cycleDoctoralInfo.sujet_recherche}</p>

//       <button onClick={handleEditClick}>Éditer</button>
//     </div>
//   );
// };

// export default DoctorantInfo;

















// import React, { useState, useEffect } from 'react';
// import axios from '../api/axios'; // Instance Axios configurée

// const DoctorantInfo = () => {
//   const [doctorantInfo, setDoctorantInfo] = useState(null);

//   useEffect(() => {
//     fetchDoctorantInfo(); // Charger les informations du doctorant lors du montage du composant
//   }, []);

//   const fetchDoctorantInfo = async () => {
//     try {
//       const response = await axios.get('/doctorant/doctorant-info');
//       setDoctorantInfo(response.data);
//     } catch (error) {
//       console.error('Erreur lors de la récupération des informations du doctorant :', error);
//     }
//   };

//   const handleEditClick = () => {
//     // Rediriger vers la page d'édition
//     window.location.href = '/DoctorantInfoForm';
//   };

//   if (!doctorantInfo) {
//     return <p>Chargement des informations...</p>;
//   }

//   return (
//     <div className="bg-white shadow-md rounded-lg p-6">
//       <h2 className="text-2xl font-bold mb-4">Informations Personnelles</h2>
//       <div className="grid grid-cols-2 gap-4 mb-4">
//         <div>
//           <p className="text-gray-700"><span className="font-semibold">Civilité:</span> {doctorantInfo.personalInfo.civilite}</p>
//           <p className="text-gray-700"><span className="font-semibold">Sexe:</span> {doctorantInfo.personalInfo.sexe}</p>
//           <p className="text-gray-700"><span className="font-semibold">Nom:</span> {doctorantInfo.personalInfo.nom}</p>
//           <p className="text-gray-700"><span className="font-semibold">Prénom:</span> {doctorantInfo.personalInfo.prenom}</p>
//           <p className="text-gray-700"><span className="font-semibold">Date de Naissance:</span> {doctorantInfo.personalInfo.date_naissance}</p>
//         </div>
//         <div>
//           <p className="text-gray-700"><span className="font-semibold">Email:</span> {doctorantInfo.personalInfo.email}</p>
//           <p className="text-gray-700"><span className="font-semibold">Téléphone:</span> {doctorantInfo.personalInfo.telephone}</p>
//           <p className="text-gray-700"><span className="font-semibold">Lieu de Naissance:</span> {doctorantInfo.personalInfo.lieu_naissance}</p>
//           <p className="text-gray-700"><span className="font-semibold">Numéro CNI:</span> {doctorantInfo.personalInfo.cnie}</p>
//           <p className="text-gray-700"><span className="font-semibold">Situation Socioprofessionnelle:</span> {doctorantInfo.personalInfo.situation_socioprofessionnelle}</p>
//         </div>
//       </div>

//       <h2 className="text-2xl font-bold mb-4">Informations sur le Baccalauréat</h2>
//       <div className="grid grid-cols-2 gap-4 mb-4">
//         <div>
//           <p className="text-gray-700"><span className="font-semibold">Année d'obtention:</span> {doctorantInfo.baccalaureatInfo.annee_bac}</p>
//           <p className="text-gray-700"><span className="font-semibold">Type de baccalauréat:</span> {doctorantInfo.baccalaureatInfo.type_bac}</p>
//           <p className="text-gray-700"><span className="font-semibold">Mention obtenue:</span> {doctorantInfo.baccalaureatInfo.mention}</p>
//         </div>
//         <div>
//           <p className="text-gray-700"><span className="font-semibold">Numéro CNE ou Massar:</span> {doctorantInfo.baccalaureatInfo.cne_massar}</p>
//           <p className="text-gray-700"><span className="font-semibold">Série du baccalauréat:</span> {doctorantInfo.baccalaureatInfo.serie_bac}</p>
//           <p className="text-gray-700"><span className="font-semibold">Académie d'obtention:</span> {doctorantInfo.baccalaureatInfo.academie}</p>
//           <p className="text-gray-700"><span className="font-semibold">Province d'obtention:</span> {doctorantInfo.baccalaureatInfo.province}</p>
//         </div>
//       </div>

//       <h2 className="text-2xl font-bold mb-4">Informations Universitaires</h2>
//       <div className="grid grid-cols-2 gap-4 mb-4">
//         <div>
//           <p className="text-gray-700"><span className="font-semibold">Diplôme obtenu:</span> {doctorantInfo.universitairesInfo.diplome}</p>
//           <p className="text-gray-700"><span className="font-semibold">Établissement:</span> {doctorantInfo.universitairesInfo.etablissement}</p>
//         </div>
//         <div>
//           <p className="text-gray-700"><span className="font-semibold">Université:</span> {doctorantInfo.universitairesInfo.universite}</p>
//         </div>
//       </div>

//       <h2 className="text-2xl font-bold mb-4">Informations sur le Cycle Doctoral</h2>
//       <div className="grid grid-cols-2 gap-4 mb-4">
//         <div>
//           <p className="text-gray-700"><span className="font-semibold">Formation Doctorale:</span> {doctorantInfo.cycleDoctoralInfo.formation_doctorale}</p>
//           <p className="text-gray-700"><span className="font-semibold">Année de Soutenance Prévue:</span> {doctorantInfo.cycleDoctoralInfo.annee_soutenance_prevue}</p>
//           <p className="text-gray-700"><span className="font-semibold">Spécialité de Recherche:</span> {doctorantInfo.cycleDoctoralInfo.specialite}</p>
//           <p className="text-gray-700"><span className="font-semibold">Directeur de Thèse:</span> {doctorantInfo.cycleDoctoralInfo.directeur_these}</p>
//         </div>
//         <div>
//           <p className="text-gray-700"><span className="font-semibold">Structure de Recherche du Directeur:</span> {doctorantInfo.cycleDoctoralInfo.structure_recherche_directeur}</p>
//           <p className="text-gray-700"><span className="font-semibold">Co-directeur de Thèse:</span> {doctorantInfo.cycleDoctoralInfo.co_directeur_these}</p>
//           <p className="text-gray-700"><span className="font-semibold">Structure de Recherche du Co-directeur:</span> {doctorantInfo.cycleDoctoralInfo.structure_recherche_co_directeur}</p>
//           <p className="text-gray-700"><span className="font-semibold">Université de Cotutelle:</span> {doctorantInfo.cycleDoctoralInfo.universite_cotutelle}</p>
//           <p className="text-gray-700"><span className="font-semibold">Sujet de Recherche de Thèse:</span> {doctorantInfo.cycleDoctoralInfo.sujet_recherche}</p>
//         </div>
//       </div>

//       <button
//         className="bg-[#9CD8ED] text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600 transition-colors duration-300"
//         onClick={handleEditClick}
//       >
//         Éditer
//       </button>
//     </div>
//   );
// };

// export default DoctorantInfo;













// import React, { useState, useEffect } from 'react';
// import axios from '../api/axios'; // Instance Axios configurée

// const DoctorantInfo = () => {
//   const [doctorantInfo, setDoctorantInfo] = useState(null);

//   useEffect(() => {
//     fetchDoctorantInfo(); // Charger les informations du doctorant lors du montage du composant
//   }, []);

//   const fetchDoctorantInfo = async () => {
//     try {
//       const response = await axios.get('/doctorant/doctorant-info');
//       setDoctorantInfo(response.data);
//     } catch (error) {
//       console.error('Erreur lors de la récupération des informations du doctorant :', error);
//     }
//   };

//   const handleEditClick = () => {
//     // Rediriger vers la page d'édition
//     window.location.href = 'DoctorantInfoForm';
//   };

//   if (!doctorantInfo) {
//     return <p>Chargement des informations...</p>;
//   }
//   return (
//     <div className="bg-white shadow-md rounded-lg p-6">
//       <h2 className="text-2xl font-bold mb-4">Informations Personnelles</h2>
//       <div className="grid grid-cols-2 gap-4 mb-4">
//         <div>
//           <p className="text-gray-700"><span className="font-semibold">Civilité:</span> {doctorantInfo.personalInfo?.civilite || "Non renseigné"}</p>
//           <p className="text-gray-700"><span className="font-semibold">Sexe:</span> {doctorantInfo.personalInfo?.sexe || "Non renseigné"}</p>
//           <p className="text-gray-700"><span className="font-semibold">Nom:</span> {doctorantInfo.personalInfo?.nom || "Non renseigné"}</p>
//           <p className="text-gray-700"><span className="font-semibold">Prénom:</span> {doctorantInfo.personalInfo?.prenom || "Non renseigné"}</p>
//           <p className="text-gray-700"><span className="font-semibold">Date de Naissance:</span> {doctorantInfo.personalInfo?.date_naissance || "Non renseigné"}</p>
//         </div>
//         <div>
//           <p className="text-gray-700"><span className="font-semibold">Email:</span> {doctorantInfo.personalInfo?.email || "Non renseigné"}</p>
//           <p className="text-gray-700"><span className="font-semibold">Téléphone:</span> {doctorantInfo.personalInfo?.telephone || "Non renseigné"}</p>
//           <p className="text-gray-700"><span className="font-semibold">Lieu de Naissance:</span> {doctorantInfo.personalInfo?.lieu_naissance || "Non renseigné"}</p>
//           <p className="text-gray-700"><span className="font-semibold">Numéro CNI:</span> {doctorantInfo.personalInfo?.cnie || "Non renseigné"}</p>
//           <p className="text-gray-700"><span className="font-semibold">Situation Socioprofessionnelle:</span> {doctorantInfo.personalInfo?.situation_socioprofessionnelle || "Non renseigné"}</p>
//         </div>
//       </div>

//       <h2 className="text-2xl font-bold mb-4">Informations sur le Baccalauréat</h2>
//       <div className="grid grid-cols-2 gap-4 mb-4">
//         <div>
//           <p className="text-gray-700"><span className="font-semibold">Année d'obtention:</span> {doctorantInfo.baccalaureatInfo?.annee_bac || "Non renseigné"}</p>
//           <p className="text-gray-700"><span className="font-semibold">Type de baccalauréat:</span> {doctorantInfo.baccalaureatInfo?.type_bac || "Non renseigné"}</p>
//           <p className="text-gray-700"><span className="font-semibold">Mention obtenue:</span> {doctorantInfo.baccalaureatInfo?.mention || "Non renseigné"}</p>
//         </div>
//         <div>
//           <p className="text-gray-700"><span className="font-semibold">Numéro CNE ou Massar:</span> {doctorantInfo.baccalaureatInfo?.cne_massar || "Non renseigné"}</p>
//           <p className="text-gray-700"><span className="font-semibold">Série du baccalauréat:</span> {doctorantInfo.baccalaureatInfo?.serie_bac || "Non renseigné"}</p>
//           <p className="text-gray-700"><span className="font-semibold">Académie d'obtention:</span> {doctorantInfo.baccalaureatInfo?.academie || "Non renseigné"}</p>
//           <p className="text-gray-700"><span className="font-semibold">Province d'obtention:</span> {doctorantInfo.baccalaureatInfo?.province || "Non renseigné"}</p>
//         </div>
//       </div>

//       <h2 className="text-2xl font-bold mb-4">Informations Universitaires</h2>
//       <div className="grid grid-cols-2 gap-4 mb-4">
//         <div>
//           <p className="text-gray-700"><span className="font-semibold">Diplôme obtenu:</span> {doctorantInfo.universitairesInfo?.diplome || "Non renseigné"}</p>
//           <p className="text-gray-700"><span className="font-semibold">Établissement:</span> {doctorantInfo.universitairesInfo?.etablissement || "Non renseigné"}</p>
//         </div>
//         <div>
//           <p className="text-gray-700"><span className="font-semibold">Université:</span> {doctorantInfo.universitairesInfo?.universite || "Non renseigné"}</p>
//         </div>
//       </div>

//       <h2 className="text-2xl font-bold mb-4">Informations sur le Cycle Doctoral</h2>
//       <div className="grid grid-cols-2 gap-4 mb-4">
//         <div>
//           <p className="text-gray-700"><span className="font-semibold">Formation Doctorale:</span> {doctorantInfo.cycleDoctoralInfo?.formation_doctorale || "Non renseigné"}</p>
//           <p className="text-gray-700"><span className="font-semibold">Année de Soutenance Prévue:</span> {doctorantInfo.cycleDoctoralInfo?.annee_soutenance_prevue || "Non renseigné"}</p>
//           <p className="text-gray-700"><span className="font-semibold">Spécialité:</span> {doctorantInfo.cycleDoctoralInfo?.specialite || "Non renseigné"}</p>
//         </div>
//         <div>
//           <p className="text-gray-700"><span className="font-semibold">Directeur de Thèse:</span> {doctorantInfo.cycleDoctoralInfo?.directeur_these || "Non renseigné"}</p>
//           <p className="text-gray-700"><span className="font-semibold">Structure de Recherche Directeur:</span> {doctorantInfo.cycleDoctoralInfo?.structure_recherche_directeur || "Non renseigné"}</p>
//           <p className="text-gray-700"><span className="font-semibold">Co-directeur de Thèse:</span> {doctorantInfo.cycleDoctoralInfo?.co_directeur_these || "Non renseigné"}</p>
//           <p className="text-gray-700"><span className="font-semibold">Structure de Recherche Co-directeur:</span> {doctorantInfo.cycleDoctoralInfo?.structure_recherche_co_directeur || "Non renseigné"}</p>
//           <p className="text-gray-700"><span className="font-semibold">Université en Cotutelle:</span> {doctorantInfo.cycleDoctoralInfo?.universite_cotutelle || "Non renseigné"}</p>
//           <p className="text-gray-700"><span className="font-semibold">Sujet de Recherche:</span> {doctorantInfo.cycleDoctoralInfo?.sujet_recherche || "Non renseigné"}</p>
//         </div>
//       </div>

//       <button onClick={handleEditClick} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Modifier les informations</button>
//     </div>
//   );
// };

// export default DoctorantInfo;





import React, { useState, useEffect } from 'react';
import axios from '../api/axios'; // Instance Axios configurée

const DoctorantInfo = () => {
  const [doctorantInfo, setDoctorantInfo] = useState(null);

  useEffect(() => {
    fetchDoctorantInfo(); // Charger les informations du doctorant lors du montage du composant
  }, []);

  const fetchDoctorantInfo = async () => {
    try {
      const response = await axios.get('/doctorant/doctorant-info');
      setDoctorantInfo(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des informations du doctorant :', error);
    }
  };

  const handleEditClick = () => {
    // Rediriger vers la page d'édition
    window.location.href = 'DoctorantInfoForm';
  };

  if (!doctorantInfo) {
    return <p>Chargement des informations...</p>;
  }

  return (
    <div className="flex flex-col h-full w-full bg-gray-100">
      <div className="flex-grow bg-white shadow-md rounded-lg p-6 overflow-y-auto">
        <h2 className="text-xl font-bold mb-3">Informations Personnelles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
          <div>
            <p className="text-gray-700 text-sm"><span className="font-semibold">Civilité:</span> {doctorantInfo.personalInfo?.civilite || "Non renseigné"}</p>
            <p className="text-gray-700 text-sm"><span className="font-semibold">Sexe:</span> {doctorantInfo.personalInfo?.sexe || "Non renseigné"}</p>
            <p className="text-gray-700 text-sm"><span className="font-semibold">Nom:</span> {doctorantInfo.personalInfo?.nom || "Non renseigné"}</p>
            <p className="text-gray-700 text-sm"><span className="font-semibold">Prénom:</span> {doctorantInfo.personalInfo?.prenom || "Non renseigné"}</p>
            <p className="text-gray-700 text-sm"><span className="font-semibold">Date de Naissance:</span> {doctorantInfo.personalInfo?.date_naissance || "Non renseigné"}</p>
          </div>
          <div>
            <p className="text-gray-700 text-sm"><span className="font-semibold">Email:</span> {doctorantInfo.personalInfo?.email || "Non renseigné"}</p>
            <p className="text-gray-700 text-sm"><span className="font-semibold">Téléphone:</span> {doctorantInfo.personalInfo?.telephone || "Non renseigné"}</p>
            <p className="text-gray-700 text-sm"><span className="font-semibold">Lieu de Naissance:</span> {doctorantInfo.personalInfo?.lieu_naissance || "Non renseigné"}</p>
            <p className="text-gray-700 text-sm"><span className="font-semibold">Numéro CNI:</span> {doctorantInfo.personalInfo?.cnie || "Non renseigné"}</p>
            <p className="text-gray-700 text-sm"><span className="font-semibold">Situation Socioprofessionnelle:</span> {doctorantInfo.personalInfo?.situation_socioprofessionnelle || "Non renseigné"}</p>
          </div>
        </div>

        <h2 className="text-xl font-bold mb-3">Informations sur le Baccalauréat</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
          <div>
            <p className="text-gray-700 text-sm"><span className="font-semibold">Année d'obtention:</span> {doctorantInfo.baccalaureatInfo?.annee_bac || "Non renseigné"}</p>
            <p className="text-gray-700 text-sm"><span className="font-semibold">Type de baccalauréat:</span> {doctorantInfo.baccalaureatInfo?.type_bac || "Non renseigné"}</p>
            <p className="text-gray-700 text-sm"><span className="font-semibold">Mention obtenue:</span> {doctorantInfo.baccalaureatInfo?.mention || "Non renseigné"}</p>
          </div>
          <div>
            <p className="text-gray-700 text-sm"><span className="font-semibold">Numéro CNE ou Massar:</span> {doctorantInfo.baccalaureatInfo?.cne_massar || "Non renseigné"}</p>
            <p className="text-gray-700 text-sm"><span className="font-semibold">Série du baccalauréat:</span> {doctorantInfo.baccalaureatInfo?.serie_bac || "Non renseigné"}</p>
            <p className="text-gray-700 text-sm"><span className="font-semibold">Académie d'obtention:</span> {doctorantInfo.baccalaureatInfo?.academie || "Non renseigné"}</p>
            <p className="text-gray-700 text-sm"><span className="font-semibold">Province d'obtention:</span> {doctorantInfo.baccalaureatInfo?.province || "Non renseigné"}</p>
          </div>
        </div>

        <h2 className="text-xl font-bold mb-3">Informations Universitaires</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
          <div>
            <p className="text-gray-700 text-sm"><span className="font-semibold">Diplôme obtenu:</span> {doctorantInfo.universitairesInfo?.diplome || "Non renseigné"}</p>
            <p className="text-gray-700 text-sm"><span className="font-semibold">Établissement:</span> {doctorantInfo.universitairesInfo?.etablissement || "Non renseigné"}</p>
          </div>
          <div>
            <p className="text-gray-700 text-sm"><span className="font-semibold">Université:</span> {doctorantInfo.universitairesInfo?.universite || "Non renseigné"}</p>
          </div>
        </div>

        <h2 className="text-xl font-bold mb-3">Informations sur le Cycle Doctoral</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
          <div>
            <p className="text-gray-700 text-sm"><span className="font-semibold">Formation Doctorale:</span> {doctorantInfo.cycleDoctoralInfo?.formation_doctorale || "Non renseigné"}</p>
            <p className="text-gray-700 text-sm"><span className="font-semibold">Année de Soutenance Prévue:</span> {doctorantInfo.cycleDoctoralInfo?.annee_soutenance_prevue || "Non renseigné"}</p>
            <p className="text-gray-700 text-sm"><span className="font-semibold">Spécialité:</span> {doctorantInfo.cycleDoctoralInfo?.specialite || "Non renseigné"}</p>
          </div>
          <div>
            <p className="text-gray-700 text-sm"><span className="font-semibold">Directeur de Thèse:</span> {doctorantInfo.cycleDoctoralInfo?.directeur_these || "Non renseigné"}</p>
            <p className="text-gray-700 text-sm"><span className="font-semibold">Structure de Recherche Directeur:</span> {doctorantInfo.cycleDoctoralInfo?.structure_recherche_directeur || "Non renseigné"}</p>
            <p className="text-gray-700 text-sm"><span className="font-semibold">Co-directeur de Thèse:</span> {doctorantInfo.cycleDoctoralInfo?.co_directeur_these || "Non renseigné"}</p>
            <p className="text-gray-700 text-sm"><span className="font-semibold">Structure de Recherche Co-directeur:</span> {doctorantInfo.cycleDoctoralInfo?.structure_recherche_co_directeur || "Non renseigné"}</p>
            <p className="text-gray-700 text-sm"><span className="font-semibold">Université en Cotutelle:</span> {doctorantInfo.cycleDoctoralInfo?.universite_cotutelle || "Non renseigné"}</p>
            <p className="text-gray-700 text-sm"><span className="font-semibold">Sujet de Recherche:</span> {doctorantInfo.cycleDoctoralInfo?.sujet_recherche || "Non renseigné"}</p>
          </div>
          </div>

      <button onClick={handleEditClick} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4">Modifier les informations</button>
    </div>
        </div>
      
  );
};

export default DoctorantInfo;
