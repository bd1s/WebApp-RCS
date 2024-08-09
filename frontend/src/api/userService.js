// src/api/userService.js
import axios from '../api/axios';

export const getCurrentUserRole = async () => {
  try {
    // Utiliser le chemin correct vers l'endpoint pour obtenir le rôle de l'utilisateur
    const response = await axios.get('/user/role');
    return response.data.role; // Assurez-vous que la réponse contient le rôle
  } catch (error) {
    console.error('Erreur lors de la récupération du rôle de l\'utilisateur :', error);
    throw error; // Vous pouvez également gérer les erreurs d'une autre manière si nécessaire
  }
};
