import * as Yup from 'yup'
import { Formik, Form, ErrorMessage, FormikProps } from 'formik'
import { 
  Container,
  Label,
  InputContainer,
  Subtitle,
  Password,
  SvgContainer,
  Input,
  Error,
  Ingresar} from '../../elements/AuthStyles'
import UserSVG from '../atoms/SVG/UserSVG'
import LockSVG from '../atoms/SVG/LockSVG'
import EyeSVG from '../atoms/SVG/EyeSVG'

export interface LoginFormProps {
  
}

interface initialValuesProps {
  email: string,
  password: string,
}

// VALORES INICIALES DE LOS CAMPOS
const initialValues: initialValuesProps = {
  email: '',
  password: '',
}

// FUNCIÓN QUE SE EJECUTA AL ENVIARSE EL FORMULARIO
const onSubmit = (values: initialValuesProps) => {
  alert('Formulario enviado con éxito')
  console.log(JSON.stringify(values));
}

// ESQUEMA DE VALIDACIÓN DE YUP
const ValidationSchema = Yup.object({
  email: Yup.string().email('Ingrese un mail válido').required('Ingrese un mail válido'),
  password: Yup.string().required('La contraseña no puede estar en blanco.')
})

// FUNCIONES UTILES

const isFar = (formik: FormikProps<initialValuesProps>) => formik.errors.password && formik.touched.password ? 'true' : undefined
const selectBorders = (formik: FormikProps<initialValuesProps>, name: 'email' | 'password') => {
  if (name === 'email') {
    if (!formik.touched.email) {
      return {
        dark: 'none',
        light: 'none'
      }
    }
    if  (formik.errors.email) {
      return {
        dark: '0 0 1px 2px #800000',
        light: '0 0 1px 2px #ca17177a', 
      }
    }
    return {
      dark: '0 0 1px 2px #044abb92',
      light: '0 0 1px 2px #00378f92',
    }
  }
  if (name === 'password') {
    if (!formik.touched.password) {
      return {
        dark: 'none',
        light: 'none'
      }
    }
    if  (formik.errors.password) {
      return {
        dark: '0 0 1px 2px #800000',
        light: '0 0 1px 2px #ca17177a', 
      }
    }
    return {
      dark: '0 0 1px 2px #044abb92',
      light: '0 0 1px 2px #00378f92',
    }
  }
  
  return {
    dark: 'none',
    light: 'none'
  }
}

//COMPONENTE PRINCIPAL
const LoginForm: React.FC<LoginFormProps> = () => {


  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={ValidationSchema}
    >
      {formik => (
        <Form>
          <Container>
            <Label>Email</Label>
            <InputContainer border={selectBorders(formik, 'email')}>
              <SvgContainer children={<UserSVG />} />
              <Input type='email' name='email' id='email' placeholder='Introduce tu email' autoComplete="username" required />
              <Error><ErrorMessage name="email"/></Error>
            </InputContainer>
          </Container>
          <Container>
            <Label>Contraseña</Label>
            <Password border={selectBorders(formik, 'password')}>
              <SvgContainer children={<LockSVG />} />
              <Input type='password' name='password' id='password' placeholder='Introduce tu contraseña' autoComplete="current-password" required />
              <EyeSVG isOpen={true} />
              <Error><ErrorMessage name="password"/></Error>
            </Password>
          </Container>
          <Subtitle farbottom={isFar(formik)} to="/recover">¿Olvidaste tu contraseña?</Subtitle>
          <Ingresar type='submit' disabled={formik.isSubmitting}>Iniciar sesión</Ingresar>
        </Form>
      )}
    </Formik>
  );
}
 
export default LoginForm;
