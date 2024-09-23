// src/components/FeaturedTours.js
import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const tours = [
  {
    id: 1,
    title: "Sahara Desert Tour",
    image: "/images/tour-1.jpg",
    description: "Explore the vast Sahara desert.",
  },
  {
    id: 2,
    title: "Atlas Mountains Trek",
    image: "/images/tour-2.jpg",
    description: "Trek through the beautiful Atlas Mountains.",
  },
  {
    id: 3,
    title: "Chefchaouen City Tour",
    image: "/images/tour-3.jpg",
    description: "Discover the blue city of Chefchaouen.",
  },
];

const FeaturedTours = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Featured Tours</h2>
      <Row>
        {tours.map((tour) => (
          <Col md={4} key={tour.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={tour.image} />
              <Card.Body>
                <Card.Title>{tour.title}</Card.Title>
                <Card.Text>{tour.description}</Card.Text>
                <Button variant="primary" href={`/tours/${tour.id}`}>
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeaturedTours;
