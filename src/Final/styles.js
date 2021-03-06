import styled from 'styled-components';
import colors from './../utils/colors';

const { torchred, white } = colors;

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

export const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
