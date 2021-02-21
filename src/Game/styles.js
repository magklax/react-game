import styled from 'styled-components';

export const Cells = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ number }) => number}, minmax(100px, 200px));
  grid-gap: 25px;
  justify-content: center;
  padding: 0 5%;
`;

export const Ballons = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  &:nth-child(1) {
    justify-content: center;
    margin-bottom: 40px;
  }
`;

export const GameArea = styled.div`
  height: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: ${({ isVisible }) => isVisible ? 'none' : 'flex'};
  flex-direction: column;
  justify-content: space-between;
  padding: 50px 0 50px;
`;

export const GameOver = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%) ${({ isVisible }) => isVisible ? 'scale(1)' : 'scale(0)'};
  transition: 0.3s;
`;

export const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  background-image: url(${({ bg }) => bg});
  background-size: cover;
  background-repeat: no-repeat;
`;
