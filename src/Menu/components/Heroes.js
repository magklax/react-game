import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from './../../context/context';
import { heroes } from './../../data/heroes';
import colors from '../../config/colors';

import captain from './../images/captain.svg';

const { limeade, yellow } = colors;

const Item = styled.div`
  width: 100%;
`;

const Frame = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 10px;
  padding-top: calc(100% - 10px);
  border: 5px solid ${limeade};
  text-align: center;
  border-radius: 100%;
`;

const Image = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: url(${({ bg }) => bg});
  background-repeat: no-repeat;
  background-size: 65%;
  background-position: center;
`;

const Title = styled.h3`
  font-size: 18px;
  color: ${yellow};
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
                <Image bg={hero.image} />
              </Frame>
              <Title>{hero.name}</Title>
            </Item>
          )
        } else {
          return (
            <Item key={`hero-${hero.name}`}>
              <Frame>
                <Image bg={captain} />
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