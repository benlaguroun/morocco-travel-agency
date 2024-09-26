import React from "react"; // Keep this at the top, only once
import Slider from "react-slick";
import "./Destinations.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa"; // React icons for star ratings

const Destinations = () => {
  const destinations = [
    {
      title: "Bali Island",
      location: "Bali, Indonesia",
      image: "../images/bali.jpg",
      price: 224,
      discountPrice: 180, // Example discount
      rating: 5, // Star rating
      people: 40, // Number of people in the tour
      discount: "20% OFF",
    },
    {
      title: "Gili Trawangan",
      location: "Lombok, NTT",
      image: "../images/gili.jpg",
      price: 180,
      discountPrice: 150,
      rating: 4,
      people: 30,
      discount: "15% OFF",
    },
    {
      title: "Marrakech",
      location: "Marrakech, Morocco",
      image: "../images/marrakech.jpg",
      price: 150,
      discountPrice: 120,
      rating: 5,
      people: 35,
      discount: "20% OFF",
    },
    {
      title: "Santorini",
      location: "Santorini, Greece",
      image: "../images/santorini.jpg",
      price: 300,
      discountPrice: 260,
      rating: 4,
      people: 25,
      discount: "10% OFF",
    },
    {
      title: "Paris",
      location: "Paris, France",
      image: "../images/paris.jpg",
      price: 350,
      discountPrice: 320,
      rating: 5,
      people: 50,
      discount: "5% OFF",
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
            <div className="destination-image-container">
              <img
                src={destination.image}
                alt={destination.title}
                className="destination-image"
              />
              <div className="destination-discount">{destination.discount}</div>
            </div>
            <div className="destination-info">
              <div className="destination-details">
                <p className="destination-people">
                  <span role="img" aria-label="people">
                    👥
                  </span>{" "}
                  {destination.people} people
                </p>
                <div className="destination-rating">
                  {Array.from({ length: destination.rating }, (_, i) => (
                    <FaStar key={i} className="star-icon" />
                  ))}
                </div>
              </div>
              <h3 className="destination-title">{destination.title}</h3>
              <p className="destination-location">{destination.location}</p>
              <div className="destination-price-info">
                <span className="destination-price-discount">
                  ${destination.discountPrice}
                </span>
                <span className="destination-price-original">
                  ${destination.price}
                </span>
              </div>
              <a href="#" className="destination-explore">
                Explore →
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Destinations;
