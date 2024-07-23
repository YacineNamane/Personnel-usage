import React from "react";

function SearchBar({ onSearch }) {
  const handleSearch = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-bar"
        placeholder="Explorer mon blog..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
