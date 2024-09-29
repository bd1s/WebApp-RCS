

// import React, { useState, useEffect } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import axios from '../api/axios';
// import moment from 'moment';
// import ReunionForm from './ReunionForm ';
// import { Box } from "@chakra-ui/react"; // Ajout de Box pour styliser

// const localizer = momentLocalizer(moment);

// const CalendarComponent = () => {
//   const [events, setEvents] = useState([]);
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [showForm, setShowForm] = useState(false);
//   const [isCreating, setIsCreating] = useState(true);

//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   const fetchEvents = async () => {
//     try {
//       const response = await axios.get('/reunions');
//       const formattedEvents = response.data.map(event => {
//         const start = moment(`${event.date.split('T')[0]}T${event.heure_debut}`).toDate();
//         const end = moment(`${event.date.split('T')[0]}T${event.heure_fin}`).toDate();
//         return {
//           id: event.id_reunion,
//           title: event.titre,
//           description: event.description,
//           start,
//           end,
//           allDay: false,
//         };
//       });
//       setEvents(formattedEvents);
//     } catch (error) {
//       console.log('Erreur lors de la récupération des événements:', error);
//     }
//   };

//   const handleSelectSlot = (slotInfo) => {
//     setIsCreating(true);
//     setSelectedEvent({
//       id_reunion: null,
//       titre: '',
//       description: '',
//       date: moment(slotInfo.start).format('YYYY-MM-DD'),
//       heure_debut: moment(slotInfo.start).format('HH:mm'),
//       heure_fin: moment(slotInfo.end).format('HH:mm'),
//     });
//     setShowForm(true);
//   };

//   const handleSelectEvent = (event) => {
//     setIsCreating(false);
//     setSelectedEvent({
//       id_reunion: event.id,
//       titre: event.title,
//       description: event.description,
//       date: moment(event.start).format('YYYY-MM-DD'),
//       heure_debut: moment(event.start).format('HH:mm'),
//       heure_fin: moment(event.end).format('HH:mm'),
//     });
//     setShowForm(true);
//   };

//   const handleCloseForm = () => {
//     setShowForm(false);
//     setSelectedEvent(null);
//   };const EventWrapper = ({ event }) => {
//     return (
//       <div style={{ position: 'relative' }}>
//         <strong>{event.title}</strong>
//         <div style={{ fontSize: '0.8em', color: 'white' }}>{event.description}</div>
//       </div>
//     );
//   };
  

//   return (
//     <Box display="flex" transition="all 0.3s ease">
//       <Box flex={showForm ? "0 1 30%" : "1 1 100%"} transition="flex 0.3s ease" minHeight="900px">
//         <Calendar
//           localizer={localizer}
//           events={events}
//           startAccessor="start"
//           endAccessor="end"
//           style={{ height: 500, width: '100%' }}
//           selectable
//           onSelectSlot={handleSelectSlot}
//           onSelectEvent={handleSelectEvent}
//           components={{
//           event: EventWrapper,
//            }}
//         />
//       </Box>
//       {showForm && (
//         <Box width="70%" padding="10px" boxShadow="xl" bg="white">
//           <ReunionForm
//             reunion={selectedEvent}
//             onClose={handleCloseForm}
//             isCreating={isCreating}
//           />
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default CalendarComponent;



import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from '../api/axios';
import moment from 'moment';
import ReunionForm from './ReunionForm ';
import { Box, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@chakra-ui/react";

const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isCreating, setIsCreating] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure(); // Utilisation du hook pour la modale

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('/reunions');
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

  const handleSelectSlot = (slotInfo) => {
    setIsCreating(true);
    setSelectedEvent({
      id_reunion: null,
      titre: '',
      description: '',
      date: moment(slotInfo.start).format('YYYY-MM-DD'),
      heure_debut: moment(slotInfo.start).format('HH:mm'),
      heure_fin: moment(slotInfo.end).format('HH:mm'),
    });
    onOpen(); // Ouvrir la modale
  };

  const handleSelectEvent = (event) => {
    setIsCreating(false);
    setSelectedEvent({
      id_reunion: event.id,
      titre: event.title,
      description: event.description,
      date: moment(event.start).format('YYYY-MM-DD'),
      heure_debut: moment(event.start).format('HH:mm'),
      heure_fin: moment(event.end).format('HH:mm'),
    });
    onOpen(); // Ouvrir la modale
  };

  return (
    <Box>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, width: '100%' }}
        selectable
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
      />

      {/* Modal pour afficher le formulaire */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{isCreating ? "Créer une réunion" : "Modifier la réunion"}</ModalHeader>
          <ModalBody>
            <ReunionForm
              reunion={selectedEvent}
              onClose={onClose}
              isCreating={isCreating}
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose}>
              Fermer
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default CalendarComponent;
