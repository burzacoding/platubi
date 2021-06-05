import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from 'yup'
import { Container, Error, Input, InputContainer, Label, SvgContainer, IngresarMT as Ingresar } from "../../elements/AuthStyles";
import UserSVG from "../atoms/SVG/UserSVG";

export interface RecoverFormProps {
    
}
 
const onSubmit = () => {
  alert('Recover password formulario enviado con éxito.')
}

const errors = {
  email: 'Ingrese un mail válido',
  required: 'Ingrese un mail'
}

const selectBorders = (formik: any) => {
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

const RecoverForm: React.FC<RecoverFormProps> = () => {
  return (
    <Formik
      initialValues={{email: ''}}
      onSubmit={onSubmit}
      validationSchema={Yup.object({email: Yup.string().email(errors.email).required(errors.required)})}
    >
      {formik => (
        <Form>
          <Container>
            <Label>Email</Label>
            <InputContainer border={selectBorders(formik)}>
              <SvgContainer children={<UserSVG />} />
              <Input type='email' name='email' id='email' placeholder='Introduce tu email' required />
              <Error><ErrorMessage name="email"/></Error>
            </InputContainer>
          </Container>
          <Ingresar type='submit'>Enviar mail de recuperación</Ingresar>
        </Form>
      )}
    </Formik>
  );
}
 
export default RecoverForm;
