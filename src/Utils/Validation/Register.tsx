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
export const registerValidationSchema = Yup.object({
  email: Yup.string().email(errors.email.email).required(errors.email.required),
  password: Yup.string().min(6, errors.password.min).max(32, errors.password.max).required(errors.password.required),
  confirmPassword: Yup.string().oneOf([Yup.ref('password')], errors.confirmPassword.oneOf).required(errors.confirmPassword.required),
  name: Yup.string().max(64, errors.name.max).required(errors.name.required),
  username: Yup.string().min(4, errors.username.min).max(32, errors.username.max).required(errors.username.required)
})
