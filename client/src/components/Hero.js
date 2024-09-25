import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { Button } from "react-bootstrap";
import "./Hero.css";
import bgImage from "../video/hero-bg1.mp4"; // Make sure the path is correct

const Hero = () => {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  return (
    <section className="hero-section">
      {/* Background Video */}
      <video autoPlay muted loop className="hero-video">
        <source src={bgImage} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero Content */}
      <div className="hero-content">
        <h1>Explore Morocco</h1>
        <p>Discover amazing tours and experiences with us.</p>
        <Button className="cta-button">Book Now</Button>
      </div>

      {/* Counter Section */}
      <div className="counter-section">
        <VisibilitySensor
          partialVisibility
          onChange={(isVisible) => {
            if (isVisible) {
              setViewPortEntered(true);
            }
          }}
        >
          <div className="counter-item">
            {viewPortEntered ? <CountUp end={1000} duration={2} /> : "0"}
            <p>Happy Customers</p>
          </div>
        </VisibilitySensor>

        <VisibilitySensor
          partialVisibility
          onChange={(isVisible) => {
            if (isVisible) {
              setViewPortEntered(true);
            }
          }}
        >
          <div className="counter-item">
            {viewPortEntered ? <CountUp end={50} duration={2} /> : "0"}
            <p>Destinations</p>
          </div>
        </VisibilitySensor>

        <VisibilitySensor
          partialVisibility
          onChange={(isVisible) => {
            if (isVisible) {
              setViewPortEntered(true);
            }
          }}
        >
          <div className="counter-item">
            {viewPortEntered ? <CountUp end={200} duration={2} /> : "0"}
            <p>Tours</p>
          </div>
        </VisibilitySensor>
      </div>
    </section>
  );
};

export default Hero;
