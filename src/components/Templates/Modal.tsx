import { modalContainerVariants } from "../../Animations/variants";
import { useModal } from "../../Contexts/ModalContext";
import { ContainerBackground } from "../../elements/Modals/Modal";
import AddRegisterModal from "./Modals/Add";

export interface ModalProps {
  
}
 
const Modal: React.FC<ModalProps> = () => {

  const { setModalVisibility, modalName } = useModal()

  const renderModal = () => {
    switch(modalName) {
      case 'add':
        return <AddRegisterModal />
      case 'delete':
        return 
      case 'modify':
        return 
      case 'trackedStocks':
        return 
      case 'wealthViewer':
        return
    }
  }

  return (
    <ContainerBackground 
      variants={modalContainerVariants} 
      initial='hidden' 
      animate='visible'
    >
      {renderModal()}
    </ContainerBackground>
  );
}
 
export default Modal;
