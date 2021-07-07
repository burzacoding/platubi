import * as Yup from 'yup'

const contactInitialValues = {
author: '',
email: '',
message: '',
};

const errors = {
  author: {
    min: 'El nombre debe contenér más de 6 caracteres.',
    required: 'Por favor, proporciónenos su nombre completo.'
  },
  email: {
    email: 'Ingrese un email válido.',
    required: 'El email no puede quedar vacío.',
  },
  message: {
    min: 'Su mensaje debe contener 24 letras mínimo.',
    required: 'El mensaje no puede estar vacío.',
  }
}

const contactValidationSchema = Yup.object({
author: Yup.string().min(6, errors.author.min).required(errors.author.required),
email: Yup.string().email(errors.email.email).required(errors.email.required),
message: Yup.string().min(24, errors.message.min).required(errors.message.required),
})

export {contactInitialValues, contactValidationSchema}
