// src/components/ResetPassword.jsx
import React from "react";
import Header from "./atoms/header";

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Token:", token);
    console.log("Password:", password);
    try {
      const response = await axios.post(`http://localhost:3001/api/auth/reset-password`, { token, password });
      console.log("API response:", response);
      alert("Votre mot de passe a été réinitialisé avec succès !");
      window.location.href = "/login"; 
    } catch (error) {
      console.error("Erreur lors de la réinitialisation du mot de passe:", error);
      alert("Une erreur s'est produite lors de la réinitialisation du mot de passe.");
    }
  };

  return (
    <div className="flex flex-col pt-4 h-full w-9/12">
      <Header />
      <div className="flex flex-col items-center bg-[#9CD8ED] w-fit p-24 self-center justify-self-center rounded-3xl gap-4">
        <h2 className="text-6xl">Réinitialiser le mot de passe</h2>
        <form
          className="flex flex-col gap-1 w-96 items-center"
          onSubmit={handleSubmit}
        >
          <div className="form-group w-full ">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <button
            type="submit"
            className="btn btn-primary bg-[#11A86D] border-0 hover:bg-[#29CD8D]"
          >
            Réinitialiser
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
