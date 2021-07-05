import { Formik } from "formik";
import { forwardRef } from "react";
import { useDashboard, WealthViewSymbolsType } from "../../../Contexts/DashboardContext";
import { useModal } from "../../../Contexts/ModalContext";
import { Content, Cross, HorizontalBar, ModalContainer, Title } from "../../../elements/Modals/Modal";
import CrossSVG from "../../atoms/SVG/Cross";

export interface WealthViewerProps {
  
}
 
const WealthViewerModal = forwardRef<HTMLDivElement, WealthViewerProps>((props, ref) => {

  const { closeModal } = useModal()
  const { updateWealthViewer } = useDashboard()

  const initialValues = {
    slot1: '',
    slot2: '',
    slot3: '',
  }

 

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, { setFieldError, setSubmitting }) => {
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
        return (
          <ModalContainer ref={ref}>
          <Cross onClick={() => closeModal()}>
            <CrossSVG />
          </Cross>
          <Title>¿En qué divisa queres visualizar tu capital?</Title>
          <HorizontalBar />
          <Content>
            Hola
          </Content>
          </ModalContainer>
        )
      }}
    </Formik>
  );
})

export default WealthViewerModal

