import { Form, Formik, Field, useFormik, FormikValues } from "formik";
import { useState } from "react";
import { ModalContainer, HorizontalBar, Content, Title } from "../../../elements/Modals/Modal";

// export interface AddRegisterModalProps {}

const initialValues = {
  symbol: '',
  value: 0,
}

const submitForm = (values: FormikValues) => {
  console.log(values);
  
}
 
const AddRegisterModal: React.FC = () => {

  const [operation, setOperation] = useState(0) //0 = Add | 1 = Remove | 2 = Exchange

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: values => submitForm(values)
  })

  return (
    <ModalContainer>
      <Title>Añadir registro:</Title>
      <HorizontalBar />
      <Content>
        {/* <OperationsContainer>
          <AddSymbol />
          <RemoveSymbol />
          <ExchangeSymbol />
        </OperationsContainer> */}
        <form onSubmit={formik.handleSubmit}>
          <select value={formik.values.symbol}>
            <option>USD</option>
            <option>ARS</option>
          </select>
        </form>
      </Content>
    </ModalContainer>
  );
}
 
export default AddRegisterModal;
