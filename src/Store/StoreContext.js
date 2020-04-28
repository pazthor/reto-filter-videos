import React, { createContext, useReducer } from "react";

const initialState = {
  movies:[]
  
};
const store = createContext(initialState);
const { Provider } = store;
const actions = {
  SET_MOVIES: "SET_MOVIES",
  SET_MONSTER: "SET_MONSTER",
  SET_GAME: "SET_GAME",
  SET_CARDLIST: "SET_CARDLIST",
  SET_MONSTEREFFECT: "SET_MONSTEREFFECT",
  SET_CARDSELECTED: "SET_CARDSELECTED",
  RESET: "RESET",
};

function reducer(state, action) {
  switch (action.type) {
    case actions.SET_MOVIES:
      return { ...state, movies: action.value };
    case actions.SET_MONSTER:
      return { ...state, monster: action.value };
    case actions.SET_GAME:
      return { ...state, gameInfo: action.value };
    case actions.SET_CARDLIST:
      return { ...state, cardList: action.value };
    case actions.SET_MONSTEREFFECT:
      return { ...state, monsterEffect: action.value };
    case actions.SET_CARDSELECTED:
      return { ...state, cardSelected: action.value };
    case actions.RESET:
      return { ...state, ...initialState };
    default:
      return state;
  }
}
const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {
    movies: state.movies,
    monster: state.monster,
    gameInfo: state.gameInfo,
    cardList: state.cardList,
    monsterEffect: state.monsterEffect,
    cardSelected: state.cardSelected,

    setMovies: (value) => {
      dispatch({ type: actions.SET_MOVIES, value });
    },
    setMonster: (value) => {
      dispatch({ type: actions.SET_MONSTER, value });
    },
    setMonsterEffect: (value) => {
      dispatch({ type: actions.SET_MONSTEREFFECT, value });
    },
    setGame: (value) => {
      dispatch({ type: actions.SET_GAME, value });
    },
    setCardList: (value) => {
      dispatch({ type: actions.SET_CARDLIST, value });
    },
    setCardSelected: (value) => {
      dispatch({ type: actions.SET_CARDSELECTED, value });
    },
    reset: () => {
      dispatch({ type: actions.RESET });
    },
  };
  return <Provider value={value}>{children}</Provider>;
};

export { store, StateProvider };
