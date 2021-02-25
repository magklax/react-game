import { Link } from "react-router-dom";
import styled from 'styled-components';

import colors from '../utils/colors';
const { torchred, ziggurat, white } = colors;

export const Title = styled.h2`
  margin-bottom: 20px;
  color: ${torchred};
	font-size: 64px;
  font-weight: 900;
  -webkit-text-stroke: 3px ${white};
`;

export const Subtitle = styled.h2`
  margin-bottom: 20px;
	font-size: 32px;
  font-weight: 900;
  -webkit-text-stroke: 3px ${white};
`;

export const Button = styled(Link)`
  display: inline-block;
  margin-bottom: 25px;
  padding: 12px 30px;
  color: ${({ color }) => color};
  font-family: inherit;
  font-size: 28px;
  background-color: ${white};
  border: 5px solid;
  border-radius: 35px;
  transition: 0.3s ease;

  &:hover {
    color: ${white};
    background-color: ${({ color }) => color};
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: ${ziggurat};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;