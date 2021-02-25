import styled from 'styled-components';
import colors from './../utils/colors';

const { ziggurat } = colors;

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
  grid-template-columns: repeat(${({ number }) => number}, minmax(100px, 200px));
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
  margin: 0 3.5%;
  display: ${({ isVisible }) => isVisible ? 'none' : 'grid'};
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  padding-bottom: 50px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: 100vh;
  width: 100%;
  background-color: ${ziggurat};
  background-image: url(${({ bg }) => bg});
  background-size: cover;
  background-repeat: no-repeat;
`;
