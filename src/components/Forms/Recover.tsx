import UserSVG from "../atoms/SVG/UserSVG";
import { selectBorders } from "../../Utils//Utils";
import { recoverValidationSchema } from "../../Utils/Validation/Recover";
import { Formik, Form, ErrorMessage } from "formik";
import { Container, Error, Input, InputContainer, Label, SvgContainer, IngresarMT as Ingresar } from "../../elements/AuthStyles";

export interface RecoverFormProps {
    
}
 
const onSubmit = () => {
  alert('Recover password formulario enviado con éxito.')
}


const Recover: React.FC<RecoverFormProps> = () => {
  return (
    <Formik
      initialValues={{email: ''}}
      onSubmit={onSubmit}
      validationSchema={recoverValidationSchema}
    >
      {formik => (
        <Form>
          <Container>
            <Label>Email</Label>
            <InputContainer border={selectBorders(formik, 'email')}>
              <SvgContainer children={<UserSVG />} />
              <Input type='email' name='email' id='email' placeholder='Introduce tu email' />
              <Error><ErrorMessage name="email"/></Error>
            </InputContainer>
          </Container>
          <Ingresar type='submit'>Enviar mail de recuperación</Ingresar>
        </Form>
      )}
    </Formik>
  );
}
 
export default Recover;