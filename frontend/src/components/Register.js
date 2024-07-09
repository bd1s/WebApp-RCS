// src/components/Register.jsx
import React from "react";
import Header from "./atoms/header";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex flex-col pt-4 h-full">
      <Header />
      <div className="flex flex-col items-center bg-[#9CD8ED] w-fit p-24 self-center justify-self-center rounded-3xl gap-4">
        <h2 className="text-6xl">Inscription</h2>
        <form className="flex flex-col gap-1 w-96 items-center">
          <div className="form-group w-full ">
            <label htmlFor="text">Nom</label>
            <input type="text" className="form-control" id="nom" />
          </div>
          <div className="form-group w-full ">
            <label htmlFor="text">Prenom</label>
            <input type="text" className="form-control" id="prenom" />
          </div>
          <div className="form-group w-full ">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group w-full ">
            <label htmlFor="password">Mot de passe</label>
            <input type="password" className="form-control" id="password" />
          </div>
          <div className="form-group w-full ">
            <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
            />
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
