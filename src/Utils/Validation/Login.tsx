import * as Yup from 'yup'

const errors = {
  email: {
    email: 'Ingrese un mail válido.',
    required: 'El email no puede estar en blanco.'
  },
  password: {
    required: 'La contraseña no puede estar en blanco.'
  }
}

export const loginValidationSchema = Yup.object({
  email: Yup.string().email(errors.email.email).required(errors.email.required),
  password: Yup.string().required(errors.password.required)
})

type errorCodesLogin = 'auth/invalid-email' | 'auth/user-disabled' | 'auth/user-not-found' | 'auth/wrong-password'

export const firebaseLoginErrorHandler = (error: errorCodesLogin) => {
  if (error === 'auth/user-not-found') {
    return ['email', 'No existe ningún usuario registrado con este email.']
  }
  else if (error === 'auth/invalid-email') {
    return ['email', 'El email proporcionado no es valido.']
  }
  else if (error === 'auth/user-disabled') {
    return ['email', 'Este usuario se encuentra deshabilitado.']
  }
  else if (error === 'auth/wrong-password') {
    return ['password', 'Contraseña incorrecta.']
  }
  return ['email', 'Error desconocido, contacte a un administrador.']
}
