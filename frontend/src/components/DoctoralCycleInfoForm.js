// src/components/DoctoralCycleInfoForm.js

import React, { useState } from 'react';
import axios from 'axios';

const DoctoralCycleInfoForm = () => {
  const [formData, setFormData] = useState({
    formation_doctorale: '',
    annee_soutenance_prevue: '',
    specialite: '',
    directeur_these: '',
    structure_recherche_directeur: '',
    co_directeur_these: '',
    structure_recherche_co_directeur: '',
    universite_cotutelle: '',
    sujet_recherche: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/doctorant/personal-info', formData);
      console.log(response.data); // Afficher la réponse du backend
      // Réinitialiser le formulaire ou afficher une confirmation
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement des informations personnelles:', error);
      // Gérer l'erreur
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <h2>Informations sur le Cycle Doctoral</h2>
      <input type="text" name="formation_doctorale" value={formData.formation_doctorale} onChange={handleChange} placeholder="Formation Doctorale" required />
      <input type="text" name="annee_soutenance_prevue" value={formData.annee_soutenance_prevue} onChange={handleChange} placeholder="Année de Soutenance Prévue" required />
      <input type="text" name="specialite" value={formData.specialite} onChange={handleChange} placeholder="Spécialité de Recherche" required />
      <input type="text" name="directeur_these" value={formData.directeur_these} onChange={handleChange} placeholder="Directeur de Thèse" required />
      <input type="text" name="structure_recherche_directeur" value={formData.structure_recherche_directeur} onChange={handleChange} placeholder="Structure de Recherche du Directeur" required />
      <input type="text" name="co_directeur_these" value={formData.co_directeur_these} onChange={handleChange} placeholder="Co-directeur de Thèse (optionnel)" />
      <input type="text" name="structure_recherche_co_directeur" value={formData.structure_recherche_co_directeur} onChange={handleChange} placeholder="Structure de Recherche du Co-directeur" />
      <input type="text" name="universite_cotutelle" value={formData.universite_cotutelle} onChange={handleChange} placeholder="Université de Cotutelle (optionnel)" />
      <input type="text" name="sujet_recherche" value={formData.sujet_recherche} onChange={handleChange} placeholder="Sujet de Recherche de Thèse" required />
      <button type="submit">Enregistrer</button>
    </form>
  );
};

export default DoctoralCycleInfoForm;
