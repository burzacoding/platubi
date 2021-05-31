import { Link } from 'react-router-dom';
import styled from 'styled-components'

import FacebookSVG from "../../atoms/SVG/FacebookSVG";
import GoogleSVG from "../../atoms/SVG/GoogleSVG";
import LockSVG from "../../atoms/SVG/LockSVG";
import UserSVG from "../../atoms/SVG/UserSVG";
import AuthAlternateAction from "../../molecules/AuthAlternateAction";
import AuthInput from "../../molecules/AuthInput";
import ButtonNormal from "../../molecules/ButtonNormal";
import AuthFrame from "./AuthFrame";
import { Separador, Side, Text } from "./Register/StepOne";
import SocialAuthButton from "./SocialAuthButton";
import { ContainerBase, SocialAuthButtonsContainer, Title } from "./Styles";

export interface LoginPageProps {
  
}

const Subtitle = styled(Link)`
  color: ${p => p.theme.theme === 'dark' ? '#096635' : '#1269B4'};
  margin-left: auto;
  margin-top: -16px;
  margin-bottom: 28px;
  text-decoration: none;
`

const Colors = {
  Google: {dark: '#121212', light: '#FFFFFF'},
  Facebook: {dark: '#012646', light: '#E9F5FF'}
}
 
const LoginPage: React.FC<LoginPageProps> = () => {
  return (
    <AuthFrame>
      <ContainerBase>
        <Title>Iniciar sesión</Title>
        <SocialAuthButtonsContainer>
          <SocialAuthButton icon={<GoogleSVG />} label="Entrar con Google" colors={Colors.Google} />
          <SocialAuthButton icon={<FacebookSVG />} label="Entrar con Facebook" colors={Colors.Facebook} />
        </SocialAuthButtonsContainer>
        <Separador>
          <Side />
          <Text>O introduce tus datos de acceso</Text>
          <Side />
        </Separador>
        <AuthInput label="Email" type="text" placeholder="Email de la cuenta" svg={<UserSVG />} />
        <AuthInput label="Contraseña" type="password" placeholder="Introduce tu contraseña" svg={<LockSVG />} />
        <Subtitle to="/recover">¿Olvidaste tu contraseña?</Subtitle>
        <ButtonNormal text="Iniciar sesión" />
        <AuthAlternateAction type="login" />
      </ContainerBase>
    </AuthFrame>
  );
}
 
export default LoginPage;
