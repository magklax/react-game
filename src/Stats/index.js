import React from 'react';
import Table from './Components/Table';
import Button from './../Common/Button';
import { Overlay, Wrapper, Title } from './styles';
import colors from '../utils/colors';

const { larioja } = colors;

const Stats = () => {
  return (
    <Overlay>
      <Wrapper>
        <Title>Statistics</Title>
        <Table />
        <Button title="Play again" color={larioja} path="/" />
      </Wrapper>
    </Overlay>
  )
}

export default Stats;