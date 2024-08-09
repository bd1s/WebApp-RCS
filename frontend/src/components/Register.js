// // src/components/Register.jsx
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
//     role: 'Doctorant' // Valeur par défaut
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
//               <option value="Administrateur">Administrateur</option>
//               <option value="Enseignant">Enseignant</option>
//             </select>
//           </div>
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
    departement: '' ,
    departement_enseignement: '', // Ajouté pour Enseignant
    specialisation: ''// Ajouté pour Administrateur
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/auth/register', formData);
      console.log(response.data);
      // Handle success, e.g., show a success message or redirect to login
      navigate('/login'); // Redirection après succès de l'inscription
    } catch (error) {
      console.error('Registration error:', error.response.data);
      // Handle error, e.g., show an error message
    }
  };

  return (
    <div className="flex flex-col pt-4 h-full w-9/12">
      <Header />
      <div className="flex flex-col items-center bg-[#9CD8ED] w-fit p-24 self-center justify-self-center rounded-3xl gap-4">
        <h2 className="text-6xl">Inscription</h2>
        <form className="flex flex-col gap-1 w-96 items-center" onSubmit={handleSubmit}>
          <div className="form-group w-full ">
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
          <div className="form-group w-full ">
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
          <div className="form-group w-full ">
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
          </div>
          <div className="form-group w-full ">
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
          <div className="form-group w-full ">
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
          <div className="form-group w-full ">
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
      </div>
    </div>
  );
};

export default Register;

