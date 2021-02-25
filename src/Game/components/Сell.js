import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import useSound from 'use-sound';
import colors from './../../utils/colors';
import { confetti } from 'dom-confetti';
import { Context } from '../../context/context';
import { DropTarget } from 'react-drag-drop-container';
import url from './../sounds/pop.wav';

const { white } = colors;

const Letter = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100px;
  color: ${({ color }) => color};
  opacity: ${({ match }) => match ? 1 : 0};
  font-size: 54px;
  font-weight: 400;
  -webkit-text-stroke: 3px #fff;
`;

const Slot = styled.div`
  height: 50px;
  background-color: ${({ color }) => color};
  border: 5px solid ${white};
  border-radius: 15px;
`;

const Cell = styled.div`
  display: flex;
  flex-direction: column;
  transform-origin: center;
  transform: ${({ hover }) => hover ? 'scale(1.1)' : 'scale(1)'};
  transition: 0.5s ease;
  cursor: pointer;
  overflow: hidden;
`;

export default ({ letter, color }) => {
  const { state, dispatch } = useContext(Context);

  const [hover, setHover] = useState(false);
  const [match, setMatch] = useState(false);
  const [play] = useSound(url, {
    volume: state.volume.sound,
  });

  const getConfetti = (target) => {
    confetti(target, {
      spread: 360,
      startVelocity: 15,
      elementCount: 100
    })
  }

  const handleEnter = () => {
    if (!match) setHover(true)
  }

  const handleLeave = () => {
    if (!match) setHover(false);
  }

  const dropped = (evt) => {
    setMatch(true);

    // getConfetti(evt.target);

    play();

    return dispatch({
      type: 'match',
      payload: letter,
    })
  }

  return (
    <DropTarget
      targetKey={letter}
      onDragEnter={handleEnter}
      onDragLeave={handleLeave}
      onHit={dropped}
    >
      <Cell hover={hover} onClick={dropped}>
        <Letter
          match={match}
          title={letter}
          color={color}>
          {letter}
        </Letter>
        <Slot color={color} />
      </Cell>
    </DropTarget>
  )
}
