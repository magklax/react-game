import React from 'react';
import styled, { keyframes } from 'styled-components';
import colors from '../utils/colors';

const { strawberry } = colors;

const beat = keyframes`
  0% {
    transform: scale(0.95);
  }
  5% {
    transform: scale(1.1);
  }
  39% {
    transform: scale(0.85);
  }
  45% {
    transform: scale(1);
  }
  60% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0.9);
  }
`;

const HeartWrapper = styled.div`
  display: inline-block;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 160px;
  height: 160px;
  transform: translate(-50%, -50%) rotate(45deg);
  transform-origin: 50% 50%;
  z-index: 9;
  opacity: 0.8;
`;

const Heart = styled.div`
  top: 64px;
  left: 64px;
  position: absolute;
  width: 64px;
  height: 64px;
  background: ${strawberry};
  animation: ${beat} 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);

  &::after,
  &::before {
    content: " ";
    position: absolute;
    display: block;
    width: 64px;
    height: 64px;
    background: ${strawberry};
  }

  &::before {
    left: -48px;
    border-radius: 50% 0 0 50%;
  }

  &::after {
    top: -48px;
    border-radius: 50% 50% 0 0;
  }
`;


const Loader = () => {
  return (
    <HeartWrapper>
      <Heart></Heart>
    </HeartWrapper>
  )
}

export default Loader;