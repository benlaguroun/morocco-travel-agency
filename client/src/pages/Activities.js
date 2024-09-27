import React from "react";
import "./Activities.css";

const activitiesData = [
  {
    title: "Camel Riding in the Desert",
    image: "/images/camel-riding.jpg",
    description:
      "Experience a traditional mode of transport with our camel riding tours through the golden dunes of the Sahara.",
    duration: "Half-Day",
    price: "$150",
  },
  {
    title: "Hot Air Balloon Ride",
    image: "/images/hot-air-balloon.jpg",
    description:
      "See Morocco from a bird’s-eye view with a thrilling hot air balloon ride over the Atlas Mountains and valleys.",
    duration: "1 Hour",
    price: "$200",
  },
  {
    title: "Quad Biking Adventure",
    image: "/images/quad-biking.jpg",
    description:
      "Unleash your adventurous side with a quad biking experience through Morocco’s rugged desert landscapes.",
    duration: "2 Hours",
    price: "$120",
  },
  {
    title: "Cooking Class with a Local Chef",
    image: "/images/cooking-class.jpg",
    description:
      "Discover the flavors of Morocco with a hands-on cooking class led by a local chef. Prepare traditional dishes like couscous and tagine.",
    duration: "4 Hours",
    price: "$80",
  },
  {
    title: "Hiking in Ourika Valley",
    image: "/images/hiking.jpg",
    description:
      "Enjoy a guided hiking trip in the beautiful Ourika Valley, known for its stunning waterfalls and scenic landscapes.",
    duration: "Full-Day",
    price: "$100",
  },
  {
    title: "Moroccan Spa Experience",
    image: "/images/spa.jpg",
    description:
      "Relax and unwind with a luxurious Moroccan spa experience, including traditional hammam and massage treatments.",
    duration: "2 Hours",
    price: "$90",
  },
];

const Activities = () => {
  return (
    <div className="activities-page">
      <header className="activities-header">
        <div className="header-content">
          <h1>Exciting Activities for Your Moroccan Adventure</h1>
          <p>
            Discover a range of activities that let you experience the true
            essence of Morocco — from thrilling outdoor adventures to cultural
            immersion.
          </p>
        </div>
      </header>

      <section className="activities-list">
        {activitiesData.map((activity, index) => (
          <div key={index} className="activity-card">
            <img
              src={activity.image}
              alt={activity.title}
              className="activity-image"
            />
            <div className="activity-content">
              <h2>{activity.title}</h2>
              <p>{activity.description}</p>
              <div className="activity-details">
                <span>Duration: {activity.duration}</span>
                <span>Price: {activity.price}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Activities;
