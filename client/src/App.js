// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Tours from "./pages/Tours";
import Contact from "./pages/Contact";
import MenuBar from "./components/MenuBar"; // Updated import

function App() {
  return (
    <Router>
      {/* MenuBar includes the Navbar and Promotion Banner */}
      <MenuBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
