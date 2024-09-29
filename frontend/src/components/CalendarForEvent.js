// import React, { useState, useEffect } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import axios from '../api/axios';
// import moment from 'moment';
// import { Box, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Button } from "@chakra-ui/react";

// const localizer = momentLocalizer(moment);

// const CalendarForEvent = () => {
//   const [events, setEvents] = useState([]);
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   const fetchEvents = async () => {
//     try {
//       const response = await axios.get('/events');
//       const formattedEvents = response.data.map(event => {
//         const start = moment(`${event.date}T${event.heure_debut}`).toDate();
//         const end = moment(`${event.date}T${event.heure_fin}`).toDate();
//         return {
//           id: event.id,
//           title: event.titre,
//           description: event.description,
//           start,
//           end,
//           allDay: false,
//         };
//       });
//       setEvents(formattedEvents);
//     } catch (error) {
//       console.log('Error fetching events:', error);
//     }
//   };

//   const handleSelectEvent = (event) => {
//     setSelectedEvent(event);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedEvent(null);
//   };

//   const EventWrapper = ({ event }) => {
//     return (
//       <div style={{ position: 'relative' }}>
//         <strong>{event.title}</strong>
//         <div style={{ fontSize: '0.8em', color: 'white' }}>{event.description}</div>
//       </div>
//     );
//   };

//   return (
//     <Box display="flex" transition="all 0.3s ease">
//       <Box flex="1 1 100%" minHeight="900px">
//         <Calendar
//           localizer={localizer}
//           events={events}
//           startAccessor="start"
//           endAccessor="end"
//           style={{ height: 500, width: '100%' }}
//           components={{
//             event: EventWrapper,
//           }}
//           selectable={false} 
//           onSelectEvent={handleSelectEvent} // Ajout de la fonction pour sélectionner un événement
//         />
//       </Box>

//       {/* Modal pour afficher les détails de l'événement */}
//       {selectedEvent && (
//         <Modal isOpen={isModalOpen} onClose={closeModal}>
//           <ModalOverlay />
//           <ModalContent>
//             <ModalHeader>{selectedEvent.title}</ModalHeader>
//             <ModalCloseButton />
//             <ModalBody>
//               <p><strong>Description:</strong> {selectedEvent.description}</p>
//               <p><strong>Date de début:</strong> {moment(selectedEvent.start).format('MMMM Do YYYY, h:mm a')}</p>
//               <p><strong>Date de fin:</strong> {moment(selectedEvent.end).format('MMMM Do YYYY, h:mm a')}</p>
//             </ModalBody>
//           </ModalContent>
//         </Modal>
//       )}
//     </Box>
//   );
// };

// export default CalendarForEvent;

import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from '../api/axios';
import moment from 'moment';
import { Box, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from "@chakra-ui/react";

const localizer = momentLocalizer(moment);

const CalendarForEvent = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('/events');
      const formattedEvents = response.data.map(event => {
        const start = moment(`${event.date}T${event.heure_debut}`).toDate();
        const end = moment(`${event.date}T${event.heure_fin}`).toDate();
        return {
          id: event.id,
          title: event.titre,
          description: event.description,
          start,
          end,
          allDay: false,
        };
      });
      setEvents(formattedEvents);
    } catch (error) {
      console.log('Error fetching events:', error);
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

  const EventWrapper = ({ event }) => {
    return (
      <div style={{ position: 'relative' }}>
        <strong>{event.title}</strong>
        <div style={{ fontSize: '0.8em', color: 'white' }}>{event.description}</div>
      </div>
    );
  };

  return (
    <Box display="flex" flexDirection="column" height="100vh">
      {/* Calculer dynamiquement la hauteur du calendrier */}
      <Box flex="1">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 'calc(100vh - 40px)', width: '100%' }} // Ajuster la hauteur en fonction des autres éléments
          components={{
            event: EventWrapper,
          }}
          selectable={false}
          onSelectEvent={handleSelectEvent} 
        />
      </Box>

      {/* Modal pour afficher les détails de l'événement */}
      {selectedEvent && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{selectedEvent.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <p><strong>Description:</strong> {selectedEvent.description}</p>
              <p><strong>Date de début:</strong> {moment(selectedEvent.start).format('MMMM Do YYYY, h:mm a')}</p>
              <p><strong>Date de fin:</strong> {moment(selectedEvent.end).format('MMMM Do YYYY, h:mm a')}</p>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

export default CalendarForEvent;
