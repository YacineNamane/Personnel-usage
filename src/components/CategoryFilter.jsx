import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="category-filter">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={selectedCategory === category ? "active" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
