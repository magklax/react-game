import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { RoundButton } from './RoundButton';
import { Context } from './../context/context';

export default () => {
  const history = useHistory();

  const { dispatch } = useContext(Context);

  const startNewGame = () => {
    dispatch({
      type: 'newgame'
    })
  }

  const handleKeyPress = (evt) => {
    if (evt.code === 'F11') {
      evt.preventDefault();
      startNewGame();
      history.push('/');
    };
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <>
      <RoundButton to="/" zindex={9} onClick={startNewGame}>
        <FaHome />
      </RoundButton>
    </>
  )
}
