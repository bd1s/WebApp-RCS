// import React, { useEffect, useState } from 'react';
// import axios from '../api/axios'; // Instance Axios configurée
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// function DashboardDataForAdmin() {
//   const [doctorants, setDoctorants] = useState([]);
//   const [specialisationDistribution, setSpecialisationDistribution] = useState([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchDoctorantDetails = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get('/dashboard/data', {
//           headers: { 'Authorization': `Bearer ${token}` },
//         });
//         setDoctorants(response.data.data);
//       } catch (error) {
//         setError(error.response ? error.response.data.error : 'Erreur de réseau');
//       }
//     };

//     const fetchSpecialisationDistribution = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get('/dashboard/specialisations', {
//           headers: { 'Authorization': `Bearer ${token}` },
//         });
//         setSpecialisationDistribution(response.data.data);
//       } catch (error) {
//         setError(error.response ? error.response.data.error : 'Erreur de réseau');
//       }
//     };

//     fetchDoctorantDetails();
//     fetchSpecialisationDistribution();
//   }, []);

//   // Prepare data for the chart
//   const chartData = {
//     labels: specialisationDistribution.map(item => item.specialisation_doctorant),
//     datasets: [
//       {
//         label: 'Nombre de Doctorants',
//         data: specialisationDistribution.map(item => item.nombre_de_doctorants),
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         borderColor: 'rgba(75, 192, 192, 1)',
//         borderWidth: 1,
//       }
//     ]
//   };

//   return (
//     <div className="p-6 space-y-6">
//     <div className="space-y-4 overflow-hidden"> {/* overflow-hidden ajouté ici */}
//       <h2 className="text-2xl font-semibold">Informations des Doctorants</h2>
//       {error && <p className="text-red-500">{error}</p>}
//       <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
//         <thead className="bg-gray-100">
//           <tr>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prénom</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sujet de Recherche</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Enseignant Encadrant</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Département</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Spécialisation</th>
//           </tr>
//         </thead>
//         <tbody>
//           {doctorants.map((doctorant, index) => (
//             <tr key={index} className="border-b hover:bg-gray-50">
//               <td className="px-6 py-4 text-sm font-medium text-gray-900">{doctorant.prenom}</td>
//               <td className="px-6 py-4 text-sm text-gray-500">{doctorant.nom}</td>
//               <td className="px-6 py-4 text-sm text-gray-500">{doctorant.sujet_recherche}</td>
//               <td className="px-6 py-4 text-sm text-gray-500">{doctorant.enseignant_encadrant}</td>
//               <td className="px-6 py-4 text-sm text-gray-500">{doctorant.departement_doctorant}</td>
//               <td className="px-6 py-4 text-sm text-gray-500">{doctorant.specialisation_doctorant}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
  
//     <div className="space-y-4 overflow-hidden"> {/* overflow-hidden ajouté ici */}
//       <h2 className="text-2xl font-semibold">Répartition des Doctorants par Spécialisation</h2>
//       <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-md">
//         <Bar
//           data={chartData}
//           options={{
//             responsive: true,
//             plugins: {
//               legend: {
//                 position: 'top',
//               },
//               title: {
//                 display: true,
//                 text: 'Répartition des Doctorants par Spécialisation',
//               },
//             },
//           }}
//         />
//       </div>
//     </div>
//   </div>
  
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

  // Préparation des données pour le graphique
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

        {/* Table Wrapper avec Scroll */}
        <div className="max-h-96 overflow-y-auto">
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
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Répartition des Doctorants par Spécialisation</h2>
        <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-md">
          {/* Conteneur avec une taille de graphique réduite */}
          <div style={{ height: '200px' }}> {/* Ajustez la hauteur selon votre besoin */}
            <Bar
              data={chartData}
              options={{
                responsive: true,
                maintainAspectRatio: false, // Désactiver le ratio pour adapter la taille
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
    </div>
  );
}

export default DashboardDataForAdmin;

