import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

function SearchBar({ handleOnClick }) {
  const [input, setInput] = useState();
  return (
    <>
      <InputGroup onChange={(e) => setInput(e.target.value)} className="mb-3">
        <FormControl
          placeholder="Escribe la película"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button
            variant="outline-secondary"
            onClick={() => handleOnClick(input)}
          >
            Filtrar
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </>
  );
}

export default SearchBar;
