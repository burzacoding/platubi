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
  const options = [
    {
        label: 'Divisas',
        options: [
            {value: 'usd', label: 'Dolar estadounidense - USD'},
            {value: 'ars', label: 'Peso argentino - ARS'},
            {value: 'mxn', label: 'Peso mexicano - MXN'},
        ]
    },
    {
        label: 'Criptomonedas',
        options: [
            {value: 'btc', label: 'Bitcoin - BTC'},
            {value: 'doge', label: 'Dogecoin - DOGE'},
            {value: 'bat', label: 'Basic Attention Token - BAT'},
        ]
    }
  ]

  const getOptionByID = () => {
    const symbol = regSchema.symbol.toLowerCase()
    const result = options[0].options.filter(el => el.value === symbol)[0]
    if (!result) {
      const newRes = options[1].options.filter(el => el.value === symbol)[0]
      if (!newRes) {
        const newRes1 = options[2].options.filter(el => el.value === symbol)[0]
        if (newRes1) {
          return  {
            value: newRes1.value,
            label: newRes1.label
          }
        }
      } else {
        return {
          value: newRes.value,
          label: newRes.label
        }
      }
    }
    else {
      return {
        value: result.value,
        label: result.label
      }
    }
    return {
      value: 'no encontrado',
      label: 'no encontrado'
    }
  }

  return (
  <Formik
    initialValues={initialValues}
    onSubmit={async (values, { setSubmitting, setFieldError }) => {
      try {
        setSubmitting(true)
        const bool = await updateRegister(regSchema.key, values)
        if (bool && userData?.registers) {
          const stagedRegisters = [...userData.registers]
          const prevRegisterIndex = stagedRegisters.indexOf(regSchema)
          stagedRegisters[prevRegisterIndex] = {
            ...stagedRegisters[prevRegisterIndex],
            ...values
          }
          console.log(`
          Documento: ${JSON.stringify(userData.registers[prevRegisterIndex], null, 2)}
          Modificado a: ${JSON.stringify(stagedRegisters[prevRegisterIndex], null, 2)}
          `);
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
              <SelectComponent onChange={setValueValue} defaultValue={getOptionByID()} />
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
