// src/components/Testimonials.js
import React from "react";
import Slider from "react-slick";
import "./Testimonials.css";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      image: "../images/john.jpg",
      quote:
        "This was the best vacation of my life! Everything was perfectly organized.",
      rating: 5,
    },
    {
      name: "Jane Smith",
      image: "../images/jane.jpg",
      quote:
        "Amazing service and great destinations! Highly recommend this travel agency.",
      rating: 4,
    },
    {
      name: "Robert Brown",
      image: "../images/robert.jpg",
      quote:
        "Thanks to the team for making our trip so special! A great experience!",
      rating: 5,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <section className="testimonials-section">
      <h2>What Our Clients Say</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonial-image"
            />
            <p className="testimonial-quote">"{testimonial.quote}"</p>
            <div className="testimonial-stars">
              {Array.from({ length: testimonial.rating }, (_, i) => (
                <FaStar key={i} className="star-icon" />
              ))}
            </div>
            <p className="testimonial-name">- {testimonial.name}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
