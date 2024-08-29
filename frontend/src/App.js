// // src/App.jsx
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import Home from "./components/Home";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import ActivationPage from "./components/ActivationPage";
// import ResetPassword from "./components/ResetPassword"; // Importez le composant ResetPassword

// const App = () => {
//   return (
//     <Router>
//       <div>
//         {/* <nav className="navbar navbar-expand navbar-dark bg-dark">
//           <div className="navbar-nav mr-auto">
//             <li className="nav-item">
//               <Link to={"/"} className="nav-link">
//                 Home
//               </Link>
//             </li>
//           </div>
//           <div className="navbar-nav ml-auto">
//             <li className="nav-item">
//               <Link to={"/login"} className="nav-link">
//                 Login
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to={"/register"} className="nav-link">
//                 Sign Up
//               </Link>
//             </li>
//           </div>
//         </nav> */}
//         <div className="container h-screen">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route
//               path="/confirm/:activationcode"
//               element={<ActivationPage />}
//             />
//             <Route path="/reset-password" element={<ResetPassword />} />{" "}
//             {/* Ajoutez cette ligne */}
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;





// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import Home from "./components/Home";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import ActivationPage from "./components/ActivationPage";

//  // Composant pour demander la réinitialisation de mot de passe
// import ResetPassword from "./components/ResetPassword";
// import DoctorDashboard from "./components/DoctorDashboard";
// import ResetPasswordRequest from "./components/ResetPasswordRequest";
// import DoctorantInfoForm from "./components/DoctorantInfoForm";
// import DoctoralCycleInfoForm from "./components/DoctoralCycleInfoForm";
// import BaccalaureateInfoForm from "./components/BaccalaureateInfoForm";
// import UniversityInfoForm from "./components/UniversityInfoForm";
// import PersonalInfoForm from "./components/PersonalInfoForm";
// import DoctorantInfo from "./components/DoctorantInfo";
// import DemandeForm from "./components/DemandeForm";
// import InscriptionForm from "./components/InscriptionForm";
// import DemandeRetraitProvisoireForm from "./components/DemandeRetraitProvisoireForm";
// import DemandeTable from "./components/DemandeTable";
// import DossierSoutenanceForm from "./components/DossierSoutenanceForm";
// import UpdateDemandeForm from './components/UpdateDemandeForm';
// import Calendrie from "./components/Calendrie";
//  // Composant pour réinitialiser le mot de passe

// const App = () => {
//   return (
//     <Router>
//       <div className="flex flex-col items-center h-screen m-0">
//         {/* <nav className="navbar navbar-expand navbar-dark bg-dark">
//           <div className="navbar-nav mr-auto">
//             <li className="nav-item">
//               <Link to={"/"} className="nav-link">
//                 Home
//               </Link>
//             </li>
//           </div>
//           <div className="navbar-nav ml-auto">
//             <li className="nav-item">
//               <Link to={"/login"} className="nav-link">
//                 Login
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to={"/register"} className="nav-link">
//                 Sign Up
//               </Link>
//             </li>
//           </div>
//         </nav> */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/confirm/:activationcode" element={<ActivationPage />} />
//           <Route path="/doctorDashboard" element={<DoctorDashboard />} />
//           <Route path="/reset-password" element={<ResetPasswordRequest />} />
//           <Route path="/reset-password/:token" element={<ResetPassword />} />
//           <Route path="/DoctorantInfoForm" element={<DoctorantInfoForm />} />
//           <Route path="/DoctorantInfo" element={<DoctorantInfo />} />

//           <Route path="/DoctoralCycleInfoForm" element={<DoctoralCycleInfoForm />} />
//           <Route path="/DoctoralCycleInfoForm" element={<BaccalaureateInfoForm />} />
//           <Route path="/DoctoralCycleInfoForm" element={<UniversityInfoForm />} />
//           <Route path="/DoctoralCycleInfoForm" element={<PersonalInfoForm />} />
//           <Route path="/DemandeForm" element={<DemandeForm />} />
//           <Route path="/DemandeRetraitProvisoireForm" element={<DemandeRetraitProvisoireForm />} />

//           <Route path="/InscriptionForm" element={<InscriptionForm />} />

//           <Route path="/DemandeTable" element={<DemandeTable />} />
//           <Route path="/DossierSoutenanceForm" element={<DossierSoutenanceForm />} />
//           <Route path="/update-demande/:demandeId" element={<UpdateDemandeForm />} />

