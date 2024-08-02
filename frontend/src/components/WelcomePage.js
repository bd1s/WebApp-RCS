// src/components/WelcomePage.js
import React from "react";
import animationv from "../assets/animationv.mp4"; // Assurez-vous que le chemin est correct

const WelcomePage = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-full overflow-hidden">
      <video
        src={animationv}
        autoPlay
        loop
        muted
        className="absolute w-3/4 h-3/4 max-w-[500px] max-h-[500px] object-cover opacity-60"
      />
      <div className="relative z-10 p-6 bg-white bg-opacity-80 rounded-lg shadow-lg max-w-md mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800">Bienvenue sur votre tableau de bord !</h1>
        
      </div>
    </div>
  );
};

export default WelcomePage;
