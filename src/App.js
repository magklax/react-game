import React, { useReducer, useEffect } from 'react';
import { BrowserRouter, Switch, Route, } from "react-router-dom";
import { Context } from './context/context';
import { reducer, initialState } from './context/reducer';
import Intro from './Intro';
import Menu from './Menu';
import Game from './Game';
import MisicToggle from './Common/MusicToggle';
import Final from './Final';
import Stats from './Stats';

// const PATH = 'https://ssl.gstatic.com/dictionary/static/sounds/oxford/';

const App = () => {
  const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('state')) || initialState);

  useEffect(() => {
    const getCircularReplacer = () => {
      const seen = new WeakSet();
      return (key, value) => {
        if (typeof value === "object" && value !== null) {
          if (seen.has(value)) {
            return;
          }
          seen.add(value);
        }
        return value;
      }
    }

    localStorage.setItem('state', JSON.stringify(state, getCircularReplacer()));
  }, [state]);

  useEffect(() => state.roundState.paused = false, []);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <MisicToggle />
        <Switch>
          <Route exact path="/">
            <Intro />
          </Route>

          <Route path="/game">
            <Game />
            <Menu />
          </Route>

          <Route path="/final">
            <Final />
          </Route>

          <Route path="/stats">
            <Stats />
          </Route>

        </Switch>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
