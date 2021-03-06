import React from 'react';
import styled from 'styled-components';
import colors from './../../utils/colors';

const List = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export default () => {
  return (
    <List>
      <li>Music - F2</li>
      <li>Home - F11</li>
      <li>Autoplay - F12</li>
      <li>Menu - Escape</li>
      <li>Balloons - A-Z</li>
    </List>
  )
}