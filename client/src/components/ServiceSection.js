// src/components/ServiceSection.js
import React from "react";
import "./ServiceSection.css";
import { FaHotel, FaPlane, FaCar, FaTicketAlt } from "react-icons/fa"; // FontAwesome Icons

const ServiceSection = () => {
  return (
    <section className="service-section">
      <h2>Our Services</h2>
      <div className="services">
        <div className="service-item">
          <FaHotel className="service-icon" />
          <h3>Hotels</h3>
          <p>Find the best hotel deals around the world.</p>
        </div>
        <div className="service-item">
          <FaPlane className="service-icon" />
          <h3>Flights</h3>
          <p>Book flights to any destination with ease.</p>
        </div>
        <div className="service-item">
          <FaCar className="service-icon" />
          <h3>Cars</h3>
          <p>Rent a car to explore your destinations.</p>
        </div>
        <div className="service-item">
          <FaTicketAlt className="service-icon" />
          <h3>Events</h3>
          <p>Enjoy exclusive events at your favorite destinations.</p>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
