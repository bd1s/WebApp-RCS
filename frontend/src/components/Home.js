// // src/components/Home.jsx
// import React from "react";
// import { Link } from "react-router-dom";
// import logo from "../assets/fac_logo.png";
// import silerimage from "../assets/sliderimage5.jpg";

// const Home = () => {
//   return (
//     <div className="h-full flex flex-col justify-between w-9/12">
//       <div className="flex flex-row justify-between items-center pt-52">
//         <div className="flex flex-col gap-12">
//           <img src={logo} alt="logo" className="w-36 h-36" />
//           <h2 className="text-6xl">
//             Meilleure plateforme pour un rendement optimal.
//           </h2>
//           <Link
//             to="/login"
//             className="btn btn-primary times bg-[#9CD8ED] border-[#9CD8ED] rounded-full	w-fit"
//           >
//             Se connecter
//           </Link>
//           <Link to="/register" className="underline text-[#9CD8ED]">
//             Pas encore inscrit ? Créez un compte
//           </Link>
//         </div>
//         <img src={silerimage} alt="silerimage" className="w-1/2" />
//       </div>

//       <footer className="text-center text-gray-400 text-sm w-full h-6 ">
//         <p>
//           &copy; 2021 Faculté des Sciences - Université Chouaib Doukkali - El
//           Jadida
//         </p>
//       </footer>
//     </div>
//   );
// };

// export default Home;


import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/fac_logo.png";
import silerimage from "../assets/sliderimage5.jpg";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center w-full"> 
      {/* Conteneur principal avec hauteur minimale égale à la hauteur de l'écran */}
      <div className="flex flex-row justify-between items-center flex-grow w-9/12">
        <div className="flex flex-col gap-12">
          <img src={logo} alt="logo" className="w-36 h-36" />
          <h2 className="text-6xl">
            Meilleure plateforme pour un rendement optimal.
          </h2>
          <Link
            to="/login"
            className="btn btn-primary times bg-[#9CD8ED] border-[#9CD8ED] rounded-full w-fit"
          >
            Se connecter
          </Link>
          <Link to="/register" className="underline text-[#9CD8ED]">
            Pas encore inscrit ? Créez un compte
          </Link>
        </div>
        <img src={silerimage} alt="silerimage" className="w-1/2" />
      </div>

      <footer className="text-center text-gray-400 text-sm w-full h-6">
        <p>
          &copy; 2021 Faculté des Sciences - Université Chouaib Doukkali - El
          Jadida
        </p>
      </footer>
    </div>
  );
};

export default Home;
