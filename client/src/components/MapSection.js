// src/components/MapSection.js
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "./MapSection.css";

// Sample marker data (coordinates for cities)
const destinations = [
  { id: 1, name: "Marrakech", coordinates: [31.6295, -7.9811] },
  { id: 2, name: "Casablanca", coordinates: [33.5731, -7.5898] },
  { id: 3, name: "Fez", coordinates: [34.0331, -5.0003] },
  { id: 4, name: "Chefchaouen", coordinates: [35.1686, -5.2636] },
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
              <p>Discover this beautiful destination!</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapSection;
