import React from "react";
import { InputGroup, FormControl, Button, ListGroup } from "react-bootstrap";

function SectionMovies({ onClickCategoria }) {
  return (
    <>
      <ListGroup defaultActiveKey="#link1">
        <ListGroup.Item action onClick={() => onClickCategoria("gen_accion")}>
          Género Acción
        </ListGroup.Item>
        <ListGroup.Item action onClick={() => onClickCategoria("gen_anime")}>
          Género Anime
        </ListGroup.Item>
        <ListGroup.Item action onClick={() => onClickCategoria("gen_biograficas")}>
          Género Biograficas
        </ListGroup.Item>
        <ListGroup.Item action onClick={() => onClickCategoria("gen_scifi")}>
          Género Ciencia Ficción
        </ListGroup.Item>
        <ListGroup.Item action onClick={() => onClickCategoria("gen_cineoro")}>
          Género Cine de Oro
        </ListGroup.Item>
        <ListGroup.Item action onClick={() => onClickCategoria("gen_clasicas")}>
          Género Clásicas
        </ListGroup.Item>
        <ListGroup.Item action onClick={() => onClickCategoria("gen_comedia")}>
          Género Comedia
        </ListGroup.Item>
        <ListGroup.Item action onClick={() => onClickCategoria("gen_deportes")}>
          Género Deportes
        </ListGroup.Item>
        <ListGroup.Item action onClick={() => onClickCategoria("gen_docu")}>
          Género Documentales
        </ListGroup.Item>
        <ListGroup.Item action onClick={() => onClickCategoria("gen_drama")}>
          Género Drama
        </ListGroup.Item>
        <ListGroup.Item action onClick={() => onClickCategoria("gen_familiares")}>
          Género Familiares
        </ListGroup.Item>
        <ListGroup.Item action onClick={() => onClickCategoria("gen_historicas")}>
          Género Historicas
        </ListGroup.Item>
        <ListGroup.Item action onClick={() => onClickCategoria("gen_infantiles")}>
          Género Infantiles
        </ListGroup.Item>
        <ListGroup.Item action onClick={() => onClickCategoria("gen_latino")}>
          Género LatinoAmericanas
        </ListGroup.Item>
        <ListGroup.Item action onClick={() => onClickCategoria("gen_musica")}>
          Género Música
        </ListGroup.Item>
        <ListGroup.Item action onClick={() => onClickCategoria("gen_romanticas")}>
          Género Románticas
        </ListGroup.Item>
        <ListGroup.Item action onClick={() => onClickCategoria("gen_terror")}>
          Género Terror y suspenso
        </ListGroup.Item>
        <ListGroup.Item action onClick={() => onClickCategoria("gen_descargables")}>
          Género Descargables
        </ListGroup.Item>
        
      </ListGroup>
    </>
  );
}

export default SectionMovies;
