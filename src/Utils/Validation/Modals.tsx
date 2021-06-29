import * as Yup from 'yup'


const errors = {
  symbol: {
    required: 'El símbolo no puede estar vacío.'
  },
  value: {
    notZero: 'El monto no puede ser cero.',
    required: 'El monto no puede estar vacío.'
  }
}

export const AddRegisterValidationSchema = Yup.object({
  symbol: Yup.string().required(errors.symbol.required),
  value: Yup.string().notOneOf(['0'], errors.value.notZero).matches(/^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$/
  , 'El valor debe ser un número.').required(errors.value.required)
})
