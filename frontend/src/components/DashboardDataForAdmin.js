// import React, { useEffect, useState } from 'react';
// import axios from '../api/axios'; // Instance Axios configurée
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// function DashboardDataForAdmin() {
//   const [data, setData] = useState({ doctorants: [], repartitionSpecialisation: [] });
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       try {
//         // Récupération du token d'authentification depuis le localStorage ou une autre source
//         const token = localStorage.getItem('token');

//         // Envoi de la requête avec l'en-tête d'autorisation
//         const response = await axios.get('/dashboard/data', {
//           headers: {
//             'Authorization': `Bearer ${token}`,
//           },
//         });

//         // Mise à jour de l'état avec les données reçues
//         setData(response.data);
//       } catch (error) {
//         // Gestion des erreurs
//         setError(error.response ? error.response.data.error : 'Erreur de réseau');
//       }
//     };

//     fetchDashboardData();
//   }, []);

//   // Préparer les données pour le graphique
//   const specialisationLabels = data.repartitionSpecialisation.map(item => item.specialisation_doctorant);
//   const specialisationCounts = data.repartitionSpecialisation.map(item => item.count);

//   const chartData = {
//     labels: specialisationLabels,
//     datasets: [
//       {
//         label: 'Répartition des Doctorants par Spécialisation',
//         data: specialisationCounts,
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         borderColor: 'rgba(75, 192, 192, 1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   return (
//     <div className="p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-3xl font-semibold text-gray-800 mb-4">Tableau de Bord Administrateur</h2>
//       {error && <p className="text-red-600 mb-4">{error}</p>}

//       <h3 className="text-xl font-semibold text-gray-700 mb-4">Liste des Doctorants</h3>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
//           <thead className="bg-gray-100 border-b border-gray-200">
//             <tr>
//               <th className="py-3 px-6 text-left text-gray-600">Nom du Doctorant</th>
//               <th className="py-3 px-6 text-left text-gray-600">Encadrant</th>
//               <th className="py-3 px-6 text-left text-gray-600">Sujet de Recherche</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.doctorants.map((doctorant, index) => (
//               <tr key={index} className="border-b border-gray-200">
//                 <td className="py-3 px-6 text-gray-800">{doctorant.Utilisateur.nom} {doctorant.Utilisateur.prenom}</td>
//                 <td className="py-3 px-6 text-gray-600">{doctorant.Enseignant.Utilisateur.nom} {doctorant.Enseignant.Utilisateur.prenom}</td>
//                 <td className="py-3 px-6 text-gray-600">{doctorant.InfosCycleDoctoral.sujet_recherche}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-4">Répartition par Spécialisation</h3>
//       <div className="h-64">
//         <Bar data={chartData} />
//       </div>
//     </div>
//   );
// }

// export default DashboardDataForAdmin;




// import React, { useEffect, useState } from 'react';
// import axios from '../api/axios'; // Instance Axios configurée
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// function DashboardDataForAdmin() {
//   const [data, setData] = useState({ doctorants: [], repartitionSpecialisation: [] });
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       try {
//         // Récupération du token d'authentification depuis le localStorage ou une autre source
//         const token = localStorage.getItem('token');

//         // Envoi de la requête avec l'en-tête d'autorisation
//         const response = await axios.get('/dashboard/data', {
//           headers: {
//             'Authorization': `Bearer ${token}`,
//           },
//         });

//         // Mise à jour de l'état avec les données reçues
//         setData(response.data);
//       } catch (error) {
//         // Gestion des erreurs
//         setError(error.response ? error.response.data.error : 'Erreur de réseau');
//       }
//     };

//     fetchDashboardData();
//   }, []);

//   // Préparer les données pour le graphique
//   const specialisationLabels = data.repartitionSpecialisation.map(item => item.specialisation_doctorant);
//   const specialisationCounts = data.repartitionSpecialisation.map(item => item.count);

//   const chartData = {
//     labels: specialisationLabels,
//     datasets: [
//       {
//         label: 'Répartition des Doctorants par Spécialisation',
//         data: specialisationCounts,
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         borderColor: 'rgba(75, 192, 192, 1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   return (
//     <div className="p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-3xl font-semibold text-gray-800 mb-4">Tableau de Bord Administrateur</h2>
//       {error && <p className="text-red-600 mb-4">{error}</p>}

//       <h3 className="text-xl font-semibold text-gray-700 mb-4">Liste des Doctorants</h3>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
//           <thead className="bg-gray-100 border-b border-gray-200">
//             <tr>
//               <th className="py-3 px-6 text-left text-gray-600">Nom du Doctorant</th>
//               <th className="py-3 px-6 text-left text-gray-600">Encadrant</th>
//               <th className="py-3 px-6 text-left text-gray-600">Sujet de Recherche</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.doctorants.map((doctorant, index) => (
//               <tr key={index} className="border-b border-gray-200">
//                 <td className="py-3 px-6 text-gray-800">
//                   {doctorant.Utilisateur.nom} {doctorant.Utilisateur.prenom}
//                 </td>
//                 <td className="py-3 px-6 text-gray-600">
//                   {doctorant.InfosCycleDoctoral?.Enseignant?.Utilisateur?.nom} {doctorant.InfosCycleDoctoral?.Enseignant?.Utilisateur?.prenom}
//                 </td>
//                 <td className="py-3 px-6 text-gray-600">
//                   {doctorant.InfosCycleDoctoral.sujet_recherche}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-4">Répartition par Spécialisation</h3>
//       <div className="h-64">
//         <Bar data={chartData} />
//       </div>
//     </div>
//   );
// }

// export default DashboardDataForAdmin;




// import React, { useEffect, useState } from 'react';
// import axios from '../api/axios'; // Instance Axios configurée
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// function DashboardDataForAdmin() {
//   const [data, setData] = useState({ doctorants: [], repartitionSpecialisation: [] });
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       try {
//         // Récupération du token d'authentification depuis le localStorage ou une autre source
//         const token = localStorage.getItem('token');

//         // Envoi de la requête avec l'en-tête d'autorisation
//         const response = await axios.get('/dashboard/data', {
//           headers: {
//             'Authorization': `Bearer ${token}`,
//           },
//         });

//         console.log('Données reçues du backend:', response.data);

//         // Mise à jour de l'état avec les données reçues
//         setData(response.data);
//       } catch (error) {
//         // Gestion des erreurs
//         setError(error.response ? error.response.data.error : 'Erreur de réseau');
//       }
//     };

//     fetchDashboardData();
//   }, []);

//   // Préparer les données pour le graphique, avec vérification des données
//   const specialisationLabels = (data.repartitionSpecialisation || []).map(item => item.specialisation_doctorant);
//   const specialisationCounts = (data.repartitionSpecialisation || []).map(item => item.count);

//   const chartData = {
//     labels: specialisationLabels,
//     datasets: [
//       {
//         label: 'Répartition des Doctorants par Spécialisation',
//         data: specialisationCounts,
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         borderColor: 'rgba(75, 192, 192, 1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   return (
//     <div className="p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-3xl font-semibold text-gray-800 mb-4">Tableau de Bord Administrateur</h2>
//       {error && <p className="text-red-600 mb-4">{error}</p>}

//       <h3 className="text-xl font-semibold text-gray-700 mb-4">Liste des Doctorants</h3>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
//           <thead className="bg-gray-100 border-b border-gray-200">
//             <tr>
//               <th className="py-3 px-6 text-left text-gray-600">Nom du Doctorant</th>
//               <th className="py-3 px-6 text-left text-gray-600">Encadrant</th>
//               <th className="py-3 px-6 text-left text-gray-600">Sujet de Recherche</th>
//             </tr>
//           </thead>
//           <tbody>
//             {(data.doctorants || []).map((item, index) => (
//               <tr key={index} className="border-b border-gray-200">
//                 <td className="py-3 px-6 text-gray-800">
//                   {item.doctorant?.Utilisateur?.nom} {item.doctorant?.Utilisateur?.prenom}
//                 </td>
//                 <td className="py-3 px-6 text-gray-600">
//                   {item.enseignant ? `${item.enseignant.nom} ${item.enseignant.prenom}` : 'Non attribué'}
//                 </td>
//                 <td className="py-3 px-6 text-gray-600">
//                   {item.cycleInfo?.sujet_recherche}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-4">Répartition par Spécialisation</h3>
//       <div className="h-64">
//         <Bar data={chartData} />
//       </div>
//     </div>
//   );
// }

// export default DashboardDataForAdmin;






// ca marche tres bien la specialisation
// import React, { useEffect, useState } from 'react';
// import axios from '../api/axios'; // Instance Axios configurée
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// function DashboardDataForAdmin() {
//   const [data, setData] = useState({ doctorants: [], repartitionSpecialisation: [] });
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       try {
//         // Récupération du token d'authentification depuis le localStorage ou une autre source
//         const token = localStorage.getItem('token');

//         // Envoi de la requête avec l'en-tête d'autorisation
//         const response = await axios.get('/dashboard/data', {
//           headers: {
//             'Authorization': `Bearer ${token}`,
//           },
//         });

//         console.log('Données reçues du backend:', response.data);

//         // Mise à jour de l'état avec les données reçues
//         setData(response.data);
//       } catch (error) {
//         // Gestion des erreurs
//         setError(error.response ? error.response.data.error : 'Erreur de réseau');
//       }
//     };

//     fetchDashboardData();
//   }, []);

//   // Préparer les données pour le graphique, avec vérification des données
//   const specialisationLabels = (data.repartitionSpecialisation || []).map(item => item.specialisation_doctorant);
//   const specialisationCounts = (data.repartitionSpecialisation || []).map(item => item.count);

//   const chartData = {
//     labels: specialisationLabels,
//     datasets: [
//       {
//         label: 'Répartition des Doctorants par Spécialisation',
//         data: specialisationCounts,
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         borderColor: 'rgba(75, 192, 192, 1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   return (
//     <div className="p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-3xl font-semibold text-gray-800 mb-4">Tableau de Bord Administrateur</h2>
//       {error && <p className="text-red-600 mb-4">{error}</p>}

//       <h3 className="text-xl font-semibold text-gray-700 mb-4">Liste des Doctorants</h3>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
//           <thead className="bg-gray-100 border-b border-gray-200">
//             <tr>
//               <th className="py-3 px-6 text-left text-gray-600">Nom du Doctorant</th>
//               <th className="py-3 px-6 text-left text-gray-600">Encadrant</th>
//               <th className="py-3 px-6 text-left text-gray-600">Sujet de Recherche</th>
//               <th className="py-3 px-6 text-left text-gray-600">Département</th>
//               <th className="py-3 px-6 text-left text-gray-600">Spécialisation</th>
//             </tr>
//           </thead>
//           <tbody>
//             {(data.doctorants || []).map((item, index) => (
//               <tr key={index} className="border-b border-gray-200">
//                 <td className="py-3 px-6 text-gray-800">
//                   {item.utilisateur?.nom} {item.utilisateur?.prenom}
//                 </td>
//                 <td className="py-3 px-6 text-gray-600">
//                   {item.cycleInfo?.enseignant_encadrant || 'Non attribué'}
//                 </td>
//                 <td className="py-3 px-6 text-gray-600">
//                   {item.cycleInfo?.sujet_recherche}
//                 </td>
//                 <td className="py-3 px-6 text-gray-600">
//                   {item.cycleInfo?.departement_doctorant}
//                 </td>
//                 <td className="py-3 px-6 text-gray-600">
//                   {item.cycleInfo?.specialisation_doctorant}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-4">Répartition par Spécialisation</h3>
//       <div className="h-64">
//         <Bar data={chartData} />
//       </div>
//     </div>
//   );
// }

// export default DashboardDataForAdmin;

import React, { useEffect, useState } from 'react';
import axios from '../api/axios'; // Instance Axios configurée
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function DashboardDataForAdmin() {
  const [doctorants, setDoctorants] = useState([]);
  const [specialisationDistribution, setSpecialisationDistribution] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDoctorantDetails = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/dashboard/data', {
          headers: { 'Authorization': `Bearer ${token}` },
        });
        setDoctorants(response.data.data);
      } catch (error) {
        setError(error.response ? error.response.data.error : 'Erreur de réseau');
      }
    };

    const fetchSpecialisationDistribution = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/dashboard/specialisations', {
          headers: { 'Authorization': `Bearer ${token}` },
        });
        setSpecialisationDistribution(response.data.data);
      } catch (error) {
        setError(error.response ? error.response.data.error : 'Erreur de réseau');
      }
    };

    fetchDoctorantDetails();
    fetchSpecialisationDistribution();
  }, []);

  // Prepare data for the chart
  const chartData = {
    labels: specialisationDistribution.map(item => item.specialisation_doctorant),
    datasets: [
      {
        label: 'Nombre de Doctorants',
        data: specialisationDistribution.map(item => item.nombre_de_doctorants),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      }
    ]
  };

  return (
    <div className="p-6 space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Informations des Doctorants</h2>
        {error && <p className="text-red-500">{error}</p>}
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prénom</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sujet de Recherche</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Enseignant Encadrant</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Département</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Spécialisation</th>
            </tr>
          </thead>
          <tbody>
            {doctorants.map((doctorant, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{doctorant.prenom}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{doctorant.nom}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{doctorant.sujet_recherche}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{doctorant.enseignant_encadrant}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{doctorant.departement_doctorant}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{doctorant.specialisation_doctorant}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Répartition des Doctorants par Spécialisation</h2>
        <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-md">
          <Bar
            data={chartData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'top',
                },
                title: {
                  display: true,
                  text: 'Répartition des Doctorants par Spécialisation',
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default DashboardDataForAdmin;
 
