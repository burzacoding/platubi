import { ErrorMessage, FormikProps } from 'formik';
import { Variants } from 'framer-motion';
import { useState } from 'react';
import { ButtonSubmit, Container as ContainerInput, Error, Input, InputContainer, Label, Password, SvgContainer } from '../../../../elements/AuthStyles';
import { ButtonBack, ButtonsContainer } from '../../../../elements/RegStep';
import useStepUpdater from '../../../../Hooks/useStepNumber';
import { selectBorders } from '../../../../Utils/Utils';
import BackArrow from '../../../atoms/SVG/BackArrow';
import EyeSVG from '../../../atoms/SVG/EyeSVG';
import LockSVG from '../../../atoms/SVG/LockSVG';
import UserSVG from '../../../atoms/SVG/UserSVG';
import AuthAlternateAction from '../../../molecules/AuthAlternateAction';
import { Title, AuthContainerMotion } from "../Styles";

export interface StepTwoProps {
  setStep: React.Dispatch<React.SetStateAction<number>>,
  formik: FormikProps<{
    email: string;
    password: string;
    confirmPassword: string,
}>,
  variants: Variants,
  custom: number,
  setCustom: React.Dispatch<React.SetStateAction<number>>
}

const StepTwo: React.FC<StepTwoProps> = ({setStep, formik, variants, custom, setCustom}) => {

  const color = {
    dark: '#096635',
    light: '#1C4B73'
  }

  const [open, setIsOpen] = useState(false);
  const [openTwo, setIsOpenTwo] = useState(false);
  const {Reduce} = useStepUpdater(setStep)

  const toggleOpen = () => setIsOpen(p => !p)
  const toggleVisibility = () => open ? 'text' : 'password'

  const toggleOpenTwo = () => setIsOpenTwo(p => !p)
  const toggleVisibilityTwo = () => openTwo ? 'text' : 'password'

  const fireReduce = () => {
    setCustom(-1);
    Reduce();
  }

  return (
    <AuthContainerMotion variants={variants} initial="hidden" animate="visible" exit="exit" custom={custom}>
      <Title>Registrarse</Title>
      <ContainerInput>
        <Label>Email</Label>
        <InputContainer border={selectBorders(formik, 'email')}>
          <SvgContainer children={<UserSVG />} />
          <Input type='email' name='email' id='email' placeholder='Introduce tu email' autoComplete="username"/>
          <Error><ErrorMessage name="email"/></Error>
        </InputContainer>
      </ContainerInput>

      <ContainerInput>
        <Label>Contraseña</Label>
        <Password border={selectBorders(formik, 'password')}>
          <SvgContainer children={<LockSVG />} />
          <Input type={toggleVisibility()} name='password' id='password' placeholder='Introduce tu contraseña' autoComplete="new-password" />
          <SvgContainer onClick={toggleOpen}><EyeSVG isOpen={open}/></SvgContainer>  
          <Error><ErrorMessage name="password"/></Error>
        </Password>
      </ContainerInput>
      
      <ContainerInput>
        <Label>Repetir contraseña</Label>
        <Password border={selectBorders(formik, 'confirmPassword')}>
          <SvgContainer children={<LockSVG />} />
          <Input type={toggleVisibilityTwo()} name='confirmPassword' id='confirmPassword' placeholder='Introduce tu contraseña' autoComplete="new-password"/>
          <SvgContainer onClick={toggleOpenTwo}><EyeSVG isOpen={openTwo}/></SvgContainer>  
          <Error><ErrorMessage name="confirmPassword"/></Error>
        </Password>
      </ContainerInput>
        <ButtonsContainer>
          <ButtonBack colorObj={color} onClick={fireReduce}><BackArrow colorObj={color}/></ButtonBack>
          <ButtonSubmit type="submit" disabled={formik.isSubmitting}>Crear cuenta</ButtonSubmit>
        </ButtonsContainer>
      <AuthAlternateAction type="register" />
    </AuthContainerMotion>
  )
}
 
export default StepTwo;
