import React, { useState, useEffect } from "react";
import axios from "axios";

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
      setDate(articleToEdit.date || "");
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
      let response;
      if (articleToEdit) {
        response = await axios.put(
          `http://localhost:4000/api/articles/update/${articleToEdit._id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      } else {
        response = await axios.post(
          "http://localhost:4000/api/articles/add",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      }

      if (response.status === 200 || response.status === 201) {
        const data = response.data;
        if (articleToEdit) {
          setArticles(
            articles.map((article) =>
              article._id === data.article._id ? data.article : article
            )
          );
        } else {
          setArticles([...articles, data.article]);
        }
        setTitle("");
        setDescription("");
        setCategories("Bien dans ma tête");
        setImage(null);
        setDate("");
        console.log(data);
      } else {
        console.error("Failed to save article");
      }
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
