import FacebookSVG from "../../atoms/SVG/FacebookSVG";
import GoogleSVG from "../../atoms/SVG/GoogleSVG";
import AuthAlternateAction from "../../molecules/AuthAlternateAction";
import LoginForm from "../../molecules/LoginForm";
import AuthFrame from "./AuthFrame";
import { Separador, Side, Text } from "./Register/StepOne";
import SocialAuthButton from "./SocialAuthButton";
import { ContainerBase, SocialAuthButtonsContainer, Title } from "./Styles";

export interface LoginPageProps {
  
}



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
        <LoginForm />
        <AuthAlternateAction type="login" />
      </ContainerBase>
    </AuthFrame>
  );
}
 
export default LoginPage;
