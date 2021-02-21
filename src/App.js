import React, { useReducer } from 'react';
import { Context } from './context/context';
import reducer from './context/reducer';
import Game from './Game/Game';
import Menu from './Menu/Menu';

// const PATH = 'https://ssl.gstatic.com/dictionary/static/sounds/oxford/';

const initialState = {
  theme: 'spring',
  volume: 50,
  results: [],
  roundState: {
    word: '',
    cells: '',
    image: null,
    played: true,
    paused: false,
    finished: false,
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, { ...initialState });

  return (
    <Context.Provider value={{ state, dispatch }}>
      <Menu />
      <Game />
    </Context.Provider>
  );
}

export default App;
