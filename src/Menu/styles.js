
import styled from 'styled-components';
import colors from '../utils/colors';

const { white } = colors;

export const Item = styled.li`
  padding: 10px 20px;
  font-size: 20px;
  background-color: ${white};
  border-radius: 10px;
  text-align: center;
`;

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 400px);
  grid-gap: 20px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 36px;
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`
