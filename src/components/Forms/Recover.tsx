import UserSVG from "../atoms/SVG/UserSVG";
import { selectBorders } from "../../Utils//Utils";
import { firebaseRecoverErrorHandler, recoverValidationSchema } from "../../Utils/Validation/Recover";
import { Formik, Form, ErrorMessage } from "formik";
import { Container, Error, Input, InputContainer, Label, SvgContainer, IngresarMT as Ingresar } from "../../elements/AuthStyles";
import { useAuth } from "../../contexts/AuthContext";

const Recover: React.FC = () => {

  const { resetPassword } = useAuth()

  return (
    <Formik
      initialValues={{email: ''}}
      onSubmit={async function (values, { setFieldError, resetForm, setSubmitting }) {
        setSubmitting(true)
        resetPassword(values.email)
        .then((res: any) => {
          resetForm()
        })
        .catch((err: any) => {
          const [field, error] = firebaseRecoverErrorHandler(err.code)
          setFieldError(field, error)
        })
        setSubmitting(false)
      }}
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
