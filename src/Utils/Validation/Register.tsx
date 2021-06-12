import * as Yup from 'yup'

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

}
export const registerValidationSchema = Yup.object({
  email: Yup.string().email(errors.email.email).required(errors.email.required),
  password: Yup.string().min(6, errors.password.min).max(32, errors.password.max).required(errors.password.required),
  confirmPassword: Yup.string().oneOf([Yup.ref('password')], errors.confirmPassword.oneOf).required(errors.confirmPassword.required),
  termsAccepted: Yup.bool().oneOf([true], 'La casilla debe estar aceptada para registrarse.'),
})

type errorCodesReg = 'auth/email-already-in-use' | 'auth/invalid-email' | 'auth/weak-password'

export const firebaseRegisterErrorHandler = (error: errorCodesReg) => {
  if (error === 'auth/email-already-in-use') {
    return ['email', 'Este email ya se encuentra registrado.']
  }
  else if (error === 'auth/invalid-email') {
    return ['email', 'El email proporcionado no es valido.']
  }
  else if (error === 'auth/weak-password') {
    return ['password', 'Esta contraseña es demasiado débil.']
  }
  return ['email', 'Error desconocido, contacte a un administrador.']
}
