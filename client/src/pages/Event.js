import React from "react";
import "./Event.css";

const eventList = [
  {
    title: "Marrakech Cultural Festival",
    date: "15th November, 2024",
    location: "Marrakech, Morocco",
    image: "/images/marrakech-festival.jpg",
    description:
      "Join the vibrant cultural festival of Marrakech, featuring traditional music, art exhibitions, and performances from across Morocco.",
  },
  {
    title: "Sahara Desert Marathon",
    date: "1st December, 2024",
    location: "Merzouga, Morocco",
    image: "/images/sahara-marathon.jpg",
    description:
      "Challenge yourself to one of the world’s toughest marathons, set against the stunning backdrop of the Sahara Desert dunes.",
  },
  {
    title: "Chefchaouen Food Tour",
    date: "20th January, 2025",
    location: "Chefchaouen, Morocco",
    image: "/images/chefchaouen-food.jpg",
    description:
      "Taste the flavors of the Blue City, Chefchaouen, with a guided tour that explores Moroccan culinary traditions.",
  },
];

const Event = () => {
  return (
    <div className="event-page">
      <header className="event-header">
        <h1>Upcoming Events</h1>
        <p>
          Explore our handpicked events happening across Morocco. From cultural
          festivals to adventure-packed marathons, we have something for every
          traveler.
        </p>
      </header>

      <section className="event-grid">
        {eventList.map((event, index) => (
          <div key={index} className="event-card">
            <div className="event-image-wrapper">
              <img
                src={event.image}
                alt={event.title}
                className="event-image"
              />
            </div>
            <div className="event-details">
              <h2>{event.title}</h2>
              <p className="event-meta">
                <span>Date: {event.date}</span> |{" "}
                <span>Location: {event.location}</span>
              </p>
              <p className="event-description">{event.description}</p>
              <button className="view-more-btn">View More</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Event;
