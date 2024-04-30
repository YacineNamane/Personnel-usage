import React, { useState } from "react";
import AnnaG from "../assets/images/annag.gif";

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Veuillez remplir tous les champs");
      return;
    }
    onSubmit({ email, password });
    setEmail("");
    setPassword("");
    setError("");
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
