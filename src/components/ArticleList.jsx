import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import trash from "../assets/images/trash.png";
import update from "../assets/images/update.png";

function ArticleList({ articles, isAdmin, editMode, onEditArticle }) {
  const [articleList, setArticleList] = useState([]); // État pour stocker les articles récupérés

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/articles"); // Endpoint de l'API à appeler
        setArticleList(response.data.articles); // Mettre à jour l'état avec les articles récupérés depuis l'API
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles(); // Appeler la fonction pour récupérer les articles au chargement du composant
  }, []);

  const deleteArticle = async (articleId) => {
    try {
      await axios.delete(
        `http://localhost:4000/api/articles/delete/${articleId}`
      );
      setArticleList(
        articleList.filter((article) => article._id !== articleId)
      ); // Mettre à jour l'état pour supprimer l'article localement
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  const renderAdminButtons = (article) => {
    if (!isAdmin || !editMode) return null;

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
  };

  return (
    <div className="article-list">
      {articleList.map((article) => (
        <div key={article._id} className="article">
          <NavLink to={`/ArticleDetails/${article._id}`}>
            <div
              className="img-container"
              style={{ backgroundImage: `url(${article.image})` }}
            >
              {/* L'image est définie comme arrière-plan */}
            </div>

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
          {renderAdminButtons(article)}
        </div>
      ))}
    </div>
  );
}

export default ArticleList;
