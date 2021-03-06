import React, { useState, useContext, useRef, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import colors from './../../utils/colors';
import { Context } from '../../context/context';
import useSound from 'use-sound';
import pop from './../sounds/pop.wav';
import error from './../sounds/error.wav';

const { white } = colors;

const Letter = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100px;
  color: ${({ color }) => color};
  opacity: ${({ isMatched }) => isMatched ? 1 : 0};
  font-size: 54px;
  font-weight: 400;
  -webkit-text-stroke: 3px #fff;
  transition: opacity 0.5s ease;
`;

const Slot = styled.div`
  height: 50px;
  background-color: ${({ color }) => color};
  border: 5px solid ${({ isChosen, color }) => isChosen ? color : white};
  transition: border 0.5s ease;
  border-radius: 15px;
`;

const Cell = styled.div`
  display: flex;
  flex-direction: column;
  transform-origin: center;
  cursor: pointer;
`;

export default ({ char, color, index }) => {
  const { state, dispatch } = useContext(Context);

  const { roundState, volume } = state;
  const { pressedKey, currChar, cells, finished } = roundState;
  const { sound } = volume;

  const [isChosen, setIsChosen] = useState(false);
  const [isMatched, setIsMatched] = useState(false);

  const [playPop] = useSound(pop, { volume: sound });
  const [playError] = useSound(error, { volume: sound });

  const ref = useRef(null);

  const playSound = (bollean) => {
    bollean ? showChar() : playError();
  }

  useEffect(() => {
    setIsMatched(false);
    setIsChosen(false);
  }, [finished]);

  const showChar = () => {
    setIsMatched(true);
    setIsChosen(true);
    playPop();

    return dispatch({
      type: 'match',
      payload: char,
    });
  }

  const handleClick = () => {
    playSound(currChar && char === currChar.dataset.char)
  }

  useEffect(() => {
    if (cells.length && char === cells[index]) {
      setIsMatched(true);
      setIsChosen(true);
    }
  }, []);

  useEffect(() => {
    if (pressedKey && pressedKey.char && index === cells.length) {
      playSound(char === pressedKey.char);
    }
  }, [pressedKey]);

  return useMemo(() => (
    <Cell
      ref={ref}
      data-char={char}
      onClick={handleClick}
    >
      <Letter
        isMatched={isMatched}
        color={color}>
        {char}
      </Letter>
      <Slot color={color} isChosen={isChosen} />
    </Cell>
  ), [isChosen, currChar, sound, finished]);
}
