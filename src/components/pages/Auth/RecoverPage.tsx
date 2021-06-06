import styled from 'styled-components'

import AuthAlternateAction from "../../molecules/AuthAlternateAction";
import RecoverForm from '@form/Recover';
import AuthFrame from "./AuthFrame";
import { AuthContainer, Title } from "./Styles";

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
      <AuthContainer>
        <Title>Recuperar contraseña</Title>
        <Subtitle>No te preocupes! Podrás recuperar acceso a tu cuenta de forma muy fácil.</Subtitle>
        <RecoverForm />
        <AuthAlternateAction type="login" />
      </AuthContainer>
    </AuthFrame>
  );
}
 
export default RecoverPage;
