import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from './../../context/context';
import colors from './../../utils/colors';
import { themes } from './../../data/themes';

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
  background-image: url(${({ bg }) => bg});
  background-size: cover;
  cursor: pointer;
`;

const ThemeSettings = () => {
  const { state, dispatch } = useContext(Context);

  const handleClick = (evt) => (
    dispatch({
      type: 'theme',
      payload: evt.target.dataset.bg
    })
  )

  return (
    <>
      <h3>Choose Theme</h3>
      <List>
        {themes.length && themes.map((theme) => (
          <Item
            bg={theme.preview}
            key={`theme-${theme.name}`}
            data-bg={theme.bg}
            onClick={handleClick}
            isActive={state.theme === theme.bg}
          ></Item>
        ))}
      </List>
    </>
  )
}

export default ThemeSettings;
