import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from 'yup'
import { Container, Error, Input, InputContainer, Label, SvgContainer, IngresarMT as Ingresar } from "../../elements/AuthStyles";
import { selectBorders } from "../../Utils/Utils";
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
            <InputContainer border={selectBorders(formik, 'email')}>
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
