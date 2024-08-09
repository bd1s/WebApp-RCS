// src/components/UserRequests.jsx
import React, { useState, useEffect } from 'react';
import axios from '../api/axios';

const UserRequests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get('/requests'); // Adaptez l'URL selon votre API
        setRequests(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des demandes:', error);
      }
    };

    fetchRequests();
  }, []);

  return (
    <div>
      <h3>Demandes des Utilisateurs</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Utilisateur</th>
            <th>Type de Demande</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id_request}>
              <td>{request.id_request}</td>
              <td>{request.user_email}</td>
              <td>{request.request_type}</td>
              <td>{request.status}</td>
              <td>
                {/* Ajoutez des boutons ou des actions spécifiques ici */}
                <button>Traiter</button>
                <button>Annuler</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserRequests;
