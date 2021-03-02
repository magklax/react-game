import React, { useContext, useEffect } from 'react';
import { Context } from './../context/context';
import styled from 'styled-components';
import { RoundButton } from './RoundButton';
import { FaHome } from "react-icons/fa";

import colors from './../utils/colors';

const { larioja, gold } = colors;

export default () => {
  return (
    <>
      <RoundButton to="/">
        <FaHome />
      </RoundButton>
    </>
  )
}
