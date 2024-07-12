// src/components/BaccalaureateInfoForm.js

import React, { useState } from 'react';
import axios from 'axios';

const BaccalaureateInfoForm = () => {
  const [formData, setFormData] = useState({
    annee_bac: '',
    type_bac: '',
    mention: '',
    cne_massar: '',
    serie_bac: '',
    academie: '',
    province: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/doctorant/doctorant-info', formData);
      console.log(response.data); // Afficher la réponse du backend
      // Réinitialiser le formulaire ou afficher une confirmation
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement des informations personnelles:', error);
      // Gérer l'erreur
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <h2>Informations sur le Baccalauréat</h2>
      <input type="text" name="annee_bac" value={formData.annee_bac} onChange={handleChange} placeholder="Année d'obtention" required />
      <input type="text" name="type_bac" value={formData.type_bac} onChange={handleChange} placeholder="Type de baccalauréat" required />
      <input type="text" name="mention" value={formData.mention} onChange={handleChange} placeholder="Mention obtenue" required />
      <input type="text" name="cne_massar" value={formData.cne_massar} onChange={handleChange} placeholder="Numéro CNE ou Massar" required />
      <input type="text" name="serie_bac" value={formData.serie_bac} onChange={handleChange} placeholder="Série du baccalauréat" required />
      <input type="text" name="academie" value={formData.academie} onChange={handleChange} placeholder="Académie d'obtention" required />
      <input type="text" name="province" value={formData.province} onChange={handleChange} placeholder="Province d'obtention" required />
      <button type="submit">Enregistrer</button>
    </form>
  );
};

export default BaccalaureateInfoForm;
