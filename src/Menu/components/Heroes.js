import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from './../../context/context';
import { heroes } from './../../data/heroes';
import colors from '../../utils/colors';

import captain from './../images/captain.svg';

const { torchred } = colors;

const Item = styled.div`
  width: 100%;
  text-align: center;
`;

const Frame = styled.div`
  margin-bottom: 10px;
  font-size: 0;
  border-radius: 10px;
  overflow: hidden;
`;

const Title = styled.h3`
  font-size: 16px;
  color: ${({ color }) => color};
`;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    justify-content: space-between;
    grid-column: 1/3;
`;

export default () => {
  const { currRound } = useContext(Context).state;

  return (
    <Wrapper>
      {heroes.map((hero, index) => {
        if (currRound > index) {
          return (
            <Item key={`hero-${hero.name}`}>
              <Frame>
                <img src={hero.image} alt={hero.name} />
              </Frame>
              <Title color={torchred}>{hero.name}</Title>
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
    </Wrapper>
  )
}
