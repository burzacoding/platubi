import styled from 'styled-components'

import AuthAlternateAction from "../../molecules/AuthAlternateAction";
import RecoverForm from '../../Forms/Recover';
import AuthFrame from "./AuthFrame";
import Footer from "../../molecules/Footer";
import { AuthContainer, Title } from "./Styles";

const Subtitle = styled.h3`
  font-weight: 400;
  text-align: center;
  margin-bottom: 12px;
`

const RecoverPage: React.FC = () => {


  return (
    <AuthFrame>
      <AuthContainer>
        <Title>Recuperar contraseña</Title>
        <Subtitle>No te preocupes! Podrás recuperar acceso a tu cuenta de forma muy fácil.</Subtitle>
        <RecoverForm />
        <AuthAlternateAction type="login" />
      </AuthContainer>
      <Footer />
    </AuthFrame>
  );
}
 
export default RecoverPage;
