// src/components/Hero.js
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './Hero.css'; // Custom styles for the hero section

const Hero = () => {
  return (
    <div className="hero-section" style={{ backgroundImage: `url('/images/hero-image.jpg')` }}>
      <Container className="text-center text-light">
        <h1>Discover Morocco</h1>
        <p>Experience the beauty of the desert, mountains, and coastline.</p>
        <Button variant="primary" href="/tours">Explore Our Tours</Button>
      </Container>
    </div>
  );
};

export default Hero;

