// src/components/HeroSection.js
import React, { useState } from "react";
import "./HeroSection.css";
import { FaSearch } from "react-icons/fa";

const HeroSection = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <section className="hero-section">
      <div className="overlay">
        <h1>Discover The Magic In Every Destination With Us!</h1>
        <p>
          Enjoy exclusive offers and best prices for satisfying travel packages.
        </p>
        <button className="cta-button">Get Started</button>

        {/* Search Bar */}
        <div className={`search-bar ${searchOpen ? "open" : "closed"}`}>
          <input type="text" placeholder="Destination" />
          <input type="date" placeholder="Check-In" />
          <input type="date" placeholder="Check-Out" />
          <input type="number" placeholder="Travelers" />
          <button>Search</button>
        </div>

        {/* Search Icon */}
        {!searchOpen && (
          <div className="search-icon" onClick={toggleSearch}>
            <FaSearch size={24} />
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
