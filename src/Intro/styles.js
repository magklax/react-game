import styled, { keyframes } from 'styled-components';
import { Link } from "react-router-dom";
import colors from './../utils/colors';

import bg from './images/bg.svg';
import sun from './images/sun.svg';
import rays from './images/sun-rays.svg';
import cloud from './images/cloud.svg';
import rainbow from './images/rainbow.svg';

const { torchred, eggblue, wisteria, white } = colors;

const translate = keyframes`
  0% {
    left: -5%;
  }
  100% {
    left: 105%;
  }
`;

const rotate = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

export const Title = styled.div`
  margin-bottom: 30px;
  white-space: nowrap;
  font-size: 78px;
  color: ${torchred};
  -webkit-text-stroke: 3px white;
`;

export const Button = styled(Link)`
  display: inline-block;
  padding: 12px 30px;
  color: ${wisteria};
  font-family: inherit;
  font-size: 28px;
  background-color: ${white};
  border: 5px solid;
  border-radius: 35px;
  transition: 0.3s ease;

  &:hover {
    color: ${eggblue};
  }
`;

export const Sun = styled.div`
  display: inline-block;
  position: relative;
  width: 150px;
  height: 150px;
  margin-bottom: 35px;
  background: transparent url(${sun}) no-repeat center;
  background-size: contain;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    width: 250px;
    height: 250px;
    left: 50%;
    top: 50%;
    background: transparent url(${rays}) no-repeat center;
    animation: ${rotate} 10s linear infinite;
  }
`;

export const Info = styled.div`
  position: absolute;
  left: 50%;
  bottom: 20%;
  transform: translateX(-50%);
  text-align: center;
`;

export const Cloud = styled.div`
  position: absolute;
  width: 200px;
  height: 145px;
  top: 8%;
  animation: ${translate} 30s linear infinite;
  background: url(${cloud}) no-repeat center;
  background-size: contain;
  z-index: 2;
`;

export const Rainbow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: url(${rainbow}) no-repeat center;
  background-size: contain;
  opacity: 0.8;
`;

export const Wrapper = styled.div`
  position: relative;
  max-width: 1100px;
  height: 100%;
  margin: 0 auto;
`;

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: 1;
`;