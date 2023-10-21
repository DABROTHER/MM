import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('Display Name is not allowed to be empty'),
  description: Yup.string().required('"Description" is required'),
  symbol: Yup.string().required('Symbol is not allowed to be empty'),
  url: Yup.string().required('Short url is required'),
  file_upload: Yup.mixed()

    .nullable()
    .required('Avatar is required'),
})
