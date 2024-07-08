import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ActivationPage() {
  const { activationcode } = useParams();

  useEffect(() => {
    const activateAccount = async () => {
      try {
        const response = await axios.post(`http://localhost:3000/api/auth/verifyuser/${activationcode}`);
        alert(response.data.message);
      } catch (error) {
        alert("Erreur lors de l'activation du compte");
      }
    };
    activateAccount();
  }, [activationcode]);

  return <div>Activation en cours...</div>;
}
