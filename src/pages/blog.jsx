import React, { useState } from "react";
import NavPannel from "../components/Header";
import ModalAjout from "../components/ModalAdd";
import Footer from "../components/Footer";

function Blog() {
  const [articles, setArticles] = useState([]);

  return (
    <div>
      <NavPannel />
      <ModalAjout articles={articles} setArticles={setArticles} />
      <Footer />
    </div>
  );
}

export default Blog;
