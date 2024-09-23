// src/pages/Home.js
import React from 'react';
import Hero from '../components/Hero';
import FeaturedTours from '../components/FeaturedTours';
import WhyChooseUs from '../components/WhyChooseUs';

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedTours />
      <WhyChooseUs />
    </>
  );
};

export default Home;

