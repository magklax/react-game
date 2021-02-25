import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from './../../context/context';
import { heroes } from './../../data/heroes';
import colors from '../../utils/colors';

import captain from './../images/captain.svg';

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
  font-size: 16px;
  color: ${gold};
`;

const Heroes = () => {
  const { state } = useContext(Context);

  return (
    <>
      {heroes.map((hero, index) => {
        if (state.results.length > index) {
          return (
            <Item key={`hero-${hero.name}`}>
              <Frame>
                <img src={hero.image} alt={hero.name} />
              </Frame>
              <Title>{hero.name}</Title>
            </Item>
          )
        } else {
          return (
            <Item key={`hero-${hero.name}`}>
              <Frame>
                <img src={captain} alt="unknow" />
              </Frame>
              <Title>unknow</Title>
            </Item>
          )
        }
      })}
    </>
  )
}

export default Heroes;