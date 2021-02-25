
import styled from 'styled-components';
import colors from '../utils/colors';

const { white } = colors;

export const Item = styled.li`
  padding: 10px 20px;
  font-size: 20px;
  background-color: ${white};
  border-radius: 10px;
  text-align: center;

  &:nth-child(1) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    justify-content: space-between;
    justify-items: center;
    grid-column: 1/3;
  }
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
export const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);
  z-index: ${({ isVisible }) => isVisible ? '1' : '-1'};
`;