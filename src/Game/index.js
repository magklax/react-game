import React, { useEffect, useContext, useMemo } from 'react';
import { Context } from '../context/context';
import { shuffleArray } from '../utils/utils';
import Balloon from "./components/Balloon";
import Cell from "./components/Сell";
import Welldone from "./components/Welldone";
import Question from "./components/Question";
import Timer from './components/Timer';
import PauseToggle from './components/PauseToggle';
import { Cells, Ballons, GameArea, Wrapper, Header } from './styles';
import colors from '../utils/colors';

const { strawberry, gold, larioja, eggblue, wisteria } = colors;
const cellsColors = [strawberry, gold, larioja, eggblue, wisteria];

export default function Game() {
  const { state, dispatch } = useContext(Context);
  const { word, cells, image, finished } = state.roundState;

  const ballonArr = useMemo(() => shuffleArray(word.split('')), [word]);
  const cellArr = useMemo(() => word.split(''), [word]);
  const number = useMemo(() => word.length, [word]);
  const colorArr = useMemo(() => {
    return Array(Math.ceil(number / cellsColors.length)).fill(cellsColors).flat();
  }, [word]);

  useEffect(() => {
    if (word.length && word.length === cells.length) {
      return dispatch({
        type: 'roundover',
      })
    }
  }, [cells]);

  return (
    <Wrapper bg={state.theme}>
      <Header>
        <PauseToggle />
        <Timer />
      </Header>

      <GameArea isVisible={finished} >

        <Ballons>
          {ballonArr.map((letter, index) => {
            if (index < number / 2) {
              return <Balloon
                key={`baloon-${index}`}
                id={`baloon-${index}`}
                letter={letter}
              />
            }
          })}
        </Ballons>

        <Question image={image} />

        <Ballons>
          {ballonArr.map((letter, index) => {
            if (index >= number / 2) {
              return <Balloon
                key={`baloon-${index}`}
                id={`baloon-${index}`}
                letter={letter}
              />
            }
          })}
        </Ballons>

        <Cells number={number}>
          {cellArr.map((letter, index) => (
            <Cell key={`cell-${index}`} color={colorArr[index]} letter={letter} />
          ))}
        </Cells>

      </GameArea>

      <Welldone isVisible={finished} />
    </Wrapper>
  )
}