//           <Route path="/Calendar" element={<Calendrie/>} />

//           {/* Ajoutez cette ligne */}
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;










// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import Home from "./components/Home";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import ActivationPage from "./components/ActivationPage";
// import ResetPassword from "./components/ResetPassword";
// import DoctorDashboard from "./components/DoctorDashboard";
// import ResetPasswordRequest from "./components/ResetPasswordRequest";
// import DoctorantInfoForm from "./components/DoctorantInfoForm";
// import DoctoralCycleInfoForm from "./components/DoctoralCycleInfoForm";
// import BaccalaureateInfoForm from "./components/BaccalaureateInfoForm";
// import UniversityInfoForm from "./components/UniversityInfoForm";
// import PersonalInfoForm from "./components/PersonalInfoForm";
// import DoctorantInfo from "./components/DoctorantInfo";
// import DemandeForm from "./components/DemandeForm";
// import InscriptionForm from "./components/InscriptionForm";
// import DemandeRetraitProvisoireForm from "./components/DemandeRetraitProvisoireForm";
// import DemandeTable from "./components/DemandeTable";
// import DossierSoutenanceForm from "./components/DossierSoutenanceForm";
// import UpdateDemandeForm from './components/UpdateDemandeForm';
// import Calendrie from "./components/Calendrie";
// import Logout from "./assets/logout";
// import WelcomePage from "./components/WelcomePage";


// const App = () => {
//   return (
//     <Router>
//       <div className="flex flex-col items-center h-screen m-0">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/confirm/:activationcode" element={<ActivationPage />} />
//           <Route path="/reset-password" element={<ResetPasswordRequest />} />
//           <Route path="/reset-password/:token" element={<ResetPassword />} />
//           <Route path="/logout" element={<Logout />} />

//           <Route path="/doctorDashboard" element={<DoctorDashboard />}>
//           <Route index element={<WelcomePage />} /> {/* Page de bienvenue par défaut */}
//             <Route path="DoctorantInfoForm" element={<DoctorantInfoForm />} />
//             <Route path="DoctorantInfo" element={<DoctorantInfo />} />
//             <Route path="DoctoralCycleInfoForm" element={<DoctoralCycleInfoForm />} />
//             <Route path="BaccalaureateInfoForm" element={<BaccalaureateInfoForm />} />
//             <Route path="UniversityInfoForm" element={<UniversityInfoForm />} />
//             <Route path="PersonalInfoForm" element={<PersonalInfoForm />} />
//             <Route path="DemandeRetraitProvisoireForm" element={<DemandeRetraitProvisoireForm />} />
//             <Route path="InscriptionForm" element={<InscriptionForm />} />
//             <Route path="DemandeTable" element={<DemandeTable />} />
//             <Route path="DossierSoutenanceForm" element={<DossierSoutenanceForm />} />
//             <Route path="Calendar" element={<Calendrie />} />
//           </Route>
//           <Route path="/update-demande/:demandeId" element={<UpdateDemandeForm />} />
//           <Route path="/DemandeForm" element={<DemandeForm />} />


//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;


// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import ActivationPage from "./components/ActivationPage";
import ResetPassword from "./components/ResetPassword";
import DoctorantDashboard from "./components/DoctorantDashboard";
import AdminDashboard from "./components/AdminDashboard";
import ResetPasswordRequest from "./components/ResetPasswordRequest";
import DoctorantInfoForm from "./components/DoctorantInfoForm";
import DoctoralCycleInfoForm from "./components/DoctoralCycleInfoForm";
import BaccalaureateInfoForm from "./components/BaccalaureateInfoForm";
import UniversityInfoForm from "./components/UniversityInfoForm";
import PersonalInfoForm from "./components/PersonalInfoForm";
import DoctorantInfo from "./components/DoctorantInfo";
import DemandeForm from "./components/DemandeForm";
import InscriptionForm from "./components/InscriptionForm";
import DemandeRetraitProvisoireForm from "./components/DemandeRetraitProvisoireForm";
import DemandeTable from "./components/DemandeTable";
import DossierSoutenanceForm from "./components/DossierSoutenanceForm";
import UpdateDemandeForm from './components/UpdateDemandeForm';
import Calendrie from "./components/Calendrie";
import Logout from "./components/Logout";
import WelcomePage from "./components/WelcomePage";
import AdminManagement from "./components/AdminManagement";
import UserRequests from "./components/UserRequests";
import AdminCalendar from "./components/AdminCalendar";
import EnseignantDashboard from "./components/EnseignantDashboard";
import CalendarComponent from "./components/CalendarComponent";
import ReunionForm from "./components/ReunionForm ";
import CalendarForDoctorant from "./components/CalendarforDoctorant";
import DoctorantsEncadres from "./components/DoctorantsEncadres";
import DashboardDataForAdmin from "./components/DashboardDataForAdmin";
import CalendarForAdmin from "./components/CalendarForAdmin";
import DoctorantRequestsforAdmin from "./components/DoctorantRequestsforAdmin";
import RequestDetails from './components/RequestDetails';
import MessageForm from './components/MessageForm';
import MessageList from './components/MessageList';
import Messagerie from "./components/Messagerie";
import UploadDocument from "./components/UploadDocument";
import SharedDocuments from "./components/SharedDocuments ";


