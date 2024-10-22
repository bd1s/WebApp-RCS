// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Header from "./atoms/header";
// import axios from '../api/axios';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     prenom: '',
//     nom: '',
//     tele: '',
//     role: 'Doctorant', // Valeur par défaut
//     role_administratif: '', // Ajouté pour Administrateur
//     departement: '' ,
//     departement_enseignement: '', // Ajouté pour Enseignant
//     specialisation: ''// Ajouté pour Administrateur
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/auth/register', formData);
//       console.log(response.data);
//       // Handle success, e.g., show a success message or redirect to login
//       navigate('/login'); // Redirection après succès de l'inscription
//     } catch (error) {
//       console.error('Registration error:', error.response.data);
//       // Handle error, e.g., show an error message
//     }
//   };

//   return (
//     <div className="flex flex-col pt-4 h-full w-9/12">
//       <Header />
//       <div className="flex flex-col items-center bg-[#9CD8ED] w-fit p-24 self-center justify-self-center rounded-3xl gap-4">
//         <h2 className="text-6xl">Inscription</h2>
//         <form className="flex flex-col gap-1 w-96 items-center" onSubmit={handleSubmit}>
//           <div className="form-group w-full ">
//             <label htmlFor="nom">Nom</label>
//             <input 
//               type="text" 
//               className="form-control" 
//               id="nom" 
//               placeholder="Nom"
//               value={formData.nom}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group w-full ">
//             <label htmlFor="prenom">Prénom</label>
//             <input 
//               type="text" 
//               className="form-control" 
//               id="prenom" 
//               placeholder="Prénom"
//               value={formData.prenom}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group w-full ">
//             <label htmlFor="email">Email</label>
//             <input 
//               type="email" 
//               className="form-control" 
//               id="email" 
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group w-full ">
//             <label htmlFor="password">Mot de passe</label>
//             <input 
//               type="password" 
//               className="form-control" 
//               id="password" 
//               placeholder="Mot de passe"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group w-full ">
//             <label htmlFor="tele">Téléphone</label>
//             <input 
//               type="tel" 
//               className="form-control" 
//               id="tele" 
//               placeholder="Téléphone"
//               value={formData.tele}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group w-full ">
//             <label htmlFor="role">Rôle</label>
//             <select 
//               id="role" 
//               className="form-control" 
//               value={formData.role} 
//               onChange={handleChange}
//               required
//             >
//               <option value="Doctorant">Doctorant</option>
//               <option value="Admin">Administrateur</option>
//               <option value="Enseignant">Enseignant</option>
//             </select>
//           </div>
          
//           {/* Afficher les champs spécifiques en fonction du rôle */}
//           {formData.role === 'Admin' && (
//             <>
//               <div className="form-group w-full">
//                 <label htmlFor="role_administratif">Rôle Administratif</label>
//                 <input 
//                   type="text" 
//                   className="form-control" 
//                   id="role_administratif" 
//                   placeholder="Rôle Administratif"
//                   value={formData.role_administratif}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="form-group w-full">
//                 <label htmlFor="departement">Département</label>
//                 <input 
//                   type="text" 
//                   className="form-control" 
//                   id="departement" 
//                   placeholder="Département"
//                   value={formData.departement}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </>
//           )}
//           {formData.role === 'Enseignant' && (
//             <>
//               <div className="form-group w-full">
//                 <label htmlFor="departement_enseignement">Département d'enseignement</label>
//                 <input 
//                   type="text" 
//                   className="form-control" 
//                   id="departement_enseignement" 
//                   placeholder="Département d'enseignement"
//                   value={formData.departement_enseignement}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="form-group w-full">
//                 <label htmlFor="specialisation">Spécialisation</label>
//                 <input 
//                   type="text" 
//                   className="form-control" 
//                   id="specialisation" 
//                   placeholder="Spécialisation"
//                   value={formData.specialisation}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </>
//           )}
          
