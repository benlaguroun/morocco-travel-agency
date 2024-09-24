import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "./Hero.css";

const Hero = () => {
  useEffect(() => {
    // Scroll event to handle navbar behavior
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > window.innerHeight) {
        navbar.classList.add("solid-navbar");
      } else {
        navbar.classList.remove("solid-navbar");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="hero-section">
      <Carousel controls={false} indicators={false} interval={4000}>
        <Carousel.Item>
          <img
            className="d-block w-100 hero-image"
            src="/images/hero-bg1.jpg"
            alt="Explore Morocco"
          />
          <div className="carousel-overlay">
            <h1>Explore Morocco</h1>
            <p>Discover the best tours and experiences</p>
            <button className="cta-button">Book Now</button>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 hero-image"
            src="/images/hero-bg2.jpg"
            alt="Adventure Awaits"
          />
          <div className="carousel-overlay">
            <h1>Adventure Awaits</h1>
            <p>Find the perfect travel package</p>
            <button className="cta-button">Learn More</button>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 hero-image"
            src="/images/hero-bg3.jpg"
            alt="Unforgettable Experiences"
          />
          <div className="carousel-overlay">
            <h1>Unforgettable Experiences</h1>
            <p>Book your dream vacation today</p>
            <button className="cta-button">Start Now</button>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Hero;
