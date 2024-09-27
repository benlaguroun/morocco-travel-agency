// src/pages/Home.js
import React from "react";
import HeroSection from "../components/HeroSection";
import ServiceSection from "../components/ServiceSection";
import Destinations from "../components/Destinations";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import TravelBuilder from "../components/TravelBuilder";
import MapSection from "../components/MapSection";
import ContactUs from "../components/ContactUs";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServiceSection />
      <Destinations />
      <Testimonials />
      <Gallery />
      <TravelBuilder />
      <MapSection />
      <ContactUs />
    </div>
  );
};

export default Home;
