import * as Yup from 'yup'

export const AddRegisterValidationSchema = Yup.object({
  symbol: Yup.string().required(),
  value: Yup.number().required()
})
