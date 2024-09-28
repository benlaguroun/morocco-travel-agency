import React from "react";
import "./Flights.css";

const flightOffers = [
  {
    destination: "Casablanca to Paris",
    price: "$350",
    airline: "Royal Air Maroc",
    date: "12th October, 2024",
    image: "../images/casablanca-paris.jpg",
  },
  {
    destination: "Marrakech to New York",
    price: "$700",
    airline: "Air France",
    date: "18th November, 2024",
    image: "../images/marrakech-newyork.jpg",
  },
  {
    destination: "Rabat to Madrid",
    price: "$280",
    airline: "Iberia",
    date: "25th October, 2024",
    image: "../images/rabat-madrid.jpg",
  },
];

const Flights = () => {
  return (
    <div className="flights-page">
      <header className="flights-header">
        <h1>Find the Best Flight Deals</h1>
        <p>
          Explore our exclusive offers on flights to popular destinations
          worldwide.
        </p>
        <div className="search-bar">
          <input type="text" placeholder="Search flights by destination..." />
          <button className="search-btn">Search</button>
        </div>
      </header>

      <section className="flight-offers">
        {flightOffers.map((flight, index) => (
          <div key={index} className="flight-card">
            <div className="flight-image-wrapper">
              <img
                src={flight.image}
                alt={flight.destination}
                className="flight-image"
              />
            </div>
            <div className="flight-details">
              <h2>{flight.destination}</h2>
              <p className="flight-meta">
                <span>Airline: {flight.airline}</span> |{" "}
                <span>Date: {flight.date}</span>
              </p>
              <p className="flight-price">Price: {flight.price}</p>
              <button className="book-now-btn">Book Now</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Flights;
