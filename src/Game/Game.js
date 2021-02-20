import React, { useEffect, useContext, useMemo } from 'react';
import { Context } from '../context/context';
import { shuffleArray } from './../utils/utils';
import Balloon from "./components/Balloon";
import Cell from "./components/Сell";
import Welldone from "./components/Welldone";
import Question from "./components/Question";
import Controls from './components/Controls';
import PausedMenu from './components/PausedMenu';

import { Cells, Ballons, GameOver, GameArea, Overlay } from './styles';
import { heroes } from '../data/heroes';

const colors = ['#FF0051', '#d92382', '#6b8d00', '#00bec3', '#FA2900',]; //???

export default function Game() {
  const { state, dispatch } = useContext(Context);
  const { balloons, cells, image, roundover, roundpaused, round } = state;

  useEffect(() => dispatch({
    type: 'init',
    payload: heroes[round],
  }), [roundover]);

  const ballonArr = useMemo(() => shuffleArray(balloons.split('')), [balloons]);
  const cellArr = useMemo(() => balloons.split(''), [balloons]);
  const number = useMemo(() => balloons.length, [balloons]);

  useEffect(() => {
    if (balloons.length && balloons.length === cells.length) {
      return dispatch({
        type: 'roundover',
      })
    }
  }, [cells]);

  return (
    <>
      <Controls />

      <GameArea isVisible={roundover} >

        <Ballons>
          {ballonArr.map((letter, index) => {
            if (index < Math.ceil(number / 2)) {
              return <Balloon
                key={`baloon-${index}`}
                id={`baloon-${index}`}
                letter={letter}
              />
            }
          })}
        </Ballons>
        <Ballons>
          {ballonArr.map((letter, index) => {
            if (index >= Math.ceil(number / 2)) {
              return <Balloon
                key={`baloon-${index}`}
                id={`baloon-${index}`}
                letter={letter}
              />
            }
          })}
        </Ballons>

        <Question image={image} />

        <Cells number={number}>
          {cellArr.map((letter, index) => (
            <Cell key={`cell-${index}`} color={colors[index]} letter={letter} />
          ))}
        </Cells>

      </GameArea>

      <GameOver isVisible={roundover}>
        <Welldone />
      </GameOver>

      <Overlay isVisible={true}>
        <PausedMenu />
      </Overlay>
    </>
  )
}