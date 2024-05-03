import React, { useState } from "react";

function AddArticleForm({ articles, setArticles }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setImage(event.target.result);
    };
    reader.readAsDataURL(file);
  };
  const handleChooseFile = () => {
    document.getElementById("fileInput").click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArticle = {
      title: title,
      description: description,
      category: category,
      image: image,
      date: date,
    };
    setArticles([...articles, newArticle]);
    // Réinitialiser les champs du formulaire après soumission
    setTitle("");
    setDescription("");
    setCategory("");
    setImage("");
    setDate("");
  };

  return (
    <div className="article-container">
      <form className="form-ajout" onSubmit={handleSubmit}>
        <label>
          Titre:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <label>
          Catégorie : {/* Ajout du champ de sélection de la catégorie */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Bien-être">Bien-être</option>
            <option value="Nutrition">Nutrition</option>
            <option value="Anxiété">Anxiété</option>
          </select>
        </label>
        <label>
          {/* Bouton personnalisé pour choisir un fichier */}
          <div className="button-add-image">
            <button type="button" onClick={handleChooseFile}>
              + Image
            </button>
          </div>
          {/* Champ de saisie caché pour le téléchargement de fichiers */}
          <input
            id="fileInput"
            type="file"
            onChange={handleImageChange}
            accept="image/*"
            style={{ display: "none" }}
            required
          />
        </label>
        {image && (
          <img
            src={image}
            alt="that's how it looks for now"
            style={{ maxWidth: "200px" }}
          />
        )}
        <label>
          Date de publication:
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
