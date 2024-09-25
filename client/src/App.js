// src/App.js
import React from "react";
import MenuBar from "./components/MenuBar";
import HeroSection from "./components/HeroSection";
import ServiceSection from "./components/ServiceSection";
import Destinations from "./components/Destinations";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import TravelBuilder from "./components/TravelBuilder";
import MapSection from "./components/MapSection"; // Import the MapSection component

const App = () => {
  return (
    <div>
      <MenuBar />
      <HeroSection />
      <ServiceSection />
      <Destinations />
      <Testimonials />
      <Gallery />
      <TravelBuilder />
      <MapSection /> {/* Add the Map Section */}
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
