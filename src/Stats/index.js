import React from 'react';
import colors from '../utils/colors';
import Grid from './Components/Grid';

import { Overlay, Wrapper, Title } from './styles';

const { eggblue, larioja } = colors;

const Stats = () => {
  return (
    <Overlay>
      <Wrapper>
        <Title>Statistics</Title>
        <Grid />
      </Wrapper>
    </Overlay>
  )
}

export default Stats;