import React, { useContext, useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Context } from '../../context/context';
import colors from './../../utils/colors';

const { coral, white } = colors;

const Message = styled.p`
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-family: inherit;
  font-size: 24px;
  color: ${white};
  background-color: ${coral};
  border: none;
  border-radius: 15px;
`;

const Modal = styled.div`
  position: fixed;
  width: 400px;
  padding: 30px 50px;
  left: 50%;
  top: 40%;
  font-size: 24px;
  line-height: 1.5;
  text-align: center;
  transition: 0.3s ease;
  transform: translate(-50%, -50%) ${({ isVisible }) => isVisible ? 'scale(1)' : 'scale(0)'};
  background-color: ${white};
  border-radius: 15px;
  z-index: 10;
`;

export default () => {
  const { state, dispatch } = useContext(Context);

  const { game } = state;

  const [isVisible, setIsVisible] = useState(true);

  const closeModal = () => {
    setIsVisible(false);

    return dispatch({
      type: 'gamestart',
    })
  }

  const handleKeyPress = (evt) => {
    if ((evt.key === 'Enter' || evt.key === 'Escape') || evt.type === 'click') {
      closeModal();
    }
  }

  useEffect(() => {
    if (!game) {
      window.addEventListener('keyup', handleKeyPress);
      window.addEventListener('click', handleKeyPress);

      return () => {
        window.removeEventListener('keyup', handleKeyPress);
        window.removeEventListener('click', handleKeyPress);
      };
    }
  }, [game]);

  return (
    <Modal isVisible={isVisible} onClick={(evt) => evt.stopPropagation()}>
      <Message>Spell the word by dragging the balloon into the place at the bottom of screen</Message>
      <Button
        tabIndex="0"
        onClick={closeModal}
      >ok</Button>
    </Modal >
  )
}
