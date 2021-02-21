import React, { useContext } from 'react';
import VolumeRange from './components/VolumeRange';
import ThemeSettings from './components/ThemeSettings';
import Heroes from './components/Heroes';
import { Overlay, Wrapper, Title, List, Item } from './styles';
import { Context } from './../context/context';
import { heroes } from './../data/heroes';

const Menu = () => {
  const { state } = useContext(Context);

  return (
    <Overlay isVisible={state.roundState.paused}>
      <Wrapper>
        <Title>Round {state.results.length}/{heroes.length}</Title>

        <List>
          <Item>
            <Heroes />
          </Item>
          <Item>
            <VolumeRange />
          </Item>
          <Item>
            <ThemeSettings />
          </Item>

        </List>
      </Wrapper>
    </Overlay>
  )
}

export default Menu;