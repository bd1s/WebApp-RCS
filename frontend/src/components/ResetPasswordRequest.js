import React, { useState } from "react";
import axios from "axios"; // Assurez-vous d'avoir axios installé

const ResetPasswordRequest = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/api/auth/request-password-reset", { email });
      alert("Email de réinitialisation envoyé ! Veuillez vérifier votre boîte de réception.");
      // Remplacez la navigation par une autre méthode si nécessaire
      window.location.href = "/"; // Exemple de redirection
    } catch (error) {
      alert("Une erreur s'est produite lors de la demande de réinitialisation du mot de passe.");
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Demande de réinitialisation de mot de passe</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default ResetPasswordRequest;
