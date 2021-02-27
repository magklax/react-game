import colors from '../utils/colors';
import { Overlay, Wrapper, Title, Subtitle } from './styles';
import Button from './../Common/Button';

const { eggblue, larioja } = colors;

const Final = () => {
  return (
    <Overlay>
      <Wrapper>
        <Title>Congrats!</Title>
        <Subtitle>You got all heroes</Subtitle>
        <Button title="See results" color={eggblue} path="/stats" />
        <br />
        <Button title="Play again" color={larioja} path="/" />
      </Wrapper>
    </Overlay>
  )
}

export default Final;