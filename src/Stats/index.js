import React, { useState, useEffect, useContext } from 'react';
import UserStats from './Components/UserStats';
import Button from './../Common/Button';
import { Overlay, Wrapper, Title, Message } from './styles';
import colors from '../utils/colors';
import { Context } from '../context/context';
import { backendURL } from './../data/backend';

const { larioja } = colors;

const Stats = () => {
  const { username } = useContext(Context).state;
  const [stats, setStats] = useState({});

  useEffect(() => {
    if (username) {
      fetch(`${backendURL}/getsave`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          username: username,
        })
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.errors) {
            return {};
          } else if (res.success.results) {
            setStats(res.success);
            console.log(res.success);
            return res.success.results;
          } else {
            return {};
          }
        });
    }
  }, []);

  return (
    <Overlay>
      <Wrapper>
        <Title>Statistics</Title>
        {username ? <UserStats stats={stats} /> : <Message>only authorized users can see statistics</Message>}
        <Button title="Play again" color={larioja} path="/" />
      </Wrapper>
    </Overlay>
  )
}

export default Stats;