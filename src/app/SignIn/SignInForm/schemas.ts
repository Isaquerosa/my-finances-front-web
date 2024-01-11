import { string, object } from 'yup'

export const formValidationSchema = object().shape({
  email: string().required('Campo obrigatório'),
  password: string().required('Campo obrigatório'),
})
