import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';
import { MdVolumeUp, MdVolumeOff } from 'react-icons/md';
import { Context } from '../../context/context';

import colors from '../../config/colors';

const { torchred, scarlet } = colors;

const Value = styled.div`
  min-width: 50px;
  text-align: center;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 42px,
`;

const RangeSlider = withStyles({
  root: {
    width: 250,
    height: 8,
  },
  track: {
    height: 8,
    borderRadius: 4,
    backgroundColor: torchred,
  },
  rail: {
    height: 8,
    borderRadius: 4,
    backgroundColor: torchred,
    opacity: 0.3
  },
  thumb: {
    height: 24,
    width: 24,
    marginTop: -8,
    marginLeft: -12,
    backgroundColor: scarlet,
    transition: 'transform 0.3s ease',

    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
      transform: 'scale(1.1)',
    },
  }
})(Slider);

const VolumeRange = () => {
  const { dispatch } = useContext(Context);

  const [volume, setVolume] = useState(50);

  const handleChange = (_, value) => {
    setVolume(value);

    return dispatch({
      type: 'volume',
      payload: value,
    })
  }

  return (
    <>
      <IconWrapper>
        {volume ? <MdVolumeUp /> : <MdVolumeOff />}
      </IconWrapper>
      <RangeSlider
        defaultValue={50}
        min={0}
        step={1}
        max={100}
        onChange={handleChange}
      />
      <Value>{volume}%</Value>
    </>
  )
}

export default VolumeRange;

