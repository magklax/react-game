import { Link } from "react-router-dom";
import styled from 'styled-components';

import colors from '../utils/colors';
const { white } = colors;

const Button = styled(Link)`
  display: inline-block;
  margin-bottom: 25px;
  padding: 12px 30px;
  color: ${({ color }) => color};
  font-family: inherit;
  font-size: 28px;
  background-color: ${white};
  border: 5px solid;
  border-radius: 35px;
  transition: 0.3s ease;

  &:hover {
    color: ${white};
    background-color: ${({ color }) => color};
  }
`;

export default ({ color, path, title }) => (
  <Button color={color} to={path}>{title}</Button>
)