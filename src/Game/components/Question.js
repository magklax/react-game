import React from 'react';
import styled from 'styled-components';
import colors from './../../config/colors';

const { torchred, eggblue } = colors;

const Message = styled.p`
  margin-bottom: 10px;
  color: ${torchred};
	font-size: 52px;
  font-weight: 900;
  font-stretch: expanded;
	text-transform: uppercase;
  -webkit-text-stroke: 3px #fff;
`;

const Frame = styled.div`
  width: 200px;
  height: 200px;
  padding: 5px;
  border-radius: 15px;
  background-color: ${eggblue};
  border: 5px solid ${torchred};
  text-align: center;

  img {
    max-height: 100%;
    object-fit: contain;
  }
`;

const Wrapper = styled.div`
  position: fixed;
  min-width: 470px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
