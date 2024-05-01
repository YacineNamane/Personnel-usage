import React, { useState } from "react";

function AddArticleForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
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
    // Afficher les données dans la console
    console.log("Nouvel article :");
    console.log("Titre:", title);
    console.log("Description:", description);
    console.log("Image:", image);
    console.log("Date:", date);
    // Réinitialiser les champs du formulaire après soumission
    setTitle("");
    setDescription("");
    setImage("");
    setDate("");
  };

  return (
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
  );
}

export default AddArticleForm;
