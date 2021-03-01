import React, { useContext } from 'react';
import VolumeRange from './components/VolumeRange';
import ThemeSettings from './components/ThemeSettings';
import BalloonSettings from './components/BalloonSettings';
import Heroes from './components/Heroes';
import { Overlay, Wrapper, Title, Grid, Item } from './styles';
import { Context } from '../context/context';
import ModeSettings from './components/ModeSettings';

export default () => {
  const { state } = useContext(Context);
  const { roundNumber, currRound, roundState } = state
  console.log(state);

  return (
    <Overlay isVisible={roundState.paused}>
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
        </Grid>
      </Wrapper>
    </Overlay >
  )
}
