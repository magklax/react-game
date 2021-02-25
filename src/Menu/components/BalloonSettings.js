import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../../context/context';
import colors from '../../utils/colors';
import { balloons } from '../../data/balloons';

const { white, larioja } = colors;

const List = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0 10px;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border: 5px solid ${({ isActive }) => isActive ? larioja : white};
  border-radius: 10px;
  background: url(${({ bg }) => bg}) no-repeat center;
  background-size: contain;
  cursor: pointer;
`;

const BalloonSettings = () => {
  const { state, dispatch } = useContext(Context);

  const handleClick = (evt) => { }
  // dispatch({
  //   type: 'balloon',
  //   payload: evt.target.title
  // })

  return (
    <>
      <h3>Choose Balloon</h3>
      <List>
        {balloons.length && balloons.map((balloon) => (
          <Item
            bg={balloon.image}
            key={`theme-${balloon.name}`}
            title={balloon.name}
            onClick={handleClick}
            isActive={balloon.theme === balloon.name}
          ></Item>
        ))}
      </List>
    </>
  )
}

export default BalloonSettings;
