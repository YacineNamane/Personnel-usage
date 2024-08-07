import React, { useState } from "react";
import NavPannel from "../components/Header";
import Type from "../effects/Type";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import SearchResult from "../components/SearchResult";
import Weather from "../components/Weather";
import InfoHome from "../components/InfoHome";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  return (
    <div>
      <NavPannel />
      <div className="search-container">
        <Weather />
        <SearchBar onSearch={handleSearch} />
        <SearchResult searchTerm={searchTerm} />
        <Type />
      </div>
      <InfoHome />
      <Footer />
    </div>
  );
}

export default Home;
