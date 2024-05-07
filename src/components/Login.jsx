import React, { useState } from "react";
import axios from "axios";
import AnnaG from "../assets/images/annag.gif";

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Veuillez remplir tous les champs");
      return;
    }
    try {
      const response = await axios.post("/login", { email, password }); // Envoyer la requête POST au backend
      console.log(response.data); // Afficher la réponse du backend (le jeton JWT)
      // Stocker le jeton JWT dans le stockage local ou les cookies
    } catch (error) {
      setError("Identifiants invalides");
      console.error("Erreur lors de la connexion :", error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-section">
        <img src={AnnaG} alt="GIF" className="gif-annag" />
      </div>
      <form onSubmit={handleSubmit}>
        <h2>Admin</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="form-info-section">
          <label htmlFor="email">Adresse email :</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-info-section">
          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-button">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
