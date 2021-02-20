import React, { useReducer } from 'react';
import { Context } from './context/context';
import { initialState } from './context/initialState';
import reducer from './context/reducer';
import Game from './Game/Game';

// const PATH = 'https://ssl.gstatic.com/dictionary/static/sounds/oxford/';

const App = () => {
  const [state, dispatch] = useReducer(reducer, { ...initialState, round: 0, results: [] });

  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className="content">
        <Game />
      </div>
    </Context.Provider>
  );
}

export default App;
