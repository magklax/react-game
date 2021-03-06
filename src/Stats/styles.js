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

export const Message = styled.p`
  font-size: 24px;
  margin-bottom: 20px;
  padding: 10px 0;
`;

export const Wrapper = styled.div`
  position: absolute;
  width: 900px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
