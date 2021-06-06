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
