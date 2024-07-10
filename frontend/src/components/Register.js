// // src/components/Register.jsx
// import React from "react";
// import Header from "./atoms/header";

// const Register = () => {
//   return (
//     <div className="flex flex-col pt-4 h-full w-9/12">
//       <Header />
//       <div className="flex flex-col items-center bg-[#9CD8ED] w-fit p-24 self-center justify-self-center rounded-3xl gap-4">
//         <h2 className="text-6xl">Inscription</h2>
//         <form className="flex flex-col gap-1 w-96 items-center">
//           <div className="form-group w-full ">
//             <label htmlFor="text">Nom</label>
//             <input type="text" className="form-control" id="nom" />
//           </div>
//           <div className="form-group w-full ">
//             <label htmlFor="text">Prenom</label>
//             <input type="text" className="form-control" id="prenom" />
//           </div>
//           <div className="form-group w-full ">
//             <label htmlFor="email">Email</label>
//             <input type="email" className="form-control" id="email" />
//           </div>
//           <div className="form-group w-full ">
//             <label htmlFor="password">Mot de passe</label>
//             <input type="password" className="form-control" id="password" />
//           </div>
//           <div className="form-group w-full ">
//             <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
//             <input
//               type="password"
//               className="form-control"
//               id="confirmPassword"
//             />
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







// // src/components/Register.jsx
// import React, { useState } from 'react';
// import axios from 'axios';
// import Header from "./atoms/header";

// const Register = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     prenom: '',
//     nom: '',
//     tele: '',
//     role: 'Doctorant' // Valeur par défaut
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3001/api/auth/register', formData);
//       console.log(response.data);
//       // Handle success, e.g., show a success message or redirect to login
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



// src/components/Register.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from "./atoms/header";

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    prenom: '',
    nom: '',
    tele: '',
    role: 'Doctorant' // Valeur par défaut
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/auth/register', formData);
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
              <option value="Administrateur">Administrateur</option>
              <option value="Enseignant">Enseignant</option>
            </select>
          </div>
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
