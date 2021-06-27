import * as Yup from 'yup'


const errors = {
  symbol: {
    required: 'El símbolo no puede estaer vacío.'
  },
  value: {
    notZero: 'El monto no puede ser cero.',
    required: 'El monto no puede estar vacío.'
  }
}

export const AddRegisterValidationSchema = Yup.object({
  symbol: Yup.string().required(errors.symbol.required),
  value: Yup.number().notOneOf([0], errors.value.notZero).required(errors.value.required)
})
