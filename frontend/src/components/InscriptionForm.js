// InscriptionForm.js
import React, { useState } from 'react';
import axios from 'axios';

const InscriptionForm = () => {
  const [formData, setFormData] = useState({
    diplomes_precedents: '',
    specialisation_souhaitee: '',
    notes_transcription: '',
    fichier_demande: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      fichier_demande: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('jwtToken');
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    };

    const requestData = new FormData();
    requestData.append('diplomes_precedents', formData.diplomes_precedents);
    requestData.append('specialisation_souhaitee', formData.specialisation_souhaitee);
    requestData.append('notes_transcription', formData.notes_transcription);
    requestData.append('fichier_demande', formData.fichier_demande);

    try {
      const response = await axios.post('/demandes/inscription', requestData, config);
      console.log('Request successful', response.data);
    } catch (error) {
      console.error('Error submitting request', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Diplômes Précédents:</label>
        <input type="text" name="diplomes_precedents" onChange={handleChange} required />
      </div>
      <div>
        <label>Spécialisation Souhaitée:</label>
        <input type="text" name="specialisation_souhaitee" onChange={handleChange} required />
      </div>
      <div>
        <label>Notes de Transcription:</label>
        <textarea name="notes_transcription" onChange={handleChange} required></textarea>
      </div>
      <div>
        <label>Fichier de Demande:</label>
        <input type="file" name="fichier_demande" accept="application/pdf" onChange={handleFileChange} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default InscriptionForm;
