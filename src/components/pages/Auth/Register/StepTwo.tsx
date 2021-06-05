import styled from 'styled-components'
import AuthAlternateAction from '../../../molecules/AuthAlternateAction';
import RegStepOne from '../../../molecules/Forms/RegisterForm';
import { Title, ContainerBase } from "../Styles";

export interface StepTwoProps {
  setStep: React.Dispatch<React.SetStateAction<number>>,
}

export const Container = styled(ContainerBase)`
color: ${p => p.theme.fontContrastFive};
`
 
const StepTwo: React.FC<StepTwoProps> = ({setStep}) => {
  return (
    <Container>
      <Title>Registrarse</Title>
      <RegStepOne setStep={setStep} />
      <AuthAlternateAction type="register" />
    </Container>
  )
}
 
export default StepTwo;
