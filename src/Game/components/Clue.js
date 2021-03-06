import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Context } from './../../context/context';
import colors from './../../utils/colors';
import { Overlay } from './../../Common/Overlay';

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
  position: absolute;
  width: 400px;
  padding: 30px 50px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  line-height: 1.5;
  text-align: center;
  background-color: ${white};
  border-radius: 15px;
`;

export default () => {
  const { state, dispatch } = useContext(Context);

  const { game } = state;

  const [visible, setVisible] = useState(!game);

  const closeModal = () => {
    setVisible(false);

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
      window.addEventListener('keydown', handleKeyPress);
      window.addEventListener('click', handleKeyPress);

      return () => {
        window.removeEventListener('keydown', handleKeyPress);
        window.removeEventListener('click', handleKeyPress);
      };
    }
  }, [game]);

  return (
    <Overlay visible={visible} zIndex={10} >
      <Modal onClick={(evt) => evt.stopPropagation()}>
        <Message>Spell the word by clicking the balloon and the matched place at the bottom of screen or typing letters in correct order</Message>
        <Button
          tabIndex="0"
          onClick={closeModal}
        >ok</Button>
      </Modal >
    </Overlay>
  )
}
