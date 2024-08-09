// src/components/AdminCalendar.jsx
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar'; // Assurez-vous d'installer le package react-calendar
import 'react-calendar/dist/Calendar.css'; // Assurez-vous d'inclure le style

const AdminCalendar = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    // Ajoutez ici la logique pour afficher les événements ou les tâches pour la date sélectionnée
  };

  return (
    <div>
      <h3>Calendrier Administratif</h3>
      <Calendar
        onChange={handleDateChange}
        value={date}
      />
      <div>
        <h4>Date sélectionnée :</h4>
        <p>{date.toDateString()}</p>
        {/* Affichez ici les événements ou tâches pour la date sélectionnée */}
      </div>
    </div>
  );
};

export default AdminCalendar;
