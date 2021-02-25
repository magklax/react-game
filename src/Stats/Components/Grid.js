import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/colors';

import { heroes } from '../../data/heroes';

const { gold } = colors;


const Item = styled.div`
  width: 100%;
`;

const Frame = styled.div`
  margin-bottom: 10px;
  font-size: 0;
  border-radius: 10px;
  overflow: hidden;
`;

const Title = styled.h3`
  font-size: 18px;
  color: ${gold};
`;

const Grid = () => {
  return (
    <>
      {heroes.map((hero) => {
        return (
          <Item key={`hero-${hero.name}`}>
            <Frame>
              <img src={hero.image} alt={hero.name} />
            </Frame>
            <Title>{hero.name}</Title>
          </Item>
        )
      })}
    </>
  )
}

export default Grid;