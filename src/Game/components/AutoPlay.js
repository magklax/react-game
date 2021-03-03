import React, { useContext, useEffect } from 'react';
import { FaForward } from 'react-icons/fa';
import { RoundButton } from './../../Common/RoundButton';
import { Context } from './../../context/context';

export default () => {
  const { state, dispatch } = useContext(Context);
  const { word, auto, cells } = state.roundState;

  const autoPressKey = (element) => {
    return dispatch({
      type: 'pressKey',
      payload: { char: element },
    })
  }

  let interval;

  useEffect(() => {

    if (auto) {
      let count = cells.length;

      interval = setInterval(() => {
        autoPressKey(word.split('')[count]);
        count++;

        if (count >= word.split('').length) {
          clearInterval(interval);
        }

      }, 1500);
    }
  }, [auto]);

  useEffect(() => {
    clearInterval(interval);
  }, []);

  const autoplay = () => {
    dispatch({
      type: 'autoplay',
    });
  }

  const handleKeyPress = (evt) => {

    if (evt.code === 'F12') {
      evt.preventDefault();
      autoplay();
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <>
      <RoundButton
        onClick={autoplay}
        to="/game"
        hidden={auto}
      >
        <FaForward />
      </RoundButton>
    </>
  )
}
