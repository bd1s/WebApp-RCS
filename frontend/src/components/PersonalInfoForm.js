// src/components/PersonalInfoForm.js

import React, { useState } from 'react';
import axios from 'axios';

const PersonalInfoForm = () => {
  const [formData, setFormData] = useState({
    civilite: '',
    sexe: '',
    nom: '',
    prenom: '',
    date_naissance: '',
    email: '',
    telephone: '',
    lieu_naissance: '',
    cnie: '',
    situation_socioprofessionnelle: ''
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
      <h2>Informations Personnelles</h2>
      <input type="text" name="civilite" value={formData.civilite} onChange={handleChange} placeholder="Civilité" required />
      <input type="text" name="sexe" value={formData.sexe} onChange={handleChange} placeholder="Sexe" required />
      <input type="text" name="nom" value={formData.nom} onChange={handleChange} placeholder="Nom" required />
      <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} placeholder="Prénom" required />
      <input type="text" name="date_naissance" value={formData.date_naissance} onChange={handleChange} placeholder="Date de Naissance" required />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input type="text" name="telephone" value={formData.telephone} onChange={handleChange} placeholder="Téléphone" required />
      <input type="text" name="lieu_naissance" value={formData.lieu_naissance} onChange={handleChange} placeholder="Lieu de Naissance" required />
      <input type="text" name="cnie" value={formData.cnie} onChange={handleChange} placeholder="Numéro CNI" required />
      <input type="text" name="situation_socioprofessionnelle" value={formData.situation_socioprofessionnelle} onChange={handleChange} placeholder="Situation Socioprofessionnelle" required />
      <button type="submit">Enregistrer</button>
    </form>
  );
};

export default PersonalInfoForm;
