import useStepUpdater from "../../../Hooks/useStepNumber";
import BackArrow from "../../atoms/SVG/BackArrow";
import LockSVG from "../../atoms/SVG/LockSVG";
import MailSendSVG from "../../atoms/SVG/MailSendSVG";
import { ButtonBack, ButtonsContainer, Form } from "../../../elements/RegStep";
import AuthInput from "../AuthInput";
import ButtonNormal from "../ButtonNormal";

export interface RegStepOneProps {
  setStep: React.Dispatch<React.SetStateAction<number>>,
}

interface validator  {
  value: string,
  valid: string
}

const color = {
  dark: '#096635',
  light: '#1C4B73'
}


const RegStepOne: React.FC<RegStepOneProps> = ({setStep}) => {
  const {Reduce} = useStepUpdater(setStep);
  
  return (
    <Form action="">
      <AuthInput 
      placeholder="Tu dirección de mail" 
      label="Email" svg={<MailSendSVG />} 
      type="email" 
      errorMessageProp="Ingrese un correo válido"
      autoComplete="username"
      />

      <AuthInput 
      placeholder="Elija una contraseña segura" 
      label="Contraseña" 
      svg={<LockSVG />} 
      type="password" 
      errorMessageProp="La contraseña debe tener más de 6 carácteres"
      autoComplete="new-password"
      
      />
      <AuthInput 
      placeholder="Vuelve a ingresar tu contraseña" 
      label="Confirma tu contraseña" 
      svg={<LockSVG />} 
      type="password" 
      errorMessageProp="Las contraseñas no coinciden"
      autoComplete="new-password"
      />
      <ButtonsContainer>
        <ButtonBack colorObj={color} onClick={Reduce}><BackArrow colorObj={color} /></ButtonBack>
        <ButtonNormal ghost text="Siguiente" />
      </ButtonsContainer>
    </Form>
  );
}
 
export default RegStepOne;
