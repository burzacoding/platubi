import { useState } from "react";
import { createContext, useContext } from "react";
import Modal from "../components/Templates/Modal";
import { modalNames } from "../Utils/ModalsHandler";
import { stateSetter } from "../Utils/Utils";
import { registerSchemaTypesWithId } from "./DashboardContext";

interface ModalContextInterface {
  modalVisibility: boolean,
  setModalVisibility: stateSetter<boolean>,
  modalName: modalNames | undefined,
  setModalName: stateSetter<modalNames | undefined>,
  openModal: (modalNameParam: modalNames, config?: registerSchemaTypesWithId) => void,
  closeModal: () => void,
  modalConfig: registerSchemaTypesWithId | undefined,
  setModalConfig: stateSetter<registerSchemaTypesWithId | undefined>
}

const ModalContext = createContext<ModalContextInterface>({} as ModalContextInterface)

export function useModal() {
  return useContext(ModalContext)
}
 
export const ModalProvider: React.FC = ({children}) => {

  const [modalConfig, setModalConfig] = useState<registerSchemaTypesWithId>()

  const [modalVisibility, setModalVisibility] = useState(false);
  const [modalName, setModalName] = useState<modalNames | undefined>(undefined) //DEFAULT THIS TO UNDEF
  const openModal = (modalNameParam: modalNames, config?: registerSchemaTypesWithId) => {
    setModalName(modalNameParam)
    setModalConfig(config)
    setModalVisibility(true)
  }

  const closeModal = () => {
    setModalName(undefined)
    setModalVisibility(false)
  }
  
  const value = {modalVisibility, setModalVisibility, modalName, setModalName, openModal, closeModal, modalConfig, setModalConfig}

  return (
    <ModalContext.Provider value={value}>
      {modalVisibility && <Modal />}
      {children}
    </ModalContext.Provider>
  );
}
 