import { AuthContainerMotion, Title } from "../Styles";
import AuthAlternateAction from '@comp/molecules/AuthAlternateAction';
import { Container as ContainerInput, Error, Input, InputContainer, Label, NameField, SvgContainer, ButtonSubmit } from '@styles/AuthStyles';
import { FormikProps, ErrorMessage } from "formik";
import { selectBorders } from '@utils/Utils';
import { ButtonBack, ButtonsContainer } from '@styles/RegStep';
import BackArrow from '@SVG/BackArrow';
import useStepUpdater from '@hooks/useStepNumber';
import UserSVG from '@SVG/UserSVG';
import { Variants } from "framer-motion";

export interface StepThreeProps {
  setStep: React.Dispatch<React.SetStateAction<number>>,
  formik: FormikProps<{
    email: string;
    password: string;
    confirmPassword: string,
    name: string;
    username: string;
}>,
  variants: Variants,
  custom: number,
  setCustom: React.Dispatch<React.SetStateAction<number>>
}

const StepThree: React.FC<StepThreeProps> = ({setStep, formik, variants, custom, setCustom}) => {

  const color = {dark: '#096635',light: '#1C4B73'}
  
  const { Reduce } = useStepUpdater(setStep);
  const fireReduce = () => {
    setCustom(-1);
    Reduce();
  }

  return (
        <AuthContainerMotion variants={variants} initial="hidden" animate="visible" exit="exit" custom={custom} >
          <Title>Registrarse</Title>
    
          <ContainerInput>
            <Label>Nombre completo</Label>
            <NameField border={selectBorders(formik, 'name')}>
              <Input type='text' name='name' id='name' placeholder='Introduce tu nombre completo.' required />
              <Error><ErrorMessage name='name' /></Error>
            </NameField>
          </ContainerInput>
          
          <ContainerInput>
            <Label>Nombre de usuario</Label>
            <InputContainer border={selectBorders(formik, 'username')}>
              <SvgContainer children={<UserSVG />} />
              <Input type='text' name='username' id='username' placeholder='Elije un nombre de usuario.' required />
              <Error><ErrorMessage name='username'/></Error>
            </InputContainer>
          </ContainerInput>

          <ButtonsContainer>
            <ButtonBack colorObj={color} onClick={fireReduce}><BackArrow colorObj={color} /></ButtonBack>
            <ButtonSubmit type="submit" disabled={formik.isSubmitting}>Crear cuenta </ButtonSubmit>
          </ButtonsContainer>
          <AuthAlternateAction type="register" />
        </AuthContainerMotion>
  )
}
 
export default StepThree;
