import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { DragDropContainer } from 'react-drag-drop-container';
import colors from './../../config/colors';

import balloonBlue from './../images/balloon-blue.png';

const { white, scarlet } = colors;

const rotate = keyframes`
  0% {
    transform: translateY(-20px)
  }
  50% {
    transform: translateY(20px)
  }
  100% {
    transform: translateY(-20px)
  }
`;

const getRandomDelay = (min, max) => {
  return `${Math.random() * (max - min) + min}s`;
}
const Letter = styled.span`
  position: absolute;
  left: 50%;
  top: 35%;
  transform: translate(-50%, -50%);
  color: ${white};
  font-size: 54px;
  font-weight: 400;
  text-transform: uppercase;
  -webkit-text-stroke: 4px ${scarlet};
`;

const Balloon = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  animation: ${rotate} ${() => getRandomDelay(3, 4)} linear infinite;
  animation-play-state: ${({ isAnimated }) => isAnimated ? 'running' : 'paused'};
  cursor: pointer;
`;

export default ({ id, letter }) => {
  const [isAnimated, setIsAnimated] = useState(true);

  const onDrop = (evt) => {
    evt.target.style.visibility = 'hidden';
  }

  const onDragStart = () => {
    setIsAnimated(false);
  }

  const onDragEnd = () => {
    setIsAnimated(true);
  }

  return (
    <DragDropContainer
      dragData={{ label: { letter }, id: { id } }}
      dragElemOpacity={1}
      targetKey={letter}
      onDrop={onDrop}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <Balloon
        isAnimated={isAnimated}
      >
        <img src={balloonBlue} draggable="false" />
        <Letter>{letter}</Letter>
      </Balloon>
    </DragDropContainer>
  )
}

