// src/App.js
import React from "react";
import MenuBar from "./components/MenuBar";
import HeroSection from "./components/HeroSection";
import ServiceSection from "./components/ServiceSection";
import Destinations from "./components/Destinations";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs"; // Import the ContactUs component

const App = () => {
  return (
    <div>
      <MenuBar />
      <HeroSection />
      <ServiceSection />
      <Destinations />
      <Testimonials />
      <ContactUs /> {/* Add the ContactUs section */}
    </div>
  );
};

export default App;
