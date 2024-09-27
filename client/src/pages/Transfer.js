import React from "react";
import "./Transfer.css";

const Transfer = () => {
  return (
    <div className="transfer-page">
      {/* Hero Section */}
      <section className="transfer-hero">
        <div className="hero-content">
          <h1>Private and Comfortable Transfers</h1>
          <p>
            Reliable transfers across Morocco – from airports, hotels, and
            cities.
          </p>
          <button className="cta-button">Book Your Transfer</button>
        </div>
      </section>

      {/* Transfer Options Section */}
      <section className="transfer-options">
        <h2 className="section-title">Our Transfer Options</h2>
        <div className="transfer-cards">
          {transferOptions.map((option, index) => (
            <div key={index} className="transfer-card">
              <img src={option.image} alt={option.name} />
              <div className="card-content">
                <h3>{option.name}</h3>
                <p>{option.description}</p>
                <span className="price-tag">{option.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>Why Choose Our Transfers?</h2>
        <ul className="benefits-list">
          <li>✔️ Comfortable and modern vehicles</li>
          <li>✔️ Professional drivers</li>
          <li>✔️ Punctual service</li>
          <li>✔️ Competitive pricing</li>
        </ul>
      </section>
    </div>
  );
};

const transferOptions = [
  {
    name: "Airport to City Center",
    description:
      "Direct transfer from the airport to any city center location.",
    price: "$50",
    image: "/images/airport-transfer.jpg",
  },
  {
    name: "Hotel to City Tour",
    description: "Comfortable transfers from your hotel for city sightseeing.",
    price: "$70",
    image: "/images/hotel-transfer.jpg",
  },
  {
    name: "Luxury VIP Transfer",
    description: "Exclusive VIP transfer services with luxury vehicles.",
    price: "$150",
    image: "/images/vip-transfer.jpg",
  },
];

export default Transfer;
