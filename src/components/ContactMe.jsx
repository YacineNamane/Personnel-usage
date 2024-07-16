import React, { useRef, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import contactimg from "../assets/images/contact.svg";

const ContactMe = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/send-email",
        formData
      );
      console.log(response.data.message);
      setMessageSent(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email:", error);
    }
  };

  useEffect(() => {
    if (messageSent) {
      const timer = setTimeout(() => {
        setMessageSent(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [messageSent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="mecontacter-section" id="Contact">
      <h2>
        Vous avez une question ? Besoin de conseils ? <br /> N'hésiter pas a me
        contacter
      </h2>
      <div className="contact-form">
        {messageSent && (
          <div className="message-sent">
            <p>Message envoyé avec succès !</p>
          </div>
        )}
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-3">
            <label className="form-label">
              Nom:
              <input
                type="text"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="mb-3">
            <label className="form-label">
              Email:
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="mb-3">
            <label className="form-label">
              Titre:
              <input
                type="text"
                name="subject"
                className="form-control"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="mb-3">
            <label className="form-label">
              Message:
              <textarea
                name="message"
                className="form-control"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="contact-send-btn">
            <button type="submit" className="btn btn-primary">
              Envoyer
            </button>
          </div>
        </form>
        <div className="contact-illustration">
          <img src={contactimg} alt="illusraation contactez moi " />
        </div>
      </div>
      <div className="mail-contact mt-4">
        <h2>
          Vous pouvez me contacter directement par mail aussi{" "}
          <a href="mailto:anna.perla.270@gmail.com">ici.</a>
        </h2>
      </div>
    </div>
  );
};

export default ContactMe;
