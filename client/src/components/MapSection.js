// src/components/MapSection.js
import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "./MapSection.css";
import "leaflet-measure/dist/leaflet-measure.css";
import "leaflet-measure/dist/leaflet-measure";

// Sample marker data (coordinates for cities)
const destinations = [
  {
    id: 1,
    name: "Marrakech",
    coordinates: [31.6295, -7.9811],
    description: "A vibrant city known for its markets and culture.",
  },
  {
    id: 2,
    name: "Casablanca",
    coordinates: [33.5731, -7.5898],
    description:
      "Morocco's largest city, famous for its modern art and architecture.",
  },
  {
    id: 3,
    name: "Fez",
    coordinates: [34.0331, -5.0003],
    description: "The spiritual and cultural heart of Morocco.",
  },
  {
    id: 4,
    name: "Chefchaouen",
    coordinates: [35.1686, -5.2636],
    description: "Known for its beautiful blue-washed buildings.",
  },
];

// Custom icon for markers
const markerIcon = new L.Icon({
  iconUrl: require("./marker-icon.png"),
  iconSize: [35, 45], // Adjust icon size
  iconAnchor: [17, 45],
  popupAnchor: [0, -45],
});

const MapSection = () => {
  return (
    <div className="map-section">
      <h2>Explore Morocco on the Map</h2>
      <MapContainer
        center={[31.7917, -7.0926]} // Center of Morocco
        zoom={6}
        scrollWheelZoom={false}
        className="map-container"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Add markers for destinations */}
        {destinations.map((destination) => (
          <Marker
            key={destination.id}
            position={destination.coordinates}
            icon={markerIcon}
          >
            <Popup>
              <h4>{destination.name}</h4>
              <p>{destination.description}</p>
              <button
                onClick={() => alert("More details about " + destination.name)}
              >
                Show More
              </button>
            </Popup>
          </Marker>
        ))}

        {/* Enable distance measurement */}
        <DistanceMeasurement />
      </MapContainer>
    </div>
  );
};

// Component to add distance measurement functionality
const DistanceMeasurement = () => {
  const map = useMap();

  useEffect(() => {
    // Add distance measurement control to the map
    const measureControl = new L.Control.Measure({
      position: "topleft",
      primaryLengthUnit: "kilometers",
      secondaryLengthUnit: "meters",
      primaryAreaUnit: "sqmeters",
      activeColor: "#00c853",
      completedColor: "#4caf50",
    });
    map.addControl(measureControl);

    return () => {
      map.removeControl(measureControl);
    };
  }, [map]);

  return null;
};

export default MapSection;
