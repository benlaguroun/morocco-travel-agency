import React from "react";
import "./Excursions.css";

const excursionsData = [
  {
    title: "Chefchaouen: The Blue City",
    image: "../images/chefchaouen.jpg",
    description:
      "Visit the stunning blue city of Chefchaouen, a place rich in history and culture. Wander through the blue streets and enjoy local cuisine.",
    duration: "Full-Day",
    price: "$120",
  },
  {
    title: "Ouzoud Waterfalls",
    image: "../images/ouzoud-waterfalls.jpg",
    description:
      "Explore one of Morocco’s most beautiful natural wonders with a trip to Ouzoud Falls. Perfect for nature lovers and photography enthusiasts.",
    duration: "Half-Day",
    price: "$80",
  },
  {
    title: "Aït Benhaddou and Ouarzazate",
    image: "../images/ait-benhaddou.jpg",
    description:
      "Discover the UNESCO World Heritage site of Aït Benhaddou and visit the nearby town of Ouarzazate, the gateway to the Sahara Desert.",
    duration: "Full-Day",
    price: "$150",
  },
  {
    title: "Essaouira Coastal Excursion",
    image: "../images/essaouira.jpg",
    description:
      "Spend a day in the charming coastal town of Essaouira. Visit the medina, explore the fortifications, and relax by the Atlantic Ocean.",
    duration: "Full-Day",
    price: "$140",
  },
  {
    title: "Merzouga Dunes Adventure",
    image: "../images/merzouga-dunes.jpg",
    description:
      "Take a journey into the heart of the desert with a trip to Merzouga, where you’ll explore the towering sand dunes on camelback.",
    duration: "2 Days",
    price: "$300",
  },
  {
    title: "Agadir Beach Getaway",
    image: "../images/agadir-beach.jpg",
    description:
      "Relax and unwind with a beach day at Agadir, a vibrant coastal city known for its beautiful beaches and laid-back atmosphere.",
    duration: "Full-Day",
    price: "$100",
  },
];

const Excursions = () => {
  return (
    <div className="excursions-page">
      <header className="excursions-header">
        <h1>Exciting Excursions Across Morocco</h1>
        <p>
          Explore Morocco’s hidden gems with our unique excursions. Whether you
          prefer scenic views or cultural experiences, we’ve got something for
          everyone.
        </p>
      </header>

      <section className="excursions-list">
        {excursionsData.map((excursion, index) => (
          <div
            key={index}
            className={`excursion-card ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="excursion-image-wrapper">
              <img
                src={excursion.image}
                alt={excursion.title}
                className="excursion-image"
              />
            </div>
            <div className="excursion-content">
              <h2>{excursion.title}</h2>
              <p>{excursion.description}</p>
              <div className="excursion-details">
                <span>Duration: {excursion.duration}</span>
                <span>Price: {excursion.price}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Excursions;
