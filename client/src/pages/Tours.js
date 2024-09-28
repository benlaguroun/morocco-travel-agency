import React from "react";
import "./Tours.css"; // Create a custom CSS for extra styling
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const toursData = [
  {
    title: "Sahara Desert Tour",
    image: "../images/sahara.jpg",
    description:
      "Experience the beauty of the Sahara Desert with our 5-day tour. Enjoy camel rides, night skies, and local cuisine.",
    price: "$500",
  },
  {
    title: "Atlas Mountain Trek",
    image: "../images/atlas.jpg",
    description:
      "Join us on a guided trek through the majestic Atlas Mountains. Perfect for nature lovers and adventure seekers.",
    price: "$300",
  },
  {
    title: "Marrakech City Tour",
    image: "../images/marrakech.jpg",
    description:
      "Explore the vibrant city of Marrakech, from its souks and palaces to the famous Jardin Majorelle and historic medina.",
    price: "$150",
  },
  {
    title: "Chefchaouen Blue City Getaway",
    image: "../images/chefchaouen.jpg",
    description:
      "Discover the enchanting blue streets of Chefchaouen. Perfect for a relaxing escape filled with beautiful sights and local culture.",
    price: "$200",
  },
  {
    title: "Essaouira Beach and Windsurfing",
    image: "../images/essaouira.jpg",
    description:
      "Relax on the stunning beaches of Essaouira or try windsurfing in this coastal gem known for its strong winds and artistic flair.",
    price: "$250",
  },
  {
    title: "Casablanca Historical Tour",
    image: "../images/casablanca.jpg",
    description:
      "Visit the Hassan II Mosque, the Corniche, and other famous sites in the bustling city of Casablanca, Morocco’s economic capital.",
    price: "$180",
  },
  {
    title: "Fes Cultural Experience",
    image: "../images/fes.jpg",
    description:
      "Step back in time with a visit to Fes, known for its well-preserved medieval architecture, historic madrasas, and artisan souks.",
    price: "$230",
  },
  {
    title: "Merzouga Dunes & Camel Trek",
    image: "../images/merzouga.jpg",
    description:
      "Embark on a camel trek through the golden dunes of Merzouga, spending the night in a traditional Berber tent under the stars.",
    price: "$550",
  },
  {
    title: "Rabat Day Tour",
    image: "../images/rabat.jpg",
    description:
      "Discover the historical and modern landmarks of Morocco’s capital city, Rabat, including the Royal Palace and Hassan Tower.",
    price: "$160",
  },
  {
    title: "Ouzoud Waterfalls Adventure",
    image: "../images/ouzoud.jpg",
    description:
      "Marvel at the breathtaking Ouzoud Waterfalls, take a boat ride near the cascades, and hike the surrounding scenic trails.",
    price: "$220",
  },
];

const Tours = () => {
  return (
    <div className="tours-page">
      {/* Hero Section */}
      <div className="tours-hero">
        <div className="hero-text">
          <h1>Explore Our Exclusive Tours</h1>
          <p>
            Discover the beauty of Morocco with our carefully curated tours.
          </p>
        </div>
      </div>

      {/* Tours List */}
      <Container>
        <Row className="my-5">
          {toursData.map((tour, index) => (
            <Col key={index} lg={4} md={6} sm={12} className="mb-4">
              <Card className="tour-card">
                <Card.Img variant="top" src={tour.image} alt={tour.title} />
                <Card.Body>
                  <Card.Title>{tour.title}</Card.Title>
                  <Card.Text>{tour.description}</Card.Text>
                  <h4 className="price">{tour.price}</h4>
                  <Button variant="primary">Book Now</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Tours;
