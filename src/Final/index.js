import React from 'react';
import colors from './../utils/colors';
import { Wrapper, Title, Subtitle } from './styles';
import { Overlay } from './../Common/Overlay';
import Button from './../Common/Button';

const { eggblue, larioja } = colors;

const Final = () => {
  return (
    <Overlay visible={true}>
      <Wrapper>
        <Title>Congrats!</Title>
        <Subtitle>You got all heroes</Subtitle>
        <Button title="See results" color={eggblue} path="/stats" />
        <br />
        <Button title="Play Again" color={larioja} path="/" />
      </Wrapper>
    </Overlay>
  )
}

export default Final;