import React from "react";
import "./InternationalTravel.css";

const internationalTravelData = [
  {
    title: "Paris: The City of Lights",
    image: "../images/paris.jpg",
    description:
      "Explore the romantic streets of Paris, from the Eiffel Tower to the Louvre Museum, and indulge in world-class cuisine.",
    duration: "5 Days",
    price: "$1200",
  },
  {
    title: "Tokyo: The Heart of Japan",
    image: "../images/tokyo.jpg",
    description:
      "Immerse yourself in the vibrant culture of Tokyo, with its blend of tradition and modernity. Perfect for tech enthusiasts and history buffs alike.",
    duration: "7 Days",
    price: "$1500",
  },
  {
    title: "Sydney: The Emerald City",
    image: "../images/sydney.jpg",
    description:
      "Discover the natural beauty of Australia with a trip to Sydney. Visit the iconic Opera House and Bondi Beach.",
    duration: "6 Days",
    price: "$1400",
  },
  {
    title: "New York: The Big Apple",
    image: "../images/newyork.jpg",
    description:
      "Experience the buzz of New York City, from Times Square to Central Park. A must-see for urban explorers.",
    duration: "4 Days",
    price: "$1300",
  },
  {
    title: "Rome: The Eternal City",
    image: "../images/rome.jpg",
    description:
      "Walk through ancient history in Rome, with its stunning architecture, delicious cuisine, and unforgettable landmarks.",
    duration: "5 Days",
    price: "$1100",
  },
  {
    title: "Cape Town: The Mother City",
    image: "../images/capetown.jpg",
    description:
      "Explore the stunning landscapes of Cape Town, from Table Mountain to the vibrant waterfront. Perfect for adventure lovers.",
    duration: "6 Days",
    price: "$1250",
  },
];

const InternationalTravel = () => {
  return (
    <div className="international-travel-page">
      <header className="international-travel-header">
        <h1>Discover the World with Our International Tours</h1>
        <p>
          From the bustling streets of New York to the serene beaches of Sydney,
          explore top destinations around the world with our specially curated
          international travel packages.
        </p>
      </header>

      <section className="international-travel-grid">
        {internationalTravelData.map((destination, index) => (
          <div key={index} className="destination-card">
            <div className="destination-image-wrapper">
              <img
                src={destination.image}
                alt={destination.title}
                className="destination-image"
              />
              <div className="destination-overlay">
                <h2>{destination.title}</h2>
                <p>{destination.description}</p>
              </div>
            </div>
            <div className="destination-info">
              <span>Duration: {destination.duration}</span>
              <span>Price: {destination.price}</span>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default InternationalTravel;
