// src/api/userService.js
import axios from '../api/axios';

export const getCurrentUserRole = async () => {
  try {
    const response = await axios.get('/user/role');
    return response.data.role; 
  } catch (error) {
    console.error('Erreur lors de la récupération du rôle de l\'utilisateur :', error);
    throw error; 
  }
};
