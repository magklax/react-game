import styled from 'styled-components';
import colors from './../utils/colors';

const { ziggurat, coral, white } = colors;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 3.3%;
`;

export const Cells = styled.div`
  grid-column: 1/4;
  display: grid;
  grid-template-columns: repeat(${({ number }) => number}, 1fr);
  grid-gap: 25px;
  justify-content: center;
  padding: 0 5%;
`;

export const Ballons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-gap: 20px;
  justify-content: space-around;
`;

export const GameArea = styled.div`
  flex-grow: 1;
  max-width: 900px;
  margin: 0 auto;
  display: ${({ visible }) => visible ? 'none' : 'grid'};
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
`;

export const Greeting = styled.p`
  margin-left: auto;
  color: ${white};
  font-size: 42px;
  -webkit-text-stroke: 4px ${coral};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: ${ziggurat};
  background-image: url(${({ bg }) => bg});
  background-size: cover;
  background-repeat: no-repeat;
`;
