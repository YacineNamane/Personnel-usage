import React, { useState } from "react";
import NavPannel from "../components/Header";
import ModalAjout from "../components/ModalAdd";
import ArticleList from "../components/ArticleList";

function Blog() {
  const [articles, setArticles] = useState([]);
  return (
    <div>
      <NavPannel />
      <ModalAjout articles={articles} setArticles={setArticles} />
      <ArticleList articles={articles} />
    </div>
  );
}

export default Blog;
