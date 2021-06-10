import { FormikValues } from "formik";
import { auth } from "../firebase/Firebase";

export const registerEmailAndPasswordHandler = (values: FormikValues) => {
  console.log(values, values.email, values.password);
  // auth.createUserWithEmailAndPassword(values.email, values.password)
  // .catch(error => {console.log('Ejecutado catch de la función registerEmailAndPasswordHandler:', error)})
  return {email: 'El email ya se encuentra en uso.'}
}

export const loginEmailAndPasswordHandler = (values: FormikValues) => {

  console.log(values, values.email, values.password);
    // auth.signInWithEmailAndPassword(values.email, values.password)
    // .catch(error => {
    //   console.log('Ejecutado catch de la función loginEmailAndPasswordHandler:',error);
    // })
}
 