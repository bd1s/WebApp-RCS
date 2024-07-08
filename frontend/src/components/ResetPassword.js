// src/components/ResetPassword.jsx
import React from "react";

const ResetPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique pour réinitialiser le mot de passe
    console.log("Form submitted for password reset");
  };

  return (
    <div>
      <h2>Réinitialiser le mot de passe</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <button type="submit" className="btn btn-primary">
          Réinitialiser
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
