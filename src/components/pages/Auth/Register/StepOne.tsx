import styled from 'styled-components'
import useStepUpdater from "../../../../Hooks/useStepNumber";
import FacebookSVG from '../../../atoms/SVG/FacebookSVG';
import GoogleSVG from '../../../atoms/SVG/GoogleSVG';
import SocialAuthButton from '../SocialAuthButton';
import ButtonNormal from '../../../molecules/ButtonNormal'
import { ContainerBase, SocialAuthButtonsContainer, Title } from '../Styles';
import AuthAlternateAction from '../../../molecules/AuthAlternateAction';


export interface StepOneProps {
  setStep: React.Dispatch<React.SetStateAction<number>>,
}

const Container = styled(ContainerBase)`
`
const Colors = {
  Google: {dark: '#121212', light: '#FFFFFF'},
  Facebook: {dark: '#012646', light: '#E9F5FF'}
}

export const Separador = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`
export const Side = styled.div`
height: 2px;
width: 100%;
background-color: ${p => p.theme.fontContrastFour};
`
export const Text = styled.span`
text-align: center;
  font-size: 14px;
  @media screen and (min-width: 668px) {
  font-size: 16px;
  }
`



const StepOne: React.FC<StepOneProps> = ({setStep}) => {

  const { Add } = useStepUpdater(setStep)
  return (
    <Container>
      <Title>Registrarse</Title>
      <SocialAuthButtonsContainer>
        <SocialAuthButton icon={<GoogleSVG />} label="Entrar con Google" colors={Colors.Google} />
        <SocialAuthButton icon={<FacebookSVG />} label="Entrar con Facebook" colors={Colors.Facebook} />
      </SocialAuthButtonsContainer>
      <Separador>
        <Side />
        <Text>O introduce tus datos de registro</Text>
        <Side />
      </Separador>
      <ButtonNormal onClick={Add}  text="Registrarse con email y contraseña" />
      <AuthAlternateAction type="register" />
    </Container>
  );
}
 
export default StepOne;
