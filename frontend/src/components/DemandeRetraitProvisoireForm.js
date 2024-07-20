// components/DemandeRetraitProvisoireForm.js

import React, { useState } from 'react';
import axios from '../api/axios';

const DemandeRetraitProvisoireForm = () => {
  const [formData, setFormData] = useState({
    motif_retrait: '',
    date_debut_prevue: '',
    date_retour_prevue: '',
    fichier_demande: null,
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [token, setToken] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      fichier_demande: e.target.files[0], // Stockez le fichier sélectionné dans state
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const { motif_retrait, date_debut_prevue, date_retour_prevue, fichier_demande } = formData;

      const formDataToSend = new FormData();
      formDataToSend.append('motif_retrait', motif_retrait);
      formDataToSend.append('date_debut_prevue', date_debut_prevue);
      formDataToSend.append('date_retour_prevue', date_retour_prevue);
      if (fichier_demande) {
        formDataToSend.append('fichier_demande', fichier_demande);
      }

      const response = await axios.post('/demandes/retrait-provisoire', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });

      if (response && response.data) {
        setSuccessMessage('Demande de retrait provisoire créée avec succès');
        console.log('Demande de retrait provisoire créée:', response.data);
        // Réinitialiser le formulaire ou effectuer d'autres actions nécessaires après la création réussie
      } else {
        throw new Error('Aucune donnée dans la réponse');
      }
    } catch (error) {
      setErrorMessage(error.message || 'Erreur lors de la création de la demande de retrait provisoire');
      console.error('Erreur lors de la création de la demande de retrait provisoire:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data" className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Nouvelle Demande de Retrait Provisoire</h2>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      <div className="mb-4">
        <label className="block text-gray-700">Motif de Retrait</label>
        <input type="text" name="motif_retrait" value={formData.motif_retrait} onChange={handleChange} required className="input-field" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Date de Début Prévue</label>
        <input type="date" name="date_debut_prevue" value={formData.date_debut_prevue} onChange={handleChange} required className="input-field" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Date de Retour Prévue</label>
        <input type="date" name="date_retour_prevue" value={formData.date_retour_prevue} onChange={handleChange} required className="input-field" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Fichier de Demande (PDF)</label>
        <input type="file" name="fichier_demande" accept=".pdf" onChange={handleFileChange} className="input-field" />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Soumettre</button>
    </form>
  );
};

export default DemandeRetraitProvisoireForm;
