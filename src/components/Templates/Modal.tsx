import { useEffect, useRef } from "react";
import { modalContainerVariants } from "../../Animations/variants";
import { useModal } from "../../Contexts/ModalContext";
import { ContainerBackground } from "../../elements/Modals/Modal";
import AddRegisterModal from "./Modals/Add";

export interface ModalProps {
  
}
 
const Modal: React.FC<ModalProps> = () => {

  const { setModalVisibility, modalName, closeModal } = useModal()

  const openedModalRef = useRef<HTMLDivElement>(null)

  
  const handler = (e: MouseEvent) => {
    if (!openedModalRef.current?.contains(e.target as Node)) {
      closeModal()
    }
  }

  useEffect(() => {
    window.addEventListener('click', handler)

    return () => {
      window.removeEventListener('click', handler)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const renderModal = () => {
    switch(modalName) {
      case 'add':
        return <AddRegisterModal ref={openedModalRef} />
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
