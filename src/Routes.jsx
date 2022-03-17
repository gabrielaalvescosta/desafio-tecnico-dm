import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

const MainRoutes = () => {
  return (
    <>
      <Router>
      <Menu/>   
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default MainRoutes;
