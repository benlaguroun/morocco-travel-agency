import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
  const [promoVisible, setPromoVisible] = useState(true); // For promo bar visibility

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);

      // Hide the promotion bar when scrolling down
      setPromoVisible(offset <= 50);

      // Close all open dropdowns when scrolling down
      if (offset > 50) {
        setSubMenuOpen({
          tours: false,
          organizedTravels: false,
          services: false,
        });
      }
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
      {promoVisible && (
        <div className="promo-bar">
          <p>Exclusive deals for Morocco - Don't miss out!</p>
        </div>
      )}
      <nav className="nav-bar">
        <div className="logo">
          <h1>TravelAgency</h1>
        </div>
        <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"} {/* Close or open menu */}
        </div>
        <ul className={`menu-items ${menuOpen ? "active" : ""}`}>
          <li>
            <Link
              to="/"
              className={activeItem === "home" ? "active" : ""}
              onClick={() => handleItemClick("home")}
            >
              Home
            </Link>
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
                  <Link to="/tours">Tours</Link>
                </li>
                <li>
                  <Link to="/trekking">Trekking</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link
              to="/activities"
              className={activeItem === "activities" ? "active" : ""}
              onClick={() => handleItemClick("activities")}
            >
              Activities
            </Link>
          </li>
          <li>
            <Link
              to="/excursions"
              className={activeItem === "excursions" ? "active" : ""}
              onClick={() => handleItemClick("excursions")}
            >
              Excursions
            </Link>
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
                  <Link to="/national-travel">National Travel</Link>
                </li>
                <li>
                  <Link to="/international-travel">International Travel</Link>
                </li>
                <li>
                  <Link to="/hajj-umrah">Hajj / Umrah</Link>
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
                  <Link to="/event">Event</Link>
                </li>
                <li>
                  <Link to="/flights">Flights</Link>
                </li>
                <li>
                  <Link to="/hotels">Hotels</Link>
                </li>
                <li>
                  <Link to="/transfer">Transfer</Link>
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
