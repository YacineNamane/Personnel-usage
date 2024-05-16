import React, { useState } from "react";
import axios from "axios";

function AddArticleForm({ articles, setArticles }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState("Bien dans ma tête");
  const [image, setImage] = useState("null");
  const [date, setDate] = useState("");

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
    formData.append("categories", JSON.stringify([categories])); // Assuming single category selection
    formData.append("image", image);
    formData.append("date", date);

    try {
      const response = await axios.post(
        "http://localhost:4000/api/articles/add",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
        const data = response.data;
        setArticles([...articles, data.article]);
        setTitle("");
        setDescription("");
        setCategories("Bien dans ma tête");
        setImage(null);
        setDate("");
        console.log(data);
      } else {
        console.error("Failed to add article");
      }
    } catch (error) {
      console.error("Error adding article:", error);
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
            value={categories} // Utilisez la première catégorie de la liste
            onChange={(e) => setCategories(e.target.value)} // Utilisez la fonction pour changer la première catégorie
          >
            <option value="Bien dans ma tête">Bien dans ma tête</option>
            <option value="Bien dans mon corps">Bien dans mon corps</option>
          </select>
        </label>

        <label>
          {/* Bouton pour choisir un fichier */}
          <div className="button-add-image">
            <button type="button" onClick={handleChooseFile}>
              + Image
            </button>
          </div>
          {}
          <input
            id="fileInput"
            type="file"
            onChange={handleImageChange}
            accept="image/*"
            style={{ display: "none" }}
            required
          />
        </label>
        {image && image instanceof File && (
          <img
            src={URL.createObjectURL(image)}
            alt="that's how it looks for now"
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
          <button type="submit">Ajouter</button>
        </div>
      </form>
    </div>
  );
}

export default AddArticleForm;
