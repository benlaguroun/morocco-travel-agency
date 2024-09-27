import React from "react";
import "./NationalTravel.css";

const nationalTravelData = [
  {
    title: "Casablanca: The White City",
    image: "/images/casablanca.jpg",
    description:
      "Explore the economic heart of Morocco, with modern architecture, beaches, and historic sites like the Hassan II Mosque.",
    duration: "3 Days",
    price: "$250",
  },
  {
    title: "Marrakech: The Red City",
    image: "/images/marrakech.jpg",
    description:
      "Discover the cultural heritage of Marrakech with its bustling souks, historic palaces, and beautiful gardens.",
    duration: "4 Days",
    price: "$350",
  },
  {
    title: "Fez: The Cultural Capital",
    image: "/images/fez.jpg",
    description:
      "Step into the medieval world of Fez, home to the world's oldest university and a labyrinthine medina.",
    duration: "5 Days",
    price: "$400",
  },
  {
    title: "Tangier: Gateway to Africa",
    image: "/images/tangier.jpg",
    description:
      "Visit the coastal city of Tangier, known for its rich history and its unique blend of European and Moroccan cultures.",
    duration: "3 Days",
    price: "$270",
  },
  {
    title: "Rabat: The Capital City",
    image: "/images/rabat.jpg",
    description:
      "Discover Rabat, the political capital of Morocco, known for its gardens, mausoleums, and ancient ruins.",
    duration: "2 Days",
    price: "$200",
  },
  {
    title: "Chefchaouen: The Blue Pearl",
    image: "/images/chefchaouen.jpg",
    description:
      "Wander through the blue-painted streets of Chefchaouen, a tranquil mountain town with breathtaking views.",
    duration: "2 Days",
    price: "$180",
  },
];

const NationalTravel = () => {
  return (
    <div className="national-travel-page">
      <header className="national-travel-header">
        <h1>Explore the Wonders of Morocco</h1>
        <p>
          Discover Morocco's most iconic cities and hidden gems with our
          National Travel packages. From historic medinas to vibrant modern
          cities, experience it all.
        </p>
      </header>

      <section className="national-travel-grid">
        {nationalTravelData.map((destination, index) => (
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

export default NationalTravel;
