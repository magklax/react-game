import styled from 'styled-components';
import { Overlay } from './../Common/Overlay';
import Form from './../Common/Form';
import Back from './../Common/Back';

const Wrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 3.3%;
  z-index: 9;
`;

export default () => {
  return (
    <Overlay visible={true}>
      <Wrapper>
        <Back />
      </Wrapper>
      <Form route="signUp" />
    </Overlay>
  )
}