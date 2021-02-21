import React, { useContext } from 'react';
import styled from 'styled-components';
import colors from './../../config/colors';
import { Context } from '../../context/context';
import { FaPlay } from "react-icons/fa";

const { torchred, scarlet, limeade } = colors;

const Message = styled.p`
  margin-bottom: 20px;
  color: ${torchred};
	font-size: 78px;
  font-weight: 900;
  white-space: nowrap;
	text-transform: uppercase;
  -webkit-text-stroke: 3px white;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 15px 20px;
  color: #fff;
  font-size: 48px;
  background-color: ${scarlet};
  border-radius: 25px;
  border: 5px solid ${limeade};
`;

const Welldone = () => {
  const { dispatch } = useContext(Context);

  const onClick = () => {
    return dispatch({
      type: 'roundstart',
    })
  }

  return (
    <>
      <Message>Well Done!</Message>
      <Button
        onClick={onClick}
        type='button'
      ><FaPlay />
      </Button >
    </>

  )
}

export default Welldone;