import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

function SearchResult({ searchTerm }) {
  const [articleList, setArticleList] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/articles");
        setArticleList(response.data.articles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const results = articleList.filter((article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredArticles(results);
    } else {
      setFilteredArticles([]);
    }
  }, [searchTerm, articleList]);
  if (!searchTerm) {
    return null; // Ne rien afficher si aucun terme de recherche
  }

  return (
    <div className="search-results-container">
      <div className="search-results">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <div key={article._id} className="search-result-item">
              <NavLink to={`/ArticleDetails/${article._id}`}>
                <h3 className="search-result-title">{article.title}</h3>
              </NavLink>
            </div>
          ))
        ) : (
          <p className="no-results">Aucun article trouvé</p>
        )}
      </div>
    </div>
  );
}

export default SearchResult;
