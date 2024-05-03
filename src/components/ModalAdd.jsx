import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import AddArticleForm from "./AddArticleForm";
import "bootstrap/dist/css/bootstrap.min.css";

function ModalAjout({ articles, setArticles }) {
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
      <Button className="btn custom-btn" onClick={handleShow}>
        Add article
      </Button>
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
