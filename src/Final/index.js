import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import colors from '../utils/colors';
import { Wrapper, Title, Subtitle } from './styles';
import { Overlay } from './../Common/Overlay';
import Button from './../Common/Button';

const { eggblue, larioja } = colors;

const Final = () => {
  const history = useHistory();

  const handleKeyPress = (evt) => {

    if (evt.code === 'F11') {
      evt.preventDefault();

      history.push('/stats');
    };
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <Overlay isVisible={true}>
      <Wrapper>
        <Title>Congrats!</Title>
        <Subtitle>You got all heroes</Subtitle>
        <Button title="See results(F11)" color={eggblue} path="/stats" />
        <br />
        <Button title="Play Again" color={larioja} path="/" />
      </Wrapper>
    </Overlay>
  )
}

export default Final;