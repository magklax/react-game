import React, { useContext } from 'react';
import { Context } from './../context/context';
import { Overlay, Wrapper, Cloud, Rainbow, Info, Sun, Title, ButtonWrapper } from './styles';
import Button from './../Common/Button';
import LogOut from './../Common/LogOut';
import colors from './../utils/colors';

const { wisteria, eggblue, larioja } = colors;

const Intro = () => {
  const { username } = useContext(Context).state;

  return (
    <Overlay>
      <Cloud />
      <Wrapper>
        <Rainbow />
        <Info>
          <Sun />

          <Title>Pop and Spell</Title>

          <ButtonWrapper visible={username}>
            <Button title="Sign Up" color={eggblue} path="/signup" />
            <Button title="Sign In" color={larioja} path="/signin" />
          </ButtonWrapper>

          <LogOut visible={username} />

          <Button title="Play Game" color={wisteria} path="/game" />
        </Info>
      </Wrapper>
    </Overlay >
  )
}

export default Intro;