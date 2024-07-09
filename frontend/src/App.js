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



import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import ActivationPage from "./components/ActivationPage";
import ResetPasswordRequest from "./components/ResetPasswordRequest"; // Composant pour demander la réinitialisation de mot de passe
import ResetPassword from "./components/ResetPassword"; // Composant pour réinitialiser le mot de passe

const App = () => {
  return (
    <Router>
      <div className="flex flex-col items-center h-screen m-0">
        {/* <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Home
              </Link>
            </li>
          </div>
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        </nav> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/confirm/:activationcode" element={<ActivationPage />} />
          <Route path="/reset-password" element={<ResetPassword />} />{" "}
          {/* Ajoutez cette ligne */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
