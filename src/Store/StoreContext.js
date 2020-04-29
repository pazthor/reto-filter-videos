import React, { createContext, useReducer } from "react";

const initialState = {
  movies:[]
  
};
const store = createContext(initialState);
const { Provider } = store;
const actions = {
  SET_MOVIES: "SET_MOVIES",  
  
};

function reducer(state, action) {
  switch (action.type) {
    case actions.SET_MOVIES:
      return { ...state, movies: action.value };
    default:
      return state;
  }
}
const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {
    movies: state.movies,

    setMovies: (value) => {
      dispatch({ type: actions.SET_MOVIES, value });
    },
  
  };
  return <Provider value={value}>{children}</Provider>;
};

export { store, StateProvider };
