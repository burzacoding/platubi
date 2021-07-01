import { forwardRef } from "react";
import { useDashboard } from "../../../Contexts/DashboardContext";
import { useModal } from "../../../Contexts/ModalContext";
import { ModalContainer, HorizontalBar, ButtonBack, Title, Cross, ButtonAdd, ButtonsContainer, Content } from "../../../elements/Modals/Modal";
import CrossSVG from "../../atoms/SVG/Cross";


interface ModifyRegisterModalProps {
  schemaKey: string
}



const DeleteRegisterModal = forwardRef<HTMLDivElement, ModifyRegisterModalProps>(({schemaKey}, ref) => {

  const { deleteRegister } = useDashboard()
  const { closeModal } = useModal()

  const deleteRegisterFunc = async () => {
    const bool = await deleteRegister(schemaKey)
    bool && closeModal()
  }

  return (
      <ModalContainer ref={ref}>
        <Cross onClick={() => closeModal()}>
          <CrossSVG />
        </Cross>
        <Title>¿Estás seguro de querer eliminar el registro?</Title>
        <HorizontalBar />
        <Content>
          <ButtonsContainer>
            <ButtonAdd onClick={deleteRegisterFunc}
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
            >Eliminar</ButtonAdd>
            <ButtonBack onClick={() => closeModal()}
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            >Cancelar</ButtonBack>
          </ButtonsContainer>
        </Content>
      </ModalContainer>)
})
 
export default DeleteRegisterModal;
