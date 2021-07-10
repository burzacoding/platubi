import { Form, Formik } from "formik";
import { forwardRef } from "react";
import { useApi } from "../../../Contexts/ApiContext";
import { useDashboard, WealthViewSymbolsType } from "../../../Contexts/DashboardContext";
import { useModal } from "../../../Contexts/ModalContext";
import { ButtonAdd, Content, Cross, HorizontalBar, ModalContainer, Title } from "../../../elements/Modals/Modal";
import { checkIsCrypto } from "../../../Utils/Utils";
import CrossSVG from "../../atoms/SVG/Cross";
import SelectComponent from "../../molecules/Selects/SelectComponent";

export interface WealthViewerProps {
  
}
 
const WealthViewerModal = forwardRef<HTMLDivElement, WealthViewerProps>((props, ref) => {

  const { closeModal } = useModal()
  const { updateWealthViewer, userData } = useDashboard()
  const { cryptoList, currenciesList } = useApi()
  
  const wealthViewSymbols = userData && userData.wealthViewSymbols ? [...userData.wealthViewSymbols, '', ''] : ['', '', '']
  
  const initialValues = {
    slot1: wealthViewSymbols[0],
    slot2: wealthViewSymbols[1],
    slot3: wealthViewSymbols[2],
  }
  
  const defaultValues = wealthViewSymbols.map(el => {
    if (el !== '') {
      if (checkIsCrypto(el)) {
        const obj = cryptoList.data.filter(eli => eli.value === el)[0]
        return {
          value: el,
          label: `${obj.symbol} - ${obj.name}`
        }
      } else {
        const obj = currenciesList.data.filter(eli => eli.symbol === el)[0]
        return {
          value: obj.symbol,
          label: `${obj.symbol} - ${obj.name}`
        }
      }
    }
    return {
      value: '', label: ''
    }
  })

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true)
        const schema: WealthViewSymbolsType = [values.slot1, values.slot2, values.slot3]
        const success = await updateWealthViewer(schema)
        if (success) {
          setSubmitting(false)
          closeModal()
        }
        //MANAGE ERROR HANDLING
      }}
    >
      {formik => {

        const onchange = (value: {label: string;value: string;} | null, slotNumber: number) => {
          formik.setFieldValue(`slot${slotNumber}`, value?.value)
          console.log(formik.values);
          
        }

        return (
          <ModalContainer ref={ref}>
          <Cross onClick={() => closeModal()}>
            <CrossSVG />
          </Cross>
          <Title>¿En qué divisa queres visualizar tu capital?</Title>
          <HorizontalBar />
          <Content>
            <Form>
              <SelectComponent placeholder="Slot #1" onChange={value => onchange(value, 1)}
                defaultValue={defaultValues[0]}
                />
              <br />
              <SelectComponent placeholder="Slot #2" onChange={value => onchange(value, 2)}
                defaultValue={defaultValues[1]}
                />
              <br />
              <SelectComponent placeholder="Slot #3" onChange={value => onchange(value, 3)}
                defaultValue={defaultValues[2]}
                />
              <br />
              <ButtonAdd type='submit' disabled={formik.isSubmitting} whileTap={{scale: 0.95}}>Modificar</ButtonAdd>
            </Form>
          </Content>
          </ModalContainer>
        )
      }}
    </Formik>
  );
})

export default WealthViewerModal

