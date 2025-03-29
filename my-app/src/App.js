import "./App.css";
// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Landing from "./pages/Landing";
import Membership from "./pages/MemberShip";
import Resources from "./pages/Resources";
import Events2 from "./pages/Events/Events";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Events2" element={<Events2 />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Landing" element={<Landing />} />
        <Route path="/Membership" element={<Membership />} />
        <Route path="/Resources" element={<Resources />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
