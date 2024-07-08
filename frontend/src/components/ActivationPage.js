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


import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function ActivationPage() {
  const { activationcode } = useParams();

  useEffect(() => {
    axios.post(`http://localhost:3001/api/auth/verifyuser/${activationcode}`)
      .then(response => {
        console.log("Response from server:", response.data);
      });
  }, [activationcode]);

  return (
    <div>
      <p>Félicitations ! Votre compte a été activé avec succès.</p>
      <Link to="/login">
        <button>Se connecter</button>
      </Link>
    </div>
  );
}
