import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from 'yup'
import AuthFrame from "../AuthFrame";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";

export interface RegIndexProps {
  
}

const initialValues = { email: '', password: '', confirmPassword: '', name: '', username: ''}
const errors = {
  email: {
    email: 'Ingrese un mail válido.',
    required: 'Ingrese un mail.'
  },
  password: {
    min: 'La contraseña debe tener más de 6 caracteres.',
    max: 'La contraseña no puede exceder los 32 caracteres.',
    required: 'La contraseña no puede estar vacía.'
  },
  confirmPassword: {
    oneOf: 'Las contraseñas no coinciden.',
    required: 'Confirme su contraseña.'
  },
  name: {
    max: 'El nombre no puede exceder los 64 caracteres.',
    required: 'El nombre no puede estar vacío.'
  },
  username: {
    min: 'El nombre de usuario debe tener más de 4 caracteres.',
    max: 'El nombre de usuario no puede exceder los 32 caracteres.',
    required: 'El nombre de usuario no puede estar vacío.'
  }

}
const validationSchema = Yup.object({
  email: Yup.string().email(errors.email.email).required(errors.email.required),
  password: Yup.string().min(6, errors.password.min).max(32, errors.password.max).required(errors.password.required),
  confirmPassword: Yup.string().oneOf([Yup.ref('password')], errors.confirmPassword.oneOf).required(errors.confirmPassword.required),
  name: Yup.string().max(64, errors.name.max).required(errors.name.required),
  username: Yup.string().min(4, errors.username.min).max(32, errors.username.max).required(errors.username.required)
})

const onSubmit = (values:  any) => {
  alert('Registro exitoso, revisa la consola para confirmar los datos.')
  console.log(values);
  
}

const RegIndex: React.FC<RegIndexProps> = () => {

  const [step, setStep] = useState(1);

  return (
    <AuthFrame>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            validateOnMount
          >
          {formik => (
            <Form>
              {step === 1 && (<StepOne setStep={setStep} key="step1" />)}
              {step === 2 && (<StepTwo setStep={setStep} key="step2" formik={formik} />)}
              {step === 3 && (<StepThree setStep={setStep} key="step3" formik={formik} />)}
            </Form>
          )}
          </Formik>
    </AuthFrame>
  );
}
 
export default RegIndex;
// {step === 2 && (<StepTwo setStep={setStep} key="step2" />)}
// {step === 3 && (<StepThree setStep={setStep} key="step3" />)}
