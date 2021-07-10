import { useEffect, useRef } from "react";
import { modalContainerVariants } from "../../Animations/variants";
import { registerSchemaTypesWithId } from "../../Contexts/DashboardContext";
import { useModal } from "../../Contexts/ModalContext";
import { ContainerBackground } from "../../elements/Modals/Modal";
import AddRegisterModal from "./Modals/Add";
import DeleteRegisterModal from "./Modals/Delete";
import ModifyRegisterModal from "./Modals/Modify";
import TrackedStocksModal from "./Modals/TrackedStocks";
import WealthViewerModal from "./Modals/WealthViewer";

export interface ModalProps {
  
}
 
const Modal: React.FC<ModalProps> = () => {

  const { modalName, closeModal, modalConfig } = useModal()

  const openedModalRef = useRef<HTMLDivElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  
  const handler = (e: MouseEvent) => {
    if (modalRef.current?.contains(e.target as Node) && !openedModalRef.current?.contains(e.target as Node)) {
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
        return <DeleteRegisterModal ref={openedModalRef} schemaKey={modalConfig as string} />
      case 'modify':
        return <ModifyRegisterModal ref={openedModalRef} regSchema={modalConfig as registerSchemaTypesWithId} />
      case 'trackedStocks':
        return <TrackedStocksModal ref={openedModalRef} />
      case 'wealthViewer':
        return  <WealthViewerModal ref={openedModalRef} />
      case 'wealthTrackedStocks':
        return
    }
  }

  return (
    <ContainerBackground 
      variants={modalContainerVariants} 
      initial='hidden' 
      animate='visible'
      ref={modalRef}
    >
      {renderModal()}
    </ContainerBackground>
  );
}
 
export default Modal;
