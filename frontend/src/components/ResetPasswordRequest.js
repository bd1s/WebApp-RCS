
// src/components/ResetPasswordRequest.jsx
import React, { useState } from "react";
import axios from "axios"; // Assurez-vous d'avoir axios installé
import Header from "./atoms/header";

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
    <div className="flex flex-col pt-4 h-full w-9/12">
      <Header />
      <div className="flex flex-col items-center bg-[#9CD8ED] w-fit p-24 self-center justify-self-center rounded-3xl gap-4">
        <h2 className="text-6xl">Réinitialiser le mot de passe</h2>
        <form className="flex flex-col gap-1 w-96 items-center" onSubmit={handleSubmit}>
          <div className="form-group w-full">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary bg-[#11A86D] border-0 hover:bg-[#29CD8D]"
          >
            Réinitialiser
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordRequest;
