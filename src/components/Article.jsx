import React from "react";
import { NavLink } from "react-router-dom";
import AdminButtons from "./AdminButtons";

function Article({ article, isAdmin, editMode, onEditArticle, deleteArticle }) {
  return (
    <div className="article">
      <NavLink to={`/ArticleDetails/${article._id}`}>
        <div
          className="img-container"
          style={{ backgroundImage: `url(${article.image})` }}
        />
        <div className="article-title">
          <h2>
            {article.title
              ? article.title.length > 20
                ? article.title.slice(0, 20) + "..."
                : article.title
              : "title missing"}
          </h2>
        </div>
        {article.categories && article.categories.length > 0 && (
          <div className="category-tag">
            {article.categories[0]}{" "}
            {/* Affiche uniquement la première catégorie */}
          </div>
        )}
        <div className="article-description">
          <p>
            {article.description
              ? article.description.length > 50
                ? article.description.slice(0, 50) + "..."
                : article.description
              : "Description Missing"}
          </p>
        </div>
      </NavLink>
      {isAdmin && editMode && (
        <AdminButtons
          article={article}
          onEditArticle={onEditArticle}
          deleteArticle={deleteArticle}
        />
      )}
    </div>
  );
}

export default Article;
