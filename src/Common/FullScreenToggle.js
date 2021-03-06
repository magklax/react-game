import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { FaCompress } from "react-icons/fa";
import colors from "./../utils/colors";

const { torchred, wisteria, white } = colors;
const element = document.getElementById("root");

const Button = styled.button`
  position: absolute;
  right: 3.3%;
  bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: ${wisteria};
  font-size: 24px;
  background-color: ${white};
  border: 5px solid;
  border-radius: 100%;
  z-index: 9;

  &:focus {
    outline: none;
  }
`;

const FullScreenToggle = () => {
  function fullScreenClickHandler() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      fullScreen(element);
    }
  }

  function fullScreen(element) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.webkitrequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.mozRequestFullscreen) {
      element.mozRequestFullScreen();
    }
  }

  return (
    <Button type="button" onClick={fullScreenClickHandler}>
      <FaCompress />
    </Button>
  );
};

export default FullScreenToggle;
