import React from "react";
import "./HajjUmrah.css";

const hajjUmrahPackages = [
  {
    title: "Hajj Package - 5 Star",
    image: "../images/hajj.jpg",
    description:
      "Experience a spiritual journey of a lifetime with our 5-star Hajj package. Stay in luxury hotels, guided religious services, and transportation provided.",
    duration: "10 Days",
    price: "$4000",
  },
  {
    title: "Umrah Package - Budget Friendly",
    image: "../images/umrah.jpg",
    description:
      "Our budget-friendly Umrah package is perfect for pilgrims seeking a sacred journey on a budget. Includes hotel accommodations and local guidance.",
    duration: "7 Days",
    price: "$1500",
  },
  {
    title: "Hajj Deluxe Package",
    image: "../images/hajj-deluxe.jpg",
    description:
      "Enjoy a premium experience with our Deluxe Hajj package, including VIP services, private tents, and personalized religious guidance.",
    duration: "12 Days",
    price: "$5500",
  },
];

const HajjUmrah = () => {
  return (
    <div className="hajj-umrah-page">
      <header className="hajj-umrah-header">
        <h1>Hajj & Umrah Packages</h1>
        <p>
          Embark on a spiritual journey to the holy cities of Makkah and
          Madinah. Choose from our specially curated Hajj and Umrah packages to
          meet your spiritual and comfort needs.
        </p>
      </header>

      <section className="hajj-umrah-grid">
        {hajjUmrahPackages.map((packageItem, index) => (
          <div key={index} className="package-card">
            <div className="package-image-wrapper">
              <img
                src={packageItem.image}
                alt={packageItem.title}
                className="package-image"
              />
            </div>
            <div className="package-info">
              <h2>{packageItem.title}</h2>
              <p>{packageItem.description}</p>
              <div className="package-meta">
                <span>Duration: {packageItem.duration}</span>
                <span>Price: {packageItem.price}</span>
              </div>
              <button className="book-now-btn">Book Now</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default HajjUmrah;
