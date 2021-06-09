import * as Yup from 'yup'

const contactInitialValues = {
name: '',
email: '',
message: '',
};

const errors = {
  name: {
    min: 'El nombre debe contenér más de 6 caracteres.',
    required: 'Por favor, proporciónenos su nombre completo.'
  },
  email: {
    email: 'Ingrese un email válido.',
    required: 'El email no puede quedar vacío.',
  },
  message: {
    min: 'Su mensaje debe contener 30 letras mínimo.',
    required: 'El mensaje no puede estar vacío.',
  }
}

const contactValidationSchema = Yup.object({
name: Yup.string().min(6, errors.name.min).required(errors.name.required),
email: Yup.string().email(errors.email.email).required(errors.email.required),
message: Yup.string().min(30, errors.message.min).required(errors.message.required),
})

export {contactInitialValues, contactValidationSchema}
