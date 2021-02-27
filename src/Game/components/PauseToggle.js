import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { FaPause, FaPlay } from "react-icons/fa";
import { Context } from './../../context/context';
import colors from './../../utils/colors';

const { white, wisteria } = colors;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-right: 25px;
  color: ${wisteria};
  font-size: 28px;
  background-color: ${white};
  border: 5px solid ${wisteria};
  border-radius: 100%;
  z-index: 9;

  &:focus {
    outline: none;
  }
`;

export default () => {
  const { dispatch } = useContext(Context);
  const [icon, setIcon] = useState(true);

  const onClick = (evt) => {
    evt.preventDefault();

    setIcon(!icon);

    return dispatch({
      type: 'pausetoggle',
    })
  }
  return (
    <>
      <Button
        onClick={onClick}
        type="button" >
        {icon ? <FaPause /> : <FaPlay />}
      </Button>
    </>
  )
}
