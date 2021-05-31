import { useState } from "react";
import AuthFrame from "../AuthFrame";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";

export interface RegIndexProps {
  
}
 


const RegIndex: React.FC<RegIndexProps> = () => {

  const [step, setStep] = useState(1)

  return (
    <AuthFrame>
        {step === 1 && (<StepOne setStep={setStep} key="step1" />)}
        {step === 2 && (<StepTwo setStep={setStep} key="step2" />)}
        {step === 3 && (<StepThree setStep={setStep} key="step3" />)}
    </AuthFrame>
  );
}
 
export default RegIndex;
