// import { Calendar, momentLocalizer, Views } from "react-big-calendar";
// import moment from "moment";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import { MOCK_EVENTS } from "./event";
// const localizer = momentLocalizer(moment);

// function Calendrie() {
//   const events = MOCK_EVENTS.map((event) => {
//     return {
//       title: event.title,
//       start: new Date(event.start),
//       end: new Date(event.end),
//       color: event.color,
//     };
//   });

//   return (
//     <div className="h-screen w-screen bg-gray-100">
//       <div className="h-full w-full bg-white shadow-md rounded-lg overflow-hidden">
//         <Calendar
//           localizer={localizer}
//           startAccessor={"start"}
//           events={events}
//           endAccessor={"end"}
//           style={{
//             height: "100%",
//             width: "100%",
//           }}
//           eventPropGetter={(event) => {
//             return {
//               style: {
//                 backgroundColor: event.color,
//                 borderRadius: '0.375rem', // Tailwind's rounded class equivalent
//                 color: '#fff',
//               },
//             };
//           }}
//           onSelectEvent={(event) => alert(event.title)}
//           views={[Views.MONTH, Views.WEEK, Views.DAY, Views.AGENDA]}
//         />
//       </div>
//     </div>
//   );
// }

// export default Calendrie;


import React from 'react';
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { MOCK_EVENTS } from "./event";

const localizer = momentLocalizer(moment);

function Calendrie() {
  const events = MOCK_EVENTS.map((event) => {
    return {
      title: event.title,
      start: new Date(event.start),
      end: new Date(event.end),
      color: event.color,
    };
  });

  return (
    <div className="flex flex-col h-full w-full bg-gray-100">
      <div className="flex-grow bg-white shadow-md rounded-lg overflow-hidden">
        <Calendar
          localizer={localizer}
          startAccessor="start"
          endAccessor="end"
          events={events}
          style={{
            height: "100%",
            width: "100%",
          }}
          eventPropGetter={(event) => {
            return {
              style: {
                backgroundColor: event.color,
                borderRadius: '0.375rem', // Tailwind's rounded class equivalent
                color: '#fff',
              },
            };
          }}
          onSelectEvent={(event) => alert(event.title)}
          views={[Views.MONTH, Views.WEEK, Views.DAY, Views.AGENDA]}
        />
      </div>
    </div>
  );
}

export default Calendrie;
