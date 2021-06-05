import { Formik } from "formik";
import { useState } from "react";
import AuthFrame from "../AuthFrame";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";

export interface RegIndexProps {
  
}

export interface savedDataProps {
  mail: {
    value: string,
    isValid: string
  },
  password: {
    value: string,
    isValid: string
  },
  name: {
    value: string,
    isValid: string
  },
  surname: {
    value: string,
    isValid: string
  },
  username: {
    value: string,
    isValid: string
  }
}

const initialValues = { mail: '', password: '', name: '', surname:  '', username: ''}


const RegIndex: React.FC<RegIndexProps> = () => {

  const [step, setStep] = useState(1);

  return (
    <AuthFrame>
        {step === 1 && (<StepOne setStep={setStep} key="step1" />)}
        {/* <Formik
          initialValues={initialValues}
          onSubmit={() => {console.log('Formulario enviado')}}  
        >
        {step === 2 && (<StepTwo setStep={setStep} key="step2" />)}
        {step === 3 && (<StepThree setStep={setStep} key="step3" />)}
        </Formik> */}
    </AuthFrame>
  );
}
 
export default RegIndex;
