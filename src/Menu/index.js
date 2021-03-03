import React, { useContext } from 'react';
import { Wrapper, Title, Grid, Item } from './styles';
import { Overlay } from './../Common/Overlay';
import { Context } from '../context/context';
import Heroes from './components/Heroes';
import VolumeRange from './components/VolumeRange';
import ThemeSettings from './components/ThemeSettings';
import BalloonSettings from './components/BalloonSettings';
import ModeSettings from './components/ModeSettings';
import Hotkeys from './components/Hotkeys';

export default () => {
  const { state } = useContext(Context);
  const { roundNumber, currRound, roundState } = state

  return (
    <Overlay visible={roundState.paused} zIndex={8}>
      <Wrapper>
        <Title>Round {currRound}/{roundNumber}</Title>
        <Grid>
          <Item>
            <Heroes />
          </Item>
          <Item>
            <ModeSettings />
          </Item>
          <Item>
            <VolumeRange type="music" />
          </Item>
          <Item>
            <VolumeRange type="sound" />
          </Item>
          <Item>
            <ThemeSettings />
          </Item>
          <Item>
            <BalloonSettings />
          </Item>
          <Item>
            <Hotkeys />
          </Item>
        </Grid>
      </Wrapper>
    </Overlay >
  )
}