//           <button
//             type="submit"
//             className="btn btn-primary bg-[#11A86D] border-0 hover:bg-[#29CD8D]"
//           >
//             S'inscrire
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "./atoms/header";
import axios from '../api/axios';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    prenom: '',
    nom: '',
    tele: '',
    role: 'Doctorant', // Valeur par défaut
    role_administratif: '', // Ajouté pour Administrateur
    departement: '',
    departement_enseignement: '', // Ajouté pour Enseignant
    specialisation: '' // Ajouté pour Administrateur
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false); // État pour gérer l'affichage de la modale
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérification de l'email institutionnel
    if (!formData.email.endsWith('@ucd.ac.ma')) {
      setErrorMessage("L'email doit appartenir à l'Université Chouaib Doukkali (doit contenir '@ucd.ac.ma').");
      return;
    }

    try {
      const response = await axios.post('/auth/register', formData);
      console.log(response.data);
      // Afficher la modale au lieu de rediriger immédiatement
      setShowModal(true);
    } catch (error) {
      console.error('Registration error:', error.response.data);
      setErrorMessage('Une erreur est survenue lors de l\'inscription.');
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    navigate('/login'); // Rediriger après fermeture de la modale
  };

  return (
    <div className="flex flex-col pt-4 h-full w-9/12">
      <Header />
      <div className="flex flex-col items-center bg-[#9CD8ED] w-fit p-24 self-center justify-self-center rounded-3xl gap-4">
        <h2 className="text-6xl">Inscription</h2>
        {errorMessage && (
          <div className="text-red-500 mb-4">
            {errorMessage}
          </div>
        )}
        <form className="flex flex-col gap-1 w-96 items-center" onSubmit={handleSubmit}>
          <div className="form-group w-full">
            <label htmlFor="nom">Nom</label>
            <input 
              type="text" 
              className="form-control" 
              id="nom" 
              placeholder="Nom"
              value={formData.nom}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group w-full">
            <label htmlFor="prenom">Prénom</label>
            <input 
              type="text" 
              className="form-control" 
              id="prenom" 
              placeholder="Prénom"
              value={formData.prenom}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group w-full">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <small className="text-gray-500">
              Veuillez utiliser votre adresse e-mail institutionnelle se terminant par <strong>@ucd.ac.ma</strong>.
            </small>
          </div>
          <div className="form-group w-full">
            <label htmlFor="password">Mot de passe</label>
            <input 
              type="password" 
              className="form-control" 
              id="password" 
              placeholder="Mot de passe"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group w-full">
            <label htmlFor="tele">Téléphone</label>
            <input 
              type="tel" 
              className="form-control" 
              id="tele" 
              placeholder="Téléphone"
              value={formData.tele}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group w-full">
            <label htmlFor="role">Rôle</label>
            <select 
              id="role" 
              className="form-control" 
              value={formData.role} 
              onChange={handleChange}
              required
            >
              <option value="Doctorant">Doctorant</option>
              <option value="Admin">Administrateur</option>
              <option value="Enseignant">Enseignant</option>
            </select>
          </div>
          
          {/* Afficher les champs spécifiques en fonction du rôle */}
          {formData.role === 'Admin' && (
            <>
              <div className="form-group w-full">
                <label htmlFor="role_administratif">Rôle Administratif</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="role_administratif" 
                  placeholder="Rôle Administratif"
                  value={formData.role_administratif}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group w-full">
                <label htmlFor="departement">Département</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="departement" 
                  placeholder="Département"
                  value={formData.departement}
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}
          {formData.role === 'Enseignant' && (
            <>
              <div className="form-group w-full">
                <label htmlFor="departement_enseignement">Département d'enseignement</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="departement_enseignement" 
                  placeholder="Département d'enseignement"
                  value={formData.departement_enseignement}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group w-full">
                <label htmlFor="specialisation">Spécialisation</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="specialisation" 
                  placeholder="Spécialisation"
                  value={formData.specialisation}
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}
          
          <button
            type="submit"
            className="btn btn-primary bg-[#11A86D] border-0 hover:bg-[#29CD8D]"
          >
            S'inscrire
          </button>
        </form>

        {/* Modale de confirmation */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold">Inscription réussie !</h3>
              <p className="mt-4">Merci pour votre inscription. Veuillez vérifier votre boîte e-mail pour activer votre compte.</p>
              <button
                onClick={handleModalClose}
                className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;

