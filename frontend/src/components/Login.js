// // src/components/Login.jsx
// import React from "react";
// import { Link } from "react-router-dom";
// import Header from "./atoms/header";

// const Login = () => {
//   return (
//     <div className="flex flex-col pt-4 h-full w-9/12">
//       <Header />
//       <div className="flex flex-col items-center bg-[#9CD8ED] w-fit p-24 self-center justify-self-center rounded-3xl gap-4">
//         <h2 className="text-6xl">Connexion</h2>
//         <form className="flex flex-col gap-1 w-96 items-center">
//           <div className="form-group w-full">
//             <label htmlFor="email">Email</label>
//             <input type="email" className="form-control" id="email" />
//           </div>
//           <div className="form-group w-full">
//             <label htmlFor="password">Mot de passe</label>
//             <input type="password" className="form-control" id="password" />
//           </div>
//           <button
//             type="submit"
//             className="btn btn-primary bg-[#11A86D] border-0 hover:bg-[#29CD8D]"
//           >
//             Se connecter
//           </button>
//           <Link to="/reset-password" className="underline">
//             Mot de passe oublié ?
//           </Link>
//           <Link to="/register" className="underline">
//             Pas encore inscrit ? Créez un compte
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;





// // src/components/Login.jsx
// import React, { useState } from "react";
// import axios from 'axios';
// import { Link } from "react-router-dom";
// import Header from "./atoms/header";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3001/api/auth/login', formData);
//       console.log(response.data);
//       // Handle success, e.g., store token in localStorage and redirect
//     } catch (error) {
//       console.error('Login error:', error.response.data);
//       // Handle error, e.g., show an error message
//     }
//   };

//   return (
//     <div className="flex flex-col pt-4 h-full w-9/12">
//       <Header />
//       <div className="flex flex-col items-center bg-[#9CD8ED] w-fit p-24 self-center justify-self-center rounded-3xl gap-4">
//         <h2 className="text-6xl">Connexion</h2>
//         <form className="flex flex-col gap-1 w-96 items-center" onSubmit={handleSubmit}>
//           <div className="form-group w-full">
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
//           <div className="form-group w-full">
//             <label htmlFor="password">Mot de passe</label>
//             <input 
//               type="password" 
//               className="form-control" 
//               id="password" 
//               placeholder="Password" 
//               value={formData.password} 
//               onChange={handleChange} 
//               required 
//             />
//           </div>
//           <button
//             type="submit"
//             className="btn btn-primary bg-[#11A86D] border-0 hover:bg-[#29CD8D]"
//           >
//             Se connecter
//           </button>
//           <Link to="/reset-password" className="underline">
//             Mot de passe oublié ?
//           </Link>
//           <Link to="/register" className="underline">
//             Pas encore inscrit ? Créez un compte
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;


// src/components/Login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./atoms/header";
import axios from '../api/axios';


const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/auth/login', formData);
      const token = response.data.token;
      localStorage.setItem('token', token); // Stocker le jeton JWT
      navigate('/doctorDashboard'); // Redirection après succès de la connexion
    } catch (error) {
      console.error('Login error:', error.response.data);
      // Handle error, e.g., show an error message
    }
  };

  return (
    <div className="flex flex-col pt-4 h-full w-9/12">
      <Header />
      <div className="flex flex-col items-center bg-[#9CD8ED] w-fit p-24 self-center justify-self-center rounded-3xl gap-4">
        <h2 className="text-6xl">Connexion</h2>
        <form className="flex flex-col gap-1 w-96 items-center" onSubmit={handleSubmit}>
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
          </div>
          <div className="form-group w-full">
            <label htmlFor="password">Mot de passe</label>
            <input 
              type="password" 
              className="form-control" 
              id="password" 
              placeholder="Password" 
              value={formData.password} 
              onChange={handleChange} 
              required 
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary bg-[#11A86D] border-0 hover:bg-[#29CD8D]"
          >
            Se connecter
          </button>
          <Link to="/reset-password" className="underline">
            Mot de passe oublié ?
          </Link>
          <Link to="/register" className="underline">
            Pas encore inscrit ? Créez un compte
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
