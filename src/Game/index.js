import React, { useEffect, useContext, useMemo } from 'react';
import { Context } from '../context/context';
import Balloon from "./components/Balloon";
import Cell from "./components/Сell";
import Welldone from "./components/Welldone";
import Question from "./components/Question";
import Timer from './components/Timer';
import PauseToggle from './components/PauseToggle';
import { useHistory } from 'react-router-dom';
import { Cells, Ballons, GameArea, Wrapper, Header } from './styles';
import colors from '../utils/colors';
import Clue from './components/Clue';
import AutoPlay from './components/AutoPlay';
import Back from '../Common/Back';

const { strawberry, gold, larioja, eggblue, wisteria } = colors;
const cellsColors = [strawberry, gold, larioja, eggblue, wisteria];

const Game = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(Context);
  const { theme, roundState, mode, username, currRound } = state;
  const { word, cells, image, finished } = roundState;

  const balloonArr = useMemo(() => {
    if (finished) {
      history.push('/final');
    }

    return JSON.parse(localStorage.getItem('shuffledHeroes'))[currRound];
  }, [word]);

  const cellArr = useMemo(() => word.split(''), [word]);
  const number = useMemo(() => word.length, [word]);
  const colorArr = useMemo(() => {
    return Array(Math.ceil(number / cellsColors.length)).fill(cellsColors).flat();
  }, [word]);

  const handleKeyPress = (evt) => {
    const key = evt.code;

    if (/^Key/.test(key)) {
      evt.preventDefault();

      return dispatch({
        type: 'pressKey',
        payload: { char: key[key.length - 1].toLowerCase() },
      })
    };
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  useEffect(() => {
    if (word.length && word.length === cells.length) {
      return dispatch({
        type: 'roundover',
      })
    }
  }, [cells]);

  return useMemo(() => (
    <Wrapper bg={theme}>
      <Header>
        <Back />
        <PauseToggle />
        <AutoPlay />
        <Timer />
      </Header>

      <Clue />

      <GameArea visible={finished}>
        <Ballons>
          {balloonArr && balloonArr.map((balloon, index) => {
            if (index < number / 2) {
              return <Balloon
                key={`baloon-${index}`}
                char={balloon.char}
                index={balloon.index}
              />
            }
          })}
        </Ballons>

        <Question bg={image} mode={mode} />

        <Ballons>
          {balloonArr && balloonArr.map((balloon, index) => {
            if (index >= number / 2) {
              return <Balloon
                key={`baloon-${index}`}
                char={balloon.char}
                index={balloon.index}
              />
            }
          })}
        </Ballons>

        <Cells number={number}>
          {cellArr.length && cellArr.map((char, index) => (
            <Cell
              key={`cell-${index}`}
              color={colorArr[index]}
              char={char}
              index={index}
            />
          ))}
        </Cells>
      </GameArea>

      <Welldone visible={finished} />
    </Wrapper >
  ), [word, theme, finished, mode, username]);
}

export default Game;