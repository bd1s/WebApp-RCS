// src/components/DossierSoutenanceForm.js
import React, { useState } from 'react';
import axios from '../api/axios';
const DossierSoutenanceForm = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    grade: '',
    telephone: '',
    email: '',
    etablissement: '',
    universite: '',
    propositionsJury: [{ nom: '', prenom: '', grade: '', telephone: '', email: '', etablissement: '', universite: '' }],
    // Ajoutez les autres champs de formulaires si nécessaire
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleArrayChange = (e, index, arrayName) => {
    const { name, value } = e.target;
    const updatedArray = formData[arrayName].map((item, idx) =>
      idx === index ? { ...item, [name]: value } : item
    );
    setFormData({
      ...formData,
      [arrayName]: updatedArray
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/demandes/dossiersoutenance', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Error creating dossier soutenance:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nom">Nom:</label>
        <input
          type="text"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="prenom">Prénom:</label>
        <input
          type="text"
          name="prenom"
          value={formData.prenom}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="grade">Grade:</label>
        <input
          type="text"
          name="grade"
          value={formData.grade}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="telephone">Téléphone:</label>
        <input
          type="text"
          name="telephone"
          value={formData.telephone}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="etablissement">Établissement:</label>
        <input
          type="text"
          name="etablissement"
          value={formData.etablissement}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="universite">Université:</label>
        <input
          type="text"
          name="universite"
          value={formData.universite}
          onChange={handleChange}
        />
      </div>

      {formData.propositionsJury.map((jury, index) => (
        <div key={index}>
          <h4>Proposition Jury {index + 1}</h4>
          <div>
            <label htmlFor={`nom-${index}`}>Nom:</label>
            <input
              type="text"
              name="nom"
              value={jury.nom}
              onChange={(e) => handleArrayChange(e, index, 'propositionsJury')}
            />
          </div>
          <div>
            <label htmlFor={`prenom-${index}`}>Prénom:</label>
            <input
              type="text"
              name="prenom"
              value={jury.prenom}
              onChange={(e) => handleArrayChange(e, index, 'propositionsJury')}
            />
          </div>
          <div>
            <label htmlFor={`grade-${index}`}>Grade:</label>
            <input
              type="text"
              name="grade"
              value={jury.grade}
              onChange={(e) => handleArrayChange(e, index, 'propositionsJury')}
            />
          </div>
          <div>
            <label htmlFor={`telephone-${index}`}>Téléphone:</label>
            <input
              type="text"
              name="telephone"
              value={jury.telephone}
              onChange={(e) => handleArrayChange(e, index, 'propositionsJury')}
            />
          </div>
          <div>
            <label htmlFor={`email-${index}`}>Email:</label>
            <input
              type="email"
              name="email"
              value={jury.email}
              onChange={(e) => handleArrayChange(e, index, 'propositionsJury')}
            />
          </div>
          <div>
            <label htmlFor={`etablissement-${index}`}>Établissement:</label>
            <input
              type="text"
              name="etablissement"
              value={jury.etablissement}
              onChange={(e) => handleArrayChange(e, index, 'propositionsJury')}
            />
          </div>
          <div>
            <label htmlFor={`universite-${index}`}>Université:</label>
            <input
              type="text"
              name="universite"
              value={jury.universite}
              onChange={(e) => handleArrayChange(e, index, 'propositionsJury')}
            />
          </div>
        </div>
      ))}

      <button type="button" onClick={() => setFormData({ ...formData, propositionsJury: [...formData.propositionsJury, { nom: '', prenom: '', grade: '', telephone: '', email: '', etablissement: '', universite: '' }] })}>
        Ajouter une Proposition de Jury
      </button>

      <button type="submit">Soumettre</button>
    </form>
  );
};

export default DossierSoutenanceForm;
