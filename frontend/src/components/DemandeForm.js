// import React, { useState } from 'react';
// import axios from '../api/axios';

// const DemandeForm = () => {
//   const [formData, setFormData] = useState({
//     type_demande: '',
//     statut: 'soumise',
//     date_soumission: '',
//     id_doctorant: '', // Fetch the doctorant ID from context or authentication state
//     demandeData: {
//       diplomes_precedents: '',
//       specialisation_souhaitee: '',
//       notes_transcription: '',
//       fichier_demande: null,
//     },
//   });
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleNestedChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       demandeData: {
//         ...prevFormData.demandeData,
//         [name]: value,
//       },
//     }));
//   };

//   const handleFileChange = (e) => {
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       demandeData: {
//         ...prevFormData.demandeData,
//         fichier_demande: e.target.files[0],
//       },
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMessage('');
//     setSuccessMessage('');

//     try {
//       const formDataToSend = new FormData();
//       for (const key in formData) {
//         if (key === 'demandeData') {
//           for (const subKey in formData.demandeData) {
//             formDataToSend.append(`demandeData[${subKey}]`, formData.demandeData[subKey]);
//           }
//         } else {
//           formDataToSend.append(key, formData[key]);
//         }
//       }

//       const response = await axios.post('/demandes/create', formDataToSend, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       if (response && response.data) {
//         setSuccessMessage('Demand created successfully');
//         console.log('Demand created successfully:', response.data);
//         // Handle success, e.g., redirect or show success message
//       } else {
//         throw new Error('No data in response');
//       }
//     } catch (error) {
//       setErrorMessage(error.message || 'Error creating demand');
//       console.error('Error creating demand:', error);
//       // Handle error, e.g., show error message
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
//       <h2 className="text-2xl font-bold mb-4">Nouvelle Demande</h2>
//       {errorMessage && <p className="text-red-500">{errorMessage}</p>}
//       {successMessage && <p className="text-green-500">{successMessage}</p>}
//       <div className="mb-4">
//         <label className="block text-gray-700">Type de Demande</label>
//         <select name="type_demande" value={formData.type_demande} onChange={handleChange} required className="input-field">
//           <option value="">Sélectionner</option>
//           <option value="inscription">Inscription</option>
//           <option value="administrative">Administrative</option>
//           <option value="recherche">Recherche</option>
//           <option value="autre">Autre</option>
//         </select>
//       </div>
     
//       {formData.type_demande === 'inscription' && (
//         <>
//           <div className="mb-4">
//             <label className="block text-gray-700">Diplômes Précédents</label>
//             <textarea name="diplomes_precedents" value={formData.demandeData.diplomes_precedents} onChange={handleNestedChange} required className="input-field"></textarea>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Spécialisation Souhaitée</label>
//             <input type="text" name="specialisation_souhaitee" value={formData.demandeData.specialisation_souhaitee} onChange={handleNestedChange} required className="input-field" />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Notes de Transcription</label>
//             <textarea name="notes_transcription" value={formData.demandeData.notes_transcription} onChange={handleNestedChange} required className="input-field"></textarea>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Fichier de Demande (PDF)</label>
//             <input type="file" name="fichier_demande" onChange={handleFileChange} className="input-field" />
//           </div>
//         </>
//       )}
//       <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Soumettre</button>
//     </form>
//   );
// };

// export default DemandeForm;




// import React, { useState } from 'react';
// import axios from '../api/axios';

// const DemandeForm = () => {
//   const [formData, setFormData] = useState({
//     type_demande: '',
//     demandeData: {
//       diplomes_precedents: '',
//       specialisation_souhaitee: '',
//       notes_transcription: '',
//       fichier_demande: null,
//     },
//   });
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleNestedChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       demandeData: {
//         ...prevFormData.demandeData,
//         [name]: value,
//       },
//     }));
//   };

//   const handleFileChange = (e) => {
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       demandeData: {
//         ...prevFormData.demandeData,
//         fichier_demande: e.target.files[0],
//       },
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMessage('');
//     setSuccessMessage('');

//     try {
//       const { type_demande, date_soumission, demandeData } = formData;

//       const requestData = {
//         type_demande,
//         date_soumission,
//         demandeData,
//       };

//       const response = await axios.post('/demandes/create', requestData);

//       if (response && response.data) {
//         setSuccessMessage('Demand created successfully');
//         console.log('Demand created successfully:', response.data);
//         // Handle success, e.g., redirect or show success message
//       } else {
//         throw new Error('No data in response');
//       }
//     } catch (error) {
//       setErrorMessage(error.message || 'Error creating demand');
//       console.error('Error creating demand:', error);
//       // Handle error, e.g., show error message
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
//       <h2 className="text-2xl font-bold mb-4">Nouvelle Demande</h2>
//       {errorMessage && <p className="text-red-500">{errorMessage}</p>}
//       {successMessage && <p className="text-green-500">{successMessage}</p>}
//       <div className="mb-4">
//         <label className="block text-gray-700">Type de Demande</label>
//         <select name="type_demande" value={formData.type_demande} onChange={handleChange} required className="input-field">
//           <option value="">Sélectionner</option>
//           <option value="inscription">Inscription</option>
//           <option value="administrative">Administrative</option>
//           <option value="recherche">Recherche</option>
//           <option value="autre">Autre</option>
//         </select>
//       </div>
      
//       {formData.type_demande === 'inscription' && (
//         <>
//           <div className="mb-4">
//             <label className="block text-gray-700">Diplômes Précédents</label>
//             <textarea name="diplomes_precedents" value={formData.demandeData.diplomes_precedents} onChange={handleNestedChange} required className="input-field"></textarea>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Spécialisation Souhaitée</label>
//             <input type="text" name="specialisation_souhaitee" value={formData.demandeData.specialisation_souhaitee} onChange={handleNestedChange} required className="input-field" />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Notes de Transcription</label>
//             <textarea name="notes_transcription" value={formData.demandeData.notes_transcription} onChange={handleNestedChange} required className="input-field"></textarea>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Fichier de Demande (PDF)</label>
//             <input type="file" name="fichier_demande" onChange={handleFileChange} className="input-field" />
//           </div>
//         </>
//       )}
//       <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Soumettre</button>
//     </form>
//   );
// };




// // export default DemandeForm;
// import React, { useState } from 'react';
// import axios from '../api/axios';

// const DemandeForm = () => {
//   const [formData, setFormData] = useState({
//     type_demande: '',
//     demandeData: {
//       diplomes_precedents: '',
//       specialisation_souhaitee: '',
//       notes_transcription: '',
//       fichier_demande: null,
//     },
//   });
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleNestedChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       demandeData: {
//         ...prevFormData.demandeData,
//         [name]: value,
//       },
//     }));
//   };

//   const handleFileChange = (e) => {
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       demandeData: {
//         ...prevFormData.demandeData,
//         fichier_demande: e.target.files[0],
//       },
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMessage('');
//     setSuccessMessage('');

//     try {
//       const { type_demande, demandeData } = formData;
//       const formDataToSend = new FormData();

//       formDataToSend.append('type_demande', type_demande);
//       formDataToSend.append('date_soumission', formData.date_soumission);

//       for (const key in demandeData) {
//         formDataToSend.append(`demandeData[${key}]`, demandeData[key]);
//       }

//       if (demandeData.fichier_demande) {
//         formDataToSend.append('fichier_demande', demandeData.fichier_demande);
//       }

//       const response = await axios.post('/demandes/create', formDataToSend, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       if (response && response.data) {
//         setSuccessMessage('Demand created successfully');
//         console.log('Demand created successfully:', response.data);
//       } else {
//         throw new Error('No data in response');
//       }
//     } catch (error) {
//       setErrorMessage(error.message || 'Error creating demand');
//       console.error('Error creating demand:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
//       <h2 className="text-2xl font-bold mb-4">Nouvelle Demande</h2>
//       {errorMessage && <p className="text-red-500">{errorMessage}</p>}
//       {successMessage && <p className="text-green-500">{successMessage}</p>}
//       <div className="mb-4">
//         <label className="block text-gray-700">Type de Demande</label>
//         <select name="type_demande" value={formData.type_demande} onChange={handleChange} required className="input-field">
//           <option value="">Sélectionner</option>
//           <option value="inscription">Inscription</option>
//           <option value="administrative">Administrative</option>
//           <option value="recherche">Recherche</option>
//           <option value="autre">Autre</option>
//         </select>
//       </div>

//       {formData.type_demande === 'inscription' && (
//         <>
//           <div className="mb-4">
//             <label className="block text-gray-700">Diplômes Précédents</label>
//             <textarea name="diplomes_precedents" value={formData.demandeData.diplomes_precedents} onChange={handleNestedChange} required className="input-field"></textarea>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Spécialisation Souhaitée</label>
//             <input type="text" name="specialisation_souhaitee" value={formData.demandeData.specialisation_souhaitee} onChange={handleNestedChange} required className="input-field" />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Notes de Transcription</label>
//             <textarea name="notes_transcription" value={formData.demandeData.notes_transcription} onChange={handleNestedChange} required className="input-field"></textarea>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Fichier de Demande (PDF)</label>
//             <input type="file" name="fichier_demande" onChange={handleFileChange} className="input-field" />
//           </div>
//         </>
//       )}
//       <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Soumettre</button>
//     </form>
//   );
// };

// export default DemandeForm;





// // importez useState et useEffect depuis React
// import React, { useState } from 'react';
// import axios from '../api/axios';

// const DemandeForm = () => {
//   const [formData, setFormData] = useState({
//     type_demande: '',
//     demandeData: {
//       diplomes_precedents: '',
//       specialisation_souhaitee: '',
//       notes_transcription: '',
//       fichier_demande: null,
//     },
//     date_soumission: new Date().toISOString(), // Ajoutez une date de soumission par défaut
//   });
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const [token, setToken] = useState('');

//   // Fonction de changement générique pour les champs
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   // Fonction de changement pour les champs imbriqués dans demandeData
//   const handleNestedChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       demandeData: {
//         ...prevFormData.demandeData,
//         [name]: value,
//       },
//     }));
//   };

//   const handleFileChange = (e) => {
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       demandeData: {
//         ...prevFormData.demandeData,
//         fichier_demande: e.target.files[0], // Assurez-vous que e.target.files[0] contient le fichier sélectionné
//       },
//     }));
//   };
  

//   // Fonction pour soumettre le formulaire
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMessage('');
//     setSuccessMessage('');

//     try {
//       const { type_demande, demandeData, date_soumission } = formData;

//       const formDataToSend = new FormData();
//       formDataToSend.append('type_demande', type_demande);
//       formDataToSend.append('date_soumission', date_soumission);

//       // Ajoutez les autres champs de demandeData
//       for (const key in demandeData) {
//         formDataToSend.append(`demandeData[${key}]`, demandeData[key]);
//       }

//       // Ajoutez le fichier de demande s'il est défini
//       if (demandeData.fichier_demande) {
//         formDataToSend.append('fichier_demande', demandeData.fichier_demande);
//       }

//       const response = await axios.post('/demandes/create', formDataToSend, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (response && response.data) {
//         setSuccessMessage('Demande créée avec succès');
//         console.log('Demande créée avec succès:', response.data);
//         // Réinitialiser le formulaire ou effectuer d'autres actions nécessaires après la création réussie
//       } else {
//         throw new Error('No data in response');
//       }
//     } catch (error) {
//       setErrorMessage(error.message || 'Erreur lors de la création de la demande');
//       console.error('Erreur lors de la création de la demande:', error);
//     }
//   };

//   return (
// <form onSubmit={handleSubmit} encType="multipart/form-data"className="bg-white shadow-md rounded-lg p-6">
//       <h2 className="text-2xl font-bold mb-4">Nouvelle Demande</h2>
//       {errorMessage && <p className="text-red-500">{errorMessage}</p>}
//       {successMessage && <p className="text-green-500">{successMessage}</p>}
//       <div className="mb-4">
//         <label className="block text-gray-700">Type de Demande</label>
//         <select name="type_demande" value={formData.type_demande} onChange={handleChange} required className="input-field">
//           <option value="">Sélectionner</option>
//           <option value="inscription">Inscription</option>
//           <option value="administrative">Administrative</option>
//           <option value="recherche">Recherche</option>
//           <option value="autre">Autre</option>
//         </select>
//       </div>

//       {formData.type_demande === 'inscription' && (
//         <>
//           <div className="mb-4">
//             <label className="block text-gray-700">Diplômes Précédents</label>
//             <textarea name="diplomes_precedents" value={formData.demandeData.diplomes_precedents} onChange={handleNestedChange} required className="input-field"></textarea>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Spécialisation Souhaitée</label>
//             <input type="text" name="specialisation_souhaitee" value={formData.demandeData.specialisation_souhaitee} onChange={handleNestedChange} required className="input-field" />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Notes de Transcription</label>
//             <textarea name="notes_transcription" value={formData.demandeData.notes_transcription} onChange={handleNestedChange} required className="input-field"></textarea>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Fichier de Demande (PDF)</label>
//             <input type="file" name="fichier_demande" enctype="multipart/form-data" accept=".pdf" multiple  onChange={handleFileChange} className="input-field" />
//           </div>
//         </>
//       )}
//       <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Soumettre</button>
//     </form>
//   );
// };

// export default DemandeForm;
// Composant React pour le formulaire de demande
















// import React, { useState } from 'react';
// import axios from '../api/axios';

// const DemandeForm = () => {
//   const [formData, setFormData] = useState({
//     type_demande: '',
//     demandeData: {
//       diplomes_precedents: '',
//       specialisation_souhaitee: '',
//       notes_transcription: '',
//       fichier_demande: null,
//     },
//     date_soumission: new Date().toISOString(),
//   });

//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleNestedChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       demandeData: {
//         ...prevFormData.demandeData,
//         [name]: value,
//       },
//     }));
//   };

//   const handleFileChange = (e) => {
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       demandeData: {
//         ...prevFormData.demandeData,
//         fichier_demande: e.target.files[0], // Stockez le fichier sélectionné dans state
//       },
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMessage('');
//     setSuccessMessage('');

//     try {
//       const { type_demande, demandeData, date_soumission } = formData;

//       const formDataToSend = new FormData();
//       formDataToSend.append('type_demande', type_demande);
//       formDataToSend.append('date_soumission', date_soumission);

//       for (const key in demandeData) {
//         formDataToSend.append(`demandeData[${key}]`, demandeData[key]);
//       }

//       if (demandeData.fichier_demande) {
//         formDataToSend.append('fichier_demande', demandeData.fichier_demande);
//       }

//       const response = await axios.post('/demandes/inscription', formDataToSend, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       if (response && response.data) {
//         setSuccessMessage('Demande créée avec succès');
//         console.log('Demande créée avec succès:', response.data);
//         // Réinitialiser le formulaire ou effectuer d'autres actions nécessaires après la création réussie
//       } else {
//         throw new Error('Aucune donnée dans la réponse');
//       }
//     } catch (error) {
//       setErrorMessage(error.message || 'Erreur lors de la création de la demande');
//       console.error('Erreur lors de la création de la demande:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} encType="multipart/form-data" className="bg-white shadow-md rounded-lg p-6">
//       <h2 className="text-2xl font-bold mb-4">Nouvelle Demande</h2>
//       {errorMessage && <p className="text-red-500">{errorMessage}</p>}
//       {successMessage && <p className="text-green-500">{successMessage}</p>}
//       <div className="mb-4">
//         <label className="block text-gray-700">Type de Demande</label>
//         <select name="type_demande" value={formData.type_demande} onChange={handleChange} required className="input-field">
//           <option value="">Sélectionner</option>
//           <option value="inscription">Inscription</option>
//           <option value="administrative">Administrative</option>
//           <option value="recherche">Recherche</option>
//           <option value="autre">Autre</option>
//         </select>
//       </div>

//       {formData.type_demande === 'inscription' && (
//         <>
//           <div className="mb-4">
//             <label className="block text-gray-700">Diplômes Précédents</label>
//             <textarea name="diplomes_precedents" value={formData.demandeData.diplomes_precedents} onChange={handleNestedChange} required className="input-field"></textarea>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Spécialisation Souhaitée</label>
//             <input type="text" name="specialisation_souhaitee" value={formData.demandeData.specialisation_souhaitee} onChange={handleNestedChange} required className="input-field" />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Notes de Transcription</label>
//             <textarea name="notes_transcription" value={formData.demandeData.notes_transcription} onChange={handleNestedChange} required className="input-field"></textarea>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Fichier de Demande (PDF)</label>
//             <input type="file" name="fichier_demande" accept=".pdf" onChange={handleFileChange} className="input-field" />
//           </div>
//         </>
//       )}
//       <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Soumettre</button>
//     </form>
//   );
// };

// export default DemandeForm;

















// import React, { useState } from 'react';
// import axios from '../api/axios';

// const DemandeForm = () => {
//   const [formData, setFormData] = useState({
//     type_demande: '',
//     demandeData: {
//       diplomes_precedents: '',
//       specialisation_souhaitee: '',
//       notes_transcription: '',
//       fichier_demande: null,
//       motif_retrait: '',
//       date_debut_prevue: '',
//       date_retour_prevue: '',
//       fichier_demande_retrait: null,
//     },
//     date_soumission: new Date().toISOString(),
//   });

//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleNestedChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       demandeData: {
//         ...prevFormData.demandeData,
//         [name]: value,
//       },
//     }));
//   };

//   const handleFileChange = (e) => {
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       demandeData: {
//         ...prevFormData.demandeData,
//         [e.target.name]: e.target.files[0], // Stockez le fichier sélectionné dans state
//       },
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMessage('');
//     setSuccessMessage('');

//     try {
//       const { type_demande, demandeData, date_soumission } = formData;

//       const formDataToSend = new FormData();
//       formDataToSend.append('type_demande', type_demande);
//       formDataToSend.append('date_soumission', date_soumission);

//       for (const key in demandeData) {
//         if (key === 'fichier_demande' || key === 'fichier_demande_retrait') {
//           if (demandeData[key]) {
//             formDataToSend.append(key, demandeData[key]);
//           }
//         } else {
//           formDataToSend.append(`demandeData[${key}]`, demandeData[key]);
//         }
//       }

//       let endpoint = '';
//       if (type_demande === 'inscription') {
//         endpoint = '/demandes/inscription';
//       } else if (type_demande === 'retrait-provisoire') {
//         endpoint = '/demandes/retrait-provisoire';
//       }

//       const response = await axios.post(endpoint, formDataToSend, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       if (response && response.data) {
//         setSuccessMessage('Demande créée avec succès');
//         console.log('Demande créée avec succès:', response.data);
//         // Réinitialiser le formulaire ou effectuer d'autres actions nécessaires après la création réussie
//       } else {
//         throw new Error('Aucune donnée dans la réponse');
//       }
//     } catch (error) {
//       setErrorMessage(error.message || 'Erreur lors de la création de la demande');
//       console.error('Erreur lors de la création de la demande:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} encType="multipart/form-data" className="bg-white shadow-md rounded-lg p-6">
//       <h2 className="text-2xl font-bold mb-4">Nouvelle Demande</h2>
//       {errorMessage && <p className="text-red-500">{errorMessage}</p>}
//       {successMessage && <p className="text-green-500">{successMessage}</p>}
//       <div className="mb-4">
//         <label className="block text-gray-700">Type de Demande</label>
//         <select name="type_demande" value={formData.type_demande} onChange={handleChange} required className="input-field">
//           <option value="">Sélectionner</option>
//           <option value="inscription">Inscription</option>
//           <option value="retrait-provisoire">Retrait Provisoire</option>
//           <option value="administrative">Administrative</option>
//           <option value="recherche">Recherche</option>
//           <option value="autre">Autre</option>
//         </select>
//       </div>

//       {formData.type_demande === 'inscription' && (
//         <>
//           <div className="mb-4">
//             <label className="block text-gray-700">Diplômes Précédents</label>
//             <textarea name="diplomes_precedents" value={formData.demandeData.diplomes_precedents} onChange={handleNestedChange} required className="input-field"></textarea>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Spécialisation Souhaitée</label>
//             <input type="text" name="specialisation_souhaitee" value={formData.demandeData.specialisation_souhaitee} onChange={handleNestedChange} required className="input-field" />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Notes de Transcription</label>
//             <textarea name="notes_transcription" value={formData.demandeData.notes_transcription} onChange={handleNestedChange} required className="input-field"></textarea>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Fichier de Demande (PDF)</label>
//             <input type="file" name="fichier_demande" accept=".pdf" onChange={handleFileChange} className="input-field" />
//           </div>
//         </>
//       )}

//       {formData.type_demande === 'retrait-provisoire' && (
//         <>
//           <div className="mb-4">
//             <label className="block text-gray-700">Motif de Retrait</label>
//             <textarea name="motif_retrait" value={formData.demandeData.motif_retrait} onChange={handleNestedChange} required className="input-field"></textarea>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Date de Début Prévue</label>
//             <input type="date" name="date_debut_prevue" value={formData.demandeData.date_debut_prevue} onChange={handleNestedChange} required className="input-field" />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Date de Retour Prévue</label>
//             <input type="date" name="date_retour_prevue" value={formData.demandeData.date_retour_prevue} onChange={handleNestedChange} required className="input-field" />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Fichier de Demande de Retrait (PDF)</label>
//             <input type="file" name="fichier_demande_retrait" accept=".pdf" onChange={handleFileChange} className="input-field" />
//           </div>
//         </>
//       )}

//       <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Soumettre</button>
//     </form>
//   );
// };

// export default DemandeForm;



// import React, { useState } from 'react';
// import axios from '../api/axios';

// const DemandeForm = () => {
//   const [formData, setFormData] = useState({
//     type_demande: '',
//     demandeData: {
//       diplomes_precedents: '',
//       specialisation_souhaitee: '',
//       notes_transcription: '',
//       fichier_demande: null,
//       motif_retrait: '',
//       date_debut_prevue: '',
//       date_retour_prevue: '',
//       fichier_demande_retrait: null,
//       motif_retrait_definitif: '',
//       date_retrait: '',
//       observations: '',
//       fichier_retrait_definitif: null,
//       numero_etudiant: '',
//       date_delivrance: '',
//       fichier_carte_etudiant: null,
//       identifiant_souhaite: '',
//       motif_demande: '',
//       entreprise_accueil: '',
//       periode_stage: '',
//       objectifs_stage: '',
//       fichier_demande_stage: null,
//       universite_partenaire: '',
//       pays: '',
//       duree_cotutelle: '',
//       fichier_demande_cotutelle: null,
//       co_directeur_actuel: '',
//       nouveau_co_directeur_propose: '',
//       motifs_changement: '',
//       fichier_demande_changement_codirecteur: null,
//       titre_these: '',
//       directeur_these: '',
//       date_debut_these: '',
//       date_prevue_soutenance: '',
//       fichiers_cv: null,
//       nombre_exemplaires: '',
//       date_soutenance: '',
//       fichier_demande_tirage: null,
//       nom: '',
//       prenom: '',
//       grade: '',
//       telephone: '',
//       email: '',
//       etablissement: '',
//       universite: '',
//       // Sous-tables
      
//         titre_complet_publication: '',
//         auteurs: '',
//         nom_complet_revue: '',
//         vol_issue_pages_annee: '',
      
//         titre_complet_publication: '',
//         auteurs: '',
//         nom_complet_revue: '',
//         vol_issue_pages_annee: '',
    
//         titre_complet_publication: '',
//         auteurs: '',
//         nom_complet_revue: '',
//         vol_issue_pages_annee: '',
     
//         nom: '',
//         prenom: '',
//         grade: '',
//         telephone: '',
//         email: '',
//         etablissement: '',
//         universite: '',
      
//         titre_ouvrage: '',
//         auteurs: '',
//         maison_edition_isbn_annee_publication: '',
 
//         titre_complet_communication: '',
//         auteurs: '',
//         nom_complet_rencontre: '',
//         lieu_date_rencontre: '',
//         titre_ouvrage: '',
//         titre_complet_chapitre: '',
//         auteurs: '',
//         maison_edition_isbn_annee_publication: '',
      
//         titre_brevet: '',
//         inventeurs: '',
//         references: '',
//         annee_pays_depot: '',
      
//     },
//     date_soumission: new Date().toISOString(),
//   });

//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleDemandeDataChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       demandeData: {
//         ...prevFormData.demandeData,
//         [name]: value,
//       },
//     }));
//   };

//   const handleNestedChange = (e, field, index) => {
//     const { name, value } = e.target;
//     const updatedFieldArray = formData.demandeData[field].map((item, idx) => {
//       if (idx === index) {
//         return { ...item, [name]: value };
//       }
//       return item;
//     });
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       demandeData: {
//         ...prevFormData.demandeData,
//         [field]: updatedFieldArray,
//       },
//     }));
//   };

//   const handleFileChange = (e) => {
//     const { name } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       demandeData: {
//         ...prevFormData.demandeData,
//         [name]: e.target.files[0],
//       },
//     }));
//   };

//   const addNestedField = (field) => {
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       demandeData: {
//         ...prevFormData.demandeData,
//         [field]: [...prevFormData.demandeData[field], {}],
//       },
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMessage('');
//     setSuccessMessage('');

//     try {
//       const { type_demande, demandeData, date_soumission } = formData;

//       const formDataToSend = new FormData();
//       formDataToSend.append('type_demande', type_demande);
//       formDataToSend.append('date_soumission', date_soumission);

//       for (const key in demandeData) {
//         if (demandeData[key] !== null && demandeData[key] !== undefined) {
//           if (key === 'fichier_demande' || key === 'fichier_demande_retrait' || key === 'fichier_retrait_definitif' || key === 'fichier_carte_etudiant' || key === 'fichier_demande_changement_sujet'|| key === 'fichier_demande_changement_directeur'|| key === 'fichier_demande_reinscription' || key === 'fichier_demande_stage'|| key === 'fichier_demande_cotutelle'|| key === 'fichier_demande_changement_codirecteur'|| key === 'fichiers_cv'|| key === 'fichier_demande_tirage'|| key === 'Fichier_demande_tirage' ) {
//             formDataToSend.append(key, demandeData[key]);
//           } else {
//             formDataToSend.append(`demandeData[${key}]`, demandeData[key]);
//           }
//         }
//       }

//       let endpoint = '';
//       switch (type_demande) {
//         case 'inscription':
//           endpoint = '/demandes/inscription';
//           break;
//         case 'retrait-provisoire':
//           endpoint = '/demandes/retrait-provisoire';
//           break;
//         case 'retrait-definitif':
//           endpoint = '/demandes/retrait-definitif';
//           break;
//         case 'carte-etudiant':
//           endpoint = '/demandes/carte-etudiant';
//           break;
//         case 'email-academique':
//           endpoint = '/demandes/email-academique';
//           break;
//         case 'reinscription-derogation':
//           endpoint = '/demandes/reinscription-derogation';
//           break;
//         case 'changement-sujet-these':
//           endpoint = '/demandes/changement-sujet-these';
//           break;
//         case 'changement-directeur-these':
//           endpoint = '/demandes/changement-directeur-these';
//           break;
//         case 'convention-stage':
//           endpoint = '/demandes/convention-stage';
//           break;
//         case 'cotutelle':
//           endpoint = '/demandes/cotutelle';
//           break;
//         case 'changement-codirecteur-these':
//           endpoint = '/demandes/changement-codirecteur-these';
//           break;
//         case 'imists':
//           endpoint = '/demandes/imists';
//           break;
//         case 'tirage':
//           endpoint = '/demandes/tirage';
//           break;
//         case 'dossier-soutenance':
//             endpoint = '/demandes/dossier-soutenance';
//             break;
//         default:
//           throw new Error('Type de demande inconnu');
//       }


//       const response = await axios.post(endpoint, formDataToSend, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       if (response && response.data) {
//         setSuccessMessage('Demande créée avec succès');
//         console.log('Demande créée avec succès:', response.data);
//         // Réinitialiser le formulaire ou effectuer d'autres actions nécessaires après la création réussie
//       } else {
//         throw new Error('Aucune donnée dans la réponse');
//       }
//     } catch (error) {
//       setErrorMessage(error.message || 'Erreur lors de la création de la demande');
//       console.error('Erreur lors de la création de la demande:', error);
//     }
//   };
//   const handleAddClick = () => {
//     window.location.href = '/DemandeTable'; // Rediriger vers la page DemandeForm
//   };

//   return (
//     <form onSubmit={handleSubmit} encType="multipart/form-data" className="bg-white shadow-md rounded-lg p-6">
//       <h2 className="text-2xl font-bold mb-4">Nouvelle Demande</h2>
//       {errorMessage && <p className="text-red-500">{errorMessage}</p>}
//       {successMessage && <p className="text-green-500">{successMessage}</p>}
//       <div className="mb-4">
//         <label className="block text-gray-700">Type de Demande</label>
//         <select name="type_demande" value={formData.type_demande} onChange={handleChange} required className="input-field">
//           <option value="">Sélectionner</option>
//           <option value="inscription">Inscription</option>
//           <option value="retrait-provisoire">Retrait Provisoire</option>
//           <option value="retrait-definitif">Retrait Définitif</option>
//           <option value="carte-etudiant">Carte Étudiant</option>
//           <option value="email-academique">Email Académique</option>
//           <option value="administrative">Administrative</option>
//           <option value="recherche">Recherche</option>
//           <option value="reinscription-derogation">Réinscription Dérogation</option>
//           <option value="changement-sujet-these">Changement Sujet Thèse</option>
//           <option value="changement-directeur-these">Changement Directeur Thèse</option>
//           <option value="convention-stage">Convention de Stage</option>
//           <option value="cotutelle">Cotutelle</option>
//           <option value="changement-codirecteur-these">Changement Codirecteur Thèse</option>
//           <option value="imists">IMIST</option>
//           <option value="tirage">Tirage</option>
//           <option value="dossier-soutenance">Dossier Soutenance</option>
//         </select>
//       </div>

//       {formData.type_demande === 'inscription' && (
//         <>
//           <div className="mb-4">
//             <label className="block text-gray-700">Diplômes Précédents</label>
//             <textarea name="diplomes_precedents" value={formData.demandeData.diplomes_precedents} onChange={handleNestedChange} required className="input-field"></textarea>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Spécialisation Souhaitée</label>
//             <input type="text" name="specialisation_souhaitee" value={formData.demandeData.specialisation_souhaitee} onChange={handleNestedChange} required className="input-field" />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Notes de Transcription</label>
//             <textarea name="notes_transcription" value={formData.demandeData.notes_transcription} onChange={handleNestedChange} required className="input-field"></textarea>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Fichier de Demande (PDF)</label>
//             <input type="file" name="fichier_demande" accept=".pdf" onChange={handleFileChange} className="input-field" />
//           </div>
//         </>
//       )}

//       {formData.type_demande === 'retrait-provisoire' && (
//         <>
//           <div className="mb-4">
//             <label className="block text-gray-700">Motif de Retrait</label>
//             <textarea name="motif_retrait" value={formData.demandeData.motif_retrait} onChange={handleNestedChange} required className="input-field"></textarea>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Date de Début Prévue</label>
//             <input type="date" name="date_debut_prevue" value={formData.demandeData.date_debut_prevue} onChange={handleNestedChange} required className="input-field" />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Date de Retour Prévue</label>
//             <input type="date" name="date_retour_prevue" value={formData.demandeData.date_retour_prevue} onChange={handleNestedChange} required className="input-field" />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Fichier de Demande de Retrait (PDF)</label>
//             <input type="file" name="fichier_demande_retrait" accept=".pdf" onChange={handleFileChange} className="input-field" />
//           </div>
//         </>
//       )}

//       {formData.type_demande === 'retrait-definitif' && (
//         <>
//           <div className="mb-4">
//             <label className="block text-gray-700">Motif de Retrait Définitif</label>
//             <textarea name="motif_retrait_definitif" value={formData.demandeData.motif_retrait_definitif} onChange={handleNestedChange} required className="input-field"></textarea>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Date de Retrait Définitif</label>
//             <input type="date" name="date_retrait" value={formData.demandeData.date_retrait} onChange={handleNestedChange} required className="input-field" />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Observations</label>
//             <textarea name="observations" value={formData.demandeData.observations} onChange={handleNestedChange} className="input-field"></textarea>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Fichier de Retrait Définitif (PDF)</label>
//             <input type="file" name="fichier_retrait_definitif" accept=".pdf" onChange={handleFileChange} className="input-field" />
//           </div>
//         </>
//       )}

//       {formData.type_demande === 'carte-etudiant' && (
//         <>
//           <div className="mb-4">
//             <label className="block text-gray-700">Numéro Étudiant</label>
//             <input type="text" name="numero_etudiant" value={formData.demandeData.numero_etudiant} onChange={handleNestedChange} required className="input-field" />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Date de Délivrance</label>
//             <input type="date" name="date_delivrance" value={formData.demandeData.date_delivrance} onChange={handleNestedChange} required className="input-field" />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Fichier de Carte Étudiant (PDF)</label>
//             <input type="file" name="fichier_carte_etudiant" accept=".pdf" onChange={handleFileChange} className="input-field" />
//           </div>
//         </>
//       )}

//       {formData.type_demande === 'email-academique' && (
//         <>
//           <div className="mb-4">
//             <label className="block text-gray-700">Identifiant Souhaité</label>
//             <input type="text" name="identifiant_souhaite" value={formData.demandeData.identifiant_souhaite} onChange={handleNestedChange} required className="input-field" />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Motif de la Demande</label>
//             <textarea name="motif_demande" value={formData.demandeData.motif_demande} onChange={handleNestedChange} className="input-field"></textarea>
//           </div>
//         </>
//       )}
//       {formData.type_demande === 'reinscription-derogation' && (
//   <>
//     <div className="mb-4">
//       <label className="block text-gray-700">Année Académique</label>
//       <input type="text" name="annee_academique" value={formData.demandeData.annee_academique} onChange={handleNestedChange} required className="input-field" />
//     </div>
//     <div className="mb-4">
//       <label className="block text-gray-700">Motif</label>
//       <textarea name="motif" value={formData.demandeData.motif} onChange={handleNestedChange} required className="input-field"></textarea>
//     </div>
//     <div className="mb-4">
//       <label className="block text-gray-700">Décision Prise</label>
//       <input type="text" name="decision_prise" value={formData.demandeData.decision_prise} onChange={handleNestedChange} className="input-field" />
//     </div>
//     <div className="mb-4">
//       <label className="block text-gray-700">Fichier de Demande (PDF)</label>
//       <input type="file" name="fichier_demande" accept=".pdf" onChange={handleFileChange} className="input-field" />
//     </div>
//   </>
// )} 
// {formData.type_demande === 'changement-sujet-these' && (
//   <>
//     <div className="mb-4">
//       <label className="block text-gray-700">Sujet Actuel</label>
//       <input type="text" name="sujet_actuel" value={formData.demandeData.sujet_actuel} onChange={handleNestedChange} required className="input-field" />
//     </div>
//     <div className="mb-4">
//       <label className="block text-gray-700">Nouveau Sujet Proposé</label>
//       <input type="text" name="nouveau_sujet_propose" value={formData.demandeData.nouveau_sujet_propose} onChange={handleNestedChange} required className="input-field" />
//     </div>
//     <div className="mb-4">
//       <label className="block text-gray-700">Justification</label>
//       <textarea name="justification" value={formData.demandeData.justification} onChange={handleNestedChange} required className="input-field"></textarea>
//     </div>
//     <div className="mb-4">
//       <label className="block text-gray-700">Fichier de Demande (PDF)</label>
//       <input type="file" name="fichier_demande" accept=".pdf" onChange={handleFileChange} className="input-field" />
//     </div>
//   </>
// )}
// {formData.type_demande === 'changement-directeur-these' && (
//   <>
//     <div className="mb-4">
//       <label className="block text-gray-700">Directeur Actuel</label>
//       <input type="text" name="directeur_actuel" value={formData.demandeData.directeur_actuel} onChange={handleNestedChange} required className="input-field" />
//     </div>
//     <div className="mb-4">
//       <label className="block text-gray-700">Nouveau Directeur Proposé</label>
//       <input type="text" name="nouveau_directeur_propose" value={formData.demandeData.nouveau_directeur_propose} onChange={handleNestedChange} required className="input-field" />
//     </div>
//     <div className="mb-4">
//       <label className="block text-gray-700">Raisons du Changement</label>
//       <textarea name="raisons_changement" value={formData.demandeData.raisons_changement} onChange={handleNestedChange} required className="input-field"></textarea>
//     </div>
//     <div className="mb-4">
//       <label className="block text-gray-700">Fichier de Demande (PDF)</label>
//       <input type="file" name="fichier_demande" accept=".pdf" onChange={handleFileChange} className="input-field" />
//     </div>
//   </>
// )} {formData.type_demande === 'convention-stage' && (
//     <>
//       <input type="text" name="entreprise_accueil" placeholder="Entreprise d'accueil" value={formData.demandeData.entreprise_accueil} onChange={handleNestedChange} />
//       <input type="text" name="periode_stage" placeholder="Période de stage" value={formData.demandeData.periode_stage} onChange={handleNestedChange} />
//       <input type="text" name="objectifs_stage" placeholder="Objectifs de stage" value={formData.demandeData.objectifs_stage} onChange={handleNestedChange} />
//       <input type="file" name="fichier_demande_stage" onChange={handleFileChange} />
//     </>
//   )}

//   {formData.type_demande === 'cotutelle' && (
//     <>
//       <input type="text" name="universite_partenaire" placeholder="Université partenaire" value={formData.demandeData.universite_partenaire} onChange={handleNestedChange} />
//       <input type="text" name="pays" placeholder="Pays" value={formData.demandeData.pays} onChange={handleNestedChange} />
//       <input type="text" name="duree_cotutelle" placeholder="Durée de la cotutelle" value={formData.demandeData.duree_cotutelle} onChange={handleNestedChange} />
//       <input type="file" name="fichier_demande_cotutelle" onChange={handleFileChange} />
//     </>
//   )}

//   {formData.type_demande === 'changement-codirecteur-these' && (
//     <>
//       <input type="text" name="co_directeur_actuel" placeholder="Co-directeur actuel" value={formData.demandeData.co_directeur_actuel} onChange={handleNestedChange} />
//       <input type="text" name="nouveau_co_directeur_propose" placeholder="Nouveau co-directeur proposé" value={formData.demandeData.nouveau_co_directeur_propose} onChange={handleNestedChange} />
//       <input type="text" name="motifs_changement" placeholder="Motifs du changement" value={formData.demandeData.motifs_changement} onChange={handleNestedChange} />
//       <input type="file" name="fichier_demande_changement_codirecteur" onChange={handleFileChange} />
//     </>
//   )}

//   {formData.type_demande === 'imists' && (
//     <>
//       <input type="text" name="titre_these" placeholder="Titre de la thèse" value={formData.demandeData.titre_these} onChange={handleNestedChange} />
//       <input type="text" name="directeur_these" placeholder="Directeur de thèse" value={formData.demandeData.directeur_these} onChange={handleNestedChange} />
//       <input type="date" name="date_debut_these" placeholder="Date de début" value={formData.demandeData.date_debut_these} onChange={handleNestedChange} />
//       <input type="date" name="date_prevue_soutenance" placeholder="Date prévue de soutenance" value={formData.demandeData.date_prevue_soutenance} onChange={handleNestedChange} />
//       <input type="file" name="fichiers_cv" onChange={handleFileChange} />
//     </>
//   )}

//   {formData.type_demande === 'tirage' && (
//     <>
//       <input type="text" name="titre_these" placeholder="Titre de la thèse" value={formData.demandeData.titre_these} onChange={handleNestedChange} />
//       <input type="number" name="nombre_exemplaires" placeholder="Nombre d'exemplaires" value={formData.demandeData.nombre_exemplaires} onChange={handleNestedChange} />
//       <input type="date" name="date_soutenance" placeholder="Date de soutenance" value={formData.demandeData.date_soutenance} onChange={handleNestedChange} />
//       <input type="file" name="fichier_demande_tirage" onChange={handleFileChange} />
//     </>
//   )}
//   {formData.type_demande === 'dossier-soutenance' && (
//   <>
//     <div>
//       <label>Nom</label>
//       <input type="text" name="nom" value={formData.demandeData.nom || ''} onChange={handleDemandeDataChange} />
//     </div>
//     <div>
//       <label>Prénom</label>
//       <input type="text" name="prenom" value={formData.demandeData.prenom || ''} onChange={handleDemandeDataChange} />
//     </div>
//     <div>
//       <label>Grade</label>
//       <input type="text" name="grade" value={formData.demandeData.grade || ''} onChange={handleDemandeDataChange} />
//     </div>
//     <div>
//       <label>Téléphone</label>
//       <input type="text" name="telephone" value={formData.demandeData.telephone || ''} onChange={handleDemandeDataChange} />
//     </div>
//     <div>
//       <label>Email</label>
//       <input type="email" name="email" value={formData.demandeData.email || ''} onChange={handleDemandeDataChange} />
//     </div>
//     <div>
//       <label>Établissement</label>
//       <input type="text" name="etablissement" value={formData.demandeData.etablissement || ''} onChange={handleDemandeDataChange} />
//     </div>
//     <div>
//       <label>Université</label>
//       <input type="text" name="universite" value={formData.demandeData.universite || ''} onChange={handleDemandeDataChange} />
//     </div>

//     {/* Propositions Jury */}
//     <div>
//       <label>Propositions Jury</label>
//       {formData.demandeData.propositionJuries?.map((jury, index) => (
//         <div key={index}>
//           <input type="text" name="nom" placeholder="Nom" value={jury.nom || ''} onChange={(e) => handleNestedChange(e, 'propositionJuries', index)} />
//           <input type="text" name="prenom" placeholder="Prénom" value={jury.prenom || ''} onChange={(e) => handleNestedChange(e, 'propositionJuries', index)} />
//           <input type="text" name="grade" placeholder="Grade" value={jury.grade || ''} onChange={(e) => handleNestedChange(e, 'propositionJuries', index)} />
//           <input type="text" name="telephone" placeholder="Téléphone" value={jury.telephone || ''} onChange={(e) => handleNestedChange(e, 'propositionJuries', index)} />
//           <input type="email" name="email" placeholder="Email" value={jury.email || ''} onChange={(e) => handleNestedChange(e, 'propositionJuries', index)} />
//           <input type="text" name="etablissement" placeholder="Établissement" value={jury.etablissement || ''} onChange={(e) => handleNestedChange(e, 'propositionJuries', index)} />
//           <input type="text" name="universite" placeholder="Université" value={jury.universite || ''} onChange={(e) => handleNestedChange(e, 'propositionJuries', index)} />
//         </div>
//       ))}
//       <button type="button" onClick={() => addNestedField('propositionJuries')}>Ajouter Jury</button>
//     </div>

//     {/* Publications Web of Science */}
//     <div>
//       <label>Publications Web of Science</label>
//       {formData.demandeData.publicationsWebOfScience?.map((pub, index) => (
//         <div key={index}>
//           <input type="text" name="titre_complet_publication" placeholder="Titre" value={pub.titre_complet_publication || ''} onChange={(e) => handleNestedChange(e, 'publicationsWebOfScience', index)} />
//           <input type="text" name="auteurs" placeholder="Auteurs" value={pub.auteurs || ''} onChange={(e) => handleNestedChange(e, 'publicationsWebOfScience', index)} />
//           <input type="text" name="nom_complet_revue" placeholder="Nom de la Revue" value={pub.nom_complet_revue || ''} onChange={(e) => handleNestedChange(e, 'publicationsWebOfScience', index)} />
//           <input type="text" name="vol_issue_pages_annee" placeholder="Volume, Numéro, Pages, Année" value={pub.vol_issue_pages_annee || ''} onChange={(e) => handleNestedChange(e, 'publicationsWebOfScience', index)} />
//         </div>
//       ))}
//       <button type="button" onClick={() => addNestedField('publicationsWebOfScience')}>Ajouter Publication</button>
//     </div>

//     {/* Publications Proceedings */}
//     <div>
//       <label>Publications Proceedings</label>
//       {formData.demandeData.publicationsProceedings?.map((pub, index) => (
//         <div key={index}>
//           <input type="text" name="titre_complet_publication" placeholder="Titre" value={pub.titre_complet_publication || ''} onChange={(e) => handleNestedChange(e, 'publicationsProceedings', index)} />
//           <input type="text" name="auteurs" placeholder="Auteurs" value={pub.auteurs || ''} onChange={(e) => handleNestedChange(e, 'publicationsProceedings', index)} />
//           <input type="text" name="nom_complet_revue" placeholder="Nom de la Revue" value={pub.nom_complet_revue || ''} onChange={(e) => handleNestedChange(e, 'publicationsProceedings', index)} />
//           <input type="text" name="vol_issue_pages_annee" placeholder="Volume, Numéro, Pages, Année" value={pub.vol_issue_pages_annee || ''} onChange={(e) => handleNestedChange(e, 'publicationsProceedings', index)} />
//         </div>
//       ))}
//       <button type="button" onClick={() => addNestedField('publicationsProceedings')}>Ajouter Publication</button>
//     </div>

//     {/* Publications Comité de Lecture */}
//     <div>
//       <label>Publications Comité de Lecture</label>
//       {formData.demandeData.publicationsComiteLecture?.map((pub, index) => (
//         <div key={index}>
//           <input type="text" name="titre_complet_publication" placeholder="Titre" value={pub.titre_complet_publication || ''} onChange={(e) => handleNestedChange(e, 'publicationsComiteLecture', index)} />
//           <input type="text" name="auteurs" placeholder="Auteurs" value={pub.auteurs || ''} onChange={(e) => handleNestedChange(e, 'publicationsComiteLecture', index)} />
//           <input type="text" name="nom_complet_revue" placeholder="Nom de la Revue" value={pub.nom_complet_revue || ''} onChange={(e) => handleNestedChange(e, 'publicationsComiteLecture', index)} />
//           <input type="text" name="vol_issue_pages_annee" placeholder="Volume, Numéro, Pages, Année" value={pub.vol_issue_pages_annee || ''} onChange={(e) => handleNestedChange(e, 'publicationsComiteLecture', index)} />
//         </div>
//       ))}
//       <button type="button" onClick={() => addNestedField('publicationsComiteLecture')}>Ajouter Publication</button>
//     </div>

//     {/* Ouvrages */}
//     <div>
//       <label>Ouvrages</label>
//       {formData.demandeData.ouvrages?.map((ouvrage, index) => (
//         <div key={index}>
//           <input type="text" name="titre_ouvrage" placeholder="Titre de l'Ouvrage" value={ouvrage.titre_ouvrage || ''} onChange={(e) => handleNestedChange(e, 'ouvrages', index)} />
//           <input type="text" name="auteurs" placeholder="Auteurs" value={ouvrage.auteurs || ''} onChange={(e) => handleNestedChange(e, 'ouvrages', index)} />
//           <input type="text" name="maison_edition_isbn_annee_publication" placeholder="Maison d'édition, ISBN, Année de publication" value={ouvrage.maison_edition_isbn_annee_publication || ''} onChange={(e) => handleNestedChange(e, 'ouvrages', index)} />
//         </div>
//       ))}
//       <button type="button" onClick={() => addNestedField('ouvrages')}>Ajouter Ouvrage</button>
//     </div>

//     {/* Communications Scientifiques */}
//     <div>
//       <label>Communications Scientifiques</label>
//       {formData.demandeData.communicationsScientifiques?.map((communication, index) => (
//         <div key={index}>
//           <input type="text" name="titre_complet_communication" placeholder="Titre Complet" value={communication.titre_complet_communication || ''} onChange={(e) => handleNestedChange(e, 'communicationsScientifiques', index)} />
//           <input type="text" name="auteurs" placeholder="Auteurs" value={communication.auteurs || ''} onChange={(e) => handleNestedChange(e, 'communicationsScientifiques', index)} />
//           <input type="text" name="nom_organisation_annee" placeholder="Nom de l'organisation, Année" value={communication.nom_organisation_annee || ''} onChange={(e) => handleNestedChange(e, 'communicationsScientifiques', index)} />
//           <input type="text" name="type_communication" placeholder="Type de Communication" value={communication.type_communication || ''} onChange={(e) => handleNestedChange(e, 'communicationsScientifiques', index)} />
//         </div>
//       ))}
//       <button type="button" onClick={() => addNestedField('communicationsScientifiques')}>Ajouter Communication</button>
//     </div>

//     {/* Thèses Dirigées */}
//     <div>
//       <label>Thèses Dirigées</label>
//       {formData.demandeData.thesesDirigees?.map((these, index) => (
//         <div key={index}>
//           <input type="text" name="nom_prenom_doctorant" placeholder="Nom et Prénom du Doctorant" value={these.nom_prenom_doctorant || ''} onChange={(e) => handleNestedChange(e, 'thesesDirigees', index)} />
//           <input type="text" name="titre_these" placeholder="Titre de la Thèse" value={these.titre_these || ''} onChange={(e) => handleNestedChange(e, 'thesesDirigees', index)} />
//           <input type="text" name="universite" placeholder="Université" value={these.universite || ''} onChange={(e) => handleNestedChange(e, 'thesesDirigees', index)} />
//           <input type="text" name="annee_soutenance" placeholder="Année de Soutenance" value={these.annee_soutenance || ''} onChange={(e) => handleNestedChange(e, 'thesesDirigees', index)} />
//         </div>
//       ))}
//       <button type="button" onClick={() => addNestedField('thesesDirigees')}>Ajouter Thèse</button>
//     </div>

//     {/* Mémoire dirigés */}
//     <div>
//       <label>Mémoires Dirigés</label>
//       {formData.demandeData.memoiresDiriges?.map((memoire, index) => (
//         <div key={index}>
//           <input type="text" name="nom_prenom_etudiant" placeholder="Nom et Prénom de l'Étudiant" value={memoire.nom_prenom_etudiant || ''} onChange={(e) => handleNestedChange(e, 'memoiresDiriges', index)} />
//           <input type="text" name="titre_memoire" placeholder="Titre du Mémoire" value={memoire.titre_memoire || ''} onChange={(e) => handleNestedChange(e, 'memoiresDiriges', index)} />
//           <input type="text" name="universite" placeholder="Université" value={memoire.universite || ''} onChange={(e) => handleNestedChange(e, 'memoiresDiriges', index)} />
//           <input type="text" name="annee_soutenance" placeholder="Année de Soutenance" value={memoire.annee_soutenance || ''} onChange={(e) => handleNestedChange(e, 'memoiresDiriges', index)} />
//         </div>
//       ))}
//       <button type="button" onClick={() => addNestedField('memoiresDiriges')}>Ajouter Mémoire</button>
//     </div>

//     <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddClick}>Soumettre</button>
//   </>
// )}



//       <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddClick}>Soumettre</button>
//     </form>
//   );
// };

// export default DemandeForm;

















//1
import React, { useState } from 'react';
import axios from '../api/axios';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const DemandeForm = () => {
  const [formData, setFormData] = useState({
    type_demande: '',
    demandeData: {
      diplomes_precedents: '',
      specialisation_souhaitee: '',
      notes_transcription: '',
      fichier_demande: null,
      motif_retrait: '',
      date_debut_prevue: '',
      date_retour_prevue: '',
      fichier_demande_retrait: null,
      motif_retrait_definitif: '',
      date_retrait: '',
      observations: '',
      fichier_retrait_definitif: null,
      numero_etudiant: '',
      date_delivrance: '',
      fichier_carte_etudiant: null,
      identifiant_souhaite: '',
      motif_demande: '',
      entreprise_accueil: '',
      periode_stage: '',
      objectifs_stage: '',
      fichier_demande_stage: null,
      universite_partenaire: '',
      pays: '',
      duree_cotutelle: '',
      fichier_demande_cotutelle: null,
      co_directeur_actuel: '',
      nouveau_co_directeur_propose: '',
      motifs_changement: '',
      fichier_demande_changement_codirecteur: null,
      titre_these: '',
      directeur_these: '',
      date_debut_these: '',
      date_prevue_soutenance: '',
      fichiers_cv: null,
      nombre_exemplaires: '',
      date_soutenance: '',
      fichier_demande_tirage: null,
      
    },
    date_soumission: new Date().toISOString(),
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  // const handleDemandeDataChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     demandeData: {
  //       ...formData.demandeData,
  //       [e.target.name]: e.target.value,
  //     },
  //   });
  // };

  const handleNestedChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      demandeData: {
        ...prevFormData.demandeData,
        [name]: value,
      },
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      demandeData: {
        ...prevFormData.demandeData,
        [e.target.name]: e.target.files[0], // Stockez le fichier sélectionné dans state
      },
    }));
  };
  // const addNestedField = (field) => {
  //   setFormData({
  //     ...formData,
  //     demandeData: {
  //       ...formData.demandeData,
  //       [field]: [...(formData.demandeData[field] || []), {}],
  //     },
  //   });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const { type_demande, demandeData, date_soumission } = formData;

      const formDataToSend = new FormData();
      formDataToSend.append('type_demande', type_demande);
      formDataToSend.append('date_soumission', date_soumission);

      for (const key in demandeData) {
        if (demandeData[key] !== null && demandeData[key] !== undefined) {
          if (key === 'fichier_demande' || key === 'fichier_demande_retrait' || key === 'fichier_retrait_definitif' || key === 'fichier_carte_etudiant' || key === 'fichier_demande_changement_sujet'|| key === 'fichier_demande_changement_directeur'|| key === 'fichier_demande_reinscription' || key === 'fichier_demande_stage'|| key === 'fichier_demande_cotutelle'|| key === 'fichier_demande_changement_codirecteur'|| key === 'fichiers_cv'|| key === 'fichier_demande_tirage'|| key === 'Fichier_demande_tirage' ) {
            formDataToSend.append(key, demandeData[key]);
            console.log('FormData:', formData);

          } else {
            formDataToSend.append(`demandeData[${key}]`, demandeData[key]);
          }
        }
      }

      let endpoint = '';
      switch (type_demande) {
        case 'inscription':
          endpoint = '/demandes/inscription';
          break;
        case 'retrait-provisoire':
          endpoint = '/demandes/retrait-provisoire';
          break;
        case 'retrait-definitif':
          endpoint = '/demandes/retrait-definitif';
          break;
        case 'carte-etudiant':
          endpoint = '/demandes/carte-etudiant';
          break;
        case 'email-academique':
          endpoint = '/demandes/email-academique';
          break;
        case 'reinscription-derogation':
          endpoint = '/demandes/reinscription-derogation';
          break;
        case 'changement-sujet-these':
          endpoint = '/demandes/changement-sujet-these';
          break;
        case 'changement-directeur-these':
          endpoint = '/demandes/changement-directeur-these';
          break;
        case 'convention-stage':
          endpoint = '/demandes/convention-stage';
          break;
        case 'cotutelle':
          endpoint = '/demandes/cotutelle';
          break;
        case 'changement-codirecteur-these':
          endpoint = '/demandes/changement-codirecteur-these';
          break;
        case 'imists':
          endpoint = '/demandes/imists';
          break;
        case 'tirage':
          endpoint = '/demandes/tirage';
          break;
        
        default:
          throw new Error('Type de demande inconnu');
      }


      const response = await axios.post(endpoint, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response && response.data) {
        setSuccessMessage('Demande créée avec succès');
        // Réinitialiser le formulaire ou effectuer d'autres actions nécessaires après la création réussie
      } else {
        throw new Error('Aucune donnée dans la réponse');
      }
    } catch (error) {
      setErrorMessage(error.message || 'Erreur lors de la création de la demande');
      console.error('Erreur  création de la demande:', error);
    }
  };
  
  // const navigate = useNavigate(); // Hook pour la navigation

  // const handleAddClick = () => {
  //   navigate('DemandeTable'); // Rediriger vers la page DemandeTable
  // };
  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data" className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Nouvelle Demande</h2>
      <Outlet />
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      <div className="mb-4">
        <label className="block text-gray-700">Type de Demande</label>
        <select name="type_demande" value={formData.type_demande} onChange={handleChange} required className="input-field">
          <option value="">Sélectionner</option>
          <option value="inscription">Inscription</option>
          <option value="retrait-provisoire">Retrait Provisoire</option>
          <option value="retrait-definitif">Retrait Définitif</option>
          <option value="carte-etudiant">Carte Étudiant</option>
          <option value="email-academique">Email Académique</option>
          <option value="reinscription-derogation">Réinscription Dérogation</option>
          <option value="changement-sujet-these">Changement Sujet Thèse</option>
          <option value="changement-directeur-these">Changement Directeur Thèse</option>
          <option value="convention-stage">Convention de Stage</option>
          <option value="cotutelle">Cotutelle</option>
          <option value="changement-codirecteur-these">Changement Codirecteur Thèse</option>
          <option value="imists">IMIST</option>
          <option value="tirage">Tirage</option>
        </select>
      </div>

      {formData.type_demande === 'inscription' && (
        <>
          <div className="mb-4">
            <label className="block text-gray-700">Diplômes Précédents</label>
            <textarea name="diplomes_precedents" value={formData.demandeData.diplomes_precedents} onChange={handleNestedChange} required className="input-field"></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Spécialisation Souhaitée</label>
            <input type="text" name="specialisation_souhaitee" value={formData.demandeData.specialisation_souhaitee} onChange={handleNestedChange} required className="input-field" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Notes de Transcription</label>
            <textarea name="notes_transcription" value={formData.demandeData.notes_transcription} onChange={handleNestedChange} required className="input-field"></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Fichier de Demande (PDF)</label>
            <input type="file" name="fichier_demande" accept=".pdf" onChange={handleFileChange} className="input-field" />
          </div>
        </>
      )}

      {formData.type_demande === 'retrait-provisoire' && (
        <>
          <div className="mb-4">
            <label className="block text-gray-700">Motif de Retrait</label>
            <textarea name="motif_retrait" value={formData.demandeData.motif_retrait} onChange={handleNestedChange} required className="input-field"></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Date de Début Prévue</label>
            <input type="date" name="date_debut_prevue" value={formData.demandeData.date_debut_prevue} onChange={handleNestedChange} required className="input-field" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Date de Retour Prévue</label>
            <input type="date" name="date_retour_prevue" value={formData.demandeData.date_retour_prevue} onChange={handleNestedChange} required className="input-field" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Fichier de Demande de Retrait (PDF)</label>
            <input type="file" name="fichier_demande_retrait" accept=".pdf" onChange={handleFileChange} className="input-field" />
          </div>
        </>
      )}

      {formData.type_demande === 'retrait-definitif' && (
        <>
          <div className="mb-4">
            <label className="block text-gray-700">Motif de Retrait Définitif</label>
            <textarea name="motif_retrait_definitif" value={formData.demandeData.motif_retrait_definitif} onChange={handleNestedChange} required className="input-field"></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Date de Retrait Définitif</label>
            <input type="date" name="date_retrait" value={formData.demandeData.date_retrait} onChange={handleNestedChange} required className="input-field" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Observations</label>
            <textarea name="observations" value={formData.demandeData.observations} onChange={handleNestedChange} className="input-field"></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Fichier de Retrait Définitif (PDF)</label>
            <input type="file" name="fichier_retrait_definitif" accept=".pdf" onChange={handleFileChange} className="input-field" />
          </div>
        </>
      )}

      {formData.type_demande === 'carte-etudiant' && (
        <>
          <div className="mb-4">
            <label className="block text-gray-700">Numéro Étudiant</label>
            <input type="text" name="numero_etudiant" value={formData.demandeData.numero_etudiant} onChange={handleNestedChange} required className="input-field" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Date de Délivrance</label>
            <input type="date" name="date_delivrance" value={formData.demandeData.date_delivrance} onChange={handleNestedChange} required className="input-field" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Fichier de Carte Étudiant (PDF)</label>
            <input type="file" name="fichier_carte_etudiant" accept=".pdf" onChange={handleFileChange} className="input-field" />
          </div>
        </>
      )}

      {formData.type_demande === 'email-academique' && (
        <>
          <div className="mb-4">
            <label className="block text-gray-700">Identifiant Souhaité</label>
            <input type="text" name="identifiant_souhaite" value={formData.demandeData.identifiant_souhaite} onChange={handleNestedChange} required className="input-field" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Motif de la Demande</label>
            <textarea name="motif_demande" value={formData.demandeData.motif_demande} onChange={handleNestedChange} className="input-field"></textarea>
          </div>
        </>
      )}
      {formData.type_demande === 'reinscription-derogation' && (
  <>
    <div className="mb-4">
      <label className="block text-gray-700">Année Académique</label>
      <input type="text" name="annee_academique" value={formData.demandeData.annee_academique} onChange={handleNestedChange} required className="input-field" />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700">Motif</label>
      <textarea name="motif" value={formData.demandeData.motif} onChange={handleNestedChange} required className="input-field"></textarea>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700">Décision Prise</label>
      <input type="text" name="decision_prise" value={formData.demandeData.decision_prise} onChange={handleNestedChange} className="input-field" />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700">Fichier de Demande (PDF)</label>
      <input type="file" name="fichier_demande" accept=".pdf" onChange={handleFileChange} className="input-field" />
    </div>
  </>
)} 
{formData.type_demande === 'changement-sujet-these' && (
  <>
    <div className="mb-4">
      <label className="block text-gray-700">Sujet Actuel</label>
      <input type="text" name="sujet_actuel" value={formData.demandeData.sujet_actuel} onChange={handleNestedChange} required className="input-field" />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700">Nouveau Sujet Proposé</label>
      <input type="text" name="nouveau_sujet_propose" value={formData.demandeData.nouveau_sujet_propose} onChange={handleNestedChange} required className="input-field" />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700">Justification</label>
      <textarea name="justification" value={formData.demandeData.justification} onChange={handleNestedChange} required className="input-field"></textarea>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700">Fichier de Demande (PDF)</label>
      <input type="file" name="fichier_demande" accept=".pdf" onChange={handleFileChange} className="input-field" />
    </div>
  </>
)}
{formData.type_demande === 'changement-directeur-these' && (
  <>
    <div className="mb-4">
      <label className="block text-gray-700">Directeur Actuel</label>
      <input type="text" name="directeur_actuel" value={formData.demandeData.directeur_actuel} onChange={handleNestedChange} required className="input-field" />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700">Nouveau Directeur Proposé</label>
      <input type="text" name="nouveau_directeur_propose" value={formData.demandeData.nouveau_directeur_propose} onChange={handleNestedChange} required className="input-field" />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700">Raisons du Changement</label>
      <textarea name="raisons_changement" value={formData.demandeData.raisons_changement} onChange={handleNestedChange} required className="input-field"></textarea>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700">Fichier de Demande (PDF)</label>
      <input type="file" name="fichier_demande_changement_directeur" accept=".pdf" onChange={handleFileChange} className="input-field" />
    </div>
  </>
)} {formData.type_demande === 'convention-stage' && (
    <>
      <input type="text" name="entreprise_accueil" placeholder="Entreprise d'accueil" value={formData.demandeData.entreprise_accueil} onChange={handleNestedChange} />
      <input type="text" name="periode_stage" placeholder="Période de stage" value={formData.demandeData.periode_stage} onChange={handleNestedChange} />
      <input type="text" name="objectifs_stage" placeholder="Objectifs de stage" value={formData.demandeData.objectifs_stage} onChange={handleNestedChange} />
      <input type="file" name="fichier_demande_stage" onChange={handleFileChange} />
    </>
  )}

  {formData.type_demande === 'cotutelle' && (
    <>
      <input type="text" name="universite_partenaire" placeholder="Université partenaire" value={formData.demandeData.universite_partenaire} onChange={handleNestedChange} />
      <input type="text" name="pays" placeholder="Pays" value={formData.demandeData.pays} onChange={handleNestedChange} />
      <input type="text" name="duree_cotutelle" placeholder="Durée de la cotutelle" value={formData.demandeData.duree_cotutelle} onChange={handleNestedChange} />
      <input type="file" name="fichier_demande_cotutelle" onChange={handleFileChange} />
    </>
  )}

  {formData.type_demande === 'changement-codirecteur-these' && (
    <>
      <input type="text" name="co_directeur_actuel" placeholder="Co-directeur actuel" value={formData.demandeData.co_directeur_actuel} onChange={handleNestedChange} />
      <input type="text" name="nouveau_co_directeur_propose" placeholder="Nouveau co-directeur proposé" value={formData.demandeData.nouveau_co_directeur_propose} onChange={handleNestedChange} />
      <input type="text" name="motifs_changement" placeholder="Motifs du changement" value={formData.demandeData.motifs_changement} onChange={handleNestedChange} />
      <input type="file" name="fichier_demande_changement_codirecteur" onChange={handleFileChange} />
    </>
  )}

  {formData.type_demande === 'imists' && (
    <>
      <input type="text" name="titre_these" placeholder="Titre de la thèse" value={formData.demandeData.titre_these} onChange={handleNestedChange} />
      <input type="text" name="directeur_these" placeholder="Directeur de thèse" value={formData.demandeData.directeur_these} onChange={handleNestedChange} />
      <input type="date" name="date_debut_these" placeholder="Date de début" value={formData.demandeData.date_debut_these} onChange={handleNestedChange} />
      <input type="date" name="date_prevue_soutenance" placeholder="Date prévue de soutenance" value={formData.demandeData.date_prevue_soutenance} onChange={handleNestedChange} />
      <input type="file" name="fichiers_cv" onChange={handleFileChange} />
    </>
  )}

  {formData.type_demande === 'tirage' && (
    <>
      <input type="text" name="titre_these" placeholder="Titre de la thèse" value={formData.demandeData.titre_these} onChange={handleNestedChange} />
      <input type="number" name="nombre_exemplaires" placeholder="Nombre d'exemplaires" value={formData.demandeData.nombre_exemplaires} onChange={handleNestedChange} />
      <input type="date" name="date_soutenance" placeholder="Date de soutenance" value={formData.demandeData.date_soutenance} onChange={handleNestedChange} />
      <input type="file" name="fichier_demande" onChange={handleFileChange} />
    </>
  )}
  


      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Soumettre</button>
    </form>
  );
};

export default DemandeForm;























// import React, { useState } from 'react';
// import axios from '../api/axios';
// import { Outlet } from 'react-router-dom';

// const DemandeForm = () => {
//   const [formData, setFormData] = useState({
//     type_demande: '',
//     demandeData: {
//       diplomes_precedents: '',
//       specialisation_souhaitee: '',
//       notes_transcription: '',
//       fichier_demande: null,
//       motif_retrait: '',
//       date_debut_prevue: '',
//       date_retour_prevue: '',
//       fichier_demande_retrait: null,
//       motif_retrait_definitif: '',
//       date_retrait: '',
//       observations: '',
//       fichier_retrait_definitif: null,
//       numero_etudiant: '',
//       date_delivrance: '',
//       fichier_carte_etudiant: null,
//       identifiant_souhaite: '',
//       motif_demande: '',
//       entreprise_accueil: '',
//       periode_stage: '',
//       objectifs_stage: '',
//       fichier_demande_stage: null,
//       universite_partenaire: '',
//       pays: '',
//       duree_cotutelle: '',
//       fichier_demande_cotutelle: null,
//       co_directeur_actuel: '',
//       nouveau_co_directeur_propose: '',
//       motifs_changement: '',
//       fichier_demande_changement_codirecteur: null,
//       titre_these: '',
//       directeur_these: '',
//       date_debut_these: '',
//       date_prevue_soutenance: '',
//       fichiers_cv: null,
//       nombre_exemplaires: '',
//       date_soutenance: '',
//       fichier_demande_tirage: null,
//     },
//     date_soumission: new Date().toISOString(),
//   });

//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleNestedChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       demandeData: {
//         ...prevFormData.demandeData,
//         [name]: value,
//       },
//     }));
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setFormData({
//       ...formData,
//       demandeData: {
//         ...formData.demandeData,
//         [e.target.name]: file,
//       },
//     });
//   };
  

// //   const handleFileChange = (e) => {
// //   const file = e.target.files[0];
// //   setFormData({
// //     ...formData,
// //     demandeData: {
// //       ...formData.demandeData,
// //       [e.target.name]: file,
// //     },
// //   });
// // };


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMessage('');
//     setSuccessMessage('');
  
//     try {
//       const { type_demande, demandeData, date_soumission } = formData;
  
//       // Créez d'abord le FormData pour le fichier
//       const formDataForFile = new FormData();
//       for (const key in demandeData) {
//         if (demandeData[key] instanceof File) {
//           formDataForFile.append(key, demandeData[key]);
//         }
//       }
  
//       // Téléchargez les fichiers
//       const uploadResponse = await axios.post('/upload', formDataForFile, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       let fileUrl;
//       // Récupérez les URLs des fichiers
//       fileUrl = uploadResponse.data.fileUrl;
//       // Créez le FormData pour la demande avec les URLs des fichiers
//       const formDataForRequest = new FormData();
//       formDataForRequest.append('type_demande', type_demande);
//       formDataForRequest.append('date_soumission', date_soumission);
  
//       for (const key in demandeData) {
//         if (demandeData[key] instanceof File) {
//           // Remplacez les fichiers par leurs URLs
//           formDataForRequest.append(`demandeData[${key}]`, fileUrl[key]);
//         } else {
//           formDataForRequest.append(`demandeData[${key}]`, demandeData[key]);
//         }
//       }
  
//       let endpoint = '';
//       switch (type_demande) {
//         case 'inscription':
//           endpoint = '/demandes/inscription';
//           break;
//         case 'retrait-provisoire':
//           endpoint = '/demandes/retrait-provisoire';
//           break;
//         case 'retrait-definitif':
//           endpoint = '/demandes/retrait-definitif';
//           break;
//         case 'carte-etudiant':
//           endpoint = '/demandes/carte-etudiant';
//           break;
//         case 'email-academique':
//           endpoint = '/demandes/email-academique';
//           break;
//         case 'reinscription-derogation':
//           endpoint = '/demandes/reinscription-derogation';
//           break;
//         case 'changement-sujet-these':
//           endpoint = '/demandes/changement-sujet-these';
//           break;
//         case 'changement-directeur-these':
//           endpoint = '/demandes/changement-directeur-these';
//           break;
//         case 'convention-stage':
//           endpoint = '/demandes/convention-stage';
//           break;
//         case 'cotutelle':
//           endpoint = '/demandes/cotutelle';
//           break;
//         case 'changement-codirecteur-these':
//           endpoint = '/demandes/changement-codirecteur-these';
//           break;
//         case 'imists':
//           endpoint = '/demandes/imists';
//           break;
//         case 'tirage':
//           endpoint = '/demandes/tirage';
//           break;
//         default:
//           throw new Error('Type de demande inconnu');
//       }
  
//       // Créez la demande
//       const response = await axios.post(endpoint, formDataForRequest, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
  
//       if (response && response.data) {
//         setSuccessMessage('Demande créée avec succès');
//         // Réinitialiser le formulaire ou effectuer d'autres actions nécessaires après la création réussie
//       } else {
//         throw new Error('Aucune donnée dans la réponse');
//       }
//     } catch (error) {
//       setErrorMessage(error.message || 'Erreur lors de la création de la demande');
//       console.error('Erreur lors de la création de la demande:', error);
//     }
//   };
  

//   return (
//     <form onSubmit={handleSubmit} encType="multipart/form-data" className="bg-white shadow-md rounded-lg p-6">
//       <h2 className="text-2xl font-bold mb-4">Nouvelle Demande</h2>
//       <Outlet />
//       {errorMessage && <p className="text-red-500">{errorMessage}</p>}
//       {successMessage && <p className="text-green-500">{successMessage}</p>}
//       <div className="mb-4">
//         <label className="block text-gray-700">Type de Demande</label>
//         <select name="type_demande" value={formData.type_demande} onChange={handleChange} required className="input-field">
//           <option value="">Sélectionner</option>
//           <option value="inscription">Inscription</option>
//           <option value="retrait-provisoire">Retrait Provisoire</option>
//           <option value="retrait-definitif">Retrait Définitif</option>
//           <option value="carte-etudiant">Carte Étudiant</option>
//           <option value="email-academique">Email Académique</option>
//           <option value="reinscription-derogation">Réinscription Dérogation</option>
//           <option value="changement-sujet-these">Changement Sujet Thèse</option>
//           <option value="changement-directeur-these">Changement Directeur Thèse</option>
//           <option value="convention-stage">Convention de Stage</option>
//           <option value="cotutelle">Cotutelle</option>
//           <option value="changement-codirecteur-these">Changement Codirecteur Thèse</option>
//           <option value="imists">IMIST</option>
//           <option value="tirage">Tirage</option>
//         </select>
//       </div>

//       {/* Affichage des champs en fonction du type de demande */}
//       {formData.type_demande === 'inscription' && (
//         <>
//           <div className="mb-4">
//             <label className="block text-gray-700">Diplômes Précédents</label>
//             <textarea name="diplomes_precedents" value={formData.demandeData.diplomes_precedents} onChange={handleNestedChange} required className="input-field"></textarea>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Spécialisation Souhaitée</label>
//             <input type="text" name="specialisation_souhaitee" value={formData.demandeData.specialisation_souhaitee} onChange={handleNestedChange} required className="input-field" />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Notes de Transcription</label>
//             <textarea name="notes_transcription" value={formData.demandeData.notes_transcription} onChange={handleNestedChange} required className="input-field"></textarea>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Fichier de Demande</label>
//             <input type="file" name="fichier_demande" onChange={handleFileChange} required className="input-field" />
//           </div>
//         </>
//       )}

//       {formData.type_demande === 'retrait-provisoire' && (
//         <>
//           <div className="mb-4">
//             <label className="block text-gray-700">Motif de Retrait</label>
//             <textarea name="motif_retrait" value={formData.demandeData.motif_retrait} onChange={handleNestedChange} required className="input-field"></textarea>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Date de Début Prévue</label>
//             <input type="date" name="date_debut_prevue" value={formData.demandeData.date_debut_prevue} onChange={handleNestedChange} required className="input-field" />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Date de Retour Prévue</label>
//             <input type="date" name="date_retour_prevue" value={formData.demandeData.date_retour_prevue} onChange={handleNestedChange} required className="input-field" />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Fichier de Demande de Retrait</label>
//             <input type="file" name="fichier_demande_retrait" onChange={handleFileChange} required className="input-field" />
//           </div>
//         </>
//       )}

//       {formData.type_demande === 'retrait-definitif' && (
//         <>
//           <div className="mb-4">
//             <label className="block text-gray-700">Motif de Retrait</label>
//             <textarea name="motif_retrait_definitif" value={formData.demandeData.motif_retrait_definitif} onChange={handleNestedChange} required className="input-field"></textarea>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Date de Retrait</label>
//             <input type="date" name="date_retrait" value={formData.demandeData.date_retrait} onChange={handleNestedChange} required className="input-field" />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Observations</label>
//             <textarea name="observations" value={formData.demandeData.observations} onChange={handleNestedChange} className="input-field"></textarea>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Fichier de Retrait Définitif</label>
//             <input type="file" name="fichier_retrait_definitif" onChange={handleFileChange} required className="input-field" />
//           </div>
//         </>
//       )}

//       {formData.type_demande === 'carte-etudiant' && (
//         <>
//           <div className="mb-4">
//             <label className="block text-gray-700">Numéro d'Étudiant</label>
//             <input type="text" name="numero_etudiant" value={formData.demandeData.numero_etudiant} onChange={handleNestedChange} required className="input-field" />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Date de Délivrance</label>
//             <input type="date" name="date_delivrance" value={formData.demandeData.date_delivrance} onChange={handleNestedChange} required className="input-field" />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Fichier de Carte Étudiant</label>
//             <input type="file" name="fichier_carte_etudiant" onChange={handleFileChange} required className="input-field" />
//           </div>
//         </>
//       )}

//       {formData.type_demande === 'email-academique' && (
//         <>
//           <div className="mb-4">
//             <label className="block text-gray-700">Identifiant Souhaité</label>
//             <input type="text" name="identifiant_souhaite" value={formData.demandeData.identifiant_souhaite} onChange={handleNestedChange} required className="input-field" />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Motif de Demande</label>
//             <textarea name="motif_demande" value={formData.demandeData.motif_demande} onChange={handleNestedChange} required className="input-field"></textarea>
//           </div>
//         </>
//       )}

//       {formData.type_demande === 'reinscription-derogation' && (
//         <>
//           <div className="mb-4">
//             <label className="block text-gray-700">Année Académique</label>
//             <input type="number" name="annee_academique" value={formData.demandeData.annee_academique} onChange={handleNestedChange} required className="input-field" />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Motif</label>
//             <textarea name="motif" value={formData.demandeData.motif} onChange={handleNestedChange} required className="input-field"></textarea>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Décision Prise</label>
//             <textarea name="decision_prise" value={formData.demandeData.decision_prise} onChange={handleNestedChange} className="input-field"></textarea>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Fichier de Demande de Réinscription</label>
//             <input type="file" name="fichier_demande_reinscription" onChange={handleFileChange} required className="input-field" />
//           </div>
//         </>
//       )}

//       {formData.type_demande === 'changement-sujet-these' && (
//         <>
//           <div className="mb-4">
//             <label className="block text-gray-700">Sujet Actuel</label>
//             <textarea name="sujet_actuel" value={formData.demandeData.sujet_actuel} onChange={handleNestedChange} required className="input-field"></textarea>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Nouveau Sujet Proposé</label>
//             <textarea name="nouveau_sujet_propose" value={formData.demandeData.nouveau_sujet_propose} onChange={handleNestedChange} required className="input-field"></textarea>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Justification</label>
//             <textarea name="justification" value={formData.demandeData.justification} onChange={handleNestedChange} required className="input-field"></textarea>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Fichier de Demande de Changement de Sujet</label>
//             <input type="file" name="fichier_demande_changement_sujet" onChange={handleFileChange} required className="input-field" />
//           </div>
//         </>
//       )}

//       {formData.type_demande === 'changement-directeur-these' && (
//         <>
//           <div className="mb-4">
//             <label className="block text-gray-700">Directeur Actuel</label>
//             <input type="text" name="directeur_actuel" value={formData.demandeData.directeur_actuel} onChange={handleNestedChange} required className="input-field" />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Nouveau Directeur Proposé</label>
//             <input type="text" name="nouveau_directeur_propose" value={formData.demandeData.nouveau_directeur_propose} onChange={handleNestedChange} required className="input-field" />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Raisons du Changement</label>
//             <textarea name="raisons_changement" value={formData.demandeData.raisons_changement} onChange={handleNestedChange} required className="input-field"></textarea>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Fichier de Demande de Changement de Directeur</label>
//             <input type="file" name="fichier_demande_changement_directeur" onChange={handleFileChange} required className="input-field" />
//           </div>
//         </>
//       )}

//       {formData.type_demande === 'convention-stage' && (
//         <>
//           <div className="mb-4">
//             <label className="block text-gray-700">Entreprise d'Accueil</label>
//             <input type="text" name="entreprise_accueil" value={formData.demandeData.entreprise_accueil} onChange={handleNestedChange} required className="input-field" />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Période du Stage</label>
//             <input type="date" name="periode_stage" value={formData.demandeData.periode_stage} onChange={handleNestedChange} required className="input-field" />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Objectifs du Stage</label>
//             <textarea name="objectifs_stage" value={formData.demandeData.objectifs_stage} onChange={handleNestedChange} required className="input-field"></textarea>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Fichier de Demande de Stage</label>
//             <input type="file" name="fichier_demande_stage" onChange={handleFileChange} required className="input-field" />
//           </div>
//         </>
//       )}

//       {formData.type_demande === 'cotutelle' && (
//         <>
//           <div className="mb-4">
//             <label className="block text-gray-700">Université Partenaire</label>
//             <input type="text" name="universite_partenaire" value={formData.demandeData.universite_partenaire} onChange={handleNestedChange} required className="input-field" />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Pays</label>
//             <input type="text" name="pays" value={formData.demandeData.pays} onChange={handleNestedChange} required className="input-field" />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Durée de Cotutelle</label>
//             <input type="text" name="duree_cotutelle" value={formData.demandeData.duree_cotutelle} onChange={handleNestedChange} required className="input-field" />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Fichier de Demande de Cotutelle</label>
//             <input type="file" name="fichier_demande_cotutelle" onChange={handleFileChange} required className="input-field" />
//           </div>
//         </>
//       )}

//       {formData.type_demande === 'changement-co-directeur-these' && (
//         <>
//           <div className="mb-4">
//             <label className="block text-gray-700">Co-directeur Actuel</label>
//             <input type="text" name="co_directeur_actuel" value={formData.demandeData.co_directeur_actuel} onChange={handleNestedChange} required className="input-field" />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Nouveau Co-directeur Proposé</label>
//             <input type="text" name="nouveau_co_directeur_propose" value={formData.demandeData.nouveau_co_directeur_propose} onChange={handleNestedChange} required className="input-field" />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Motifs du Changement</label>
//             <textarea name="motifs_changement" value={formData.demandeData.motifs_changement} onChange={handleNestedChange} required className="input-field"></textarea>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Fichier de Demande de Changement de Co-directeur</label>
//             <input type="file" name="fichier_demande_changement_codirecteur" onChange={handleFileChange} required className="input-field" />
//           </div>
//         </>
//       )}

//       {formData.type_demande === 'imists' && (
//         <>
//           <div className="mb-4">
//             <label className="block text-gray-700">Date de Début de Thèse</label>
//             <input type="date" name="date_debut_these" value={formData.demandeData.date_debut_these} onChange={handleNestedChange} required className="input-field" />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Date Prévue de Soutenance</label>
//             <input type="date" name="date_prevue_soutenance" value={formData.demandeData.date_prevue_soutenance} onChange={handleNestedChange} required className="input-field" />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Fichiers du CV</label>
//             <input type="file" name="fichiers_cv" onChange={handleFileChange} multiple required className="input-field" />
//           </div>
//         </>
//       )}

//       {formData.type_demande === 'tirage' && (
//         <>
//           <div className="mb-4">
//             <label className="block text-gray-700">Titre de Thèse</label>
//             <input type="text" name="titre_these" value={formData.demandeData.titre_these} onChange={handleNestedChange} required className="input-field" />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Nombre d'Exemplaires</label>
//             <input type="number" name="nombre_exemplaires" value={formData.demandeData.nombre_exemplaires} onChange={handleNestedChange} required className="input-field" />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Date de Soutenance</label>
//             <input type="date" name="date_soutenance" value={formData.demandeData.date_soutenance} onChange={handleNestedChange} required className="input-field" />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Fichier de Demande de Tirage</label>
//             <input type="file" name="fichier_demande_tirage" onChange={handleFileChange} required className="input-field" />
//           </div>
//         </>
//       )}

//       <button type="submit" className="btn-primary">Soumettre</button>
//     </form>
//   );
// };

// export default DemandeForm;
