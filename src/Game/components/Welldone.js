import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from './../../utils/colors';
import { Context } from '../../context/context';
import { FaPlay } from "react-icons/fa";

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
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%) ${({ isVisible }) => isVisible ? 'scale(1)' : 'scale(0)'};
  text-align: center;
  transition: 0.3s;
`;

const Welldone = ({ isVisible }) => {
  const [isOver, setIsOver] = useState(false);
  const { state, dispatch } = useContext(Context);
  const { rounds, results } = state;

  useEffect(() => {
    if (rounds === results.length) setIsOver(true);
  }, [results]);

  const onClick = () => {
    if (!isOver) {
      return dispatch({
        type: 'roundstart',
      })
    }
  }

  return (
    <Wrapper isVisible={isVisible}>
      <Message>Well Done!</Message>
      <Button
        to={isOver ? '/final' : '/game'}
        onClick={onClick}
        type='button'
      ><FaPlay />
      </Button >
    </Wrapper>
  )
}

export default Welldone;