// src/components/Destinations.js
import React from "react";
import Slider from "react-slick";
import "./Destinations.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Destinations = () => {
  const destinations = [
    {
      title: "Bali Island",
      location: "Bali, Indonesia",
      image: "../images/bali.jpg",
      price: 224,
    },
    {
      title: "Gili Trawangan",
      location: "Lombok, NTT",
      image: "../images/gili.jpg",
      price: 180,
    },
    {
      title: "Marrakech",
      location: "Marrakech, Morocco",
      image: "../images/marrakech.jpg",
      price: 150,
    },
    {
      title: "Santorini",
      location: "Santorini, Greece",
      image: "../images/santorini.jpg",
      price: 300,
    },
    {
      title: "Paris",
      location: "Paris, France",
      image: "../images/paris.jpg",
      price: 350,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="destinations-section">
      <h2>Popular Destinations</h2>
      <Slider {...settings}>
        {destinations.map((destination, index) => (
          <div key={index} className="destination-card">
            <img
              src={destination.image}
              alt={destination.title}
              className="destination-image"
            />
            <div className="destination-info">
              <h3 className="destination-title">{destination.title}</h3>
              <p className="destination-location">{destination.location}</p>
              <p className="destination-price">${destination.price} / Person</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Destinations;
