import styled from 'styled-components'
import { ContainerBase, Title } from "../Styles";
import AuthAlternateAction from '../../../molecules/AuthAlternateAction';
import { Container as ContainerInput, Error, Input, InputContainer, Label, NameField, SvgContainer, ButtonSubmit } from '../../../../elements/AuthStyles';
import { FormikProps, ErrorMessage } from "formik";
import { selectBorders } from '../../../../Utils/Utils';
import { ButtonBack, ButtonsContainer } from '../../../../elements/RegStep';
import BackArrow from '../../../atoms/SVG/BackArrow';
import useStepUpdater from '../../../../Hooks/useStepNumber';
import UserSVG from '../../../atoms/SVG/UserSVG';

export interface StepThreeProps {
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

const StepThree: React.FC<StepThreeProps> = ({setStep, formik}) => {

  const color = {dark: '#096635',light: '#1C4B73'}
  
  const {Reduce } = useStepUpdater(setStep)

  return (
        <Container>
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
            <ButtonBack colorObj={color} onClick={Reduce}><BackArrow colorObj={color} /></ButtonBack>
            <ButtonSubmit type="submit" disabled={formik.isSubmitting}>Crear cuenta </ButtonSubmit>
          </ButtonsContainer>
          <AuthAlternateAction type="register" />
        </Container>
  )
}
 
export default StepThree;

// import { useState } from 'react';
// import { ButtonBack, ButtonsContainer } from '../../../../elements/RegStep';
// import useStepUpdater from '../../../../Hooks/useStepNumber';
// import { selectBorders } from '../../../../Utils/Utils';
// import BackArrow from '../../../atoms/SVG/BackArrow';
// import EyeSVG from '../../../atoms/SVG/EyeSVG';
// import LockSVG from '../../../atoms/SVG/LockSVG';
// import UserSVG from '../../../atoms/SVG/UserSVG';

// export interface StepTwoProps {
//   setStep: React.Dispatch<React.SetStateAction<number>>,
//   formik: FormikProps<{
//     email: string;
//     password: string;
//     confirmPassword: string,
//     name: string;
//     username: string;
// }>
// }

// const Container = styled(ContainerBase)`
// color: ${p => p.theme.fontContrastFive};
// `
 
// const StepTwo: React.FC<StepTwoProps> = ({setStep, formik}) => {

//   const color = {
//     dark: '#096635',
//     light: '#1C4B73'
//   }

//   const [open, setIsOpen] = useState(false);
//   const [openTwo, setIsOpenTwo] = useState(false);
//   const {Add, Reduce} = useStepUpdater(setStep)

//   const Next = () => {
//     if (!formik.errors.email && !formik.errors.password && !formik.errors.confirmPassword) {
//       Add()
//     }
//   }

//   const toggleOpen = () => setIsOpen(p => !p)
//   const toggleVisibility = () => open ? 'text' : 'password'

//   const toggleOpenTwo = () => setIsOpenTwo(p => !p)
//   const toggleVisibilityTwo = () => openTwo ? 'text' : 'password'



//   return (
//     <Container>
//       <Title>Registrarse</Title>
//       <ContainerInput>
//         <Label>Email</Label>
//         <InputContainer border={selectBorders(formik, 'email')}>
//           <SvgContainer children={<UserSVG />} />
//           <Input type='email' name='email' id='email' placeholder='Introduce tu email' required />
//           <Error><ErrorMessage name="email"/></Error>
//         </InputContainer>
//       </ContainerInput>

//       <ContainerInput>
//         <Label>Contraseña</Label>
//         <Password border={selectBorders(formik, 'password')}>
//           <SvgContainer children={<LockSVG />} />
//           <Input type={toggleVisibility()} name='password' id='password' placeholder='Introduce tu contraseña' required />
//           <SvgContainer onClick={toggleOpen}><EyeSVG isOpen={open}/></SvgContainer>  
//           <Error><ErrorMessage name="password"/></Error>
//         </Password>
//       </ContainerInput>
      
//       <ContainerInput>
//         <Label>Repetir contraseña</Label>
//         <Password border={selectBorders(formik, 'confirmPassword')}>
//           <SvgContainer children={<LockSVG />} />
//           <Input type={toggleVisibilityTwo()} name='confirmPassword' id='confirmPassword' placeholder='Introduce tu contraseña' required />
//           <SvgContainer onClick={toggleOpenTwo}><EyeSVG isOpen={openTwo}/></SvgContainer>  
//           <Error><ErrorMessage name="confirmPassword"/></Error>
//         </Password>
//       </ContainerInput>
//       <ButtonsContainer>
//         <ButtonBack colorObj={color} onClick={Reduce}><BackArrow colorObj={color} /></ButtonBack>
//         <ButtonNormal ghost text="Siguiente" onClick={Next} />
//       </ButtonsContainer>
//       <AuthAlternateAction type="register" />
//     </Container>
//   )
// }
 
// export default StepTwo;
