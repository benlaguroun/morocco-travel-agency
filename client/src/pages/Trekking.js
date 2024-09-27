import React from "react";
import "./Trekking.css";

const trekkingData = [
  {
    title: "Toubkal National Park",
    image: "/images/toubkal.jpg",
    description:
      "Explore the highest peak in North Africa, Mount Toubkal, with a 3-day trek through stunning landscapes and Berber villages.",
    difficulty: "Moderate",
    duration: "3 Days",
    price: "$350",
  },
  {
    title: "M'Goun Massif",
    image: "/images/mgoun.jpg",
    description:
      "Trek through the M'Goun Massif and enjoy the diverse terrain of Morocco’s second-highest peak. Ideal for seasoned trekkers.",
    difficulty: "Challenging",
    duration: "6 Days",
    price: "$600",
  },
  {
    title: "Saghro Mountain Trek",
    image: "/images/saghro.jpg",
    description:
      "A 5-day adventure through the Saghro Mountains, offering panoramic views, volcanic formations, and encounters with nomadic life.",
    difficulty: "Moderate",
    duration: "5 Days",
    price: "$450",
  },
  {
    title: "Ourika Valley Day Hike",
    image: "/images/ourika.jpg",
    description:
      "A relaxing day hike in the lush Ourika Valley, known for its beautiful waterfalls, traditional Berber homes, and serene nature.",
    difficulty: "Easy",
    duration: "1 Day",
    price: "$80",
  },
  {
    title: "Ait Bougmez Valley",
    image: "/images/ait-bougmez.jpg",
    description:
      "Trek through the 'Happy Valley' of Ait Bougmez, famous for its terraced fields, ancient granaries, and warm Berber hospitality.",
    difficulty: "Moderate",
    duration: "4 Days",
    price: "$380",
  },
  {
    title: "Siroua Volcano Trek",
    image: "/images/siroua.jpg",
    description:
      "Challenge yourself on this 5-day trek through the Siroua volcanic range, known for its rugged beauty and isolated landscapes.",
    difficulty: "Challenging",
    duration: "5 Days",
    price: "$500",
  },
];

const Trekking = () => {
  return (
    <div className="trekking-page">
      <header className="trekking-header">
        <div className="header-content">
          <h1>Discover Morocco’s Best Trekking Adventures</h1>
          <p>
            Join us on unforgettable treks through Morocco’s most stunning
            mountain ranges and valleys. Whether you’re a seasoned adventurer or
            a beginner, we have the perfect trek for you.
          </p>
        </div>
      </header>

      <section className="trekking-cards">
        {trekkingData.map((trek, index) => (
          <div key={index} className="trek-card">
            <img src={trek.image} alt={trek.title} className="trek-image" />
            <div className="trek-content">
              <h2>{trek.title}</h2>
              <p>{trek.description}</p>
              <div className="trek-details">
                <span>Difficulty: {trek.difficulty}</span>
                <span>Duration: {trek.duration}</span>
                <span>Price: {trek.price}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Trekking;
