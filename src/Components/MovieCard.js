import React from "react";
import {  Card, Button } from "react-bootstrap";

function MovieCard({ id, title, img, description, handleMovieInfo }) {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary" onClick={() => handleMovieInfo(id)}>
            Detalles
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default MovieCard;
