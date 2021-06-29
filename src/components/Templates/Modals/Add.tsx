import { Formik, Form, ErrorMessage } from "formik";
// import { Formik, Form, Field, ErrorMessage } from "formik";
import { forwardRef } from "react";
import { useState } from "react";
import { useDashboard } from "../../../Contexts/DashboardContext";
import { useModal } from "../../../Contexts/ModalContext";
import { ModalContainer, HorizontalBar, Content, Title, Cross, OperationsContainer, SymbolSvgContainer, ValueContainer, TextPlaceholder, ValueInputField, ButtonAdd, Error } from "../../../elements/Modals/Modal";
import CrossSVG from "../../atoms/SVG/Cross";
import { AddRegisterValidationSchema } from "../../../Utils/Validation/Modals";
import OpAdd from "../../atoms/SVG/Modals/OpAdd";
import OpRemove from "../../atoms/SVG/Modals/OpRemove";
import OpExchange from "../../atoms/SVG/Modals/OpExchange";
import Select, { GroupTypeBase, Styles } from 'react-select'
import { useTheme } from "styled-components";
import { ThemeColorPicker } from "../../../Utils/Utils";

interface FormikFinalValues {
  operation: string,
  symbol: string,
  value: number
}
type selectStylesProp = Partial<Styles<{
    label: string;
    options: {
        value: string;
        label: string;
    }[];
  }, false, GroupTypeBase<{
    label: string;
    options: {
        value: string;
        label: string;
    }[];
  }>>> | undefined

const initialValues = {
  operation: 'add',
  symbol: '',
  value: '',
}

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


const AddRegisterModal = forwardRef<HTMLDivElement>((props, ref) => {

  //STATE

  const [operation, setOperation] = useState(0) //0 = Add | 1 = Remove | 2 = Exchange
  const isCurrent = (index: number) => operation === index ? 'true' : 'false'

  // FUNCTIONS 

  const { addRegister } = useDashboard()
  const { closeModal } = useModal()

  const theme = useTheme()

  const selectStyles: selectStylesProp = {
    groupHeading: (provided, stats) => ({
      ...provided,
      color: theme.fontContrastTwo,
      backgroundColor: theme.divBackground,
      fontWeight: 600,
      fontSize: '0.9em'
    }),
    placeholder: (provided, stats) => ({
      ...provided,
      color: theme.fontContrastSix,
      backgroundColor: theme.divBackground,
      fontSize: '12px',
      '@media (min-width: 360px)': {
        fontSize: '14px',
      },
      '@media (min-width: 768px)': {
        fontSize: '16px',
      },
    }),
    option: (provided, stats) => ({
      ...provided,
      color: theme.fontContrastTwo,
      backgroundColor: stats.isFocused ? theme.divDarkerBackground : theme.divBackground,
      opacity: 0.7,
      fontSize: '12px',
      '@media (min-width: 360px)': {
        fontSize: '14px',
      },
      '@media (min-width: 768px)': {
        fontSize: '16px',
      },
    }),
    container : (provided, stats) => ({
      ...provided,
      color: theme.fontContrastTwo,
      width: '100%',
      marginLeft: '12px',
      '@media (min-width: 768px)': {
        fontSize: '16px',
      },
    }),
    menu: (provided, stats) => ({
      ...provided,
      color: theme.fontContrastTwo,
      backgroundColor: theme.divBackground,
    }),
    control: (provided, stats) => ({
        ...provided,
        color: theme.fontContrastTwo,
        backgroundColor: theme.divBackground,
        boxShadow: "none",
        borderColor: stats.menuIsOpen ? '#03A63C' : 'none',
        ":hover" : {
          border: ThemeColorPicker(theme, `solid 1px #0E4777`, `solid 1px #03A63C`),
        },
        ":focused" : {
          border: ThemeColorPicker(theme, `solid 1px #0E4777`, `solid 1px #03A63C`),
          boxShadow: "none",
        },
      }),
    singleValue: (provided, stats) => ({
      ...provided,
      color: theme.fontContrastTwo,
      backgroundColor: theme.divBackground,
      opacity: 0.8,
      fontSize: '12px',
      '@media (min-width: 360px)': {
        fontSize: '14px',
      },
      '@media (min-width: 768px)': {
        fontSize: '16px',
      },
    }),
    input: (provided, stats) => ({
      ...provided,
      color: theme.fontContrastTwo,
      opacity: 0.8,
      fontSize: '12px',
      '@media (min-width: 360px)': {
        fontSize: '14px',
      },
      '@media (min-width: 768px)': {
        fontSize: '16px',
      },
    }),
  }

  return (
  <Formik
    initialValues={initialValues}
    onSubmit={async (values, { setSubmitting, setFieldError }) => {
      try {
        setSubmitting(true)
        const bool = await addRegister(values as unknown as FormikFinalValues)
        bool && closeModal()
      }
      catch (err) {
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
        <Title>Añadir registro:</Title>
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
              <Select options={options} onChange={setValueValue} styles={selectStyles} placeholder="Divisa / Criptomoneda"
              
              maxMenuHeight={220}
              />
            </ValueContainer>
              <Error><ErrorMessage name="symbol"/></Error>
            <ValueContainer isGettingErrors={isGettingError('value')}>
              <TextPlaceholder>Cantidad:</TextPlaceholder>
              <ValueInputField name='value' id='value' />
            </ValueContainer>
              <Error><ErrorMessage name="value"/></Error>
            <ButtonAdd type='submit' disabled={formik.isSubmitting} whileTap={{scale: 0.95}}>Agregar</ButtonAdd>
          </Form>
        </Content>
      </ModalContainer>)}}
  </Formik>
  );
})
 
export default AddRegisterModal;
