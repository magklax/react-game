import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Context } from './../../context/context';
import colors from './../../utils/colors';

const { white, wisteria } = colors;

const Timer = styled.div`
  display: ${({ visible }) => visible ? 'block' : 'none'};
  font-size: 42px;
  color: ${white};
  -webkit-text-stroke: 4px ${wisteria};
  z-index: 3;
`;

export default () => {
  const { state, dispatch } = useContext(Context);
  const { game, roundState } = state;
  const { played, paused, finished, word, auto } = roundState;

  const [minute, setMinute] = useState('00');
  const [second, setSecond] = useState('00');

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let interval;

    if (played && !paused && game && !auto) {
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

  }, [counter, played, paused, game, auto]);

  useEffect(() => {
    if (finished) {
      setMinute(prev => prev = '00');
      setSecond(prev => prev = '00');
      setCounter(0);

      const result = auto ? 'autoplay' : `${minute}:${second}`

      return dispatch({
        type: 'addresult',
        payload: {
          [word]: result,
        },
      })
    }
  }, [finished]);

  return (
    <>
      <Timer visible={played && !auto}>
        <span>{minute}</span>:<span>{second}</span>
      </Timer>
    </>
  )
}