import { Form, Formik } from "formik";
import { forwardRef } from "react";
import { useApi } from "../../../Contexts/ApiContext";
import { useDashboard } from "../../../Contexts/DashboardContext";
import { useModal } from "../../../Contexts/ModalContext";
import { ButtonAdd, Content, Cross, HorizontalBar, ModalContainer, Title } from "../../../elements/Modals/Modal";
import { checkIsCrypto } from "../../../Utils/Utils";
import CrossSVG from "../../atoms/SVG/Cross";
import SelectComponent from "../../molecules/Selects/SelectComponent";

export interface WealthViewerProps {
  
}
 
const TrackedStocksModal = forwardRef<HTMLDivElement, WealthViewerProps>((props, ref) => {

  const { closeModal } = useModal()
  const { updateTrackedStocks, userData } = useDashboard()
  const { cryptoList, currenciesList } = useApi()
  
  const trackedStocksSymbols = userData && userData.trackedStocks ? [...userData.trackedStocks, '', '', '', ''] : ['', '', '', '', '', '']
  // const trackedStocksSymbols =  ['', '', '', '', '', '']
  console.log();
  
  const defaultValues = trackedStocksSymbols.map(el => {
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

  const initialValues = {
    slot1: trackedStocksSymbols[0],
    slot2: trackedStocksSymbols[1],
    slot3: trackedStocksSymbols[2],
    slot4: trackedStocksSymbols[3],
    slot5: trackedStocksSymbols[4],
    slot6: trackedStocksSymbols[5],
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, { setSubmitting }) => {
        
        setSubmitting(true)
        const schema = [values.slot1, values.slot2, values.slot3, values.slot4, values.slot5, values.slot6]
        const success = await updateTrackedStocks(schema)
        // const success = true
        if (success) {
          setSubmitting(false)
          closeModal()
        }
        //MANAGE ERROR HANDLING
      }}
    >
      {formik => {
        const onchange = (value: {label: string; value: string;} | null, slotNumber: number) => {
          formik.setFieldValue(`slot${slotNumber}`, value?.value)
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
              <SelectComponent placeholder="Slot #4" onChange={value => onchange(value, 4)}
                defaultValue={defaultValues[3]}
                />
              <br />
              <SelectComponent placeholder="Slot #5" onChange={value => onchange(value, 5)}
                defaultValue={defaultValues[4]}
                />
              <br />
              <SelectComponent placeholder="Slot #6" onChange={value => onchange(value, 6)}
                defaultValue={defaultValues[5]}
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

export default TrackedStocksModal

