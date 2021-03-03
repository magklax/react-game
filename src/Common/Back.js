import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { RoundButton } from './RoundButton';

export default () => {
  const history = useHistory();

  const handleKeyPress = (evt) => {

    if (evt.code === 'F11') {
      evt.preventDefault();

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
      <RoundButton to="/" zindex={9}>
        <FaHome />
      </RoundButton>
    </>
  )
}
