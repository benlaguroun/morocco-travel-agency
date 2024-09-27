import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import Footer from "./components/Footer";

// Importing all pages
import Home from "./pages/Home";
import About from "./pages/About";
import Activities from "./pages/Activities";
import Excursions from "./pages/Excursions";
import Event from "./pages/Event";
import Flights from "./pages/Flights";
import HajjUmrah from "./pages/HajjUmrah";
import Hotels from "./pages/Hotels";
import InternationalTravel from "./pages/InternationalTravel";
import NationalTravel from "./pages/NationalTravel";
import Tours from "./pages/Tours";
import Transfer from "./pages/Transfer";
import Trekking from "./pages/Trekking";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <MenuBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/excursions" element={<Excursions />} />
        <Route path="/event" element={<Event />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/hajj-umrah" element={<HajjUmrah />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/international-travel" element={<InternationalTravel />} />
        <Route path="/national-travel" element={<NationalTravel />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/trekking" element={<Trekking />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
