// import React, { useState } from "react";
// import axios from "axios"; // Assurez-vous d'avoir axios installé
// import { useParams } from "react-router-dom"; // Importer seulement useParams

// const ResetPassword = () => {
//   const { token } = useParams();
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//      await axios.post(`http://localhost:3001/api/auth/reset-password`, { token, password });
//       alert("Votre mot de passe a été réinitialisé avec succès !");
//       // Remplacez la navigation par une autre méthode si nécessaire
//       window.location.href = "/login"; // Exemple de redirection
//     } catch (error) {
//       alert("Une erreur s'est produite lors de la réinitialisation du mot de passe.");
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h2>Réinitialisation de mot de passe</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="password">Nouveau mot de passe :</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Réinitialiser</button>
//       </form>
//     </div>
//   );
// };

// export default ResetPassword;



import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Token:", token);
    console.log("Password:", password);
    try {
      const response = await axios.post(`http://localhost:3001/api/auth/reset-password`, { token, password });
      console.log("API response:", response);
      alert("Votre mot de passe a été réinitialisé avec succès !");
      window.location.href = "/login"; 
    } catch (error) {
      console.error("Erreur lors de la réinitialisation du mot de passe:", error);
      alert("Une erreur s'est produite lors de la réinitialisation du mot de passe.");
    }
  };

  return (
    <div>
      <h2>Réinitialisation de mot de passe</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="password">Nouveau mot de passe :</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Réinitialiser</button>
      </form>
    </div>
  );
};

export default ResetPassword;
