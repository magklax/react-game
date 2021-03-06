import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from './../utils/colors';

const { white } = colors;

const Button = styled(Link)`
  display: inline-block;
  margin: 0 10px 20px;
  padding: 12px 20px;
  color: ${({ color }) => color};
  font-family: inherit;
  font-size: 26px;
  background-color: ${white};
  border: 5px solid;
  border-radius: 35px;
  transition: all 0.6s ease;

  &:hover {
    color: ${white};
    background-color: ${({ color }) => color};
  }
`;

export default ({ color, path, title, onClick }) => {
  const ref = useRef(null);

  useEffect(() => ref.current.focus(), []);

  return (
    <Button color={color} to={path} ref={ref} onClick={onClick}>{title}</Button>
  )
}
