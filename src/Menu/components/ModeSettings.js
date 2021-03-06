import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from './../../context/context';
import colors from './../../utils/colors';
import baby from './../images/baby.svg';
import superman from './../images/superman.svg';

const { white, larioja } = colors;

const List = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 15px 0 10px;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 5px;
  border: 5px solid ${({ isActive }) => isActive ? larioja : white};
  border-radius: 10px;
  background-size: contain;
  cursor: pointer;

  img {
    max-width: 100px;
    margin-bottom: 10px;
  }
`;

export default () => {
  const { state, dispatch } = useContext(Context);

  const handleClick = (evt) => {
    return (
      dispatch({
        type: 'mode',
        payload: evt.currentTarget.dataset.mode,
      })
    )
  }

  return (
    <>
      <h3>Choose Level</h3>
      <List>
        <Item
          data-mode="light"
          onClick={handleClick}
          isActive={state.mode === "light"}
        >
          <img src={baby} alt="light mode" />
          <span>Light</span>
        </Item>
        <Item
          data-mode="hard"
          onClick={handleClick}
          isActive={state.mode === "hard"}
        >
          <img src={superman} alt="hard mode" />
          <span>Hard</span>
        </Item>
      </List>
    </>
  )
}