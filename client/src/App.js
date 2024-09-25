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
import TravelBuilder from "./components/TravelBuilder"; // Import the TravelBuilder component

const App = () => {
  return (
    <div>
      <MenuBar />
      <HeroSection />
      <ServiceSection />
      <Destinations />
      <Testimonials />
      <Gallery />
      <TravelBuilder /> {/* Add the Travel Experience Builder section */}
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
