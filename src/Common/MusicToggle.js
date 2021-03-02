import React, { useContext, useState, useEffect } from 'react';
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
  right: 3.3%;
  top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: ${({ playing }) => playing ? torchred : wisteria};
  font-size: 24px;
  background-color: ${white};
  border: 5px solid;
  border-radius: 100%;
  z-index: 9;
  animation: ${beat} 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
  animation-play-state: ${({ playing }) => playing ? 'running' : 'paused'};

  &:focus {
    outline: none;
  }
`;

const useAudio = (url, volume) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  const toggle = () => setPlaying(prev => !prev);

  useEffect(() => {
    audio.volume = volume;
    playing ? audio.play() : audio.pause();
  }, [playing, volume]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const MusicToggle = () => {
  const { state } = useContext(Context);

  const [playing, toggle] = useAudio(url, state.volume.music);

  useEffect(() => {
    const handler = (evt) => {
      if (evt.key === 'F2') toggle();
    }

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [])

  return (
    <Button
      type="button"
      onClick={toggle}
      playing={playing}
    >
      <FaDrum />
    </Button >
  )
}

export default MusicToggle;