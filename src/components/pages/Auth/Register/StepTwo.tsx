import { ErrorMessage, FormikProps } from 'formik';
import { useState } from 'react';
import styled from 'styled-components'
import { Container as ContainerInput, Error, Input, InputContainer, Label, Password, SvgContainer } from '../../../../elements/AuthStyles';
import { ButtonBack, ButtonsContainer } from '../../../../elements/RegStep';
import useStepUpdater from '../../../../Hooks/useStepNumber';
import { selectBorders } from '../../../../Utils/Utils';
import BackArrow from '../../../atoms/SVG/BackArrow';
import EyeSVG from '../../../atoms/SVG/EyeSVG';
import LockSVG from '../../../atoms/SVG/LockSVG';
import UserSVG from '../../../atoms/SVG/UserSVG';
import AuthAlternateAction from '../../../molecules/AuthAlternateAction';
import ButtonNormal from '../../../molecules/ButtonNormal';
import { Title, ContainerBase } from "../Styles";

export interface StepTwoProps {
  setStep: React.Dispatch<React.SetStateAction<number>>,
  formik: FormikProps<{
    email: string;
    password: string;
    confirmPassword: string,
    name: string;
    username: string;
}>
}

const Container = styled(ContainerBase)`
color: ${p => p.theme.fontContrastFive};
`
 
const StepTwo: React.FC<StepTwoProps> = ({setStep, formik}) => {

  const color = {
    dark: '#096635',
    light: '#1C4B73'
  }

  const [open, setIsOpen] = useState(false);
  const [openTwo, setIsOpenTwo] = useState(false);
  const {Add, Reduce} = useStepUpdater(setStep)

  const Next = () => {
    if (!formik.errors.email && !formik.errors.password && !formik.errors.confirmPassword) {
      Add()
    }
  }

  const toggleOpen = () => setIsOpen(p => !p)
  const toggleVisibility = () => open ? 'text' : 'password'

  const toggleOpenTwo = () => setIsOpenTwo(p => !p)
  const toggleVisibilityTwo = () => openTwo ? 'text' : 'password'



  return (
    <Container>
      <Title>Registrarse</Title>
      <ContainerInput>
        <Label>Email</Label>
        <InputContainer border={selectBorders(formik, 'email')}>
          <SvgContainer children={<UserSVG />} />
          <Input type='email' name='email' id='email' placeholder='Introduce tu email' required />
          <Error><ErrorMessage name="email"/></Error>
        </InputContainer>
      </ContainerInput>

      <ContainerInput>
        <Label>Contraseña</Label>
        <Password border={selectBorders(formik, 'password')}>
          <SvgContainer children={<LockSVG />} />
          <Input type={toggleVisibility()} name='password' id='password' placeholder='Introduce tu contraseña' required />
          <SvgContainer onClick={toggleOpen}><EyeSVG isOpen={open}/></SvgContainer>  
          <Error><ErrorMessage name="password"/></Error>
        </Password>
      </ContainerInput>
      
      <ContainerInput>
        <Label>Repetir contraseña</Label>
        <Password border={selectBorders(formik, 'confirmPassword')}>
          <SvgContainer children={<LockSVG />} />
          <Input type={toggleVisibilityTwo()} name='confirmPassword' id='confirmPassword' placeholder='Introduce tu contraseña' required />
          <SvgContainer onClick={toggleOpenTwo}><EyeSVG isOpen={openTwo}/></SvgContainer>  
          <Error><ErrorMessage name="confirmPassword"/></Error>
        </Password>
      </ContainerInput>
      <ButtonsContainer>
        <ButtonBack colorObj={color} onClick={Reduce}><BackArrow colorObj={color} /></ButtonBack>
        <ButtonNormal ghost text="Siguiente" onClick={Next} />
      </ButtonsContainer>
      <AuthAlternateAction type="register" />
    </Container>
  )
}
 
export default StepTwo;
