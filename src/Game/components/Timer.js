import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../context/context';
import styled from 'styled-components';
import colors from '../../utils/colors';

const { white, wisteria } = colors;

const TimerElement = styled.div`
  display: ${({ isVisible }) => isVisible ? 'block' : 'none'};
  font-size: 42px;
  color: ${white};
  -webkit-text-stroke: 4px ${wisteria};
  z-index: 3;
`;

const Timer = () => {
  const { state, dispatch } = useContext(Context);
  const { played, paused, finished } = state.roundState;

  const [second, setSecond] = useState('00');
  const [minute, setMinute] = useState('00');
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let interval;

    if (played && !paused) {
      interval = setInterval(() => {
        const minCounter = Math.floor(counter / 60);
        const secCounter = counter % 60;

        setMinute(String(minCounter).length === 1 ? `0${minCounter}` : minCounter);
        setSecond(String(secCounter).length === 1 ? `0${secCounter}` : secCounter);

        setCounter(counter => counter + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [counter, played, paused]);

  useEffect(() => {
    if (finished) {
      setMinute(prev => prev = '00');
      setSecond(prev => prev = '00');
      setCounter(0);

      return dispatch({
        type: 'addresult',
        payload: counter,
      })
    }
  }, [finished]);

  return (
    <>
      <TimerElement isVisible={played}>
        <span>{minute}</span>:<span>{second}</span>
      </TimerElement>
    </>
  )
}

export default Timer;