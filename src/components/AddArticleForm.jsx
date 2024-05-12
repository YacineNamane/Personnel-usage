import React, { useState } from "react";

function AddArticleForm({ articles, setArticles }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState(["Bien-être"]);
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

  const handleAddCategory = () => {
    setCategories([...categories, ""]);
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
        {categories.map((category, index) => (
          <div key={index}>
            <label>
              Catégorie :
              <select
                value={category}
                onChange={(e) => handleChangeCategory(index, e.target.value)}
              >
                <option value="Bien-être">Bien-être</option>
                <option value="Nutrition">Nutrition</option>
                <option value="Anxiété">Anxiété</option>
                {/* Ajout d'autres catégorie si nécessaire a voir....*/}
              </select>
            </label>
          </div>
        ))}
        <button
          className="button-add-category"
          type="button"
          onClick={handleAddCategory}
        >
          Ajouter une catégorie
        </button>
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
