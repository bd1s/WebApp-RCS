// // src/components/Logout.js

// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from '../api/axios'; // Assurez-vous que ce chemin est correct

// const Logout = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const performLogout = async () => {
//       try {
//         const response = await axios.post('/auth/logout', {}, {
//           headers: {
//             'Content-Type': 'application/json',
//             // Ajoutez d'autres en-têtes si nécessaire, comme les tokens d'authentification
//           },
//         });

//         console.log(response.data.msg); // Affiche "Déconnexion réussie" dans la console
//         navigate('/login'); // Redirige vers la page de connexion après la déconnexion
//       } catch (error) {
//         console.error('Erreur lors de la déconnexion :', error);
//         // Vous pouvez également afficher un message d'erreur à l'utilisateur si nécessaire
//       }
//     };

//     performLogout();
//   }, [navigate]);

//   return (
//     <div>
//       <p>Déconnexion en cours...</p>
//     </div>
//   );
// };

// export default Logout;
