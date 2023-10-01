import React from "react";
import "./FuturisticDashboard.css"; // Import your CSS file
import { Card } from "react-bootstrap"; // Import Bootstrap Card component

const cardData = [
  {
    title: "Card 1",
    content: "Card content goes here.",
  },
  {
    title: "Card 2",
    content: "Card content goes here.",
  },
  {
    title: "Card 3",
    content: "Card content goes here.",
  },
  {
    title: "Card 4",
    content: "Card content goes here.",
  },
  {
    title: "Card 5",
    content: "Card content goes here.",
  },
  {
    title: "Card 6",
    content: "Card content goes here.",
  },
  {
    title: "Card 8",
    content: "Card content goes here.",
  },
  {
    title: "Card 9",
    content: "Card content goes here.",
  },
  {
    title: "Card 10",
    content: "Card content goes here.",
  },
  {
    title: "Card 12",
    content: "Card content goes here.",
  },
  {
    title: "Card 13",
    content: "Card content goes here.",
  },
  {
    title: "Card 14",
    content: "Card content goes here.",
  },
  {
    title: "Card 15",
    content: "Card content goes here.",
  },
  // Add more card objects as needed
];

const FuturisticDashboard = () => {
  return (
    <div className="container-fluid p-0 mb-3">
      <div className="slider rounded ">
        <div className="slide-track">
          {cardData.map((card, index) => (
            <div className="slide" key={index}>
              <Card className="bg-light text-dark rounded-0 border-end border-right">
                <Card.Body>
                  <Card.Title className="text-danger">{card.title}</Card.Title>
                  <Card.Text>{card.content}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FuturisticDashboard;
