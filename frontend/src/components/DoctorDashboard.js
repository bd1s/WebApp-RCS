// // src/components/Login.jsx
// import React from "react";
// import fac_logo from "../assets/fac_logo.png";
// import Notif from "../assets/notif";
// import Case from "../assets/case";
// import Request from "../assets/requests";
// import Calendar from "../assets/calendar";
// import Logout from "../assets/logout";

// const DoctorDashboard = () => {
//   return (
//     <div className="flex flex-row h-full w-full">
//       <div className="bg-[#9CD8ED] flex flex-col justify-between w-2/12 items-center p-4">
//         <img src={fac_logo} alt="fac_logo" className="w-36 h-36" />
//         <div>
//           <div className="flex flex-row gap-1 text-lg items-center text-white">
//             <Notif fillColor="white" width={32} height={32} />
//             <p>Notifications</p>
//           </div>
//           <div className="flex flex-row gap-1 text-lg items-center text-white">
//             <Case fillColor="white" width={32} height={32} />
//             <p>Doctorant</p>
//           </div>
//           <div className="flex flex-row gap-1 text-lg items-center text-white">
//             <Request fillColor="white" width={32} height={32} />
//             <p>Requests</p>
//           </div>
//           <div className="flex flex-row gap-1 text-lg items-center text-white">
//             <div className="p-[5px]">
//               <Calendar fillColor="white" width={22} height={22} />
//             </div>
//             <p>Calendar</p>
//           </div>
//         </div>
//         <div className="flex flex-row gap-1 text-lg items-center text-white">
//           <div className="p-[5px]">
//             <Logout fillColor="white" width={22} height={22} />
//           </div>
//           <p>Deconnecter</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DoctorDashboard;




// src/components/DoctorDashboard.jsx
import React from "react";
import { Link } from "react-router-dom";
import fac_logo from "../assets/fac_logo.png";
import Notif from "../assets/notif";
import Case from "../assets/case";
import Request from "../assets/requests";
import Calendar from "../assets/calendar";
import Logout from "../assets/logout";
import DoctorantInfo from "./DoctorantInfo";

const DoctorDashboard = () => {
  return (
    <div className="flex flex-row h-full w-full">
      <div className="bg-[#9CD8ED] flex flex-col justify-between w-2/12 items-center p-4">
        <img src={fac_logo} alt="fac_logo" className="w-36 h-36" />
        <div>
          <Link to="/dashboard" className="flex flex-row gap-1 text-lg items-center text-white">
            <Notif fillColor="white" width={32} height={32} />
            <p>Notifications</p>
          </Link>
          <Link to="/DoctorantInfo" className="flex flex-row gap-1 text-lg items-center text-white">
            <Case fillColor="white" width={32} height={32} />
            <p>Doctorant</p>
          </Link>
          <Link to="/dashboard" className="flex flex-row gap-1 text-lg items-center text-white">
            <Request fillColor="white" width={32} height={32} />
            <p>Requests</p>
          </Link>
          <Link to="/dashboard" className="flex flex-row gap-1 text-lg items-center text-white">
            <div className="p-[5px]">
              <Calendar fillColor="white" width={22} height={22} />
            </div>
            <p>Calendar</p>
          </Link>
        </div>
        <div className="flex flex-row gap-1 text-lg items-center text-white">
          <div className="p-[5px]">
            <Logout fillColor="white" width={22} height={22} />
          </div>
          <p>Deconnecter</p>
        </div>
      </div>

      {/* Section principale du tableau de bord */}
      <div className="flex-grow p-4">
        <h1 className="text-2xl mb-4">Tableau de Bord Doctorant</h1>
        <DoctorantInfo/>
      </div>
    </div>
  );
};

export default DoctorDashboard;
