import React, { useState } from "react";
import NavPannel from "../components/Header";
import Type from "../effects/Type";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import SearchResult from "../components/SearchResult";
import Weather from "../components/Weather";
import vod from "../assets/images/landingbg.mp4";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  return (
    <div>
      <NavPannel />
      <div className="search-container">
        <video className="background-video" autoPlay muted loop>
          <source src={vod} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Weather />
        <SearchBar onSearch={handleSearch} />
        <SearchResult searchTerm={searchTerm} />
      </div>
      <Type />
      <Footer />
    </div>
  );
}

export default Home;
