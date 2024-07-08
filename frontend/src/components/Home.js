// src/components/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Bienvenue sur notre site web</h2>
      <Link to="/login" className="btn btn-primary">
        Se connecter
      </Link>
    </div>
  );
};

export default Home;
