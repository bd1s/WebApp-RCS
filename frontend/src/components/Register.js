// src/components/Register.jsx
import React from "react";

const Register = () => {
  return (
    <div>
      <h2>Créer un compte</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input type="password" className="form-control" id="password" />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
          <input type="password" className="form-control" id="confirmPassword" />
        </div>
        <button type="submit" className="btn btn-primary">
          Créer le compte
        </button>
      </form>
    </div>
  );
};

export default Register;
