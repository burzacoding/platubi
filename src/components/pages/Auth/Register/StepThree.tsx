import { Container } from './StepTwo'
import { Title } from "../Styles";
import AuthAlternateAction from '../../../molecules/AuthAlternateAction';
import RegStepTwo from '../../../molecules/Forms/RegStepTwo';
import { savedDataProps } from './RegisterIndex';

export interface StepThreeProps {
  setStep: React.Dispatch<React.SetStateAction<number>>,
}

const StepThree: React.FC<StepThreeProps> = ({setStep}) => {
  return (
    <Container>
      <Title>Registrarse</Title>
      <RegStepTwo setStep={setStep} />
      <AuthAlternateAction type="register" />
    </Container>
  )
}
 
export default StepThree;
