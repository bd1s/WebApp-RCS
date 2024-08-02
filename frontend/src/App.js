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



import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import ActivationPage from "./components/ActivationPage";
import ResetPassword from "./components/ResetPassword";
import DoctorDashboard from "./components/DoctorDashboard";
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
import Logout from "./assets/logout";
import WelcomePage from "./components/WelcomePage";


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

          <Route path="/doctorDashboard" element={<DoctorDashboard />}>
          <Route index element={<WelcomePage />} /> {/* Page de bienvenue par défaut */}
            <Route path="DoctorantInfoForm" element={<DoctorantInfoForm />} />
            <Route path="DoctorantInfo" element={<DoctorantInfo />} />
            <Route path="DoctoralCycleInfoForm" element={<DoctoralCycleInfoForm />} />
            <Route path="BaccalaureateInfoForm" element={<BaccalaureateInfoForm />} />
            <Route path="UniversityInfoForm" element={<UniversityInfoForm />} />
            <Route path="PersonalInfoForm" element={<PersonalInfoForm />} />
            <Route path="DemandeRetraitProvisoireForm" element={<DemandeRetraitProvisoireForm />} />
            <Route path="InscriptionForm" element={<InscriptionForm />} />
            <Route path="DemandeTable" element={<DemandeTable />} />
            <Route path="DossierSoutenanceForm" element={<DossierSoutenanceForm />} />
            <Route path="Calendar" element={<Calendrie />} />
          </Route>
          <Route path="/update-demande/:demandeId" element={<UpdateDemandeForm />} />
          <Route path="/DemandeForm" element={<DemandeForm />} />


        </Routes>
      </div>
    </Router>
  );
};

export default App;
