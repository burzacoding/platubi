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
import { selectBorders } from '../../Utils/Utils'

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

const errors = {
  email: {
    email: 'Ingrese un mail válido.',
    required: 'El email no puede estar en blanco.'
  },
  password: {
    required: 'La contraseña no puede estar en blanco.'
  }
}

const ValidationSchema = Yup.object({
  email: Yup.string().email(errors.email.email).required(errors.email.required),
  password: Yup.string().required(errors.password.required)
})

// FUNCIONES UTILES

const isFar = (formik: FormikProps<initialValuesProps>) => formik.errors.password && formik.touched.password ? 'true' : undefined

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
