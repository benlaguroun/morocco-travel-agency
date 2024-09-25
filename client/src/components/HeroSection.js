// src/components/HeroSection.js
import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="overlay">
        <h1>Discover The Magic In Every Destination With Us!</h1>
        <p>
          Enjoy exclusive offers and best prices for satisfying travel packages.
        </p>
        <div className="search-bar">
          <input type="text" placeholder="Destination" />
          <input type="date" placeholder="Check-In" />
          <input type="date" placeholder="Check-Out" />
          <input type="number" placeholder="Travelers" />
          <button>Search</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
