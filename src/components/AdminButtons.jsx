import React from "react";
import trash from "../assets/images/trash.png";
import update from "../assets/images/update.png";

function AdminButtons({ article, onEditArticle, deleteArticle }) {
  return (
    <div className="admin-buttons">
      <div className="update-one" onClick={() => onEditArticle(article)}>
        <img src={update} alt="update-icone" />
      </div>
      <div className="delete-one" onClick={() => deleteArticle(article._id)}>
        <img src={trash} alt="trash-bin" />
      </div>
    </div>
  );
}

export default AdminButtons;
