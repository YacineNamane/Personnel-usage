import React from "react";
import NavPannel from "../components/Header";
import Type from "../effects/Type";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <NavPannel />
      <Type />
      <Footer />
    </div>
  );
}

export default Home;
