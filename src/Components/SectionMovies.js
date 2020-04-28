import React from "react";
import { InputGroup, FormControl, Button, ListGroup } from "react-bootstrap";

function SectionMovies({ onClickCategoria }) {
  return (
    <>
      <ListGroup defaultActiveKey="#link1">
        <ListGroup.Item action onClick={() => onClickCategoria("gen_accion")}>
          Género Acción
        </ListGroup.Item>
      </ListGroup>
    </>
  );
}

export default SectionMovies;
