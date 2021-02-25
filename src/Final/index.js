import React, { useContext } from 'react';
import { Context } from '../context/context';
import colors from '../utils/colors';
import { Overlay, Wrapper, Title, Subtitle, Button } from './styles';
const { eggblue, larioja } = colors;

const Final = () => {
  const { dispatch } = useContext(Context);

  const handleClick = () => {
    return dispatch({
      type: 'gamerestart',
    })
  }

  return (
    <Overlay>
      <Wrapper>
        <Title>Congrats!</Title>
        <Subtitle>You got all heroes</Subtitle>
        <Button color={eggblue} to="/">See results</Button>
        <br />
        <Button
          onClick={handleClick}
          color={larioja}
          to="/"
        >Play again</Button>
      </Wrapper>
    </Overlay>
  )
}

export default Final;