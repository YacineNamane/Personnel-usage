import React, { useState, useEffect } from "react";
import axios from "axios";
import Article from "./Article";
import CategoryFilter from "./CategoryFilter";

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

  const getUniqueCategories = () => {
    const categories = articleList.flatMap(
      (article) => article.categories || []
    );
    return ["Tous", ...new Set(categories)];
  };

  return (
    <div>
      <CategoryFilter
        categories={getUniqueCategories()}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <div className="article-list">
        {filteredArticles.map((article) => (
          <Article
            key={article._id}
            article={article}
            isAdmin={isAdmin}
            editMode={editMode}
            onEditArticle={onEditArticle}
            deleteArticle={deleteArticle}
          />
        ))}
      </div>
    </div>
  );
}

export default ArticleList;
