import React, { useState, useEffect } from "react";
import "./MenuBar.css";

const MenuBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState({
    tours: false,
    organizedTravels: false,
    services: false,
  });
  const [activeItem, setActiveItem] = useState(""); // To track active menu item

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

  const handleItemClick = (item) => {
    setActiveItem(item);
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
            <a
              href="#home"
              className={activeItem === "home" ? "active" : ""}
              onClick={() => handleItemClick("home")}
            >
              Home
            </a>
          </li>
          <li>
            <button
              className={`dropdown-toggle ${
                activeItem === "tours" ? "active" : ""
              }`}
              onClick={() => {
                toggleSubMenu("tours");
                handleItemClick("tours");
              }}
            >
              Tours
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
            <a
              href="#activities"
              className={activeItem === "activities" ? "active" : ""}
              onClick={() => handleItemClick("activities")}
            >
              Activities
            </a>
          </li>
          <li>
            <a
              href="#excursions"
              className={activeItem === "excursions" ? "active" : ""}
              onClick={() => handleItemClick("excursions")}
            >
              Excursions
            </a>
          </li>
          <li>
            <button
              className={`dropdown-toggle ${
                activeItem === "organizedTravels" ? "active" : ""
              }`}
              onClick={() => {
                toggleSubMenu("organizedTravels");
                handleItemClick("organizedTravels");
              }}
            >
              Organized Travels
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
              className={`dropdown-toggle ${
                activeItem === "services" ? "active" : ""
              }`}
              onClick={() => {
                toggleSubMenu("services");
                handleItemClick("services");
              }}
            >
              Our Services
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
