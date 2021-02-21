import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../context/context';
import styled from 'styled-components';
import { FaPause, FaPlay } from "react-icons/fa";
import colors from '../../config/colors';

const { white, cerise, scarlet, yellow } = colors;

let interval;

const Pause = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  font-size: 28px;
  color: ${scarlet};
  background-color: transparent;
  border: 6px solid ${scarlet};
  border-radius: 50%;
  z-index: 3;

  &:focus {
    outline: none;
  }
`;

const Timer = styled.div`
  display: ${({ isVisible }) => isVisible ? 'block' : 'none'};
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 42px;
  color: ${white};
  -webkit-text-stroke: 4px ${cerise};
  z-index: 3;
`;

const Controls = () => {
  const { state, dispatch } = useContext(Context);
  const { played, paused, finished } = state.roundState;

  const [second, setSecond] = useState('00');
  const [minute, setMinute] = useState('00');
  const [counter, setCounter] = useState(0);
  const [icon, setIcon] = useState(true);

  const onClick = (evt) => {
    evt.preventDefault();

    setIcon(!icon);

    return dispatch({
      type: 'pausetoggle',
    })
  }

  useEffect(() => {
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
      <Timer isVisible={played}>
        <span>{minute}</span>:<span>{second}</span>
      </Timer>
      <Pause onClick={onClick} type="button">
        {icon ? <FaPause /> : <FaPlay />}
      </Pause>
    </>
  )
}

export default Controls;