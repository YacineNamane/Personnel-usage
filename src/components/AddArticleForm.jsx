import React, { useState } from "react";

function AddArticleForm({ articles, setArticles }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([
    "Bien dans ma tête",
    "Bien dans mon corps",
  ]);
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
      categories: categories,
      image: image,
      date: date,
    };
    setArticles([...articles, newArticle]);
    // Réinitialiser les champs du formulaire après soumission
    setTitle("");
    setDescription("");
    setCategories([]);
    setImage("");
    setDate("");
  };

  const handleChangeCategory = (index, value) => {
    const updatedCategories = [...categories];
    updatedCategories[index] = value;
    setCategories(updatedCategories);
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
          Catégorie :
          <select
            value={categories[0]} // Utilisez la première catégorie de la liste
            onChange={(e) => handleChangeCategory(0, e.target.value)} // Utilisez la fonction pour changer la première catégorie
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
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
