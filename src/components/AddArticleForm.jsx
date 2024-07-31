import React, { useState, useEffect } from "react";
import { addArticle, updateArticle } from "../Api.js";

function AddArticleForm({ articles, setArticles, articleToEdit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState("Bien dans ma tête");
  const [image, setImage] = useState(null);
  const [date, setDate] = useState("");

  useEffect(() => {
    if (articleToEdit) {
      setTitle(articleToEdit.title || "");
      setDescription(articleToEdit.description || "");
      setCategories(articleToEdit.categories || "Bien dans ma tête");
      setImage(articleToEdit.image || null);

      // Convertir la date en format yyyy-MM-dd
      const formattedDate = articleToEdit.date
        ? new Date(articleToEdit.date).toISOString().split("T")[0]
        : "";
      setDate(formattedDate);
    }
  }, [articleToEdit]);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleChooseFile = () => {
    document.getElementById("fileInput").click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("categories", categories);
    formData.append("image", image);
    formData.append("date", date);

    try {
      let data;
      if (articleToEdit) {
        data = await updateArticle(articleToEdit._id, formData);
        setArticles(
          articles.map((article) =>
            article._id === data.article._id ? data.article : article
          )
        );
      } else {
        data = await addArticle(formData);
        setArticles([...articles, data.article]);
      }

      // Reset form fields
      setTitle("");
      setDescription("");
      setCategories("Bien dans ma tête");
      setImage(null);
      setDate("");
    } catch (error) {
      console.error("Error saving article:", error);
    }
  };

  return (
    <div className="article-container">
      <form className="form-ajout" onSubmit={handleSubmit}>
        <label>
          Titre :
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Description :
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <label>
          Catégorie :
          <select
            value={categories}
            onChange={(e) => setCategories(e.target.value)}
          >
            <option value="Bien dans ma tête">Bien dans ma tête</option>
            <option value="Bien dans mon corps">Bien dans mon corps</option>
          </select>
        </label>

        <label>
          <div className="button-add-image">
            <button type="button" onClick={handleChooseFile}>
              + Image
            </button>
          </div>
          <input
            id="fileInput"
            type="file"
            onChange={handleImageChange}
            accept="image/*"
            style={{ display: "none" }}
            required={!image}
          />
        </label>
        {image && image instanceof File && (
          <img
            src={URL.createObjectURL(image)}
            alt="that's how it looks for now"
            style={{ maxWidth: "200px" }}
          />
        )}
        {image && typeof image === "string" && (
          <img
            src={image}
            alt="current article"
            style={{ maxWidth: "200px" }}
          />
        )}
        <label>
          Date de publication :
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <div className="button-add-article">
          <button type="submit">{articleToEdit ? "Update" : "Share"}</button>
        </div>
      </form>
    </div>
  );
}

export default AddArticleForm;
