import React from 'react';
import { Link, Outlet, useNavigate } from "react-router-dom";
import fac_logo from "../assets/fac_logo.png";
import Logout from "../assets/logout";
import axios from '../api/axios'; 
import Calendar from "../assets/calendar";
import Request from "../assets/requests";


// Assurez-vous que ce chemin est correct


const EnseignantDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const confirmLogout = window.confirm("Êtes-vous sûr de vouloir vous déconnecter ?");
    if (confirmLogout) {
      try {
        // Effectuer la requête de déconnexion
        await axios.post('/auth/logout', {}, {
          headers: {
            'Content-Type': 'application/json',
            // Ajoutez d'autres en-têtes si nécessaire
          },
        });

        // Rediriger l'utilisateur après la déconnexion
        navigate('/login');
      } catch (error) {
        console.error('Erreur lors de la déconnexion :', error);
        // Vous pouvez aussi afficher un message d'erreur si nécessaire
      }
    }
  };
  return (
    <div className="flex flex-row h-full w-full">
      <div className="bg-[#9CD8ED] flex flex-col justify-between w-2/12 items-center p-4">
        <img src={fac_logo} alt="fac_logo" className="w-36 h-36" />
        <div>
        <Link to="DoctorantsEncadres" className="flex flex-row gap-1 text-lg items-center text-white">
            <Request fillColor="white" width={32} height={32} />
            <p>Vue globale</p>
          </Link>
        <Link to="CalendarComponent" className="flex flex-row gap-1 text-lg items-center text-white">
            <div className="p-[5px]">
              <Calendar fillColor="white" width={22} height={22} />
            </div>
            <p>Calendar</p>
          </Link> 
          <Link to="SharedDocuments" className="flex flex-row gap-1 text-lg items-center text-white">
            <Request fillColor="white" width={32} height={32} />
            <p>Documents</p>
          </Link>
        </div>
        <div
          className="flex flex-row gap-1 text-lg items-center text-white cursor-pointer"
          onClick={handleLogout}
        >
        
          <div className="p-[5px]">
            <Logout fillColor="white" width={22} height={22} />
          </div>
          <p>Déconnecter</p>
        </div>
      </div>

      <div className="flex-grow p-4">
        <Outlet /> {/* Afficher le contenu des sous-routes ici */}
      </div>
    </div>
  );
};

export default EnseignantDashboard;
