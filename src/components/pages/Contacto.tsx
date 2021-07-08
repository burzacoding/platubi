import { ErrorMessage, Field, Form, Formik } from "formik"
import { Link } from "react-router-dom";
import { Error, Input, Label, NameField, Container as ContainerInput, MessageContainer, ButtonSubmit, SentStatusResolved, SentStatusRejected } from "../../elements/AuthStyles";
import { ButtonBack, ButtonsContainer } from "../../elements/RegStep";
import { selectBorders } from "../../Utils/Utils";
import { contactInitialValues, contactValidationSchema } from "../../Utils/Validation/Contact";
import BackArrow from "../atoms/SVG/BackArrow";
import AuthFrame from "./Auth/AuthFrame"
import Footer from "../molecules/Footer";
import { AuthContainer as Container, Title} from "./Auth/Styles"
import { db } from "../../firebase/Firebase";
import { useState } from "react";



const ContactoPage: React.FC = () => {

  const [sent, setSent] = useState(false)
  const [status, setStatus] = useState('pending')
  const color = {
  dark: '#096635',
  light: '#1C4B73'
  }
  
  return (
    <AuthFrame>
      <Container>
        <Title>Contactanos!</Title>
        <Formik
          initialValues={contactInitialValues}
          onSubmit={(values, { setSubmitting, resetForm}) => {
            console.log(sent);
            
            setSubmitting(true)
            db.collection('mail').add(values)
            .then(() => {
              setStatus('resolved')
              console.log(sent);
              resetForm()
            })
            .catch(err => {
              setStatus('rejected')
              console.log(sent);
              setSubmitting(false)
            })
          }}
          validationSchema={contactValidationSchema}
          validateOnMount
        >
          {formik => {
            if (formik.submitCount === 1) setSent(true)
            return(
            <Form>
              <ContainerInput>
                <Label>Nombre completo</Label>
                <NameField border={selectBorders(formik, 'author')}>
                  <Input type='text' name='author' id='author' placeholder='Introduce tu nombre completo.' />
                  <Error><ErrorMessage name='author'/></Error>
                </NameField>
              </ContainerInput>
              <ContainerInput>
                <Label>Email</Label>
                <NameField border={selectBorders(formik, 'email')}>
                  <Input type='email' name='email' id='email' placeholder='Introduce tu email' autoComplete="username"/>
                  <Error><ErrorMessage name="email"/></Error>
                </NameField>
              </ContainerInput>
              <ContainerInput>
                <Label>Mensaje</Label>
                <MessageContainer border={selectBorders(formik, 'message')}>
                  <Field as='textarea' name='message' placeholder='Escriba su mensaje' />
                  <Error><ErrorMessage name='message' /></Error>
                </MessageContainer>
              </ContainerInput>
              {sent && (
                status === 'resolved' ? <SentStatusResolved><p>Enviado exitosamente</p></SentStatusResolved> : status === 'rejected' ? <SentStatusRejected><p>Error en el envío</p></SentStatusRejected> : undefined
              )}
              
              <ButtonsContainer>
                <ButtonBack colorObj={color} as={Link} to="/"><BackArrow colorObj={color}/></ButtonBack>
                <ButtonSubmit type="submit" disabled={formik.isSubmitting}>Enviar mensaje</ButtonSubmit>
              </ButtonsContainer>
            </Form>
            )
          }}
        </Formik>
      </Container>
      <Footer />
    </AuthFrame>
  );
}
 
export default ContactoPage;
