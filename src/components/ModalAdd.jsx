import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import AddArticleForm from "./AddArticleForm";
import ArticleList from "./ArticleList";
import AdminAuth from "./AdminAuth";
import "bootstrap/dist/css/bootstrap.min.css";

function ModalAjout({ articles, setArticles }) {
  const [show, setShow] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const isAdmin = AdminAuth();

  const handleClose = () => {
    setShow(false);
    document.body.classList.remove("modal-opened");
  };

  const handleShow = () => {
    setShow(true);
    document.body.classList.add("modal-opened");
  };

  const handleToggleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <div className="article-management">
      <div className="admin-pannel">
        {isAdmin && (
          <>
            {/* Bouton Add Article */}
            <Button className="btn custom-btn" onClick={handleShow}>
              Add article
            </Button>
            {/* Bouton Edit Mode */}
            <Button
              className="btn custom-btn"
              onClick={handleToggleEditMode}
              style={{ marginRight: "10px" }}
            >
              {editMode ? "Exit Edit Mode" : "Edit Mode"}
            </Button>
          </>
        )}
      </div>
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
      <ArticleList articles={articles} isAdmin={isAdmin} editMode={editMode} />
    </div>
  );
}

export default ModalAjout;
