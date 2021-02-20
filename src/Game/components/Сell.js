import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import useSound from 'use-sound';
import colors from './../../config/colors';
import { confetti } from 'dom-confetti';
import { Context } from '../../context/context';
import { DropTarget } from 'react-drag-drop-container';
import pop from './../sounds/pop.wav';

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
  text-transform: uppercase;
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
  const [play] = useSound(pop);

  const onDragEnter = () => setHover(true);
  const unHighlight = () => setHover(false);

  const dropped = (evt) => {
    setHover(false);
    setMatch(true);
    play();

    confetti(evt.target, {
      spread: 360,
      startVelocity: 15,
      elementCount: 100
    })

    setTimeout(() => dispatch({
      type: 'match',
      payload: letter,
    }), 1000);
  }

  useEffect(() => setMatch(false), [state.roundover]);

  return (
    <DropTarget
      targetKey={letter}
      onDragEnter={onDragEnter}
      onDragLeave={unHighlight}
      onHit={dropped}
    >
      <Cell hover={hover}>
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
