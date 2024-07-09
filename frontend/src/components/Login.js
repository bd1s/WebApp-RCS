// src/components/Login.jsx
import React from "react";
import { Link } from "react-router-dom";
import Header from "./atoms/header";

const Login = () => {
  return (
    <div className="flex flex-col pt-4 h-full">
      <Header />
      <div className="flex flex-col items-center bg-[#9CD8ED] w-fit p-24 self-center justify-self-center rounded-3xl gap-4">
        <h2 className="text-6xl">Connexion</h2>
        <form className="flex flex-col gap-1 w-96 items-center">
          <div className="form-group w-full">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group w-full">
            <label htmlFor="password">Mot de passe</label>
            <input type="password" className="form-control" id="password" />
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
