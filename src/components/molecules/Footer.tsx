
import { useAuth } from "../../Contexts/AuthContext";
import { Container, InnerContainer, ItemsContainer, Item } from "../../elements/Footer";
import SmallLogo from "../atoms/SVG/SmallLogo";
 
const Footer: React.FC = () => {

  const { currentUser, logout } = useAuth()

  return (
    <Container>
      <InnerContainer>
        <ItemsContainer>
          <Item to="/faq">FAQ</Item>
          <Item to="/contacto">Contactenos</Item>
          <a href="https://burzacoding.com" target="_blank" rel="noreferrer">Ver portfolio del creador</a>
        </ItemsContainer>
        <SmallLogo />
        {currentUser ? (
          <ItemsContainer>
          <a href="https://github.com/argie2099/platubi" target="_blank" rel="noreferrer">Ver proyecto en github</a>
          <Item as="span" onClick={logout}>Cerrar sesión</Item>
        </ItemsContainer>
        ) : (
          <ItemsContainer>
          <a href="https://github.com/argie2099/platubi" target="_blank" rel="noreferrer">Ver proyecto en github</a>
          <Item to="/registrarse">Registrarse</Item>
          <Item to="/login">Iniciar sesión</Item>
        </ItemsContainer>
        )}
      </InnerContainer>
    </Container>
  );
}
 
export default Footer;
