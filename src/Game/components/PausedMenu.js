import React, { useState } from 'react';
import styled from 'styled-components';

import { MdVolumeUp } from "react-icons/md";

import colors from '../../config/colors';

const { white, torchRed, eggBlue, limeade, cerise, scarlet } = colors;

const Menu = styled.ul`

`;

const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;

  font-size: 26px;
  background-color: ${white};
  border-radius: 10px;
`;

const RangeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 25px;
`;

const Range = styled.input`
  appearance: none;
  width: 100%;
  height: 25px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  outline: none;
  opacity: 0.7;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb,
  &::-moz-range-thumb {
    position: relative;
    appearance: none;
    width: 5px;
    height: 5px;
    background-color: ${cerise};
    border: 10px solid ${cerise};
    border-radius: 100%;
    cursor: pointer;
  }
`;

const Value = styled.div`
  min-width: 50px;
  text-align: center;
`;

const PausedMenu = () => {
  const [volume, setVolume] = useState(0.5);

  const onChange = (evt) => {
    const value = evt.target.valueAsNumber
    setVolume(evt.target.valueAsNumber);
  };

  return (
    <>
      <Menu>
        <Item>
          <MdVolumeUp style={{ fontSize: 42 }} />
          <RangeContainer>
            <Range
              type="range"
              min={0}
              max={1}
              step={0.1}
              value={volume}
              onChange={onChange}
            />
          </RangeContainer>
          <Value>{volume}</Value>
        </Item>
      </Menu>
    </>
  )
}

export default PausedMenu;