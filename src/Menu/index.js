import React, { useContext } from 'react';
import VolumeRange from './components/VolumeRange';
import ThemeSettings from './components/ThemeSettings';
import BalloonSettings from './components/BalloonSettings';
import Heroes from './components/Heroes';
import { Overlay, Wrapper, Title, Grid, Item } from './styles';
import { Context } from '../context/context';
import { heroes } from '../data/heroes';

const Menu = () => {
  const { state } = useContext(Context);

  return (
    <Overlay isVisible={state.roundState.paused}>
      <Wrapper>
        <Title>Round {state.results.length}/{heroes.length}</Title>
        <Grid>
          <Item>
            {/* <Heroes /> */}
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
    </Overlay>
  )
}

export default Menu;