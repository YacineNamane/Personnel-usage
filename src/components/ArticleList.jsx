import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import trash from "../assets/images/trash.png";
import update from "../assets/images/update.png";

function ArticleList({ isAdmin, editMode, onEditArticle }) {
  const [articleList, setArticleList] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/articles");
        setArticleList(response.data.articles);
        setFilteredArticles(response.data.articles); // Initialize with all articles
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  const deleteArticle = async (articleId) => {
    try {
      await axios.delete(
        `http://localhost:4000/api/articles/delete/${articleId}`
      );
      const updatedArticles = articleList.filter(
        (article) => article._id !== articleId
      );
      setArticleList(updatedArticles);
      setFilteredArticles(updatedArticles);
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === "Tous") {
      setFilteredArticles(articleList);
    } else {
      setFilteredArticles(
        articleList.filter((article) => article.categories.includes(category))
      );
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

  const getUniqueCategories = () => {
    const categories = articleList.flatMap(
      (article) => article.categories || []
    );
    return ["Tous", ...new Set(categories)];
  };

  return (
    <div>
      <div className="category-filter">
        {getUniqueCategories().map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={selectedCategory === category ? "active" : ""}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="article-list">
        {filteredArticles.map((article) => (
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
    </div>
  );
}

export default ArticleList;
