import React, { useEffect, useState, useContext, useMemo } from 'react';
import { Context } from '../context/context';
import { useHotkeys } from 'react-hotkeys-hook';
import { shuffleArray } from '../utils/utils';
import Loader from './../Common/Loader';
import Balloon from "./components/Balloon";
import Cell from "./components/Сell";
import Welldone from "./components/Welldone";
import Question from "./components/Question";
import Timer from './components/Timer';
import PauseToggle from './components/PauseToggle';
import { Cells, Ballons, GameArea, Wrapper, Header } from './styles';
import colors from '../utils/colors';
import Clue from './components/Clue';

const { strawberry, gold, larioja, eggblue, wisteria } = colors;
const cellsColors = [strawberry, gold, larioja, eggblue, wisteria];

const Game = () => {
  const { state, dispatch } = useContext(Context);
  const { theme, roundState, mode } = state;
  const { word, cells, image, finished } = roundState;

  const ballonArr = useMemo(() => word.split('').map((char, index) => ({ char, index })), [word]);
  const cellArr = useMemo(() => word.split(''), [word]);
  const number = useMemo(() => word.length, [word]);
  const colorArr = useMemo(() => {
    return Array(Math.ceil(number / cellsColors.length)).fill(cellsColors).flat();
  }, [word]);

  // const [loading, setLoading] = useState(true);
  // const handleLoad = () => setLoading(false);
  // useEffect(() => {
  //   window.addEventListener('load', handleLoad);
  //   return () => window.removeEventListener('load', handleLoad);
  // }, []);

  const handleKeyPress = (evt) => {
    const key = evt.code;
    if (/^Key/.test(key)) {
      return dispatch({
        type: 'pressKey',
        payload: { char: key[key.length - 1].toLowerCase() },
      })
    };
  }

  useEffect(() => {
    window.addEventListener('keyup', handleKeyPress);
    return () => {
      window.removeEventListener('keyup', handleKeyPress);
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
      <>
        <Header>
          <PauseToggle />
          <Timer />
        </Header>

        <Clue />

        <GameArea isVisible={finished} >
          <Ballons>
            {ballonArr.map((balloon, index) => {
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
            {ballonArr.map((balloon, index) => {
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
            {cellArr.map((char, index) => (
              <Cell
                key={`cell-${index}`}
                color={colorArr[index]}
                char={char}
                index={index}
              />
            ))}
          </Cells>
        </GameArea>

        <Welldone isVisible={finished} />
      </>
    </Wrapper >
  ), [word, theme, finished, mode]);
}

export default Game;