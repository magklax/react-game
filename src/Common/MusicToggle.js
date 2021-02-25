import React, { useContext } from 'react';
import useSound from 'use-sound';

import styled, { keyframes } from 'styled-components';
import { FaDrum } from "react-icons/fa";
import { Context } from '../context/context';

import colors from './../utils/colors';
import url from './audio/playground.mp3';


const { torchred, wisteria, white } = colors;

const beat = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const Button = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: ${({ isPlaying }) => isPlaying ? torchred : wisteria};
  font-size: 28px;
  background-color: ${white};
  border: 5px solid;
  border-radius: 100%;
  z-index: 9;
  animation: ${beat} 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
  animation-play-state: ${({ isPlaying }) => isPlaying ? 'running' : 'paused'};

  &:focus {
    outline: none;
  }
`;

const MusicToggle = () => {
  const { state, dispatch } = useContext(Context);

  const [play, { pause, isPlaying }] = useSound(url, {
    volume: state.volume.music,
  });

  const handleClick = () => {
    isPlaying ? pause() : play();
  }

  return (
    <>
      <Button
        type="button"
        onClick={handleClick}
        isPlaying={isPlaying}
      >
        <FaDrum />
      </Button>
    </>
  )
}

export default MusicToggle;