import React, { useState, useEffect, useContext, useRef } from 'react';
import styled from 'styled-components';
import { FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import colors from './../../utils/colors';
import { Context } from '../../context/context';
import { Overlay } from './../../Common/Overlay';

import { backendURL } from './../../data/backend';

const { torchred, eggblue, white } = colors;

const Message = styled.p`
  margin-bottom: 20px;
  color: ${torchred};
	font-size: 78px;
  font-weight: 900;
  white-space: nowrap;
  -webkit-text-stroke: 3px white;
`;

const Button = styled(Link)`
  display: inline-flex;
  padding: 15px 20px;
  color: ${white};
  font-size: 48px;
  background-color: ${eggblue};
  border-radius: 25px;
  border: 5px solid;
  transition: 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export default ({ visible }) => {
  const [isOver, setIsOver] = useState(false);
  const { state, dispatch } = useContext(Context);
  const { roundNumber, currRound, username, gameResults } = state;
  const ref = useRef(null);

  useEffect(() => {
    if (roundNumber <= currRound) setIsOver(true);
  }, [currRound]);

  useEffect(() => ref.current.focus(), [visible]);

  const onClick = () => {
    if (isOver) {
      fetch(`${backendURL}/save`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          username: username,
          results: gameResults,
        }),
      })

      return dispatch({ type: 'gameover' });
    }

    return dispatch({ type: 'roundstart' })
  }

  return (
    <Overlay visible={visible} zIndex={10} >
      <Wrapper>
        <Message>Well Done!</Message>
        <Button
          to={isOver ? '/final' : '/game'}
          onClick={onClick}
          type='button'
          ref={ref}
        ><FaPlay />
        </Button >
      </Wrapper>
    </Overlay>
  )
}
