import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import AddArticleForm from "./AddArticle";

function ModalAjout() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    document.body.classList.remove("modal-opened");
  };

  const handleShow = () => {
    setShow(true);
    document.body.classList.add("modal-opened");
  };

  return (
    <div>
      <div className="button-add-container">
        <Button variant="primary" onClick={handleShow}>
          Ajouter un article !
        </Button>
      </div>
      {/* Arrière-plan de la page */}
      <Modal
        dialogClassName="custom-modal"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        scrollable
      >
        <Modal.Header closeButton>
          <Modal.Title>Partager un article</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddArticleForm />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalAjout;
