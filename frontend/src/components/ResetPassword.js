// src/components/ResetPassword.jsx
import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "./atoms/header";

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3001/api/auth/reset-password/${token}`, { password });
      alert("Votre mot de passe a été réinitialisé avec succès !");
      window.location.href = "/login"; 
    } catch (error) {
      console.error("Erreur lors de la réinitialisation du mot de passe:", error);
      alert("Une erreur s'est produite lors de la réinitialisation du mot de passe.");
    }
  };
  

  return (
    <div className="flex flex-col pt-4 h-full w-9/12">
      <Header />
      <div className="flex flex-col items-center bg-[#9CD8ED] w-fit p-24 self-center justify-self-center rounded-3xl gap-4">
        <h2 className="text-6xl">Réinitialisation de mot de passe</h2>
        <form className="flex flex-col gap-1 w-96 items-center" onSubmit={handleSubmit}>
          <div className="form-group w-full">
            <label htmlFor="password">Nouveau mot de passe</label>
            <input 
              type="password" 
              className="form-control" 
              id="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

export default ResetPassword;
