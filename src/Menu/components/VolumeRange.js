import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';
import { MdVolumeUp, MdVolumeOff } from 'react-icons/md';
import { Context } from './../../context/context';
import colors from './../../utils/colors';

const { torchred } = colors;

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

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0 10px;
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
    backgroundColor: torchred,
    transition: 'transform 0.3s ease',

    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
      transform: 'scale(1.1)',
    },
  }
})(Slider);

export default ({ type }) => {
  const { state, dispatch } = useContext(Context);

  const [volume, setVolume] = useState(.5);

  const handleChange = (_, value) => {
    setVolume(value);

    return dispatch({
      type: type,
      payload: value,
    })
  }

  return (
    <>
      <h3>{type}</h3>
      <Wrapper>
        <IconWrapper>
          {volume ? <MdVolumeUp /> : <MdVolumeOff />}
        </IconWrapper>
        <RangeSlider
          defaultValue={0.5}
          min={0}
          step={0.1}
          max={1}
          onChange={handleChange}
        />
        <Value>{volume * 100}%</Value>
      </Wrapper>
    </>
  )
}
