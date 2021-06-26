import { Form, Formik, Field, useFormik, FormikValues } from "formik";
import { forwardRef } from "react";
import { useState } from "react";
import { useDashboard } from "../../../Contexts/DashboardContext";
import { useModal } from "../../../Contexts/ModalContext";
import { ModalContainer, HorizontalBar, Content, Title, Cross, OperationsContainer, SymbolSvgContainer } from "../../../elements/Modals/Modal";
import CrossSVG from "../../atoms/SVG/Cross";
import { AddRegisterValidationSchema } from "../../../Utils/Validation/Modals";
import OpAdd from "../../atoms/SVG/Modals/OpAdd";
import OpRemove from "../../atoms/SVG/Modals/OpRemove";
import OpExchange from "../../atoms/SVG/Modals/OpExchange";
import AddRegisterSelect from "../../molecules/Selects/addRegisterSelect";

// export interface AddRegisterModalProps {}

const initialValues = {
  operation: 'add',
  symbol: 'ARS',
  value: 20,
}

const submitForm = (values: FormikValues) => {
  console.log(values);
}
 
const AddRegisterModal = forwardRef<HTMLDivElement>((props, ref) => {

  const [operation, setOperation] = useState(0) //0 = Add | 1 = Remove | 2 = Exchange

  const isCurrent = (index: number) => operation === index ? 'true' : 'false'
  const setCurrent = (index: number) => setOperation(index)

  const { addRegister } = useDashboard()
  const { closeModal } = useModal()

  const closeCurrentModal = () => {
    formik.resetForm()
    closeModal()
  }


  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true)
      addRegister(values)
      setSubmitting(false)
      closeCurrentModal()
    },
    validationSchema: AddRegisterValidationSchema
  })

  return (
    <ModalContainer ref={ref}>
      <Cross onClick={closeCurrentModal}>
        <CrossSVG />
      </Cross>
      <Title>Añadir registro:</Title>
      <HorizontalBar />
      <Content>
        <OperationsContainer>
          <SymbolSvgContainer isCurrent={isCurrent(0)} onClick={() => setCurrent(0)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.85 }}><OpAdd /></SymbolSvgContainer>
          <SymbolSvgContainer isCurrent={isCurrent(1)} onClick={() => setCurrent(1)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.85 }}><OpRemove /></SymbolSvgContainer>
          <SymbolSvgContainer isCurrent={isCurrent(2)} onClick={() => setCurrent(2)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.85 }}><OpExchange /></SymbolSvgContainer>
        </OperationsContainer>
        <form onSubmit={formik.handleSubmit}>
          <select name='symbol' value={formik.values.symbol} onChange={formik.handleChange}>
            <option>USD</option>
            <option>ARS</option>
          </select>
          <AddRegisterSelect />
          <button type='submit'>Submit</button>
        </form>
      </Content>
    </ModalContainer>
  );
})
 
export default AddRegisterModal;
