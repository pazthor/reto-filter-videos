import React, { useEffect, useState } from "react";
import { getMovieInfo } from "../Store/APIMocks";
import SearchBar from "./SearchBar";
import MovieCard from "./MovieCard";
import { CardGroup, CardColumns } from "react-bootstrap";
import MovieInfoModal from "./MovieInfoModal";

function FilterMovies({ movies }) {
  const [moviesState, setMoviesState] = useState(movies);
  const [movieTitle, setMovieTitle] = useState();
  const [movieDescription, setMovieDescription] = useState();
  const [modalShow, setModalShow] = useState();
  const [movieImg, setMovieImg] = useState();
  const onGetMovieInfo = async (id) => {
    const movieDTO = await getMovieInfo(id);
    setMovieTitle(movieDTO.title);
    setMovieDescription(movieDTO.description);
    setMovieImg(movieDTO.image_small);
    setModalShow(true);
  };

  const listMoviesComponent = (movies) => {
    return movies.map((m, index) => {
      return (
        <MovieCard
        key={index}
          id={m.id}
          title={m.title}
          img={m.image_small}
          description={m.description}
          handleMovieInfo={onGetMovieInfo}
        />
      );
    });
  };

  const filterItems = (arr, query) => {
    if (!query) return movies;
    return arr.filter(
      (el) => el.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  };

  const onFilter = (word) => {
    console.log(word);
    const result = filterItems(moviesState, word);
    setMoviesState(result);
  };

  return (
    <>
      <SearchBar handleOnClick={onFilter} />
      <CardColumns>{listMoviesComponent(moviesState)}</CardColumns>
      <MovieInfoModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={movieTitle}
        description={movieDescription}
        img={movieImg}
      />
    </>
  );
}

export default FilterMovies;
