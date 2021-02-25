import React, { useState, useEffect } from 'react';
import Loader from './../Common/Loader';
import { Overlay, Wrapper, Cloud, Rainbow, Info, Sun, Title, Button } from './styles';

const Intro = () => {
  // const [loading, setLoading] = useState(true);

  // const handleLoad = () => setLoading(false);

  // useEffect(() => {
  //   window.addEventListener('load', handleLoad);
  //   return () => window.removeEventListener('load', handleLoad);
  // }, []);

  return (
    <Overlay>
      {/* {loading ? <Loader /> :} */}
      <>
        <Cloud />
        <Wrapper>
          <Rainbow />
          <Info>
            <Sun />
            <Title>Pop and Spell</Title>
            <Button to="/game">Play Game</Button>
          </Info>
        </Wrapper>
      </>

    </Overlay >
  )
}

export default Intro;