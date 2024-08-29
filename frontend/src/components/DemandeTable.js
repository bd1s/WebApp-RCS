// // src/components/DemandeTable.js
// import React, { useEffect, useState } from 'react';
// import axios from '../api/axios'; // Utiliser l'instance Axios configurée
// import 'bootstrap/dist/css/bootstrap.min.css';

// const DemandeTable = () => {
//   const [demandes, setDemandes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchDemandes = async () => {
//       try {
//         const response = await axios.get('/demandes/all'); // Remplacez l'URL par votre endpoint API
//         setDemandes(response.data);
//       } catch (err) {
//         setError('Erreur lors de la récupération des demandes');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDemandes();
//   }, []);

//   if (loading) return <p>Chargement...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="container mt-5">
//       <h2>Liste des Demandes</h2>
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Type de Demande</th>
//             <th>Statut</th>
//             <th>Date de Soumission</th>
//             <th>ID Doctorant</th>
//           </tr>
//         </thead>
//         <tbody>
//           {demandes.map((demande) => (
//             <tr key={demande.id_demande}>
//               <td>{demande.id_demande}</td>
//               <td>{demande.type_demande}</td>
//               <td>{demande.statut}</td>
//               <td>{new Date(demande.date_soumission).toLocaleDateString()}</td>
//               <td>{demande.id_doctorant}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DemandeTable;

// src/components/DemandeTable.js
// 



// import React, { useEffect, useState } from 'react';
// import axios from '../api/axios'; // Utiliser l'instance Axios configurée
// import 'bootstrap/dist/css/bootstrap.min.css';

// const DemandeTable = ({ doctorantId }) => {
//   const [demandes, setDemandes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchDemandes = async () => {
//       try {
//         const response = await axios.get(`/demandes/doctorant/${doctorantId}`);
//         setDemandes(response.data);
//       } catch (err) {
//         setError('Erreur lors de la récupération des demandes');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDemandes();
//   }, [doctorantId]);

//   if (loading) return <p>Chargement...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="container mt-5">
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>Mes demandes</th>
//             <th>Statut</th>
//             <th>Date de Soumission</th>
//           </tr>
//         </thead>
//         <tbody>
//           {demandes.map((demande) => (
//             <tr key={demande.id_demande}>
//               <td>{demande.type_demande}</td>
//               <td>{demande.statut}</td>
//               <td>{new Date(demande.date_soumission).toLocaleDateString()}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DemandeTable;






// import React, { useEffect, useState } from 'react';
// import axios from '../api/axios'; // Utiliser l'instance Axios configurée
// import 'bootstrap/dist/css/bootstrap.min.css';

// const DemandeTable = ({ doctorantId }) => {
//   const [demandes, setDemandes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchDemandes = async () => {
//       try {
//         const response = await axios.get(`/demandes/doctorant/${doctorantId}`);
//         setDemandes(response.data);
//       } catch (err) {
//         setError('Erreur lors de la récupération des demandes');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDemandes();
//   }, [doctorantId]);

//   const handleAddClick = () => {
//     window.location.href = '/DemandeForm'; // Rediriger vers la page DemandeForm
//   };

//   if (loading) return <p>Chargement...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="container mt-5">
//       <div className="d-flex justify-content-between align-items-center mb-3">
//         <h2>Mes demandes</h2>
//         <button onClick={handleAddClick} className="btn btn-primary">
//           Ajouter une demande
//         </button>
//       </div>
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>Type de Demande</th>
//             <th>Statut</th>
//             <th>Date de Soumission</th>
//           </tr>
//         </thead>
//         <tbody>
//           {demandes.map((demande) => (
//             <tr key={demande.id_demande}>
//               <td>{demande.type_demande}</td>
//               <td>{demande.statut}</td>
//               <td>{new Date(demande.date_soumission).toLocaleDateString()}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DemandeTable;


import React, { useEffect, useState } from 'react';
import axios from '../api/axios'; // Utiliser l'instance Axios configurée
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, Outlet } from 'react-router-dom';

const DemandeTable = ({ doctorantId }) => {
  const [demandes, setDemandes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDemandes = async () => {
      try {
        const response = await axios.get(`/demandes/doctorant/${doctorantId}`);
        setDemandes(response.data);
      } catch (err) {
        setError('Erreur lors de la récupération des demandes');
      } finally {
        setLoading(false);
      }
    };

    fetchDemandes();
  }, [doctorantId]);

  const handleEditClick = (demandeId) => {
    navigate(`update-demande/${demandeId}`); // Rediriger vers la page de mise à jour
  };

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Mes demandes</h2>
        <button onClick={() => navigate('DemandeForm')} className="btn btn-primary">
          Ajouter une demande
        </button>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Type de Demande</th>
            <th>Statut</th>
            <th>Date de Soumission</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {demandes.map((demande) => (
            <tr key={demande.id_demande}>
              <td>{demande.type_demande}</td>
              <td>{demande.statut}</td>
              <td>{new Date(demande.date_soumission).toLocaleDateString()}</td>
              <td>
                <button
                  onClick={() => handleEditClick(demande.id_demande)}
                  className="btn btn-warning btn-sm"
                >
                  Modifier
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Outlet />

    </div>
  );
};

export default DemandeTable;
