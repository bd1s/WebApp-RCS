// src/components/UniversityInfoForm.js

import React, { useState } from 'react';
import axios from '../api/axios';

const UniversityInfoForm = () => {
  const [formData, setFormData] = useState({
    diplome: '',
    etablissement: '',
    universite: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/doctorant/doctorant-info', formData);
      console.log(response.data); // Afficher la réponse du backend
      // Réinitialiser le formulaire ou afficher une confirmation
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement des informations personnelles:', error);
      // Gérer l'erreur
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <h2>Informations Universitaires</h2>
      <input type="text" name="diplome" value={formData.diplome} onChange={handleChange} placeholder="Diplôme obtenu" required />
      <input type="text" name="etablissement" value={formData.etablissement} onChange={handleChange} placeholder="Établissement" required />
      <input type="text" name="universite" value={formData.universite} onChange={handleChange} placeholder="Université" required />
      <button type="submit">Enregistrer</button>
    </form>
  );
};

export default UniversityInfoForm;
