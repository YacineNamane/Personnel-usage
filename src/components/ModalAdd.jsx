import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { jwtDecode } from "jwt-decode";
import AddArticleForm from "./AddArticleForm";
import "bootstrap/dist/css/bootstrap.min.css";

function ModalAjout({ articles, setArticles }) {
  const [show, setShow] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); // admin status

  useEffect(() => {
    // Fonction pour vérifier si le token est valide
    const isTokenValid = (token) => {
      if (!token) return false;
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000; // Temps actuel en secondes
      return decodedToken.exp > currentTime; // Comparaison avec la date d'expiration du token
    };

    const checkTokenValidity = () => {
      const token = localStorage.getItem("token");
      if (token && isTokenValid(token)) {
        const decodedToken = jwtDecode(token);
        setIsAdmin(decodedToken && decodedToken.isAdmin);
      } else {
        setIsAdmin(false);
      }
    };

    // Vérifiez la validité du token lors du montage du composant
    checkTokenValidity();

    // Rafraîchissez périodiquement la vérification de la validité du token
    const tokenCheckInterval = setInterval(checkTokenValidity, 1000);

    // Nettoyage de l'intervalle lors du démontage du composant
    return () => clearInterval(tokenCheckInterval);
  }, []);

  const handleClose = () => {
    setShow(false);
    document.body.classList.remove("modal-opened");
  };

  const handleShow = () => {
    setShow(true);
    document.body.classList.add("modal-opened");
  };

  return (
    <div className="article-management">
      {isAdmin && ( // Afficher le bouton uniquement si l'utilisateur est un admin
        <Button className="btn custom-btn" onClick={handleShow}>
          Add article
        </Button>
      )}
      {/* Arrière-plan de la page */}
      <Modal
        dialogClassName="custom-modal modal-lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        scrollable
      >
        <Modal.Header closeButton={false}>
          <Modal.Title>
            <div>Partager un article</div>
            <div className="btn-close" onClick={handleClose}></div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddArticleForm articles={articles} setArticles={setArticles} />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalAjout;
