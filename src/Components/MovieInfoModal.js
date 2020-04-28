import React from "react";
import { Modal, Button, Card } from "react-bootstrap";

function MovieInfoModal({ id, title, description, img, onHide, show }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card>
          <Card.Img variant="bottom" src={img} />
          <Card.Body>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Card>
        <br />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default MovieInfoModal;
