import React, { useState, useContext, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Context } from './../context/context';
import { backendURL } from './../data/backend';
import colors from './../utils/colors';

const { white, coral } = colors;

const Form = styled.form`
  width: 400px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  z-index: 100;
`;

const Input = styled.input`
  margin-bottom: 20px;
  font-size: 18px;
  padding: 10px 20px;
  font-family: inherit;
  border: 2px solid ${({ isValid }) => isValid ? 'transparent' : 'red'};
  border-radius: 15px;

  &:focus::placeholder {
    color: transparent;
  }
`;

const Submit = styled.button`
  margin: 0 auto;
  padding: 10px 20px;
  font-family: inherit;
  font-size: 24px;
  color: ${white};
  background-color: ${coral};
  border: none;
  border-radius: 15px;
`;

export default ({ route }) => {
  const { dispatch } = useContext(Context);

  const history = useHistory();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isNameValid, setIsNameValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const ref = useRef(null);

  useEffect(() => ref.current.focus(), []);

  const handleNameChange = (evt) => {
    setIsNameValid(true);
    setName(evt.target.value);
  }

  const handlePasswordChange = (evt) => {
    setIsPasswordValid(true);
    setPassword(evt.target.value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!name.trim()) setIsNameValid(false);
    if (!password.trim()) setIsPasswordValid(false);

    if (!password.trim() || !name.trim()) {
      ref.current.focus();
      return;
    };

    switch (route) {
      case 'signUp':
        fetch(`${backendURL}/register`, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },

          body: JSON.stringify({
            username: name,
            password: password,
          }),

        })
          .then((res) => {
            if (res.ok) {
              history.push('/game');

              return dispatch({
                type: 'username',
                payload: name,
              });
            }
          })

        break;

      case 'signIn':
        fetch(`${backendURL}/login`, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },

          body: JSON.stringify({
            username: name,
            password: password,
          }),

        })
          .then((res) => res.json())
          .then((res) => {
            if (res.success) {
              history.push('/game');

              return dispatch({
                type: 'username',
                payload: name,
              });

            } else if (res.errors) {
              alert('Invalid username or password!');
            }
          });
        break;
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        id="username"
        type="text"
        placeholder="username"
        value={name}
        onChange={handleNameChange}
        isValid={isNameValid}
        ref={ref}
      />
      <Input
        id="password"
        type="password"
        placeholder="password"
        value={password}
        onChange={handlePasswordChange}
        isValid={isPasswordValid}
      />
      <Submit type="submit" tabIndex="0">Submit</Submit>
    </Form>
  )
}