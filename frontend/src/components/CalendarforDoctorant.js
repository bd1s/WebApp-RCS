import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios'; 
import moment from 'moment';

const localizer = momentLocalizer(moment);

const CalendarForDoctorant = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      // Assurez-vous que le token est disponible et envoyé avec la requête
      const response = await axios.get('http://localhost:3001/api/reunions/doctorant/meetings', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}` // ou autre méthode pour obtenir le token
        }
      });

      // Formater les événements pour le calendrier
      const formattedEvents = response.data.map(event => {
        const start = moment(`${event.date.split('T')[0]}T${event.heure_debut}`).toDate();
        const end = moment(`${event.date.split('T')[0]}T${event.heure_fin}`).toDate();
        return {
          id: event.id_reunion,
          title: event.titre,
          description: event.description,
          start,
          end,
          allDay: false,
        };
      });
      setEvents(formattedEvents);
    } catch (error) {
      console.log('Erreur lors de la récupération des événements:', error);
    }
  };

  const handleSelectEvent = (event) => {
    alert(
      `Titre: ${event.title}\n` +
      `Description: ${event.description}\n` +
      `Début: ${moment(event.start).format('LLL')}\n` +
      `Fin: ${moment(event.end).format('LLL')}`
    );
  };

  const eventStyleGetter = (event) => {
    const style = {
      backgroundColor: '#3174ad',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '5px',
    };
    return {
      style: style,
    };
  };

  const EventWrapper = ({ event }) => {
    return (
      <div style={{ position: 'relative' }}>
        <strong>{event.title}</strong>
        <div style={{ fontSize: '0.8em', color: 'white' }}>{event.description}</div>
      </div>
    );
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable
        onSelectEvent={handleSelectEvent}
        eventPropGetter={eventStyleGetter}
        components={{
          event: EventWrapper,
        }}
      />
    </div>
  );
};

export default CalendarForDoctorant;
