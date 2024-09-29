import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios'; 
import moment from 'moment';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Box } from "@chakra-ui/react";

const localizer = momentLocalizer(moment);

const CalendarForDoctorant = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/reunions/doctorant/meetings', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
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
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
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
    <Box>
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

      {/* Modal pour afficher les détails de la réunion */}
      {selectedEvent && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{selectedEvent.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <p><strong>Description:</strong> {selectedEvent.description}</p>
              <p><strong>Date de début:</strong> {moment(selectedEvent.start).format('LLL')}</p>
              <p><strong>Date de fin:</strong> {moment(selectedEvent.end).format('LLL')}</p>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

export default CalendarForDoctorant;
