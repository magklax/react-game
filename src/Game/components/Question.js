import React from 'react';
import styled from 'styled-components';
import colors from './../../utils/colors';

const { torchred, eggblue } = colors;

const Message = styled.p`
  margin-bottom: 25px;
  color: ${torchred};
  text-align: center;
	font-size: 48px;
  font-weight: 900;
  font-stretch: expanded;
  -webkit-text-stroke: 3px #fff;
`;

const Frame = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 15px;
  border: 10px solid ${eggblue};
  background-color: ${torchred};
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  background: url(${({ bg }) => bg}) no-repeat center;
  clip-path: ${({ mode }) => mode === "hard" ? 'circle(15% at 50% 50%)' : 'none'};
  background-size: cover;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default ({ bg, mode }) => (
  <Wrapper>
    <Message>What is my name?</Message>
    <Frame>
      <Image bg={bg} mode={mode}></Image>
    </Frame>
  </Wrapper>
)
