import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import Rater from "./Rating";

const Movie = ({ cardMovie }) => {
  return (
    <div>
      <Card
        style={{
          width: "18rem",
          backgroundColor: "black",
          border: "black",
          borderRadius: "10%",
          color: "white",
          marginBottom: "80px",
        }}
      >
        <Card.Img
          variant="top"
          src={cardMovie.posterUrl}
          width="260"
          height="260"
        />
        <Card.Body>
        <Rater rating={cardMovie.rating} />
          <Card.Title> {cardMovie.title}</Card.Title>
          <Card.Text>{cardMovie.description}</Card.Text>
         
        </Card.Body>
      </Card>
    </div>
  );
};

export default Movie;
