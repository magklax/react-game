import React from 'react';
import styled from 'styled-components';
import colors from './../../utils/colors';

const { torchred, eggblue, white } = colors;

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
  font-size: 0;
  overflow: hidden;
  border-radius: 15px;
  border: 10px solid ${eggblue};
  text-align: center;

  img {
    width: 200px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Question = ({ image }) => {
  return (
    <Wrapper>
      <Message>What is my name?</Message>
      <Frame>
        <img src={image} />
      </Frame>
    </Wrapper>
  )
}

export default Question;
