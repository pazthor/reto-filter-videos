import React from 'react';



function FilterMovies({movies}) {
  const listMoviesComponent = (movies) => {
    return movies.map(m => {
      return m.title
    })
  }
  
  return (
    <>
    { listMoviesComponent(movies)}
    </>
  )
  ;
}

export default FilterMovies;
