import React, { useState, useEffect, useContext, useMemo } from 'react';
import { Context } from '../context/context';
import { shuffleArray } from './../utils/utils';
import Balloon from "./components/Balloon";
import Cell from "./components/Сell";
import Welldone from "./components/Welldone";
import Question from "./components/Question";
import Controls from './components/Controls';

import { Cells, Ballons, GameOver, GameArea, Wrapper } from './styles';

import spring from './images/spring.svg';
import summer from './images/summer.svg';
import autumn from './images/autumn.svg';
import winter from './images/winter.svg';

const colors = ['#FF0051', '#d92382', '#6b8d00', '#00bec3', '#FA2900',]; //???

export default function Game() {
  const { state, dispatch } = useContext(Context);
  const { word, cells, image, finished } = state.roundState;

  useEffect(() => dispatch({ type: 'roundstart' }), []);

  const ballonArr = useMemo(() => shuffleArray(word.split('')), [word]);
  const cellArr = useMemo(() => word.split(''), [word]);
  const number = useMemo(() => word.length, [word]);
  const bg = useMemo(() => {
    switch (state.theme) {
      case 'summer':
        return summer;
      case 'winter':
        return winter;
      case 'autumn':
        return autumn;
      default:
        return spring;
    }
  }, [state.theme]);

  useEffect(() => {
    if (word.length && word.length === cells.length) {
      return dispatch({
        type: 'roundover',
      })
    }
  }, [cells]);

  return (
    <Wrapper bg={bg}>
      <Controls />

      <GameArea isVisible={finished} >

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

      <GameOver isVisible={finished}>
        <Welldone />
      </GameOver>
    </Wrapper>
  )
}