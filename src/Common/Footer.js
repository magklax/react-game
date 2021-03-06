import React from 'react';
import styled from 'styled-components';
import logo from './images/logo_rs.svg';

const Footer = styled.div`
  display: inline-block;
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 12px;
  z-index: 9;
  text-align: right;
  vertical-align: bottom;
  opacity: 0.7;
  transition: opacity 0.3 ease;

  &:hover {
    opacity: 1;
  }
`;

export default () => {
  return (
    <Footer>
      <a href="https://github.com/magklax" target="_blank">Nadia Prokopyeva, 2021</a>
      <a href="https://rs.school/js/" target="_blank"><img src={logo} width={50} /></a>

    </Footer>
  )
}