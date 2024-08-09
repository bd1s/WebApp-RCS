// import React, { useEffect, useState } from 'react';
// import axios from '../api/axios'; // Instance Axios configurée

// function DoctorantsEncadres() {
//   const [doctorants, setDoctorants] = useState([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchDoctorantsEncadres = async () => {
//       try {
//         // Récupération du token d'authentification depuis le localStorage ou une autre source
//         const token = localStorage.getItem('token');

//         // Envoi de la requête avec l'en-tête d'autorisation
//         const response = await axios.get('/encadrement/doctorants-encadres', {
//           headers: {
//             'Authorization': `Bearer ${token}`,
//           },
//         });

//         // Mise à jour de l'état avec les données reçues
//         setDoctorants(response.data);
//       } catch (error) {
//         // Gestion des erreurs
//         setError(error.response ? error.response.data.error : 'Erreur de réseau');
//       }
//     };

//     fetchDoctorantsEncadres();
//   }, []);

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Doctorants Encadrés</h2>
//       {error && <p className="text-red-500">{error}</p>}
//       <ul>
//         {doctorants.map((doctorant, index) => (
//           <li key={index} className="mb-2">
//             <strong>{doctorant.nomDoctorant}</strong>: {doctorant.sujetRecherche}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default DoctorantsEncadres;


import React, { useEffect, useState } from 'react';
import axios from '../api/axios'; // Instance Axios configurée

function DoctorantsEncadres() {
  const [doctorants, setDoctorants] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDoctorantsEncadres = async () => {
      try {
        // Récupération du token d'authentification depuis le localStorage ou une autre source
        const token = localStorage.getItem('token');

        // Envoi de la requête avec l'en-tête d'autorisation
        const response = await axios.get('/encadrement/doctorants-encadres', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        // Mise à jour de l'état avec les données reçues
        setDoctorants(response.data);
      } catch (error) {
        // Gestion des erreurs
        setError(error.response ? error.response.data.error : 'Erreur de réseau');
      }
    };

    fetchDoctorantsEncadres();
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Doctorants Encadrés</h2>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      {doctorants.length === 0 ? (
        <p className="text-gray-500">Aucun doctorant encadré trouvé.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
            <thead className="bg-gray-100 border-b border-gray-200">
              <tr>
                <th className="py-3 px-6 text-left text-gray-600">Nom du Doctorant</th>
                <th className="py-3 px-6 text-left text-gray-600">Sujet de Recherche</th>
              </tr>
            </thead>
            <tbody>
              {doctorants.map((doctorant, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="py-3 px-6 text-gray-800">{doctorant.nomDoctorant}</td>
                  <td className="py-3 px-6 text-gray-600">{doctorant.sujetRecherche}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default DoctorantsEncadres;

