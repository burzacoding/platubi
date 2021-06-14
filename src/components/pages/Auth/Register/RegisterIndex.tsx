import { firebaseRegisterErrorHandler, registerValidationSchema } from "../../../../Utils/Validation/Register";
import { Form, Formik, FormikValues } from "formik";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import AuthFrame from "../AuthFrame";
import { PresenceContainer, RelativeContainer } from "../Styles";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../../../contexts/AuthContext";
import { regIndexVariants } from "../../../../animations/variants";
import Footer from "../../../molecules/Footer";

const initialValues = { email: '', password: '', confirmPassword: '', termsAccepted: false}

const RegIndex: React.FC = () => {

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
                  {step === 1 && (
                    <>
                      <RelativeContainer one />
                      <StepOne setStep={setStep} key="step1" variants={regIndexVariants} custom={custom} setCustom={setCustom} />
                    </>
                  )}
                  {step === 2 && (
                    <>
                      <RelativeContainer />
                      <StepTwo setStep={setStep} key="step2" formik={formik} variants={regIndexVariants} custom={custom} setCustom={setCustom} />
                    </>
                  )}
                </PresenceContainer>
              </AnimatePresence>
            </Form>
          )}
          </Formik>
    <Footer />
    </AuthFrame>
  );
}
 
export default RegIndex;
