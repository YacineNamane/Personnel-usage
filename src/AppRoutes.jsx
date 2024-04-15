import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/aboutus";
import Help from "./pages/helpus";
import BugPage from "./pages/BugPage";

const AppRoutes = () => {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          <Route path="*" element={<BugPage />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
};

export default AppRoutes;
