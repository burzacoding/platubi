import styled from 'styled-components'
import useStepUpdater from "../../../../Hooks/useStepNumber";
import BackArrow from '../../../atoms/SVG/BackArrow';
import LockSVG from '../../../atoms/SVG/LockSVG';
import MailSendSVG from '../../../atoms/SVG/MailSendSVG';
import AuthAlternateAction from '../../../molecules/AuthAlternateAction';
import AuthInput from '../../../molecules/AuthInput';
import ButtonNormal from '../../../molecules/ButtonNormal';
import { Title, ContainerBase } from "../Styles";

export interface StepTwoProps {
  setStep: React.Dispatch<React.SetStateAction<number>>,
}
interface ButtonProps {
  colorObj: {
    dark: string,
    light: string
  }
}

export const Container = styled(ContainerBase)`
color: ${p => p.theme.fontContrastFive};
`
export const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 42px 1fr;
  align-items: center;
  gap: 4px;
`

export const ButtonBack = styled.div<ButtonProps>`
  height: 100%;
  width: 100%;
  border: ${p => p.theme.theme === 'dark' ? `2px solid ${p.colorObj.dark}` : `2px solid ${p.colorObj.light}`};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`
 
const StepTwo: React.FC<StepTwoProps> = ({setStep}) => {
  const {Add, Reduce} = useStepUpdater(setStep)
  const color = {
    dark: '#096635',
    light: '#1C4B73'
  }
  return (
    <Container>
      <Title>Registrarse</Title>
      <AuthInput placeholder="Tu dirección de mail" label="Email" svg={<MailSendSVG />} type="email" />
      <AuthInput placeholder="Elija una contraseña segura" label="Contraseña" svg={<LockSVG />} type="password" />
      <AuthInput placeholder="Vuelve a ingresar tu contraseña" label="Confirma tu contraseña" svg={<LockSVG />} type="password" />
      <ButtonsContainer>
        <ButtonBack colorObj={color} onClick={Reduce}><BackArrow colorObj={color} /></ButtonBack>
        <ButtonNormal onClick={Add} ghost text="Siguiente" />
      </ButtonsContainer>
      <AuthAlternateAction type="register" />
    </Container>
  )
}
 
export default StepTwo;
