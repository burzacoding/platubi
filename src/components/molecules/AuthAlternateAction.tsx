import { Container, Title, Action } from "../../elements/AuthalternateActions";
export interface AuthAlternateActionProps {
  type: 'login' | 'register'
}

const AuthAlternateAction: React.FC<AuthAlternateActionProps> = ({type}) => {
  return (
    <Container>
      <Title>
      {
        type === 'login' ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?'
      }
      </Title>  
      {
        type === 'login' ? (
        <Action to="/registrarse">Registrate gratis</Action>
        ) : (
        <Action to="/login">Inicia sesión</Action>
        )
      }
    </Container>
  );
}
 
export default AuthAlternateAction;
