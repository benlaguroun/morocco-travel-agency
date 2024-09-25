// src/components/MenuBar.js
import React, { useState, useEffect } from "react";
import "./MenuBar.css";

const MenuBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`menu-bar ${scrolled ? "scrolled" : ""}`}>
      <div className="promo-bar">
        <p>Exclusive deals for Morocco - Don't miss out!</p>
      </div>
      <nav className="nav-bar">
        <div className="logo">
          <h1>TravelAgency</h1>
        </div>
        <ul className="menu-items">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
        </ul>
        <div className="auth-buttons">
          <button className="signup">Signup</button>
          <button className="login">Login</button>
        </div>
      </nav>
    </header>
  );
};

export default MenuBar;
