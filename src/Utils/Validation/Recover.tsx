import * as Yup from 'yup'


const errors = {
  email: 'Ingrese un mail válido',
  required: 'Ingrese un mail'
}

export const recoverValidationSchema = Yup.object({email: Yup.string().email(errors.email).required(errors.required)})
