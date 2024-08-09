

// import React, { useState, useEffect } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import axios from '../api/axios'; 
// import moment from 'moment';

// const localizer = momentLocalizer(moment);

// const CalendarComponent = () => {
//   console.log('tester le console'); 

//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   const fetchEvents = async () => {
//     console.log('fetchEvents appelé'); 
  
//     try {
//       const response = await axios.get('http://localhost:3001/api/reunions');
  
//       console.log('Réponse API:', response.data); 
  
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
  
//   const handleSelectEvent = (event) => {
//     alert(
//       `Titre: ${event.title}\n` +
//       `Description: ${event.description}\n` +
//       `Début: ${moment(event.start).format('LLL')}\n` +
//       `Fin: ${moment(event.end).format('LLL')}`
//     );
//   };

//   const eventStyleGetter = (event) => {
//     const style = {
//       backgroundColor: '#3174ad',
//       borderRadius: '0px',
//       opacity: 0.8,
//       color: 'white',
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       padding: '5px',
//     };
//     return {
//       style: style,
//     };
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
//     <div>
//       <Calendar
//         localizer={localizer}
//         events={events}
//         startAccessor="start"
//         endAccessor="end"
//         style={{ height: 500 }}
//         selectable
//         onSelectEvent={handleSelectEvent}
//         eventPropGetter={eventStyleGetter}
//         components={{
//           event: EventWrapper,
//         }}
//       />
//     </div>
//   );
// };

// export default CalendarComponent;




// import React, { useState, useEffect } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import axios from '../api/axios'; 
// import moment from 'moment';
// import ReunionForm from './ReunionForm '; // Assurez-vous que le chemin est correct

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
//       id_reunion: null,  // Ajoutez cette ligne pour les nouvelles réunions
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
//       id_reunion: event.id,  // Assurez-vous que l'ID est inclus
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
//   };

//   const eventStyleGetter = (event) => {
//     const style = {
//       backgroundColor: '#3174ad',
//       borderRadius: '0px',
//       opacity: 0.8,
//       color: 'white',
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       padding: '5px',
//     };
//     return {
//       style: style,
//     };
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
//     <div>
//       <Calendar
//         localizer={localizer}
//         events={events}
//         startAccessor="start"
//         endAccessor="end"
//         style={{ height: 500 }}
//         selectable
//         onSelectSlot={handleSelectSlot}
//         onSelectEvent={handleSelectEvent}
//         eventPropGetter={eventStyleGetter}
//         components={{
//           event: EventWrapper,
//         }}
//       />
//       {showForm && (
//         <ReunionForm 
//           reunion={selectedEvent} 
//           onClose={handleCloseForm} 
//           isCreating={isCreating}
//         />
//       )}
//     </div>
//   );
// };

// export default CalendarComponent;





// import React, { useState, useEffect } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import axios from '../api/axios'; 
// import moment from 'moment';
// import ReunionForm from './ReunionForm '; // Assurez-vous que le chemin est correct

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
//       id_reunion: null,  // Ajoutez cette ligne pour les nouvelles réunions
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
//       id_reunion: event.id,  // Assurez-vous que l'ID est inclus
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
//   };

//   const eventStyleGetter = (event) => {
//     const style = {
//       backgroundColor: '#3174ad',
//       borderRadius: '0px',
//       opacity: 0.8,
//       color: 'white',
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       padding: '5px',
//     };
//     return {
//       style: style,
//     };
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
//     <div>
//       <Calendar
//         localizer={localizer}
//         events={events}
//         startAccessor="start"
//         endAccessor="end"
//         style={{ height: 500 }}
//         selectable
//         onSelectSlot={handleSelectSlot}
//         onSelectEvent={handleSelectEvent}
//         eventPropGetter={eventStyleGetter}
//         components={{
//           event: EventWrapper,
//         }}
//       />
//       {showForm && (
//         <ReunionForm 
//           reunion={selectedEvent} 
//           onClose={handleCloseForm} 
//           isCreating={isCreating}
//         />
//       )}
//     </div>
//   );
// };

// export default CalendarComponent;





// import React, { useState, useEffect } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import axios from '../api/axios'; 
// import moment from 'moment';
// import ReunionForm from './ReunionForm '; // Assurez-vous que le chemin est correct

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
//   };

//   const eventStyleGetter = (event) => {
//     const style = {
//       backgroundColor: '#3174ad',
//       borderRadius: '0px',
//       opacity: 0.8,
//       color: 'white',
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       padding: '5px',
//     };
//     return {
//       style: style,
//     };
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
//     <div style={{ display: 'flex', transition: 'all 0.3s ease' }}>
//       <div style={{ 
//         flex: 1, 
//         overflow: 'hidden', 
//         transition: 'width 0.3s ease', 
//         width: showForm ? 'calc(100% - 320px)' : '100%' // Ajustez la largeur ici pour le formulaire
//       }}>
//         <Calendar
//           localizer={localizer}
//           events={events}
//           startAccessor="start"
//           endAccessor="end"
//           style={{ height: 500, width: '100%' }}
//           selectable
//           onSelectSlot={handleSelectSlot}
//           onSelectEvent={handleSelectEvent}
//           eventPropGetter={eventStyleGetter}
//           components={{
//             event: EventWrapper,
//           }}
//         />
//       </div>
//       {showForm && (
//         <div style={{ width: '300px', padding: '10px', boxSizing: 'border-box', transition: 'width 0.3s ease' }}>
//           <ReunionForm 
//             reunion={selectedEvent} 
//             onClose={handleCloseForm} 
//             isCreating={isCreating}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default CalendarComponent;




import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from '../api/axios';
import moment from 'moment';
import ReunionForm from './ReunionForm ';
import { Box } from "@chakra-ui/react"; // Ajout de Box pour styliser

const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [isCreating, setIsCreating] = useState(true);

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
    setShowForm(true);
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
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedEvent(null);
  };const EventWrapper = ({ event }) => {
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
          <ReunionForm
            reunion={selectedEvent}
            onClose={handleCloseForm}
            isCreating={isCreating}
          />
        </Box>
      )}
    </Box>
  );
};

export default CalendarComponent;
