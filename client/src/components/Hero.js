// Hero.js
import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { FaUserFriends, FaGlobe, FaSuitcase } from "react-icons/fa"; // Add icons
import "./Hero.css";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
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
      {/* Promotional Banner */}
      <div className="promo-banner">
        <p>Special Offer: Get 10% off on all bookings! Use code: MOROCCO10</p>
      </div>

      {/* Carousel Section */}
      <Carousel controls={false} indicators={false} interval={4000}>
        <Carousel.Item>
          <div
            className="hero-image"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/images/hero-bg1.jpg"
              })`,
            }}
          />
          <div className="carousel-overlay">
            <h1>Explore Morocco</h1>
            <p>Discover the best tours and experiences</p>
            <button className="cta-button">Book Now</button>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="hero-image"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/images/hero-bg2.jpg"
              })`,
            }}
          />
          <div className="carousel-overlay">
            <h1>Adventure Awaits</h1>
            <p>Find the perfect travel package</p>
            <button className="cta-button">Learn More</button>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="hero-image"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/images/hero-bg3.jpg"
              })`,
            }}
          />
          <div className="carousel-overlay">
            <h1>Unforgettable Experiences</h1>
            <p>Book your dream vacation today</p>
            <button className="cta-button">Start Now</button>
          </div>
        </Carousel.Item>
      </Carousel>

      {/* Number Counter Section */}
      <div className="counter-section">
        <VisibilitySensor onChange={(isVisible) => setIsVisible(isVisible)}>
          <div className="counter-item">
            <FaUserFriends className="counter-icon" />
            {isVisible ? <CountUp end={5000} duration={3} /> : "0"}
            <p>Satisfied Customers</p>
          </div>
        </VisibilitySensor>
        <VisibilitySensor onChange={(isVisible) => setIsVisible(isVisible)}>
          <div className="counter-item">
            <FaSuitcase className="counter-icon" />
            {isVisible ? <CountUp end={200} duration={3} /> : "0"}
            <p>Tours Booked</p>
          </div>
        </VisibilitySensor>
        <VisibilitySensor onChange={(isVisible) => setIsVisible(isVisible)}>
          <div className="counter-item">
            <FaGlobe className="counter-icon" />
            {isVisible ? <CountUp end={50} duration={3} /> : "0"}
            <p>Destinations Available</p>
          </div>
        </VisibilitySensor>
      </div>
    </section>
  );
};

export default Hero;
