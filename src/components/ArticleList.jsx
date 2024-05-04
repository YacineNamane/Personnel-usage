import React from "react";

function ArticleList({ articles }) {
  return (
    <div className="article-list">
      {articles.map((article, index) => (
        <div key={index} className="article">
          <div className="img-container">
            {article.image && <img src={article.image} alt="Article" />}
          </div>
          <div className="article-main-info">
            <div className="title-description">
              <div className="article-title">
                <h2>
                  {article.title.length > 30
                    ? article.title.slice(0, 30) + "..."
                    : article.title}
                </h2>
              </div>
              <div className="article-description">
                <p>
                  {article.description.length > 100
                    ? article.description.slice(0, 100) + "..."
                    : article.description}
                </p>
              </div>
            </div>
            <div className="tag-data">
              <div className="category-tags">
                {article.categories.map((category, index) => (
                  <div key={index} className="category-tag">
                    {category}
                  </div>
                ))}
              </div>
              <div className="article-date">
                <p>{article.date}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ArticleList;
