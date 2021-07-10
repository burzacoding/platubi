import { Formik, Form, ErrorMessage } from "formik";
import { forwardRef } from "react";
import { useState } from "react";
import { registerSchemaTypesWithId, useDashboard } from "../../../Contexts/DashboardContext";
import { useModal } from "../../../Contexts/ModalContext";
import { ModalContainer, HorizontalBar, Content, Title, Cross, OperationsContainer, SymbolSvgContainer, ValueContainer, TextPlaceholder, ValueInputField, ButtonAdd, Error } from "../../../elements/Modals/Modal";
import CrossSVG from "../../atoms/SVG/Cross";
import { AddRegisterValidationSchema } from "../../../Utils/Validation/Modals";
import OpAdd from "../../atoms/SVG/Modals/OpAdd";
import OpRemove from "../../atoms/SVG/Modals/OpRemove";
import OpExchange from "../../atoms/SVG/Modals/OpExchange";
import SelectComponent from "../../molecules/Selects/SelectComponent";
import { useApi } from "../../../Contexts/ApiContext";



interface ModifyRegisterModalProps {
  regSchema: registerSchemaTypesWithId
}

const ModifyRegisterModal = forwardRef<HTMLDivElement, ModifyRegisterModalProps>(({regSchema}, ref) => {

  const initialValues = {
    operation: regSchema.operation,
    symbol: regSchema.symbol,
    value: regSchema.value,
  }
  
  //STATE

  const indexOfOperation = () => {
    switch (regSchema.operation) {
      case 'add':
        return 0;
      case 'remove':
        return 1;
      case 'exchange':
        return 2;
      default:
        return 0;
    }
  }

  const [operation, setOperation] = useState(indexOfOperation()) //0 = Add | 1 = Remove | 2 = Exchange
  const isCurrent = (index: number) => operation === index ? 'true' : 'false'

  // FUNCTIONS 

  const { updateRegister, userData, setUserData } = useDashboard()
  const { closeModal } = useModal()


  //ESTE OBJECTO OPTIONS TIENE QUE SER ACCEDIDO MEDIANTE EL CONTEXTO DEL MODAL
  const { currenciesList, cryptoList } = useApi()

  const getOptionByID = () => {
    const result = currenciesList.data.filter(el => el.symbol === regSchema.symbol)[0]
    if (!result) {
      const newRes = cryptoList.data.filter(el => el.value === regSchema.symbol)[0]
        return {
          value: regSchema.symbol,
          label: `${newRes.symbol} - ${newRes.name}`
        }
    }
    else {
      return {
        value: regSchema.symbol,
        label: `${result.symbol} - ${result.name}`
      }
    }
  }

  return (
  <Formik
    initialValues={initialValues}
    onSubmit={async (values, { setSubmitting, setFieldError }) => {
      try {
        setSubmitting(true)
        const schema = {
          operation: values.operation,
          symbol: values.symbol,
          value: parseFloat(values.value as unknown as string)
        }
        const bool = await updateRegister(regSchema.key, schema)
        if (bool && userData?.registers) {
          const stagedRegisters = [...userData.registers]
          const prevRegisterIndex = stagedRegisters.indexOf(regSchema)
          stagedRegisters[prevRegisterIndex] = {
            ...stagedRegisters[prevRegisterIndex],
            ...schema
          }
          // console.log(`
          // Documento: ${JSON.stringify(userData.registers[prevRegisterIndex], null, 2)}
          // Modificado a: ${JSON.stringify(stagedRegisters[prevRegisterIndex], null, 2)}
          // `);
          setUserData(prev => {
            return({
              ...prev,
              registers: stagedRegisters
            })
          })
          closeModal()
        }
      }
      catch (err) {
        console.log(err);
        //ADD REGISTER ERRORS HANDLER
        // const { field, errorMessage } = addRegisterErrorsHandler(err)
        setFieldError('symbol', '') // setFieldError(field, errorMessage)
        setSubmitting(false)
      }
    }}
    validationSchema={AddRegisterValidationSchema}
  >
    {formik => {
      const closeCurrentModal = () => {
        formik.resetForm()
        closeModal()
      }
      const setCurrent = (index: number) => {
        setOperation(index);
        switch (index) {
          case 0:
            formik.setFieldValue('operation', 'add')
          break;
          case 1:
            formik.setFieldValue('operation', 'remove')
          break;
          case 2:
            formik.setFieldValue('operation', 'exchange')
          break;
        }
      }
      const isGettingError = (fieldName: 'symbol' | 'value') => {
        if (fieldName === 'symbol') {
          return formik.errors.symbol && formik.touched.symbol ? 'true' : 'false'
        }
        if (fieldName === 'value') {
          return formik.errors.value && formik.touched.value ? 'true' : 'false'
        }
        return 'false'
      }
      const setValueValue = (value: any) => {
        formik.setFieldValue('symbol', value?.value)
      }
      
      return(
      <ModalContainer ref={ref}>
        <Cross onClick={closeCurrentModal}>
          <CrossSVG />
        </Cross>
        <Title>Modificar registro:</Title>
        <HorizontalBar />
        <Content>
          <OperationsContainer>
            <SymbolSvgContainer isCurrent={isCurrent(0)} onClick={() => setCurrent(0)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.85 }}><OpAdd /></SymbolSvgContainer>
            <SymbolSvgContainer isCurrent={isCurrent(1)} onClick={() => setCurrent(1)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.85 }}><OpRemove /></SymbolSvgContainer>
            <SymbolSvgContainer isCurrent={isCurrent(2)} onClick={() => setCurrent(2)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.85 }}><OpExchange /></SymbolSvgContainer>
          </OperationsContainer>
          <Form>
            <ValueContainer isGettingErrors={isGettingError('symbol')}>
              <TextPlaceholder>Símbolo:</TextPlaceholder>
              <SelectComponent marginLeft onChange={setValueValue} defaultValue={getOptionByID()} />
            </ValueContainer>
              <Error><ErrorMessage name="symbol"/></Error>
            <ValueContainer isGettingErrors={isGettingError('value')}>
              <TextPlaceholder>Cantidad:</TextPlaceholder>
              <ValueInputField name='value' autoComplete='off' />
            </ValueContainer>
              <Error><ErrorMessage name="value"/></Error>
            <ButtonAdd type='submit' disabled={formik.isSubmitting} whileTap={{scale: 0.95}}>Modificar</ButtonAdd>
          </Form>
        </Content>
      </ModalContainer>)}}
  </Formik>
  );
})
 
export default ModifyRegisterModal;
