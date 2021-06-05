import styled from 'styled-components'

import AuthAlternateAction from "../../molecules/AuthAlternateAction";
import RecoverForm from '../../molecules/RecoverForm';
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
        <RecoverForm />
        <AuthAlternateAction type="login" />
      </Container>
    </AuthFrame>
  );
}
 
export default RecoverPage;
