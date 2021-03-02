import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from './../utils/colors';

const { wisteria, white } = colors;

export const RoundButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  padding: 10px;
  color: ${wisteria};
  font-size: 24px;
  background-color: ${white};
  border: 5px solid ${wisteria};
  border-radius: 100%;
  z-index: 7;
`;