import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";
import Events from "./components/Pages/Events/Events.jsx";
import Membership from "./Components/Pages/Membership.jsx";
import Footer from "./Components/Footer.jsx";
import Gallery from "./Components/Pages/Gallery.jsx"; // adjust path as needed

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/events" element={<Events />} />
                <Route path="/Membership" element={<Membership />} />
                <Route path="/Gallery" element={<Gallery />} />
                {/* Other routes can be added here */}
            </Routes>
            <Footer />
        </>
    );
}

export default App;
