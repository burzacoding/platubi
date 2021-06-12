import { Formik, Form, ErrorMessage, FormikProps, FormikValues } from 'formik'
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
import { firebaseLoginErrorHandler, loginValidationSchema } from '../../Utils/Validation/Login'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { useState } from 'react'

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



// FUNCIONES UTILES
const isFar = (formik: FormikProps<initialValuesProps>) => formik.errors.password && formik.touched.password ? 'true' : undefined

//COMPONENTE PRINCIPAL

const Login: React.FC<LoginFormProps> = () => {
  const [open, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(p => !p)
  const toggleVisibility = () => open ? 'text' : 'password'

  const { loginWithMailAndPassword } = useAuth()

  const history = useHistory()
  async function loginUser(values: FormikValues, setFieldError: any) {
    const { email, password } = values
    try {
      const user = await loginWithMailAndPassword(email, password);
      if (user !== null) history.push('/dashboard')
    } catch (error) {
      const [field, errorMessage] = firebaseLoginErrorHandler(error.code)
      setFieldError(field, errorMessage)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values , { setSubmitting, setFieldError } ) => {
        setSubmitting(true)
        loginUser(values, setFieldError)
        setSubmitting(false)
      }}
      validationSchema={loginValidationSchema}
    >
      {formik => (
        <Form>
          <Container>
            <Label>Email</Label>
            <InputContainer border={selectBorders(formik, 'email')}>
              <SvgContainer children={<UserSVG />} />
              <Input type='email' name='email' id='email' placeholder='Introduce tu email' autoComplete="username" />
              <Error><ErrorMessage name="email"/></Error>
            </InputContainer>
          </Container>
          <Container>
            <Label>Contraseña</Label>
            <Password border={selectBorders(formik, 'password')}>
              <SvgContainer children={<LockSVG />} />
              <Input type={toggleVisibility()} name='password' id='password' placeholder='Introduce tu contraseña' autoComplete="current-password"  />
              <SvgContainer onClick={toggleOpen}><EyeSVG isOpen={open}/></SvgContainer>
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
 
export default Login;
