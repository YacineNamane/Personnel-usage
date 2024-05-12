import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoginPic from "../assets/images/Naturypathy2.jpg";

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Veuillez remplir tous les champs");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/login",
        { email, password }
      ); // Envoyer la requête POST au backend
      const token = response.data.token;
      // Stocker le jeton JWT dans le stockage local
      localStorage.setItem("token", token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      navigate("/blog");
    } catch (error) {
      setError("Identifiants invalides");
      console.error("Erreur lors de la connexion :", error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setShouldAnimate(true);
    }, 100);
  }, []);

  return (
    <div className={`login-containner ${shouldAnimate ? "animate" : ""}`}>
      <div
        className={`login-img ${shouldAnimate ? "pop-in-left" : ""}`}
        style={{ backgroundImage: `url(${LoginPic})` }}
      >
        {" "}
      </div>
      <form
        className={`login-form ${shouldAnimate ? "pop-in-right" : ""}`}
        onSubmit={handleSubmit}
      >
        <h2>Se connecter </h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="form-info-section">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-info-section">
          <label htmlFor="password">Passeword:</label>
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
