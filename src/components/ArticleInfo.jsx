import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ArticleInfo() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/articles/${id}`
        );
        setArticle(response.data.article);
      } catch (error) {
        console.error("Error fetching article details:", error);
      }
    };

    fetchArticle();
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="article-details">
      <div
        className="article-image-detail"
        style={{ backgroundImage: `url(${article.image})` }}
      >
        {/* L'image est définie comme arrière-plan */}
      </div>

      <div className="article-info-detail">
        <h2>{article.title}</h2>
        <p>{article.description}</p>
      </div>
      <div>
        <p>Publié le : {new Date(article.date).toLocaleDateString()}</p>
      </div>
    </div>
  );
}

export default ArticleInfo;
