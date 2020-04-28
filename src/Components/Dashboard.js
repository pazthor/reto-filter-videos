import React, { useState, useContext } from 'react';
import SectionMovies from './SectionMovies';
import FilterMovies from './FilterMovies';
import { store } from '../Store/StoreContext';
import {getMovies} from '../Store/API'

function Dashboard() {
  const [isSeccionState, setIsSeccionState] = useState(false);
  const { setMovies, movies} = useContext(store);
  
 
  const handledOnClick = async (categoria) => {
    // endpoint categoria     
    
    const moviesDto =  await getMovies(categoria)  
    setMovies(moviesDto)
    setIsSeccionState(!!moviesDto);
  }
  
  return (
  <> 
  {isSeccionState?
  <FilterMovies movies={movies} />:
  <SectionMovies onClickCategoria={handledOnClick} />}
  
  </>
  )
  ;
}

export default Dashboard;
