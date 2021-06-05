import useStepUpdater from "../../../Hooks/useStepNumber";
import BackArrow from "../../atoms/SVG/BackArrow";
import UserSVG from "../../atoms/SVG/UserSVG";
import AuthInput from "../AuthInput";
import ButtonNormal from "../ButtonNormal";
import { ButtonBack, ButtonsContainer, Form } from "../../../elements/RegStep";

export interface RegStepTwoProps {
  setStep: React.Dispatch<React.SetStateAction<number>>,
}

const color = {
  dark: '#096635',
  light: '#1C4B73'
}

const RegStepTwo: React.FC<RegStepTwoProps> = ({setStep}) => {
  const { Reduce } = useStepUpdater(setStep);

  const signIn = () => {
      // SIGN IN WITH FIREBASE
  }

  const goBack = () => {
    Reduce();
  }

  return (
    <Form> 
      <AuthInput 
      label="Nombre" 
      type="textNoSvg" 
      placeholder="Tu nombre o nombres"
      errorMessageProp="Ingrese un nombre válido"

       />
      <AuthInput 
      label="Apellidos" 
      type="textNoSvg" 
      placeholder="Tu apellido o apellidos"
      errorMessageProp="Ingrese un apellido válido"

      />
      <AuthInput 
      label="Nombre de usuario" 
      type="text" 
      placeholder="Crea un nuevo nombre de usuario" 
      svg={<UserSVG />}
      errorMessageProp="El usuario no puede exceder los 16 caracteres"
      
      />

      <ButtonsContainer>
        <ButtonBack colorObj={color} onClick={goBack} ><BackArrow colorObj={color} /></ButtonBack>
        <ButtonNormal text="Crear cuenta" onClick={signIn} />
      </ButtonsContainer>
    </Form>
  );
}
 
export default RegStepTwo;
