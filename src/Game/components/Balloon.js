import React, { useCallback, useContext, useEffect, useRef, useMemo, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import colors from './../../utils/colors';
import { Context } from '../../context/context';
import { confetti } from 'dom-confetti';

const { white, strawberry, larioja } = colors;

const getConfetti = (target) => {
  confetti(target, {
    spread: 360,
    startVelocity: 15,
    elementCount: 100
  })
}

const bounce = keyframes`
  0% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(-10px);
  }
`;

const getRandomDelay = (min, max) => {
  return `${Math.random() * (max - min) + min}s`;
}

const Letter = styled.span`
  position: absolute;
  left: 50%;
  top: 42%;
  transform: translate(-50%, -50%);
  color: ${white};
  font-size: ${({ isChosen }) => isChosen ? '56px' : '42px'};
  font-weight: 400;
  -webkit-text-stroke: 4px ${({ isChosen }) => isChosen ? larioja : strawberry};
`;

const Balloon = styled.div`
  position: relative;
  display: flex;
  visibility: ${({ isVisible }) => isVisible ? 'visible' : 'hidden'};
  justify-content: center;
  align-items: center;
  animation: ${bounce} ${() => getRandomDelay(3, 4)} linear infinite;
  overflow: hidden;
  cursor: pointer;

  img {
    height: 150px;
    width: auto;
  }
`;

export default ({ char, index }) => {
  const { state, dispatch } = useContext(Context);
  const { balloon } = state;
  const { pressedKey, currChar, cells, finished } = state.roundState;

  const [isChosen, setIsChosen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const ref = useRef(null);

  const bombBalloon = () => {
    getConfetti(ref.current);
    setIsVisible(false);
  }

  useEffect(() => {
    setIsVisible(true);
    setIsChosen(false);
  }, [finished]);

  useEffect(() => {
    ref.current === currChar ? setIsChosen(true) : setIsChosen(false);
  }, [currChar]);

  useEffect(() => {
    if (isChosen) bombBalloon();
  }, [cells]);

  useEffect(() => {
    if (pressedKey && char === pressedKey.char && index === cells.length) {
      bombBalloon();
    };
  }, [pressedKey]);


  const handleClick = () => dispatch({
    type: 'clickOnBallon',
    payload: ref.current,
  });

  return useMemo(() => (
    <Balloon
      isVisible={isVisible}
      onClick={handleClick}
      data-char={char}
      data-index={index}
      ref={ref}
    >
      <img src={state.balloon} draggable="false" />
      <Letter isChosen={isChosen}>{char}</Letter>
    </Balloon>
  ), [isVisible, isChosen, balloon, finished]);
}
