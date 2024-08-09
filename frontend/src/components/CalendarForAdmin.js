// import React, { useState, useEffect } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import axios from '../api/axios';
// import moment from 'moment';
// import EventForm from './EventForm';
// import { Box } from "@chakra-ui/react"; // Ajout de Box pour styliser

// const localizer = momentLocalizer(moment);

// const CalendarForAdmin = () => {
//   const [events, setEvents] = useState([]);
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [showForm, setShowForm] = useState(false);
//   const [isCreating, setIsCreating] = useState(true);

//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   const fetchEvents = async () => {
//     try {
//       const response = await axios.get('/events');
//       const formattedEvents = response.data.map(event => {
//         // Formatage des dates en objets Date à partir des données du serveur
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

//   const handleSelectSlot = (slotInfo) => {
//     setIsCreating(true);
//     setSelectedEvent({
//       id_event: null,
//       title: '',
//       description: '',
//       date: moment(slotInfo.start).format('YYYY-MM-DD'),
//       start_time: moment(slotInfo.start).format('HH:mm:ss'),
//       end_time: moment(slotInfo.end).format('HH:mm:ss'),
//     });
//     setShowForm(true);
//   };

//   const handleSelectEvent = (event) => {
//     setIsCreating(false);
//     setSelectedEvent({
//       id_event: event.id,
//       title: event.title,
//       description: event.description,
//       date: moment(event.start).format('YYYY-MM-DD'),
//       start_time: moment(event.start).format('HH:mm:ss'),
//       end_time: moment(event.end).format('HH:mm:ss'),
//     });
//     setShowForm(true);
//   };

//   const handleCloseForm = () => {
//     setShowForm(false);
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
//             event: EventWrapper,
//           }}
//         />
//       </Box>
//       {showForm && (
//         <Box width="70%" padding="10px" boxShadow="xl" bg="white">
//           <EventForm
//             event={selectedEvent}
//             onClose={handleCloseForm}
//             isCreating={isCreating}
//           />
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default CalendarForAdmin;



import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from '../api/axios';
import moment from 'moment';
import EventForm from './EventForm';
import { Box } from "@chakra-ui/react";

const localizer = momentLocalizer(moment);

const CalendarForAdmin = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [isCreating, setIsCreating] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('/events');
      const formattedEvents = response.data.map(event => {
        // Formatage des dates en objets Date à partir des données du serveur
        const start = moment(`${event.date}T${event.heure_debut}`).toDate();
        const end = moment(`${event.date}T${event.heure_fin}`).toDate();
        return {
          id: event.id,
          title: event.titre, // Mapping correct pour le champ title
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

  const handleSelectSlot = (slotInfo) => {
    setIsCreating(true);
    setSelectedEvent({
      id: null,
      titre: '',
      description: '',
      date: moment(slotInfo.start).format('YYYY-MM-DD'),
      heure_debut: moment(slotInfo.start).format('HH:mm:ss'),
      heure_fin: moment(slotInfo.end).format('HH:mm:ss'),
    });
    setShowForm(true);
  };

  const handleSelectEvent = (event) => {
    setIsCreating(false);
    setSelectedEvent({
      id: event.id,
      titre: event.title, // Mapping correct pour le champ title
      description: event.description,
      date: moment(event.start).format('YYYY-MM-DD'),
      heure_debut: moment(event.start).format('HH:mm:ss'),
      heure_fin: moment(event.end).format('HH:mm:ss'),
    });
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
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
    <Box display="flex" transition="all 0.3s ease">
      <Box flex={showForm ? "0 1 30%" : "1 1 100%"} transition="flex 0.3s ease" minHeight="900px">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, width: '100%' }}
          selectable
          onSelectSlot={handleSelectSlot}
          onSelectEvent={handleSelectEvent}
          components={{
            event: EventWrapper,
          }}
        />
      </Box>
      {showForm && (
        <Box width="70%" padding="10px" boxShadow="xl" bg="white">
          <EventForm
            event={selectedEvent}
            onClose={handleCloseForm}
            isCreating={isCreating}
          />
        </Box>
      )}
    </Box>
  );
};

export default CalendarForAdmin;
