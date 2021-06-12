import { firebaseRegisterErrorHandler, registerValidationSchema } from "../../../../Utils/Validation/Register";
import { Form, Formik, FormikValues } from "formik";
import { AnimatePresence, Variants } from "framer-motion";
import { useState } from "react";
import AuthFrame from "../AuthFrame";
import { PresenceContainer } from "../Styles";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../../../contexts/AuthContext";

export interface RegIndexProps {}

const initialValues = { email: '', password: '', confirmPassword: '', termsAccepted: false}

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
  const [custom, setCustom] = useState(1);
  const history = useHistory()
  const { signupWithMailAndPassword } = useAuth()

  async function authenticateUser(values: FormikValues, setFieldError: any) {
    const { email, password } = values
    try {
      const user = await signupWithMailAndPassword(email, password);
      if (user !== null) history.push('/dashboard')
    } catch (error) {
      const [field, errorMessage] = firebaseRegisterErrorHandler(error.code)
      setFieldError(field, errorMessage || error.message)
    }
  }

  return (
    <AuthFrame>
          <Formik
            initialValues={initialValues}
            onSubmit={async (values , { setSubmitting, setFieldError } ) => {
              setSubmitting(true)
              authenticateUser(values, setFieldError)
              setSubmitting(false)
            }}
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
