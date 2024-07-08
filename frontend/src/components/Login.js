// src/components/Login.jsx
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h2>Connexion</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input type="password" className="form-control" id="password" />
        </div>
        <button type="submit" className="btn btn-primary mr-2">
          Se connecter
        </button>
        <Link to="/register" className="btn btn-secondary mr-2">
          Créer un compte
        </Link>
        <Link to="/reset-password" className="btn btn-link">
          Réinitialiser le mot de passe
        </Link>
      </form>
    </div>
  );
};

export default Login;
