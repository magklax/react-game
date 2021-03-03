import React, { useReducer, useEffect } from 'react';
import { BrowserRouter, Switch, Route, } from "react-router-dom";
import { Context } from './context/context';
import { reducer, initialState } from './context/reducer';
import Intro from './Intro';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Menu from './Menu';
import Game from './Game';
import MisicToggle from './Common/MusicToggle';
import Final from './Final';
import Stats from './Stats';

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

  useEffect(() => dispatch({
    type: 'gameload',
  }), []);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <MisicToggle />
        <Switch>
          <Route exact path="/">
            <Intro />
          </Route>

          <Route exact path="/signup">
            <SignUp />
          </Route>

          <Route exact path="/signin">
            <SignIn />
          </Route>

          <Route exact path="/game">
            <Game />
            <Menu />
          </Route>

          <Route exact path="/final">
            <Final />
          </Route>

          <Route exact path="/stats">
            <Stats />
          </Route>

        </Switch>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
