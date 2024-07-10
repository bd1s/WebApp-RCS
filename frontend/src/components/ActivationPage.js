// // import React, { useEffect } from "react";
// // import { useParams } from "react-router-dom";
// // import axios from "axios";

// // export default function ActivationPage() {
// //   const { activationcode } = useParams();

// //   useEffect(() => {
// //     const activateAccount = async () => {
// //       try {
// //         const response = await axios.post(`http://localhost:3001/api/auth/verifyuser/${activationcode}`);
// //         console.log(response.data); // Vérifiez la réponse du serveur
// //         alert(response.data.message);
// //       } catch (error) {
// //         console.error(error); // Vérifiez l'erreur détaillée dans la console
// //         alert("Erreur lors de l'activation du compte");
// //       }
// //     };
// //     activateAccount();
// //   }, [activationcode]);
  

// //   return <div>Activation en cours...</div>;
// // }
// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";

// export default function ActivationPage() {
//   const { activationcode } = useParams();
//   const [isActivated, setIsActivated] = useState(false);

//   useEffect(() => {
//     axios.post(`http://localhost:3001/api/auth/verifyuser/${activationcode}`)
//       .then(response => {
//         if (response.data.message === "Félicitations ! Votre compte a été activé avec succès.") {
//           setIsActivated(true);
//         }
//       })
//       .catch(error => {
//         console.error("Erreur lors de l'activation du compte :", error);
//       });
//   }, [activationcode]);

//   return (
//     <div>
//       {isActivated && (
//         <div>
//           <p>Félicitations ! Votre compte a été activé avec succès.</p>
//           <Link to="/login">
//             <button>Se connecter</button>
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// }





// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";

// export default function ActivationPage() {
//   const { activationcode } = useParams();
//   const [isActivated, setIsActivated] = useState(false);

//   useEffect(() => {
//     axios.post(`http://localhost:3001/api/auth/verifyuser/${activationcode}`)
//       .then(response => {
//         console.log("Response from server:", response.data);
//         if (response.data.message === "Félicitations ! Votre compte a été activé avec succès.") {
//           setIsActivated(true);
//         }
//       })
//       .catch(error => {
//         console.error("Erreur lors de l'activation du compte :", error);
//       });
//   }, [activationcode]);

//   return (
//     <div>
//       {isActivated ? (
//         <div>
//           <p>Félicitations ! Votre compte a été activé avec succès.</p>
//           <Link to="/login">
//             <button>Se connecter</button>
//           </Link>
//         </div>
//       ) : (
//         <p>Activation en cours...</p>
//       )}
//     </div>
//   );
// }







// import React, { useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";


// export default function ActivationPage() {
//   const { activationcode } = useParams();

//   useEffect(() => {
//     axios.get(`http://localhost:3001/api/auth/verifyuser`,{ activationcode })
//       .then(response => {
//         console.log("Response from server:", response.data);
//       });
//   }, [activationcode]);

//   return (
//     <div>
//       <p>Félicitations ! Votre compte a été activé avec succès.</p>
//       <Link to="/login">
//         <button>Se connecter</button>
//       </Link>
//     </div>
//   );
// }

import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Header from "./atoms/header"; // Assurez-vous d'importer votre en-tête approprié si nécessaire

const ActivationPage = () => {
  const { activationcode } = useParams();

  useEffect(() => {
    axios.post(`http://localhost:3001/api/auth/verify/${activationcode}`)
    .then(response => {
        console.log("Response from server:", response.data);
      })
      .catch(error => {
        console.error("Error from server:", error);
        // Gérer l'erreur de manière appropriée si nécessaire
      });
  }, [activationcode]);

  return (
    <div className="flex flex-col pt-4 h-full w-9/12">
      <Header /> {/* Assurez-vous d'afficher l'en-tête si nécessaire */}
      <div className="flex flex-col items-center bg-[#9CD8ED] w-fit p-24 self-center justify-self-center rounded-3xl gap-4">
        <h2 className="text-6xl">Activation de compte</h2>
        <p>Félicitations ! Votre compte a été activé avec succès.</p>
        <Link to="/login">
          <button
            className="btn btn-primary bg-[#11A86D] border-0 hover:bg-[#29CD8D]"
          >
            Se connecter
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ActivationPage;
