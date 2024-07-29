import React, { useState, useEffect } from "react";
import axios from "axios";
import Article from "./Article";
import CategoryFilter from "./CategoryFilter";

function ArticleList({ isAdmin, editMode, onEditArticle }) {
  const [articleList, setArticleList] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/articles");
        setArticleList(response.data.articles);
        setFilteredArticles(response.data.articles);
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
    setCurrentPage(1); // quand on change de category je me position sur la première page
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

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <CategoryFilter
        categories={getUniqueCategories()}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <div className="article-list">
        {currentArticles.map((article) => (
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
      <div className="pagination">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Précédent
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Suivant
        </button>
      </div>
    </div>
  );
}

export default ArticleList;
