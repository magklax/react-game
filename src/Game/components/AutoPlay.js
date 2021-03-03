import React, { useContext, useEffect } from 'react';
import { RoundButton } from './../../Common/RoundButton';
import { Context } from './../../context/context';
import { FaForward } from "react-icons/fa";

export default () => {
  const { state, dispatch } = useContext(Context);
  const { word, auto, cells } = state.roundState;

  const autoPressKey = (element) => {
    return dispatch({
      type: 'pressKey',
      payload: { char: element },
    })
  }

  useEffect(() => {
    let interval;

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
      >
        <FaForward />
      </RoundButton>
    </>
  )
}
