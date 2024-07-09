// src/components/ResetPassword.jsx
import React from "react";
import Header from "./atoms/header";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique pour réinitialiser le mot de passe
    console.log("Form submitted for password reset");
  };

  return (
    <div className="flex flex-col pt-4 h-full">
      <Header />
      <div className="flex flex-col items-center bg-[#9CD8ED] w-fit p-24 self-center justify-self-center rounded-3xl gap-4">
        <h2 className="text-6xl">Réinitialiser le mot de passe</h2>
        <form
          className="flex flex-col gap-1 w-96 items-center"
          onSubmit={handleSubmit}
        >
          <div className="form-group w-full ">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" />
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
