import { AuthContainer, Title } from "../Styles";
import AuthAlternateAction from '../../../molecules/AuthAlternateAction';
import RegStepTwo from '../../../molecules/Forms/RegStepTwo';
import { FormikProps } from "formik";

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

const StepThree: React.FC<StepThreeProps> = ({setStep, formik}) => {
  return (
    <AuthContainer>
      <Title>Registrarse</Title>
      <RegStepTwo setStep={setStep} />
      <AuthAlternateAction type="register" />
    </AuthContainer>
  )
}
 
export default StepThree;
