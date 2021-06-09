import { registerValidationSchema } from "../../../../Utils/Validation/Register";
import { Form, Formik } from "formik";
import { AnimatePresence, Variants } from "framer-motion";
import { useState } from "react";
import AuthFrame from "../AuthFrame";
import { PresenceContainer } from "../Styles";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
// import StepThree from "./StepThree";

export interface RegIndexProps {}

const initialValues = { email: '', password: '', confirmPassword: '', termsAccepted: false}

const onSubmit = (values:  any) => {
  alert('Registro exitoso, revisa la consola para confirmar los datos.')
  console.log(values);
  
}

const variants: Variants = {
  hidden: (custom) => {
    return({
      x: 120 * custom,
      opacity: 0,
    })
  },
  visible: {
      x: 0,
      opacity: 1,
  },
  exit: (custom) => {
    return({
      x: -120 * custom,
      opacity: 0,
    })
  },

}

const RegIndex: React.FC<RegIndexProps> = () => {

  const [step, setStep] = useState(1);
  const [custom, setCustom] = useState(1)

  return (
    <AuthFrame>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={registerValidationSchema}
            validateOnMount
          >
          {formik => (
            <Form>
              <AnimatePresence initial={false} custom={custom}>
                <PresenceContainer>
                  {step === 1 && (<StepOne setStep={setStep} key="step1" variants={variants} custom={custom} setCustom={setCustom} />)}
                  {step === 2 && (<StepTwo setStep={setStep} key="step2" formik={formik} variants={variants} custom={custom} setCustom={setCustom} />)}
                </PresenceContainer>
              </AnimatePresence>
            </Form>
          )}
          </Formik>
    </AuthFrame>
  );
}
 
export default RegIndex;
