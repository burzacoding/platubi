import { ErrorMessage, Form, Formik } from "formik"
import { Error, Input, Label, NameField, Container as ContainerInput, InputContainer, SvgContainer } from "../../elements/AuthStyles";
import { selectBorders } from "../../Utils/Utils";
import { contactInitialValues, contactValidationSchema } from "../../Utils/Validation/Contact";
import MailSendSVG from "../atoms/SVG/MailSendSVG";
import AuthFrame from "./Auth/AuthFrame"
import { AuthContainer as Container, Title} from "./Auth/Styles"

export interface ContactoPageProps {
  
}
 
const ContactoPage: React.FC<ContactoPageProps> = () => {
  return (
    <AuthFrame>
      <Container>
        <Title>Contactanos!</Title>
        <Formik
          initialValues={contactInitialValues}
          onSubmit={(values) => console.log(values)}
          validationSchema={contactValidationSchema}
          validateOnMount
        >
          {formik => (
            <Form>
              <ContainerInput>
                <Label>Nombre completo</Label>
                <NameField border={selectBorders(formik, 'name')}>
                  <Input type='text' name='name' id='name' placeholder='Introduce tu nombre completo.' />
                  <Error><ErrorMessage name='name'/></Error>
                </NameField>
              </ContainerInput>
              <ContainerInput>
                <Label>Email</Label>
                <InputContainer border={selectBorders(formik, 'email')}>
                  <SvgContainer children={<MailSendSVG />} />
                  <Input type='email' name='email' id='email' placeholder='Introduce tu email' autoComplete="username"/>
                  <Error><ErrorMessage name="email"/></Error>
                </InputContainer>
              </ContainerInput>
            </Form>
          )}
        </Formik>
      </Container>
    </AuthFrame>
  );
}
 
export default ContactoPage;
