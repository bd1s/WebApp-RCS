// Requests.js
import axios from '../api/axios'; 

export const useCreateReunion = () => {
  const createReunion = async (data) => {
    try {
      const response = await axios.post('/reunions', data);
      console.log('Reunion created:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error creating reunion:', error);
      throw error;
    }
  };
  return { mutateAsync: createReunion };
};
export const useUpdateReunion = () => {
  const updateReunion = async (data) => {
    try {
      const { id_reunion, titre, description, date, heure_debut, heure_fin, doctorants } = data;
      if (!id_reunion) {
        throw new Error('Missing id_reunion for update.');
      }
      const response = await axios.put(`/reunions/${id_reunion}`, { titre, description, date, heure_debut, heure_fin, doctorants });
      console.log('Reunion updated:', response.data);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la mise à jour de la réunion:", error.response || error.message);
      throw error;
    }
  };
  return { mutateAsync: updateReunion };
};



export const useDeleteReunion = () => {
  const deleteReunion = async (id) => {
    try {
      if (!id) {
        throw new Error('Missing ID for deletion.');
      }
      const response = await axios.delete(`/reunions/${id}`);
      console.log('Reunion deleted:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error deleting reunion:', error);
      throw error;
    }
  };
  return { mutateAsync: deleteReunion };
};




//events

export const useCreateEvent = () => {
  const createEvent = async (data) => {
    try {
      const response = await axios.post('/events', data);
      console.log('Event created:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error creating event:', error);
      throw error;
    }
  };
  return { mutateAsync: createEvent };
};



//
export const useUpdateEvent = () => {
  const updateEvent = async (data) => {
    try {
      // Déstructuration des données avec les nouveaux noms de champs
      const { id, titre, description, date, heure_debut, heure_fin } = data;

      // Vérifier que l'identifiant de l'événement est présent
      if (!id) {
        throw new Error('Missing id for update.');
      }

      // Effectuer la requête PUT pour mettre à jour l'événement
      const response = await axios.put(`/events/${id}`, {
        titre,
        description,
        date,
        heure_debut,
        heure_fin,
      });

      // Afficher la réponse dans la console pour le débogage
      console.log('Event updated:', response.data);

      // Retourner les données mises à jour
      return response.data;
    } catch (error) {
      // Gérer les erreurs et les afficher dans la console
      console.error("Error updating event:", error.response || error.message);
      throw error;
    }
  };

  return { mutateAsync: updateEvent };
};

///
export const useDeleteEvent = () => {
  const deleteEvent = async (id) => {
    try {
      if (!id) {
        throw new Error('Missing ID for deletion.');
      }
      const response = await axios.delete(`/events/${id}`);
      console.log('Event deleted:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error deleting event:', error);
      throw error;
    }
  };
  return { mutateAsync: deleteEvent };
};





