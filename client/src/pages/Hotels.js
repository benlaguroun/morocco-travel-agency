import React from "react";
import "./Hotels.css";

const hotelOffers = [
  {
    name: "Riad Fes",
    location: "Fes, Morocco",
    price: "$120/night",
    rating: 4.8,
    amenities: "Free Wi-Fi, Spa, Pool",
    image: "/images/riad-fes.jpg",
  },
  {
    name: "La Mamounia",
    location: "Marrakech, Morocco",
    price: "$250/night",
    rating: 4.9,
    amenities: "Luxury Spa, Garden, Restaurants",
    image: "/images/la-mamounia.jpg",
  },
  {
    name: "Kasbah Hotel Xaluca",
    location: "Erfoud, Morocco",
    price: "$90/night",
    rating: 4.5,
    amenities: "Pool, Free Breakfast, Desert View",
    image: "/images/kasbah-xaluca.jpg",
  },
  {
    name: "Sofitel Casablanca",
    location: "Casablanca, Morocco",
    price: "$180/night",
    rating: 4.7,
    amenities: "Gym, Rooftop Bar, Free Wi-Fi",
    image: "/images/sofitel-casablanca.jpg",
  },
  {
    name: "Selman Marrakech",
    location: "Marrakech, Morocco",
    price: "$350/night",
    rating: 4.9,
    amenities: "Luxury Spa, Equestrian Club, Pool",
    image: "/images/selman-marrakech.jpg",
  },
  {
    name: "Dar Ahlam",
    location: "Skoura, Morocco",
    price: "$400/night",
    rating: 5.0,
    amenities: "Private Pools, Garden, Butler Service",
    image: "/images/dar-ahlam.jpg",
  },
  {
    name: "Hotel Sahrai",
    location: "Fes, Morocco",
    price: "$200/night",
    rating: 4.8,
    amenities: "Infinity Pool, Rooftop Bar, Free Wi-Fi",
    image: "/images/hotel-sahrai.jpg",
  },
  {
    name: "Royal Mansour",
    location: "Marrakech, Morocco",
    price: "$600/night",
    rating: 5.0,
    amenities: "Luxury Spa, Private Riads, Fine Dining",
    image: "/images/royal-mansour.jpg",
  },
  {
    name: "Mazagan Beach Resort",
    location: "El Jadida, Morocco",
    price: "$220/night",
    rating: 4.7,
    amenities: "Golf Course, Beachfront, Casino",
    image: "/images/mazagan-beach.jpg",
  },
  {
    name: "Villa Diyafa",
    location: "Rabat, Morocco",
    price: "$170/night",
    rating: 4.6,
    amenities: "Spa, Garden, Private Villas",
    image: "/images/villa-diyafa.jpg",
  },
];

const Hotels = () => {
  return (
    <div className="hotels-page">
      <header className="hotels-header">
        <h1>Explore Top Hotels in Morocco</h1>
        <p>
          Find exclusive deals on luxury hotels and traditional Riads in
          Morocco.
        </p>
        <div className="search-bar">
          <input type="text" placeholder="Search hotels by destination..." />
          <button className="search-btn">Search</button>
        </div>
      </header>

      <section className="hotel-offers">
        {hotelOffers.map((hotel, index) => (
          <div key={index} className="hotel-card">
            <div className="hotel-image-wrapper">
              <img src={hotel.image} alt={hotel.name} className="hotel-image" />
            </div>
            <div className="hotel-details">
              <h2>{hotel.name}</h2>
              <p className="hotel-location">{hotel.location}</p>
              <p className="hotel-meta">
                <span>Price: {hotel.price}</span> |{" "}
                <span>Rating: {hotel.rating}★</span>
              </p>
              <p className="hotel-amenities">Amenities: {hotel.amenities}</p>
              <button className="book-now-btn">Book Now</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Hotels;
