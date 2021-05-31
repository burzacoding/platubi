  import { ButtonBack, ButtonsContainer, Container,  } from './StepTwo'
  import { Title } from "../Styles";
import useStepUpdater from "../../../../Hooks/useStepNumber";
import ButtonNormal from '../../../molecules/ButtonNormal';
import BackArrow from '../../../atoms/SVG/BackArrow';
import AuthInput from '../../../molecules/AuthInput';
import UserSVG from '../../../atoms/SVG/UserSVG';
import AuthAlternateAction from '../../../molecules/AuthAlternateAction';

export interface StepThreeProps {
  setStep: React.Dispatch<React.SetStateAction<number>>,
}
const color = {
  dark: '#096635',
  light: '#1C4B73'
}

const StepThree: React.FC<StepThreeProps> = ({setStep}) => {
  const { Reduce } = useStepUpdater(setStep)
  return (
    <Container>
      <Title>Registrarse</Title>
      <AuthInput label="Nombre" type="textNoSvg" placeholder="Tu nombre o nombres" />
      <AuthInput label="Apellidos" type="textNoSvg" placeholder="Tu apellido o apellidos"/>
      <AuthInput label="Nombre de usuario" type="text" placeholder="Crea un nuevo nombre de usuario" svg={<UserSVG />} />
      <ButtonsContainer>
        <ButtonBack colorObj={color} onClick={Reduce} ><BackArrow colorObj={color} /></ButtonBack>
        <ButtonNormal text="Crear cuenta" />
      </ButtonsContainer>
      <AuthAlternateAction type="register" />
    </Container>
  )
}
 
export default StepThree;
