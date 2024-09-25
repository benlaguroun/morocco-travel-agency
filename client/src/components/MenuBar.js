// MenuBar.js
import React, { useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./MenuBar.css";

const MenuBar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      const promoBanner = document.querySelector(".promotion-banner");
      if (window.scrollY > 100) {
        navbar.classList.add("navbar-fixed");
        promoBanner.classList.add("hide-promo");
      } else {
        navbar.classList.remove("navbar-fixed");
        promoBanner.classList.remove("hide-promo");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Promotion Banner */}
      <div className="promotion-banner">
        <p>Special Offer! 20% off on all bookings. Use code: TRAVEL20</p>
      </div>

      {/* Navbar */}
      <Navbar collapseOnSelect expand="lg" className="navbar" variant="light">
        <Navbar.Brand href="#home">Travel Agency</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#tours">Tours</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default MenuBar;
