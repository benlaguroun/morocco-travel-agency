import React, { useState } from "react";
import "./TravelBuilder.css";

// Sample data for destinations
const destinations = [
  {
    id: 1,
    name: "Marrakech",
    type: "Adventure",
    price: "$1000 - $1500",
    image: "marrakech.jpg",
  },
  {
    id: 2,
    name: "Essaouira",
    type: "Relaxation",
    price: "$800 - $1200",
    image: "essaouira.jpg",
  },
  {
    id: 3,
    name: "Fez",
    type: "Cultural",
    price: "$900 - $1300",
    image: "fez.jpg",
  },
  {
    id: 4,
    name: "Chefchaouen",
    type: "Nature",
    price: "$700 - $1100",
    image: "chefchaouen.jpg",
  },
];

const TravelBuilder = () => {
  const [selectedType, setSelectedType] = useState("");
  const [selectedBudget, setSelectedBudget] = useState(2000);

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  const handleBudgetChange = (event) => {
    setSelectedBudget(event.target.value);
  };

  const filteredDestinations = destinations.filter((destination) => {
    return (
      (!selectedType || destination.type === selectedType) &&
      parseInt(destination.price.split("-")[1].replace("$", "").trim()) <=
        selectedBudget
    );
  });

  return (
    <div className="travel-builder">
      <h2>Design Your Dream Trip</h2>

      {/* Step 1: Travel Type Cards */}
      <div className="travel-type-selector">
        <h3>Select Your Travel Type</h3>
        <div className="type-cards">
          <div
            className={`type-card ${
              selectedType === "Adventure" ? "selected" : ""
            }`}
            onClick={() => handleTypeChange("Adventure")}
          >
            <i className="fas fa-mountain"></i>
            <h4>Adventure</h4>
          </div>
          <div
            className={`type-card ${
              selectedType === "Relaxation" ? "selected" : ""
            }`}
            onClick={() => handleTypeChange("Relaxation")}
          >
            <i className="fas fa-spa"></i>
            <h4>Relaxation</h4>
          </div>
          <div
            className={`type-card ${
              selectedType === "Cultural" ? "selected" : ""
            }`}
            onClick={() => handleTypeChange("Cultural")}
          >
            <i className="fas fa-landmark"></i>
            <h4>Cultural</h4>
          </div>
          <div
            className={`type-card ${
              selectedType === "Nature" ? "selected" : ""
            }`}
            onClick={() => handleTypeChange("Nature")}
          >
            <i className="fas fa-tree"></i>
            <h4>Nature</h4>
          </div>
        </div>
      </div>

      {/* Step 2: Budget Slider */}
      <div className="budget-slider">
        <h3>Set Your Budget: Up to ${selectedBudget}</h3>
        <input
          type="range"
          min="500"
          max="5000"
          step="100"
          value={selectedBudget}
          onChange={handleBudgetChange}
        />
        <div className="slider-labels">
          <span>$500</span>
          <span>$5000</span>
        </div>
      </div>

      {/* Step 3: Destination Results */}
      <div className="destination-results">
        <h3>Recommended Destinations</h3>
        <div className="destination-cards">
          {filteredDestinations.length > 0 ? (
            filteredDestinations.map((destination) => (
              <div key={destination.id} className="destination-card">
                <img src={destination.image} alt={destination.name} />
                <div className="destination-info">
                  <h4>{destination.name}</h4>
                  <p>{destination.type}</p>
                  <p>{destination.price}</p>
                  <button>Learn More</button>
                </div>
              </div>
            ))
          ) : (
            <p>No destinations match your criteria.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TravelBuilder;
