// src/components/AdminManagement.jsx
import React, { useState, useEffect } from 'react';
import axios from '../api/axios';

const AdminManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/users'); // Adaptez l'URL selon votre API
        setUsers(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h3>Gestion des Utilisateurs</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Rôle</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id_utilisateur}>
              <td>{user.id_utilisateur}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                {/* Ajoutez des boutons ou des actions spécifiques ici */}
                <button>Modifier</button>
                <button>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminManagement;
