import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import AddArticleForm from "./AddArticleForm";
import ArticleList from "./ArticleList";
import AdminAuth from "./AdminAuth";
import "bootstrap/dist/css/bootstrap.min.css";

function ModalAjout({ articles, setArticles }) {
  const [show, setShow] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [articleToEdit, setArticleToEdit] = useState(null);

  const isAdmin = AdminAuth();

  const handleClose = () => {
    setShow(false);
    setArticleToEdit(null);
    document.body.classList.remove("modal-opened");
  };

  const handleShow = () => {
    setShow(true);
    document.body.classList.add("modal-opened");
    setEditMode(false);
  };

  const handleToggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleEditArticle = (article) => {
    setArticleToEdit(article);
    setShow(true);
    document.body.classList.add("modal-opened");
  };

  return (
    <div className="article-management">
      <div className="admin-pannel">
        {isAdmin && (
          <>
            <Button className="btn custom-btn" onClick={handleShow}>
              Add article
            </Button>
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
            <div>
              {articleToEdit ? "Modifier l'article" : "Partager un article"}
            </div>
            <div className="btn-close" onClick={handleClose}></div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddArticleForm
            articles={articles}
            setArticles={setArticles}
            articleToEdit={articleToEdit}
          />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
      <ArticleList
        articles={articles}
        isAdmin={isAdmin}
        editMode={editMode}
        onEditArticle={handleEditArticle}
      />
    </div>
  );
}

export default ModalAjout;
