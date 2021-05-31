import styled from 'styled-components'

import UserSVG from "../../atoms/SVG/UserSVG";
import AuthAlternateAction from "../../molecules/AuthAlternateAction";
import AuthInput from "../../molecules/AuthInput";
import ButtonNormal from "../../molecules/ButtonNormal";
import AuthFrame from "./AuthFrame";
import { Container } from "./Register/StepTwo";
import { Title } from "./Styles";

export interface RecoverPageProps {
  
}

const Subtitle = styled.h3`
  font-weight: 400;
  text-align: center;
  margin-bottom: 12px;
`
 
const RecoverPage: React.FC<RecoverPageProps> = () => {
  return (
    <AuthFrame>
      <Container>
        <Title>Recuperar contraseña</Title>
        <Subtitle>No te preocupes! Podrás recuperar acceso a tu cuenta de forma muy fácil.</Subtitle>
        <AuthInput placeholder="Tu dirección de mail" label="Email" svg={<UserSVG />} type="email" />
        <ButtonNormal ghost text="Enviar mail de recuperación" />
        <AuthAlternateAction type="login" />
      </Container>
    </AuthFrame>
  );
}
 
export default RecoverPage;
