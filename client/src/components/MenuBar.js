import React, { useState, useEffect } from "react";
import "./MenuBar.css";

const MenuBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // To toggle menu on mobile
  const [subMenuOpen, setSubMenuOpen] = useState({
    tours: false,
    organizedTravels: false,
    services: false,
  }); // To toggle sub-menus

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

  const toggleSubMenu = (menu) => {
    setSubMenuOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <header className={`menu-bar ${scrolled ? "scrolled" : ""}`}>
      <div className="promo-bar">
        <p>Exclusive deals for Morocco - Don't miss out!</p>
      </div>
      <nav className="nav-bar">
        <div className="logo">
          <h1>TravelAgency</h1>
        </div>
        <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"} {/* Close or open menu */}
        </div>
        <ul className={`menu-items ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <button
              className="dropdown-toggle"
              onClick={() => toggleSubMenu("tours")}
            >
              Tours{" "}
              <span className="dropdown-arrow">
                {subMenuOpen.tours ? "▲" : "▼"}
              </span>
            </button>
            {subMenuOpen.tours && (
              <ul className="dropdown-menu">
                <li>
                  <a href="#tours">Tours</a>
                </li>
                <li>
                  <a href="#trekking">Trekking</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="#activities">Activities</a>
          </li>
          <li>
            <a href="#excursions">Excursions</a>
          </li>
          <li>
            <button
              className="dropdown-toggle"
              onClick={() => toggleSubMenu("organizedTravels")}
            >
              Organized Travels{" "}
              <span className="dropdown-arrow">
                {subMenuOpen.organizedTravels ? "▲" : "▼"}
              </span>
            </button>
            {subMenuOpen.organizedTravels && (
              <ul className="dropdown-menu">
                <li>
                  <a href="#national">National Travel</a>
                </li>
                <li>
                  <a href="#international">International Travel</a>
                </li>
                <li>
                  <a href="#hajj">Hajj / Umrah</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button
              className="dropdown-toggle"
              onClick={() => toggleSubMenu("services")}
            >
              Our Services{" "}
              <span className="dropdown-arrow">
                {subMenuOpen.services ? "▲" : "▼"}
              </span>
            </button>
            {subMenuOpen.services && (
              <ul className="dropdown-menu">
                <li>
                  <a href="#event">Event</a>
                </li>
                <li>
                  <a href="#flights">Flights</a>
                </li>
                <li>
                  <a href="#hotels">Hotels</a>
                </li>
                <li>
                  <a href="#transfer">Transfer</a>
                </li>
              </ul>
            )}
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
