import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from './../context/context';
import Button from './Button';
import colors from './../utils/colors';

const { larioja, gold } = colors;

const backendURL = 'https://pop-and-spell.herokuapp.com';

const Greeting = styled.p`
  margin-bottom: 20px;
  color: ${gold};
  font-size: 36px;
`;

const Wrapper = styled.div`
  display: ${({ visible }) => visible ? 'block' : 'none'};
`;

export default ({ visible }) => {
  const { state, dispatch } = useContext(Context);

  const handleClick = () => {
    fetch(`${backendURL}/logout`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.logout) {
          dispatch({
            type: 'username',
            payload: '',
          })
        }
      });
  }

  return (
    <Wrapper visible={visible}>
      <Greeting>Hello, {state.username}!</Greeting>
      <Button title="Log out" color={larioja} path="/" onClick={handleClick} />
    </Wrapper>
  )
}