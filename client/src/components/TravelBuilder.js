import React, { useState } from "react";
import "./TravelBuilder.css";

const destinations = [
  { id: 1, name: "Marrakech", type: "Adventure", price: "$1000 - $1500" },
  { id: 2, name: "Essaouira", type: "Relaxation", price: "$800 - $1200" },
  { id: 3, name: "Fez", type: "Cultural", price: "$900 - $1300" },
  { id: 4, name: "Chefchaouen", type: "Nature", price: "$700 - $1100" },
];

const TravelBuilder = () => {
  const [selectedType, setSelectedType] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState(2000);

  const handleTypeChange = (type) => {
    setSelectedType((prevTypes) =>
      prevTypes.includes(type)
        ? prevTypes.filter((t) => t !== type)
        : [...prevTypes, type]
    );
  };

  const handleBudgetChange = (event) => {
    setSelectedBudget(event.target.value);
  };

  // Filtered results based on the selected preferences
  const filteredDestinations = destinations.filter((destination) => {
    return (
      (selectedType.length === 0 || selectedType.includes(destination.type)) &&
      parseInt(destination.price.split("-")[1].replace("$", "").trim()) <=
        selectedBudget
    );
  });

  return (
    <div className="travel-builder-section">
      <h2>Customize Your Travel Experience</h2>

      {/* Step 1: Select Travel Type */}
      <div className="travel-types">
        <h3>Travel Type</h3>
        <div className="type-options">
          <label>
            <input
              type="checkbox"
              value="Adventure"
              checked={selectedType.includes("Adventure")}
              onChange={() => handleTypeChange("Adventure")}
            />
            Adventure
          </label>
          <label>
            <input
              type="checkbox"
              value="Relaxation"
              checked={selectedType.includes("Relaxation")}
              onChange={() => handleTypeChange("Relaxation")}
            />
            Relaxation
          </label>
          <label>
            <input
              type="checkbox"
              value="Cultural"
              checked={selectedType.includes("Cultural")}
              onChange={() => handleTypeChange("Cultural")}
            />
            Cultural
          </label>
          <label>
            <input
              type="checkbox"
              value="Nature"
              checked={selectedType.includes("Nature")}
              onChange={() => handleTypeChange("Nature")}
            />
            Nature
          </label>
        </div>
      </div>

      {/* Step 2: Select Budget */}
      <div className="budget-slider">
        <h3>Budget: Up to ${selectedBudget}</h3>
        <input
          type="range"
          min="500"
          max="5000"
          value={selectedBudget}
          onChange={handleBudgetChange}
        />
      </div>

      {/* Step 3: Display Results */}
      <div className="destination-results">
        <h3>Suggested Destinations</h3>
        <div className="results-grid">
          {filteredDestinations.length > 0 ? (
            filteredDestinations.map((destination) => (
              <div key={destination.id} className="destination-card">
                <h4>{destination.name}</h4>
                <p>Type: {destination.type}</p>
                <p>Price: {destination.price}</p>
              </div>
            ))
          ) : (
            <p>No destinations match your criteria</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TravelBuilder;
