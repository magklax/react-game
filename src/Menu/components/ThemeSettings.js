import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from './../../context/context';
import colors from './../../config/colors';
import { themes } from './../../data/themes';

const { white, limeade } = colors;


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
  border: 5px solid ${({ isActive }) => isActive ? limeade : white};
  border-radius: 10px;
  background-image: url(${({ bg }) => bg});
  background-size: cover;
  cursor: pointer;
`;

const ThemeSettings = () => {
  const { state, dispatch } = useContext(Context);

  const handleClick = (evt) => (
    dispatch({
      type: 'theme',
      payload: evt.target.title
    })
  )

  return (
    <>
      <h3>Choose Theme</h3>
      <List>
        {themes.length && themes.map((theme) => (
          <Item
            bg={theme.src}
            key={`theme-${theme.name}`}
            title={theme.name}
            onClick={handleClick}
            isActive={state.theme === theme.name}
          ></Item>
        ))}
      </List>
    </>
  )
}

export default ThemeSettings;
