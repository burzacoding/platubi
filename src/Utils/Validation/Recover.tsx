import * as Yup from 'yup'


const errors = {
  email: 'Ingrese un mail válido',
  required: 'Ingrese un mail'
}

export const recoverValidationSchema = Yup.object({email: Yup.string().email(errors.email).required(errors.required)})


type errorCodesRecover = 'auth/invalid-email' | 'auth/user-not-found'

export const firebaseRecoverErrorHandler = (error: errorCodesRecover) => {
  if (error === 'auth/user-not-found') {
    return ['email', 'No existe ningún usuario registrado con este email.']
  }
  else if (error === 'auth/invalid-email') {
    return ['email', 'El email proporcionado no es valido.']
  }
  return ['email', 'Error desconocido, contacte a un administrador.']
}