const App = () => {
  return (

    <Router>
      <div className="flex flex-col items-center h-screen m-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/confirm/:activationcode" element={<ActivationPage />} />
          <Route path="/reset-password" element={<ResetPasswordRequest />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/logout" element={<Logout />} />

          <Route path="/doctorDashboard" element={<DoctorantDashboard />}>
            <Route index element={<WelcomePage />} />
            <Route path="DoctorantInfoForm" element={<DoctorantInfoForm />} />
            <Route path="DoctorantInfo" element={<DoctorantInfo />} />
            <Route path="DoctoralCycleInfoForm" element={<DoctoralCycleInfoForm />} />
            <Route path="BaccalaureateInfoForm" element={<BaccalaureateInfoForm />} />
            <Route path="UniversityInfoForm" element={<UniversityInfoForm />} />
            <Route path="PersonalInfoForm" element={<PersonalInfoForm />} />
            <Route path="DemandeRetraitProvisoireForm" element={<DemandeRetraitProvisoireForm />} />
            <Route path="InscriptionForm" element={<InscriptionForm />} />
            
            <Route path="DemandeTable" element={<DemandeTable />}>
            <Route path="update-demande/:demandeId" element={<UpdateDemandeForm />} />
            <Route path="DemandeForm" element={<DemandeForm />} />

          </Route>

            <Route path="DossierSoutenanceForm" element={<DossierSoutenanceForm />} />
            <Route path="CalendarForDoctorant" element={<CalendarForDoctorant />} />
            <Route path="UploadDocument" element={<UploadDocument />} />
            <Route path="SharedDocuments" element={<SharedDocuments  />} />
            <Route path="CalendarForAdmin" element={<CalendarForAdmin />} />

          <Route path="DemandeForm" element={<DemandeForm />} />
            





          </Route>

          <Route path="/adminDashboard" element={<AdminDashboard />}>
            <Route index element={<WelcomePage />} />
            <Route path="AdminManagement" element={<AdminManagement />} />
            <Route path="UserRequests" element={<UserRequests />} />
            <Route path="AdminCalendar" element={<AdminCalendar />} />
            <Route path="CalendarForAdmin" element={<CalendarForAdmin />} />
            <Route path="DoctorantRequestsforAdmin" element={<DoctorantRequestsforAdmin />} />
            <Route path="RequestDetails" element={<RequestDetails />} />
            <Route path="dashboardDataForAdmin" element={<DashboardDataForAdmin />} />
            <Route path="UploadDocument" element={<UploadDocument />} />
            <Route path="SharedDocuments" element={<SharedDocuments  />} />


            


          </Route>
          <Route path="/enseignantDashboard" element={<EnseignantDashboard />}>
            <Route index element={<WelcomePage />} />
            <Route path="CalendarComponent" element={<CalendarComponent />} />
            <Route path="ReunionForm" element={<ReunionForm />} />
            <Route path="DoctorantsEncadres" element={<DoctorantsEncadres />} />
            <Route path="MessageList" element={<MessageList />} />
            <Route path="MessageForm" element={<MessageForm />} />
            <Route path="Messagerie" element={<Messagerie />} />
            <Route path="UploadDocument" element={<UploadDocument />} />
            <Route path="SharedDocuments" element={<SharedDocuments  />} />
            <Route path="CalendarForAdmin" element={<CalendarForAdmin />} />

            






          </Route>
          <Route path="/update-demande/:demandeId" element={<UpdateDemandeForm />} />
          <Route path="/DemandeForm" element={<DemandeForm />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
