import React from "react";
import { NavLink } from "react-router-dom";
import trash from "../assets/images/trash.png";
import update from "../assets/images/update.png";

function ArticleList({ articles, isAdmin, editMode }) {
  const renderAdminButtons = () => {
    if (!isAdmin || !editMode) return null;

    return (
      <div className="admin-buttons">
        <div className="update-one">
          <img src={update} alt="update-icone" />
        </div>
        <div className="delete-one">
          <img src={trash} alt="trash-bin" />
        </div>
      </div>
    );
  };

  return (
    <div className="article-list">
      {articles.map((article, index) => (
        <div key={index} className="article">
          <NavLink to={`/ArticleDetails/${article._id}`}>
            <div
              className="img-container"
              style={{ backgroundImage: `url(${article.image})` }}
            >
              {/* L'image est définie comme arrière-plan */}
            </div>

            <div className="article-title">
              <h2>
                {article.title.length > 20
                  ? article.title.slice(0, 20) + "..."
                  : article.title}
              </h2>
            </div>

            {article.categories.length > 0 && (
              <div className="category-tag">
                {article.categories[0]}{" "}
                {/* Affiche uniquement la première catégorie */}
              </div>
            )}

            <div className="article-description">
              <p>
                {article.description.length > 50
                  ? article.description.slice(0, 50) + "..."
                  : article.description}
              </p>
            </div>
          </NavLink>
          {renderAdminButtons()}
        </div>
      ))}
    </div>
  );
}

export default ArticleList;
