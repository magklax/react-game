import React, { useState, useContext, useEffect } from 'react';
import { RoundButton } from './../../Common/RoundButton';
import { FaPause, FaPlay } from 'react-icons/fa';
import { Context } from './../../context/context';

export default () => {
  const { dispatch } = useContext(Context);
  const [icon, setIcon] = useState(true);

  const togglePause = () => {
    setIcon(prev => !prev);

    return dispatch({
      type: 'pausetoggle',
    })
  }

  const handleKeyPress = (evt) => {
    if (evt.code === 'Escape') {
      evt.preventDefault();
      togglePause();
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
        onClick={togglePause}
        to="/game"
        zindex={9}
      >
        {icon ? <FaPause /> : <FaPlay />}
      </RoundButton>
    </>
  )
}
