import useStepUpdater from "../../../../hooks/useStepNumber";
import FacebookSVG from '../../../atoms/SVG/FacebookSVG';
import GoogleSVG from '../../../atoms/SVG/GoogleSVG';
import SocialAuthButton from '../SocialAuthButton';
import ButtonNormal from '../../../molecules/ButtonNormal'
import { AuthContainerMotion, SocialAuthButtonsContainer, Title, Colors, Separador, Side, Text } from '../Styles';
import AuthAlternateAction from '../../../molecules/AuthAlternateAction';
import { Variants } from 'framer-motion';
import { useAuth } from '../../../../Contexts/AuthContext';
import { TyC } from "../../../../elements/AuthStyles";


export interface StepOneProps {
  setStep: React.Dispatch<React.SetStateAction<number>>,
  variants: Variants,
  custom: number,
  setCustom: React.Dispatch<React.SetStateAction<number>>
}

const StepOne: React.FC<StepOneProps> = ({setStep, variants, setCustom, custom}) => {
  const { Add } = useStepUpdater(setStep);
  const { loginGoogle, loginFacebook } = useAuth()
  const fireAdd = () => {
    setCustom(1);
    Add()
  }
  
  return (
    <AuthContainerMotion variants={variants} initial="hidden" animate="visible" exit="exit" custom={custom} >
      <Title>Registrarse</Title>
      <p style={{textAlign: 'center', marginBottom: '16px'}}>Al registrarte con Google o Facebook aceptas nuestros <TyC to="/faq#tyc" target="_blank" rel="noopener noreferrer">términos y condiciones</TyC>*.</p>
      <SocialAuthButtonsContainer>
        <SocialAuthButton icon={<GoogleSVG />} label="Entrar con Google" colors={Colors.Google}
        authSocialMedia={loginGoogle} />
        <SocialAuthButton icon={<FacebookSVG />} label="Entrar con Facebook" colors={Colors.Facebook}
        authSocialMedia={loginFacebook} />
      </SocialAuthButtonsContainer>
      <Separador>
        <Side />
        <Text>O introduce tus datos de registro</Text>
        <Side />
      </Separador>
      <ButtonNormal onClick={fireAdd}  text="Registrarse con email y contraseña" />
      <AuthAlternateAction type="register" />
    </AuthContainerMotion>
  );
}
 
export default StepOne;
